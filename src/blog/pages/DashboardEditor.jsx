import React, { useEffect } from 'react'
import { GridNoticias } from '../components/GridNoticias';
import { useFetch } from '../../hooks/useFetch';
import { Link, Links } from 'react-router';

export const DashboardEditor = () => {



    return (
        <>
            <h1>Dashboard Editor</h1>

            <GridNoticias />

            <Link to={`nuevo-post`} >Nueva noticia</Link>
        </>

    )
}
