import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import { useFetch } from '../../hooks/useFetch';
import { useForm } from '../../hooks/useForm';

export const ModifyUser = () => {
    const { id } = useParams();
    console.log("id param: ", id)
    const { get, loginRegister, update, create, delet, data, isLoading, isError } = useFetch();

    const { handleSubmit, formulario, enviado } = useForm(data);

    useEffect(() => {
        get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/users/UserById/${id}`)
    }, [])

    useEffect(() => {
        Object.keys(formulario).length !== 0 && update(`${import.meta.env.VITE_BACKEND_URL}/api/v1/users/Update`, formulario)
        console.log(data)
    }, [formulario])

    return (
        <>

            <form action="#" method="post" onSubmit={handleSubmit}>
                <input type="hidden" name="id_user" id="id_user" placeholder='Nombre del usuario' value={formulario.id_user} />
                <input type="hidden" name="user_name" id="user_name" placeholder='Nombre del usuario' value={formulario.user_name} />
                <input type="hidden" name='user_password' id="user_password" placeholder='Contraseña del usuario' value={formulario.user_password} />
                <input type="hidden" name="user_email" id="user_email" placeholder='Email del usuario' value={formulario.user_email} />
                <input type="text" name="user_role" id="user_role" value={data.role_name} />

                <button type="submit">Modificar usuario</button>
            </form>
        </>

    )
}
