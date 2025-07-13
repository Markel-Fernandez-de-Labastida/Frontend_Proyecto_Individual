import React, { useContext } from 'react'
import { GridUsuarios } from './components/GridUsuarios'
import { UserContext } from '../../contexts/UserContext'
import { Link } from 'react-router'

export const DashboarsAdmin = () => {
    const { user, setUser, isRegister, setRegister } = useContext(UserContext)


    return (
        <>
            <h1>Dashboard Administrador</h1>

            {/*<h2>User id: {user.id_user}</h2>*/}
            {/*<h2>User role: {user.user_role}</h2>*/}

            <GridUsuarios />

            <Link to={`nuevo-post`} >Nueva noticia</Link>
        </>

    )
}
