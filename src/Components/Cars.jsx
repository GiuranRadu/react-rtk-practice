import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../store/cars/carsThunks';

const Cars = () => {
    const { cars, loading, error } = useSelector((state) => state.cars);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCars());
    }, [dispatch]);

    return (
        <div>
            <h1>CAR LIST</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {cars.map((car) => (
                <div key={car.id}>
                    <h2>{car.brand} {car.model} ({car.year}) - {car.color}</h2>
                </div>
            ))}
        </div>
    )
}

export default Cars