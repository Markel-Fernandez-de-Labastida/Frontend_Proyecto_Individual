import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { useForm } from '../../hooks/useForm';
import { useFetch } from '../../hooks/useFetch';

export const ModifyPost = () => {
    const navigate = useNavigate();

    const { id_post } = useParams();

    // TODO: Recoger desde el token el id del usuario editor
    // React Jodit WYSIWYG Editor
    const editor = useRef(null);
    const [content, setContent] = useState('');

    const config = useMemo(
        () => ({
            readonly: false, // all options from https://xdsoft.net/jodit/docs/,
            //width: '100%',
            toolbarButtonSize: "small",
            style: {
                color: '#0c0c0c'
            },
            placeholder: post_content
        }), []);

    const formatDate = () => {
        const dateObj = new Date();
        return dateObj.toISOString().slice(0, 10);
    }


    const { handleSubmit, formulario, enviado } = useForm({});

    const { get, loginRegister, update, create, delet, data, isLoading, isError } = useFetch(formulario);

    useEffect(() => {
        get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/AllDetails/${id_post}`)
    }, [])


    useEffect(() => {
        Object.keys(formulario).length !== 0 && update(`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/Update`, formulario)
        console.log(data)
    }, [formulario])



    return (
        <>
            <div>
                <p>Editar noticia</p>

            </div>

            <form action="#" method="post" onSubmit={handleSubmit}>
                <input type="hidden" name="post_user" id='post_user' value={item.id_post} />
                <input type="text" name="post_title" id="post_title" placeholder='Titulo de la noticia' value={item.post_title} />
                <input type='text' name='post_subtitle' id="post_subtitle" placeholder='Subtitulo de la noticia' value={item.post_subtitle} />
                {/* TODO: Usar react det text = React Jodit WYSIWYG Editor */}
                <JoditEditor
                    ref={editor}
                    value={item.post_content}
                    config={config}
                    tabIndex={1}
                    name="post_content" id="post_content"
                //placeholder='Contenido de la noticia'
                />
                {/*<input type="text" name="post_content" id="post_content" placeholder='Contenido de la noticia' />*/}
                <input type="hidden" name="date_insert" id='date_insert' value={formatDate()} />

                <button type="submit">Crear noticia</button>
            </form>
        </>

    )
}