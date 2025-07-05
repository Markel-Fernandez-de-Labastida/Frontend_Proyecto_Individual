import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router'

export const Navbar = () => {


    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) => isActive ? 'activo' : ''}>
                            Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/registro'
                            className={({ isActive }) => isActive ? 'activo' : ''}>
                            Registro
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/login'
                            className={({ isActive }) => isActive ? 'activo' : ''}>
                            Login
                        </NavLink>
                    </li>
                </ul>
            </nav>

        </>

    )
}
