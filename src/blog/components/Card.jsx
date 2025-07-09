import React from 'react'
import { CardCompleto } from './CardCompleto'

export const Card = (id_post, user_name, post_title, post_subtitle, post_content, date_insert) => {

    const { loginRegister, update, create, delet, data, isLoading, isError } = useFetch(formulario);

    const deleteNoticia = () => {
        useEffect(() => {
        Object.keys(formulario).length !== 0 && delet(`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/Delete`, id_post)
        console.log(data)
    }, [formulario])
    }
    

    return (
        <>
            <article key={''} className=''>
                <p data-id_post={id_post}></p>
                <h2 className=''>{post_title}</h2>
                <p className=''>{user_name}</p>
                <p className=''>{date_insert}</p>
                <button onClick={<CardCompleto id_post={id_post} post_title={post_title} post_subtitle={post_subtitle} post_content={post_content} date_insert={date_insert} />} className=''>Ver</button>
                <button onClick={<ModifyPost id_post={id_post} post_title={post_title} post_subtitle={post_subtitle} post_content={post_content} date_insert={date_insert} />} className=''>Modificar</button>
                <button onClick={deleteNoticia()} className=''>Borrar</button>
            </article >
        </>
    )
}
