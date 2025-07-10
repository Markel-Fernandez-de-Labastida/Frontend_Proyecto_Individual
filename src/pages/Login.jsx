import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useFetch } from '../hooks/useFetch.js';
import { useForm } from '../hooks/useForm.js';
import { UserContext } from '../contexts/UserContext.jsx';

export const Login = () => {
    const { user, setUser, isRegister, setRegister } = useContext(UserContext)


    const navigate = useNavigate();

    const { handleSubmit, formulario, enviado } = useForm({});

    const { loginRegister, update, create, delet, data, isLoading, isError } = useFetch(formulario);

    useEffect(() => {
        Object.keys(formulario).length !== 0 && loginRegister(`${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/login`, formulario)
        console.log(data)

        if (data.ok) {
            setUser(data);
            setRegister(true);
            navigate("/dashboard");
        }
    }, [formulario])



    return (
        <>
            {JSON.stringify(formulario)}
            <form onSubmit={handleSubmit}>
                <h2>Iniciar Sesión</h2>
                <input
                    type="text"
                    id="user_email"
                    name="user_email"
                    placeholder="Nombre de usuario"
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