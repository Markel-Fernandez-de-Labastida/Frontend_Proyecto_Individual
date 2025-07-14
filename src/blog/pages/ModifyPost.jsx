import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { useForm } from '../../hooks/useForm';
import { useFetch } from '../../hooks/useFetch';
import JoditEditor from 'jodit-react';

export const ModifyPost = () => {
    const navigate = useNavigate();

    const { id } = useParams();

    // TODO: Recoger desde el token el id del usuario editor
    // React Jodit WYSIWYG Editor
    const editor = useRef(null);

    const config = useMemo(
        () => ({
            readonly: false, // all options from https://xdsoft.net/jodit/docs/,
            //width: '100%',
            toolbarButtonSize: "small",
            style: {
                color: '#0c0c0c'
            }
            //placeholder: post_content
        }), []);


    const { get, update, data, isLoading, isError } = useFetch();

    // console.log(data)

    const { handleSubmit, formulario, setFormulario } = useForm(data);

    const formatDate = () => {
        const dateObj = new Date();
        return dateObj.toISOString().slice(0, 10);
    }


    useEffect(() => {
        get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/allDetails/${id}`)
        setFormulario(data)

    }, [])

    useEffect(() => {
        Object.keys(formulario).length !== 0 && update(`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/update`, formulario)


    }, [formulario])



    return (
        <>
            <div>
                <p>Editar noticia</p>
                {JSON.stringify(data)}
                {JSON.stringify(formulario)}

            </div>

            {
                isLoading ?
                    <p>CARGANDO ....</p>
                    :
                    isError ?
                        <p>{isError}</p>
                        :
                        <form action="#" method="post" onSubmit={handleSubmit}>
                            <input type="hidden" name="id_post" id='id_post' value={data.id_post} />
                            <input type="text" name="post_title" id="post_title" placeholder='Titulo de la noticia' />
                            <input type='text' name='post_subtitle' id="post_subtitle" placeholder='Subtitulo de la noticia' />
                            {/* TODO: Usar react det text = React Jodit WYSIWYG Editor */}
                            <JoditEditor
                                ref={editor}
                                value={data.post_content}
                                config={config}
                                tabIndex={1}
                                name="post_content" id="post_content"
                            //placeholder='Contenido de la noticia'
                            />
                            {/*<input type="text" name="post_content" id="post_content" placeholder='Contenido de la noticia' />*/}
                            <input type="hidden" name="date_insert" id='date_insert' value={formatDate()} />

                            <button type="submit">Modificar noticia</button>
                        </form>
            }


        </>

    )
}