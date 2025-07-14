import { useContext, useEffect, useRef, useState } from 'react';
import { redirect, useNavigate } from 'react-router';
import { useFetch } from '../hooks/useFetch.js';
import { useForm } from '../hooks/useForm.js';
import { UserContext } from '../contexts/UserContext.jsx';

export const Login = () => {


    //const navigate = useNavigate();

    const { handleSubmit, formulario, enviado } = useForm({});

    const { login, register, update, create, delet, data, isLoading, isError } = useFetch(formulario);
    const { user } = useContext(UserContext)



    useEffect(() => {
        Object.keys(formulario).length !== 0 && login(`${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/login`, formulario);

        /* if (isRegister && user.user_role == 2) {
            navigate("/editor");
        } */

    }, [formulario])

    // let firstUpdate = useRef(false);
    // console.log({ firstUpdate })
    // useEffect(() => {
    //     if (firstUpdate.current) {
    //         console.log("Pasa por setEstorage: ", data.token);
    //         localStorage.setItem("token", data.token);
    //         //loginContext()
    //     }
    //     firstUpdate.current = true;
    //     console.log({ firstUpdate })
    // }, [data])



    return (
        <>

            {JSON.stringify(user)}

            <form onSubmit={handleSubmit}>
                <h2 className=''>Iniciar Sesión</h2>
                <input
                    type="text"
                    id="user_email"
                    name="user_email"
                    placeholder="Email de usuario"
                    value={formulario.username}
                    autoFocus
                //onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                />
                <input
                    type="password"
                    id="user_password"
                    name="user_password"
                    placeholder="Contraseña"
                    value={formulario.password}
                //onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button type="submit">Login</button>
            </form>
        </>
    );
};