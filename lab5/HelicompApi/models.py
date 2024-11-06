from sqlalchemy import (
    Column,
    String,
    Integer,
    DateTime
)
from database import Base
from datetime import datetime
from pytz import UTC


class Aircraft(Base):
    __tablename__ = 'aircrafts'

    id = Column(Integer, primary_key=True, autoincrement=True)
    manufacturer_name = Column(String, nullable=False)  # "name" замінено на більш точне "manufacturer_name"
    passenger_capacity = Column(Integer, nullable=False)
    max_speed = Column(Integer, nullable=False)
    material = Column(String, nullable=False)
