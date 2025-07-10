import React from 'react'

export const CardCompleto = () => {
    const { id_post } = useParams();

    const { get, data, isLoading, isError } = useFetch();

    useEffect(() => {
        get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/AllDetails/${id_post}`)

    }, [])

    return (
        <>
            <article key={''} className=''>
                <p data-id_post={data.id_post}></p>
                <h1 className=''>{data.post_title}</h1>
                <h2 className=''>{data.post_subtitle}</h2>
                <div>
                    <p className=''>{data.user_name}</p>
                    <p className=''>{data.date_insert}</p>
                </div>
                <p className=''>{data.post_content}</p>
            </article>
        </>
    )
}
