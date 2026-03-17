import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCar } from '../store/cars/carsSlice'

const Page3 = () => {
  const {currentCar} = useSelector((state) => state.cars)
  const dispatch = useDispatch()
  const clearCar = () => {
    dispatch(selectCar(null))
  }
  return (
    <div>
      <h1>Page 3</h1>
      {
        currentCar ?
          <>
            <h1>Current Car is {currentCar}</h1>
            <button onClick={() => clearCar()}>Clear Selected car</button></>
          :
          <h1>No car selected</h1>
      }

    </div>
  )
}

export default Page3