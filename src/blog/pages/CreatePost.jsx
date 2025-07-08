import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { useFetch } from '../../hooks/useFetch';
import { useForm } from '../../hooks/useForm';

export const CreatePost = () => {

    const navigate = useNavigate();

    // TODO: Recoger desde el token el id del usuario editor

    const formatDate = () => {
        const dateObj = new Date();
        return dateObj.toISOString().slice(0, 10);
    }


    const { handleSubmit, formulario, enviado } = useForm({});

    const { loginRegister, update, create, delet, data, isLoading, isError } = useFetch(formulario);

    useEffect(() => {
        Object.keys(formulario).length !== 0 && create(`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/Create`, formulario)
        console.log(data)
    }, [formulario])



    return (
        <>
            <div>
                <p>Crear noticias</p>
            </div>

            <form action="#" method="post" onSubmit={handleSubmit}>
                <input type="hidden" name="post_user" id='post_user' value={1} />
                <input type="text" name="post_title" id="post_title" placeholder='Titulo de la noticia' />
                <input type='text' name='post_subtitle' id="post_subtitle" placeholder='Subtitulo de la noticia' />
                {/* TODO: Usar react det text = React Jodit WYSIWYG Editor */}
                <input type="text" name="post_content" id="post_content" placeholder='Contenido de la noticia' />
                <input type="hidden" name="date_insert" id='date_insert' value={formatDate()} />

                <button type="submit">Crear oticia</button>
            </form>
        </>

    )
}
