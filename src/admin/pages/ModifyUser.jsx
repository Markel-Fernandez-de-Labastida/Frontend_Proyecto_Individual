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
                <input type="text" name="user_role" id="user_role" placeholder='nuevo rol' />
                <input type="hidden" name="user_id" id='user_id' value={id} />

                <button type="submit">Modificar usuario</button>
            </form>
        </>

    )
}
