import React from 'react'
import { CardCompleto } from './CardCompleto'

export const Card = (id_post, user_name, post_title, post_subtitle, post_content, date_insert) => {
    return (
        <>
            <article key={''} className=''>
                <p data-id_post={id_post}></p>
                <h2 className=''>{post_title}</h2>
                <p className=''>{user_name}</p>
                <p className=''>{date_insert}</p>
                <button onClick={<CardCompleto id_post={id_post} post_title={post_title} post_subtitle={post_subtitle} post_content={post_content} date_insert={date_insert} />} className=''>Ver</button>
                <button className=''>Modificar</button>
                <button className=''>Borrar</button>
            </article >
        </>
    )
}
