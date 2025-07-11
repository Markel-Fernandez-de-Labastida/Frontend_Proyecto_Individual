import React, { useContext, useState } from 'react'
import './navbar.css'
import { NavLink } from 'react-router'

export const Navbar = () => {

    // const {isRegister,user}=useContext(userContext)

    const user = {
        id: 1,
        role: 'editor',
        nombre: 'Pepe'
    }
    const isRegister = false


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

                    {
                        !isRegister
                            ?
                            <>
                                <li>
                                    <NavLink
                                        to='/register'
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
                            </>
                            :
                            <NavLink
                                to='/LOGOUT'
                                className={({ isActive }) => isActive ? 'activo' : ''}>
                                Logout
                            </NavLink>

                    }

                    {
                        (isRegister && user.role == 'editor')
                        &&
                        <>
                            <NavLink
                                to='/editor'
                                className={({ isActive }) => isActive ? 'activo' : ''}>
                                Dashboard
                            </NavLink>
                        </>
                    }


                </ul>
            </nav>

        </>

    )
}
