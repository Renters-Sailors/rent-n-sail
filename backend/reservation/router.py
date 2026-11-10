from fastapi import APIRouter, HTTPException, status
from sqlalchemy import select

from database import AsyncDbSession
from models import RentalEquipment, Reservation
from reservation.schemas import ReservationCreate, ReservationResponse

router = APIRouter(prefix="/reservations", tags=["reservations"])


@router.get("/", response_model=list[ReservationResponse])
async def get_all_reservations(
    session: AsyncDbSession,
) -> list[ReservationResponse]:
    result = await session.execute(select(Reservation).order_by(Reservation.id.desc()))
    reservations = result.scalars().all()
    return [ReservationResponse.model_validate(item) for item in reservations]


@router.post(
    "/", response_model=ReservationResponse, status_code=status.HTTP_201_CREATED
)
async def create_reservation(
    payload: ReservationCreate,
    session: AsyncDbSession,
) -> ReservationResponse:
    equipment = await session.get(RentalEquipment, payload.equipmentId)
    if equipment is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Equipment not found",
        )

    reservation = Reservation(**payload.model_dump())

    session.add(reservation)
    await session.commit()
    await session.refresh(reservation)

    return ReservationResponse.model_validate(reservation)


@router.delete("/{reservation_id}", status_code=status.HTTP_204_NO_CONTENT)
async def cancel_reservation(
    reservation_id: int,
    session: AsyncDbSession,
) -> None:
    result = await session.execute(
        select(Reservation).where(Reservation.id == reservation_id)
    )
    reservation = result.scalars().first()

    if not reservation:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Reservation not found",
        )

    await session.delete(reservation)
    await session.commit()
