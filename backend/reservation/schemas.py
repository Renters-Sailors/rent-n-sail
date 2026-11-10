from datetime import date
from typing import Self

from pydantic import BaseModel, ConfigDict, model_validator

from clock import ClockTime
from models import RentalDuration


class ReservationCreate(BaseModel):
    equipmentId: int
    durationId: RentalDuration
    date: date
    startTime: ClockTime | None = None
    quantity: int
    total: int

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
    equipmentId: int
    durationId: RentalDuration
    date: date
    startTime: str | None = None
    quantity: int
    total: int

    model_config = ConfigDict(from_attributes=True)
