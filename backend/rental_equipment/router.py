from fastapi import APIRouter
from sqlalchemy import select

from database import AsyncDbSession
from models import RentalEquipment
from rental_equipment.schemas import RentalEquipmentResponse

router = APIRouter(prefix="/rental_equipment")


@router.get("/{equipment_id}")
async def get_equipment_by_id(
    equipment_id: int, session: AsyncDbSession
) -> RentalEquipmentResponse | None:
    """Get an equipment by id."""
    equipment = await session.get(RentalEquipment, equipment_id)
    return RentalEquipmentResponse.model_validate(equipment) if equipment else None


@router.get("/")
async def get_all_equipment(session: AsyncDbSession) -> list[RentalEquipmentResponse]:
    result = await session.execute(select(RentalEquipment))
    equipment_sequence = result.scalars().all()
    return [RentalEquipmentResponse.model_validate(item) for item in equipment_sequence]
