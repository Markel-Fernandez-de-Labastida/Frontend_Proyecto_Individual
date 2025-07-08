import React, { useEffect } from 'react'
import { GridNoticias } from '../components/GridNoticias';
import { useFetch } from '../../hooks/useFetch';

export const DashboardEditor = () => {
    const formulario = {};
    const { loginRegister, update, create, delet, data, isLoading, isError } = useFetch(formulario);

    useEffect(() => {
        Object.keys(formulario).length !== 0 && loginRegister(`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/AllPosts`, formulario)

    }, [])


    return (
        <>
            <h1>Dashboard Editor</h1>

            <GridNoticias />
        </>

    )
}
