from typing import Annotated

from fastapi import APIRouter
from pydantic import BaseModel, Field
from clock import ClockTime

router = APIRouter(prefix="/opening-hours")

class OpeningHours(BaseModel):
    """Hours for one weekday; days missing from the list are closed."""

    weekday: Annotated[int, Field(ge=1, le=7, description="ISO weekday, 1 = Monday")]
    opens: Annotated[ClockTime, Field(description='"HH:MM", local time')]
    closes: Annotated[ClockTime, Field(description='"HH:MM", local time')]


# Fixed for now; move to the database once hours need editing.
OPENING_HOURS = [
    *(OpeningHours(weekday=day, opens="08:00", closes="20:00") for day in range(1, 6)),
    OpeningHours(weekday=6, opens="07:00", closes="21:00"),
    OpeningHours(weekday=7, opens="09:00", closes="18:00"),
]


@router.get("")
def read_opening_hours() -> list[OpeningHours]:
    return OPENING_HOURS
