import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const { cars } = useSelector((state) => state.cars)
    const currentCar = useSelector((state) => state.cars.currentCar)
    return (
        <nav className="navbar">
            <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
                Page1
            </NavLink>
            <NavLink
                to="/page2"
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
                Page2
            </NavLink>
            <NavLink
                to="/page3"
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
                Page3
            </NavLink>
            <p>Total cars: {cars.length}</p>
            <p>Selected car ID: {currentCar}</p>
        </nav>

    )
}

export default Navbar