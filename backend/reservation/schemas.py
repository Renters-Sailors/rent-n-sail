from datetime import date
from decimal import Decimal
from typing import Self

from pydantic import BaseModel, ConfigDict, Field, model_validator

from clock import ClockTime
from models import RentalDuration


class ReservationCreate(BaseModel):
    equipmentId: int
    durationId: RentalDuration
    date: date
    startTime: ClockTime | None = None
    # ge -> Greater or equal | le -> Less or equal
    quantity: int = Field(ge=1, le=10)

    @model_validator(mode="after")
    def check_start_time(self) -> Self:
        if self.durationId is RentalDuration.full_day:
            if self.startTime is not None:
                raise ValueError("A full-day booking must not have a startTime")
        elif self.startTime is None:
            raise ValueError("startTime is required unless the duration is full-day")
        return self


class ReservationResponse(BaseModel):
    id: int
    userId: str
    equipmentId: int
    durationId: RentalDuration
    date: date
    startTime: ClockTime | None = None
    quantity: int
    total: Decimal

    model_config = ConfigDict(from_attributes=True)
