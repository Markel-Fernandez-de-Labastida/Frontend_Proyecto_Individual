import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useFetch } from '../hooks/useFetch.js';
import { useForm } from '../hooks/useForm.js';

export const Login = () => {

    const { handleSubmit, formulario, enviado } = useForm({});

    const { login, update, create, delet, data, isLoading, isError } = useFetch(formulario);

    useEffect(() => {
        Object.keys(formulario).length !== 0 && login("http://localhost:3000/api/v1/auth/login", formulario)
        console.log(data)
    }, [formulario])



    return (
        <>
            {JSON.stringify(formulario)}
            <form onSubmit={handleSubmit}>
                <h2>Iniciar Sesión</h2>
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Nombre de usuario"
                    value={formulario.username}
                //onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                />
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Contraseña"
                    value={formulario.password}
                //onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button type="submit">Login</button>
            </form>
        </>
    );
};