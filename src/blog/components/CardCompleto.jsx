import React from 'react'

export const CardCompleto = (id_post, user_name, post_title, post_subtitle, post_content, date_insert) => {
    return (
        <>
            <article key={''} className=''>
                <p data-id_post={id_post}></p>
                <h1 className=''>{post_title}</h1>
                <h2 className=''>{post_subtitle}</h2>
                <div>
                    <p className=''>{user_name}</p>
                    <p className=''>{date_insert}</p>
                </div>
                <p className=''>{post_content}</p>
            </article>
        </>
    )
}
