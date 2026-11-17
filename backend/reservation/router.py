from typing import Annotated

from authtuna.core.database import User
from authtuna.integrations.fastapi_integration import get_current_user
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import select

from database import AsyncDbSession
from models import RentalEquipment, Reservation
from reservation.schemas import ReservationCreate, ReservationResponse

router = APIRouter(prefix="/reservations", tags=["reservations"])

CurrentUser = Annotated[User, Depends(get_current_user)]


@router.get("/", response_model=list[ReservationResponse])
async def get_all_reservations(
    user: CurrentUser,
    session: AsyncDbSession,
) -> list[ReservationResponse]:
    result = await session.execute(
        select(Reservation)
        .where(Reservation.userId == user.id)
        .order_by(Reservation.id.desc())
    )
    reservations = result.scalars().all()
    return [ReservationResponse.model_validate(item) for item in reservations]


@router.post(
    "/", response_model=ReservationResponse, status_code=status.HTTP_201_CREATED
)
async def create_reservation(
    payload: ReservationCreate,
    user: CurrentUser,
    session: AsyncDbSession,
) -> ReservationResponse:
    equipment = await session.get(RentalEquipment, payload.equipmentId)
    if equipment is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Equipment not found",
        )

    price = getattr(equipment.prices, payload.durationId.name)
    reservation = Reservation(
        **payload.model_dump(),
        userId=user.id,
        total=price * payload.quantity,
    )

    session.add(reservation)
    await session.commit()
    await session.refresh(reservation)

    return ReservationResponse.model_validate(reservation)


@router.delete("/{reservation_id}", status_code=status.HTTP_204_NO_CONTENT)
async def cancel_reservation(
    reservation_id: int,
    user: CurrentUser,
    session: AsyncDbSession,
) -> None:
    result = await session.execute(
        select(Reservation).where(
            Reservation.id == reservation_id,
            Reservation.userId == user.id,
        )
    )
    reservation = result.scalars().first()

    if not reservation:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Reservation not found",
        )

    await session.delete(reservation)
    await session.commit()
