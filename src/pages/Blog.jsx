import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { Link } from 'react-router'
import { GridNoticias } from '../blog/components/GridNoticias'

export const Blog = () => {

    const { user, setUser, isRegister, setRegister } = useContext(UserContext)


    return (
        <>
            <h1>Noticias</h1>

            {/*             <h2>User id: {user.id_user}</h2>
            <h2>User role: {user.user_role}</h2> */}

            <GridNoticias />

            <Link to={`nuevo-post`} >Nueva noticia</Link>
        </>

    )
}
