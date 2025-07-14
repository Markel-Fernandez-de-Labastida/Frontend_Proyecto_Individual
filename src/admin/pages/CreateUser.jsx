import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router';
import { useFetch } from '../../hooks/useFetch';
import { useForm } from '../../hooks/useForm';
import JoditEditor from 'jodit-react';

export const CreateUser = () => {

    const navigate = useNavigate();

    // TODO: Recoger desde el token el id del usuario editor
    const [content, setContent] = useState('');

    const formatDate = () => {
        const dateObj = new Date();
        return dateObj.toISOString().slice(0, 10);
    }


    const { handleSubmit, formulario, enviado } = useForm({});

    const { loginRegister, update, create, delet, data, isLoading, isError } = useFetch(formulario);

    useEffect(() => {
        Object.keys(formulario).length !== 0
            &&
            create(`${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/register`, formulario)
        console.log(data)
    }, [formulario])



    return (
        <>
            <div>
                <p>Crear Usuario</p>
            </div>

            <form action="#" method="post" onSubmit={handleSubmit}>
                <input type="text" name="user_name" id="user_name" placeholder='Nombre del usuario' />
                <input type="text" name="user_email" id="user_email" placeholder='Email del usuario' />
                <input type='password' name='user_password' id="user_password" placeholder='Contraseña del usuario' />
                <input type="hidden" name="user_role" id="user_role" value={2} />

                <button type="submit">Crear usuario</button>
            </form>
        </>

    )
}