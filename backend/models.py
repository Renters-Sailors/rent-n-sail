import decimal

from dataclasses import dataclass

from sqlalchemy import CheckConstraint, String, Numeric
from sqlalchemy.orm import DeclarativeBase, Mapped, composite, mapped_column, composite


class Base(DeclarativeBase):
    pass


@dataclass
class Capacity:
    min: int
    max: int


@dataclass
class Prices:
    hour: decimal.Decimal
    two_hours: decimal.Decimal
    full_day: decimal.Decimal


class RentalEquipment(Base):
    __tablename__ = "rental_equipment"
    __table_args__ = (
        CheckConstraint("price_for_hour > 0"),
        CheckConstraint("price_for_two_hours > 0"),
        CheckConstraint("price_for_full_day > 0"),
        CheckConstraint("capacity_min >= 0"),
        CheckConstraint("capacity_max >= 0"),
    )

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(64))
    description: Mapped[str] = mapped_column(String(256))
    capacity: Mapped[Capacity] = composite(Capacity, column_template="capacity_%s")
    prices: Mapped[Prices] = composite(
        Prices,
        mapped_column("price_for_hour", Numeric(10, 2)),
        mapped_column("price_for_two_hours", Numeric(10, 2)),
        mapped_column("price_for_full_day", Numeric(10, 2)),
    )
    slug: Mapped[str] = mapped_column(String(64))
    width: Mapped[int] = mapped_column()
    height: Mapped[int] = mapped_column()
