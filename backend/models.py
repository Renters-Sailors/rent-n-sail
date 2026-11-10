from enum import StrEnum

import decimal
from dataclasses import dataclass
from datetime import date

from sqlalchemy import CheckConstraint, Numeric, String, Date, ForeignKey, Enum
from sqlalchemy.orm import DeclarativeBase, Mapped, composite, mapped_column


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


class RentalDuration(StrEnum):
    hour = "hour"
    two_hours = "two-hours"
    full_day = "full-day"


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


class Reservation(Base):
    __tablename__ = "reservation"
    __table_args__ = (
        CheckConstraint(
            "\"durationId\" IN ('hour', 'two-hours', 'full-day')",
            name="ck_reservation_duration",
        ),
    )
    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    equipmentId: Mapped[int] = mapped_column(ForeignKey("rental_equipment.id"))
    durationId: Mapped[str] = mapped_column(
        Enum(
            RentalDuration,
            native_enum=False,
            length=64,
            create_constraint=False,
            values_callable=lambda enum: [member.value for member in enum],
        )
    )
    date: Mapped[date] = mapped_column(Date)
    #  "HH:MM", or null for a full day.
    startTime: Mapped[str | None] = mapped_column(String(5), nullable=True)
    quantity: Mapped[int] = mapped_column()
    total: Mapped[int] = mapped_column()
