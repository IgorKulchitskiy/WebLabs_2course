from fastapi import FastAPI, Depends, HTTPException, Query
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from contextlib import asynccontextmanager
from enum import Enum
from sqlalchemy.sql import or_
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import asc, desc

from schemas import Aircraft, AircraftBase, AircraftsTotalPassengerCapacity
from models import Aircraft as AircraftModel
from database import get_db, engine, Base
from typing import List, Optional

async def on_startup():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

async def on_shutdown():
    pass

@asynccontextmanager
async def lifespan(app_: FastAPI):
    await on_startup()
    yield
    await on_shutdown()

app = FastAPI(prefix="/api", tags=["api"], lifespan=lifespan)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

class OrderClause(str, Enum):
    CAPACITY = "passenger_capacity"
    CAPACITY_ASC = "passenger_capacity_asc"
    CAPACITY_DESC = "passenger_capacity_desc"
    NAME = "manufacturer_name"
    SPEED_ASC = "max_speed_asc"
    SPEED_DESC = "max_speed_desc"

@app.get("/aircrafts", response_model=List[Aircraft])
async def get_aircrafts(
        search: Optional[str] = Query(default=None),
        order_by: Optional[OrderClause] = Query(default=None),
        db_session: AsyncSession = Depends(get_db)
) -> List[Aircraft]:
    query = select(AircraftModel)

    if search:
        search_term = f"%{search}%"
        query = query.where(
            or_(
                AircraftModel.manufacturer_name.ilike(search_term),
            )
        )

    if order_by:
        if order_by == OrderClause.SPEED_ASC:
            query = query.order_by(asc(AircraftModel.max_speed))
        elif order_by == OrderClause.SPEED_DESC:
            query = query.order_by(desc(AircraftModel.max_speed))
        elif order_by == OrderClause.CAPACITY_ASC:
            query = query.order_by(asc(AircraftModel.passenger_capacity))
        elif order_by == OrderClause.CAPACITY_DESC:
            query = query.order_by(desc(AircraftModel.passenger_capacity))
        elif order_by == OrderClause.NAME:
            query = query.order_by(AircraftModel.manufacturer_name)
        elif order_by == OrderClause.CAPACITY:
            query = query.order_by(asc(AircraftModel.passenger_capacity))

    result = await db_session.execute(query)
    aircrafts = result.scalars().all()
    return aircrafts

@app.get("/aircrafts/total_capacity")
async def total_capacity(
        search: Optional[str] = Query(default=None),
        db_session: AsyncSession = Depends(get_db)
) -> AircraftsTotalPassengerCapacity:
    query = select(AircraftModel)

    if search:
        search_term = f"%{search}%"
        query = query.where(
            or_(
                AircraftModel.manufacturer_name.ilike(search_term),
                AircraftModel.material.ilike(search_term)
            )
        )

    result = await db_session.execute(query)
    aircrafts = result.scalars().all()

    total_capacity = sum([aircraft.passenger_capacity for aircraft in aircrafts])

    return {"total_passenger_capacity": total_capacity}

@app.post("/aircrafts", response_model=Aircraft)
async def create_aircraft(
        aircraft_base: AircraftBase,
        db_session: AsyncSession = Depends(get_db)
) -> Aircraft:
    new_aircraft = AircraftModel(**aircraft_base.dict())
    db_session.add(new_aircraft)
    await db_session.commit()
    await db_session.refresh(new_aircraft)
    return new_aircraft

@app.delete("/aircrafts/{aircraft_id}", response_model=str)
async def delete_aircraft(
        aircraft_id: int,
        db_session: AsyncSession = Depends(get_db)
) -> str:
    query = select(AircraftModel).where(AircraftModel.id == aircraft_id)
    result = await db_session.execute(query)
    aircraft = result.scalar_one_or_none()

    if not aircraft:
        raise HTTPException(status_code=404, detail="Aircraft not found")

    await db_session.delete(aircraft)
    await db_session.commit()

    return "Aircraft deleted successfully"

@app.put("/aircrafts/{aircraft_id}", response_model=Aircraft)
async def update_aircraft(
        aircraft_id: int,
        aircraft_base: AircraftBase,
        db_session: AsyncSession = Depends(get_db)
) -> Aircraft:
    query = select(AircraftModel).where(AircraftModel.id == aircraft_id)
    result = await db_session.execute(query)
    aircraft = result.scalar_one_or_none()

    if not aircraft:
        raise HTTPException(status_code=404, detail="Aircraft not found")

    for key, value in aircraft_base.dict().items():
        setattr(aircraft, key, value)

    await db_session.commit()
    await db_session.refresh(aircraft)

    return aircraft

@app.get("/aircrafts/{aircraft_id}", response_model=Aircraft)
async def get_aircraft(
        aircraft_id: int,
        db_session: AsyncSession = Depends(get_db)
) -> Aircraft:
    query = select(AircraftModel).where(AircraftModel.id == aircraft_id)
    result = await db_session.execute(query)
    aircraft = result.scalar_one_or_none()  # має повернути лише один елемент

    if not aircraft:
        raise HTTPException(status_code=404, detail="Aircraft not found")

    return aircraft  # Повертається один об'єкт, а не масив


