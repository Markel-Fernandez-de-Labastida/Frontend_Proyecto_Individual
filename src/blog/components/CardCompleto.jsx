import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import { useFetch } from '../../hooks/useFetch';

export const CardCompleto = (props) => {
    const { id } = useParams();
    console.log("parametro cardCompleto: ", id);

    const { get, data, isLoading, isError } = useFetch();

    useEffect(() => {
        get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/AllDetails/${id}`)

    }, [])

    return (
        <>
            <h1>HOLAAAAA CARD COMPLETO</h1>
            {JSON.stringify(data)}
            <article key={''} className=''>
                <p data-id_post={data.id_post}></p>
                <h1 className=''>{data.post_title}</h1>
                <h2 className=''>{data.post_subtitle}</h2>
                <div>
                    <p className=''>{data.user_name}</p>
                    <p className=''>{data.date_insert.slice(0, 10)}</p>
                </div>
                <p className=''>{data.post_content}</p>
            </article>
        </>
    )
}
