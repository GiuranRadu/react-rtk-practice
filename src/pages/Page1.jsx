import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCars } from '../store/cars/carsThunks'
import { selectCar } from '../store/cars/carsSlice'
import Error from '../Components/Error'

const Page1 = () => {
  const { cars, loading, error } = useSelector((state) => state.cars)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch])
  return (
    <div><h1>Cars</h1>
      {error && <Error message={error} />}
      {loading ? <p>Loading...</p> : cars.map((car) => (
        <div key={car.id}>
          <h2>{car.id}. {car.brand} {car.model} ({car.year}) - {car.color}</h2>
          <button onClick={() => dispatch(selectCar(car.id))}>Select Car</button>
        </div>
      ))}
    </div>
  )
}

export default Page1