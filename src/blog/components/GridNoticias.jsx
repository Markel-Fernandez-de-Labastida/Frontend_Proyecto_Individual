import React from 'react'

export const GridNoticias = (/* id_post, user_name, post_title, post_subtitle, post_content, date_insert */) => {

    const formulario = {};
    const { loginRegister, update, create, delet, data, isLoading, isError } = useFetch(formulario);

    useEffect(() => {
        Object.keys(formulario).length !== 0 && fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/AllPosts`)

    }, [])

    return (
        <>
            <section>
                <div className='card-container'>
                    {
                        /* llamar a la api y crear una card por cada resultado */

                        data.map((item, index, arrray) => {
                            /* CARD */
                            imagen
                            <Card key={item.id_post} id_post={item.id_post} user_name={item.user_name} post_title={item.post_title} post_subtitle={item.post_subtitle} post_content={item.post_content} date_insert={item.date_insert} />

                        })


                    }

                </div>
            </section>

        </>
    )
}
