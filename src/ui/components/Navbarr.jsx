import React, { useContext, useState } from 'react'
import './navbar.css'
import { Link, NavLink } from 'react-router'
import { UserContext } from '../../contexts/UserContext'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export const Navbarr = () => {

    const { user, isRegister, logoutContext } = useContext(UserContext)

    // Roles: 1. Admin; 2. Editor; 3. Base

    /* const user = {
        id: 1,
        role: 'editor',
        nombre: 'Pepe'
    }
    const isRegister = false */


    return (
        <>
            <Container className='mb-5'>
                <Navbar bg="dark" data-bs-theme="dark" fixed="top" expanded="true">
                    <Container>
                        <Navbar.Brand href="/">Noticias</Navbar.Brand>
                        <Nav className="me-auto">
                            {
                                (isRegister && user.role == 2)
                                &&
                                <>
                                    <Nav.Link href='/editor'
                                        className={({ isActive }) => isActive ? 'activo' : ''}>
                                        Dashboard</Nav.Link>
                                    <Nav.Link href='/editor/nuevo-post'
                                        className={({ isActive }) => isActive ? 'activo' : ''}>
                                        Nueva noticia</Nav.Link>


                                </>
                            }
                            {
                                (isRegister && user.role == 1)
                                &&
                                <>
                                    <Nav.Link href="/admin"
                                        className={({ isActive }) => isActive ? 'activo' : ''}>
                                        Dashboard</Nav.Link>
                                    <Nav.Link href="/admin/nuevo-usuario"
                                        className={({ isActive }) => isActive ? 'activo' : ''}>
                                        Nuevo usuario</Nav.Link>
                                </>
                            }
                            {
                                !isRegister
                                    ?
                                    <>

                                        <Nav.Link href="/register"
                                            className={({ isActive }) => isActive ? 'activo' : ''}>
                                            Registrarse</Nav.Link>
                                        <Nav.Link href="/login"
                                            className={({ isActive }) => isActive ? 'activo' : ''}>
                                            Log in</Nav.Link>
                                    </>
                                    :
                                    <Nav.Link
                                        onClick={logoutContext}
                                        className={({ isActive }) => isActive ? 'activo' : ''}>
                                        Logout
                                    </Nav.Link>
                            }
                        </Nav>
                    </Container>
                </Navbar>
            </Container>










            {/* <nav>
                <ul>
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) => isActive ? 'activo' : ''}>
                            Blog
                        </NavLink>
                    </li>

                    {
                        (isRegister && user.role == 2)
                        &&
                        <>
                            <NavLink
                                to='/editor'
                                className={({ isActive }) => isActive ? 'activo' : ''}>
                                Dashboard
                            </NavLink>
                            <NavLink
                                to='/editor/nuevo-post'
                                className={({ isActive }) => isActive ? 'activo' : ''}>
                                Nueva noticia
                            </NavLink>
                        </>
                    }

                    {
                        (isRegister && user.role == 1)
                        &&
                        <>
                            <NavLink
                                to='/admin'
                                className={({ isActive }) => isActive ? 'activo' : ''}>
                                Dashboard
                            </NavLink>
                            <NavLink
                                to='/admin/nuevo-usuario'
                                className={({ isActive }) => isActive ? 'activo' : ''}>
                                Nuevo usuario
                            </NavLink>
                        </>
                    }

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
                                onClick={logoutContext}
                                className={({ isActive }) => isActive ? 'activo' : ''}>
                                Logout
                            </NavLink>

                    }




                </ul>
            </nav>
 */}
        </>

    )
}
