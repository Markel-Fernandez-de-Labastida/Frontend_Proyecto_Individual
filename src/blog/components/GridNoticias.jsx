import React, { useContext, useEffect } from 'react'
import { Cardd } from './Cardd';
import { useFetch } from '../../hooks/useFetch';
import { UserContext } from '../../contexts/UserContext';

export const GridNoticias = (/* id_post, user_name, post_title, post_subtitle, post_content, date_insert */) => {

    const { user, setUser, isRegister, logoutContext, loginContext, log } = useContext(UserContext);
    const { get, data, isLoading, isError } = useFetch();

    useEffect(() => {

        get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/AllPosts`)

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
                                        <Cardd key={item.id_post} item={item} />

                                    ))}
                                </>

                    }

                </div>
            </section>

        </>
    )
}
