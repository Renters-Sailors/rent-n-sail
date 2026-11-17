import decimal

from pydantic import BaseModel, ConfigDict, Field


class Capacity(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    min: int
    max: int


class Prices(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    hour: decimal.Decimal
    two_hours: decimal.Decimal = Field(serialization_alias="two-hours")
    full_day: decimal.Decimal = Field(serialization_alias="full-day")


class RentalEquipmentResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    name: str
    description: str
    capacity: Capacity
    prices: Prices
    slug: str
    width: int
    height: int
