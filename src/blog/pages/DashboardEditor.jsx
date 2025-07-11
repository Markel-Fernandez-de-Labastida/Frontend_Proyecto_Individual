import React, { useContext, useEffect } from 'react'
import { GridNoticias } from '../components/GridNoticias';
import { useFetch } from '../../hooks/useFetch';
import { Link, Links } from 'react-router';
import { UserContext } from '../../contexts/UserContext';

export const DashboardEditor = () => {

    const { user, setUser, isRegister, setRegister } = useContext(UserContext)


    return (
        <>
            <h1>Dashboard Editor</h1>

            <h2>User id: {user.id_user}</h2>
            <h2>User role: {user.user_role}</h2>

            <GridNoticias />

            <Link to={`nuevo-post`} >Nueva noticia</Link>
        </>

    )
}
