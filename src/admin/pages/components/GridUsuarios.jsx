import React, { useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch';
import { Card } from './Card';

export const GridUsuarios = () => {

    const { get, data, isLoading, isError } = useFetch();

    useEffect(() => {
        get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/users/AllUsers`)

    }, [])

    return (
        <>
            <section>


                <p>DATA</p>       {JSON.stringify(data)}

                <div className='card-container'>
                    {
                        isLoading ?

                            <h1>CARGANDO.........</h1>

                            :

                            isError ?
                                <p>error</p>
                                :
                                /* llamar a la api y crear una card por cada resultado */
                                <>
                                    <p>Sin error</p>
                                    {data.map((item) => (
                                        // <h1>CARD EN EL MAP {JSON.stringify(item)}</h1>
                                        <Card key={item.id_post} item={item} />


                                    ))}
                                </>




                    }

                </div>
            </section>

        </>
    )
}
