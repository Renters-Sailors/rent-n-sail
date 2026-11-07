import decimal

from pydantic import BaseModel, ConfigDict


class Capacity(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    min: int
    max: int


class Prices(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    hour: decimal.Decimal
    two_hours: decimal.Decimal
    full_day: decimal.Decimal


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
