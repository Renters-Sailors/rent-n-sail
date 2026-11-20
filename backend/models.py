import decimal
from dataclasses import dataclass
from datetime import date, time
from enum import StrEnum

from authtuna.core.database import User
from sqlalchemy import CheckConstraint, Date, Enum, ForeignKey, Numeric, String, Time
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
    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    # A string, not an int: AuthTuna mints user ids as 32 random alphanumeric
    # characters. `User.id` instead of "users.id" because AuthTuna's table lives in a
    # separate MetaData, where a string name can't be resolved.
    userId: Mapped[str] = mapped_column(
        ForeignKey(User.id, name="reservation_userId_fkey", ondelete="CASCADE"),
        index=True,
    )
    equipmentId: Mapped[int] = mapped_column(ForeignKey("rental_equipment.id"))
    durationId: Mapped[RentalDuration] = mapped_column(
        Enum(
            RentalDuration,
            native_enum=False,
            length=64,
            create_constraint=True,
            name="ck_reservation_duration",
            values_callable=lambda enum: [member.value for member in enum],
        )
    )
    date: Mapped[date] = mapped_column(Date)
    #  "HH:MM", or null for a full day.
    startTime: Mapped[time | None] = mapped_column(Time, nullable=True)
    quantity: Mapped[int] = mapped_column()
    total: Mapped[decimal.Decimal] = mapped_column(Numeric(10, 2))
