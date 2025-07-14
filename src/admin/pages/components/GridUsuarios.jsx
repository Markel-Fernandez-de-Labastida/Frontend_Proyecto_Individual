import React, { useEffect } from 'react'
import { CardAd } from './CardAd';
import { useFetch } from '../../../hooks/useFetch';

export const GridUsuarios = () => {

    const { get, data, isLoading, isError } = useFetch();

    useEffect(() => {
        get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/users/AllUsers`)

    }, [])

    return (
        <>
            <section>


                {/* <p>DATA</p>       {JSON.stringify(data)} */}

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
                                    {/* <p>Sin error</p> */}
                                    {data.map((item) => (
                                        // <h1>CARD EN EL MAP {JSON.stringify(item)}</h1>
                                        <CardAd key={item.id_post} item={item} />


                                    ))}
                                </>




                    }

                </div>
            </section>

        </>
    )
}
