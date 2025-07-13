import { useContext, useEffect, useRef, useState } from 'react';
import { redirect, useNavigate } from 'react-router';
import { useFetch } from '../hooks/useFetch.js';
import { useForm } from '../hooks/useForm.js';
import { UserContext } from '../contexts/UserContext.jsx';

export const Login = () => {
    const { user, setUser, isRegister, logoutContext, loginContext } = useContext(UserContext);


    const navigate = useNavigate();

    const { handleSubmit, formulario, enviado } = useForm({});

    const { login, register, update, create, delet, data, isLoading, isError } = useFetch(formulario);



    useEffect(() => {
        Object.keys(formulario).length !== 0 && login(`${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/login`, formulario)

        if (isRegister && user.user_role == 2) {
            redirect("/editor");
        }

    }, [formulario])

    let firstUpdate = useRef(false);
    useEffect(() => {
        if (firstUpdate.current) {
            console.log("Pasa por setEstorage");
            if (data.token !== "") {
                localStorage.setItem("token", data.token);
            }
            //setUser(newUser)
            //loginContext()
        }
        firstUpdate.current = true;
    }, [data])



    return (
        <>
            {JSON.stringify(formulario)}
            {JSON.stringify(data)}
            {JSON.stringify(user)}

            <form onSubmit={handleSubmit}>
                <h2>Iniciar Sesión</h2>
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