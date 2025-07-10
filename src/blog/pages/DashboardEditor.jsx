import React, { useEffect } from 'react'
import { GridNoticias } from '../components/GridNoticias';
import { useFetch } from '../../hooks/useFetch';

export const DashboardEditor = () => {



    return (
        <>
            <h1>Dashboard Editor</h1>

            <GridNoticias />
        </>

    )
}
