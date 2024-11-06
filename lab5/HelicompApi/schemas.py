from __future__ import annotations

from pydantic import BaseModel, PositiveInt
from datetime import datetime


class AircraftBase(BaseModel):
    manufacturer_name: str
    passenger_capacity: PositiveInt
    max_speed: PositiveInt
    material: str


class Aircraft(AircraftBase):
    id: int  # Поле для зберігання ідентифікатора


class AircraftsTotalPassengerCapacity(BaseModel):
    total_passenger_capacity: int  # Наприклад, для підсумкової кількості пасажирів у флоті
