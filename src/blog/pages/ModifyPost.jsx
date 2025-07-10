import React from 'react'

export const ModifyPost = (id_post, post_title, post_subtitle, post_content, date_insert) => {
    const navigate = useNavigate();

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

    const { loginRegister, update, create, delet, data, isLoading, isError } = useFetch(formulario);

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
                <input type="hidden" name="post_user" id='post_user' value={id_post} />
                <input type="text" name="post_title" id="post_title" placeholder='Titulo de la noticia' value={post_title} />
                <input type='text' name='post_subtitle' id="post_subtitle" placeholder='Subtitulo de la noticia' value={post_subtitle} />
                {/* TODO: Usar react det text = React Jodit WYSIWYG Editor */}
                <JoditEditor
                    ref={editor}
                    value={content}
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