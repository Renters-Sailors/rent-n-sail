from fastapi import APIRouter

from database import SessionDep
from models import RentalEquipment
from rental_equipment.schemas import RentalEquipmentResponse

router = APIRouter(prefix="/rental_equipment")


@router.get("/{equipment_id}")
def get_equipment_by_id(
    equipment_id: int, session: SessionDep
) -> RentalEquipmentResponse | None:
    """Get an equipment by id."""
    equipment = session.get(RentalEquipment, equipment_id)
    return RentalEquipmentResponse.model_validate(equipment) if equipment else None


@router.get("/")
def get_all_equipment(session: SessionDep) -> list[RentalEquipmentResponse]:
    equipment = session.query(RentalEquipment).all()
    return [RentalEquipmentResponse.model_validate(item) for item in equipment]