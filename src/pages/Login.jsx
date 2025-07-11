import { useContext, useEffect, useState } from 'react';
import { redirect, useNavigate } from 'react-router';
import { useFetch } from '../hooks/useFetch.js';
import { useForm } from '../hooks/useForm.js';
import { UserContext } from '../contexts/UserContext.jsx';

export const Login = () => {
    const { user, setUser, isRegister, setRegister } = useContext(UserContext)


    const navigate = useNavigate();

    const { handleSubmit, formulario, enviado } = useForm({});

    const { login, register, update, create, delet, data, isLoading, isError } = useFetch(formulario);

    useEffect(() => {
        Object.keys(formulario).length !== 0 && login(`${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/login`, formulario)
        //console.log(data)
        console.log("id user useContext: ", user.id_user);
        console.log("role user useContext: ", user.user_role);
        if (isRegister && user.user_role == 2) {
            redirect("/editor");
        }


    }, [formulario])



    return (
        <>
            {JSON.stringify(formulario)}
            {JSON.stringify(user)}
            <form onSubmit={handleSubmit}>
                <h2>Iniciar Sesión</h2>
                <input
                    type="text"
                    id="user_email"
                    name="user_email"
                    placeholder="Email de usuario"
                    value={formulario.username}
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