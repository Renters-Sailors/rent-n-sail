from typing import Optional

from fastapi import APIRouter

from database import SessionDep
from models import RentalEquipment

router = APIRouter(prefix="/rental_equipment")

@router.get("/{equipment_id}")
def get_equipment_by_id(equipment_id: int, session: SessionDep) -> Optional[RentalEquipment]:
    """Get an equipment by id."""
    return session.query(RentalEquipment).where(RentalEquipment.id == equipment_id).one_or_none()

@router.get("/")
def get_all_equipment(session: SessionDep) -> list[RentalEquipment]:
    return session.query(RentalEquipment).all()