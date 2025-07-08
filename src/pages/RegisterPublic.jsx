import { useEffect, useState } from 'react';
import { useForm } from '../hooks/useForm';
import { useFetch } from '../hooks/useFetch';
import { useNavigate } from 'react-router';

export const RegisterPublic = () => {

    const navigate = useNavigate();

    const { handleSubmit, formulario, enviado } = useForm({});

    const { loginRegister, update, create, delet, data, isLoading, isError } = useFetch(formulario);
    /* const [formData, setFormData] = useState({ username: '', password: '', role: '' });*/

    useEffect(() => {
        Object.keys(formulario).length !== 0 && loginRegister(`${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/register`, formulario)
        console.log("final: ", data)
        if (data.ok) {
            navigate("/login");
        }
    }, [formulario])
    /*const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await consultFetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/register`, 'POST', formData);

            console.log('Usuario registrado correctamente');

        } catch (error) {
            console.error('Error al registrar usuario:', error);
        }
    }; */

    return (
        <form onSubmit={handleSubmit}>
            <h2>Registrar Usuario</h2>
            <input
                type='text'
                id='user_name'
                name='user_name'
                placeholder="Nombre de usuario"
                value={formulario.username}
            >
            </input>
            <input
                type="text"
                id="user_email"
                name="user_email"
                placeholder="Correo del usuario"
                value={formulario.email}
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
            <input
                type="hidden"
                id="user_role"
                name="user_role"
                value="3">
            </input>
            {/* <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            >
                <option value="">Selecciona un rol</option>
                <option value="admin">Admin</option>
                <option value="user">Usuario</option>
            </select> */}
            <button type="submit">Registrar</button>
        </form>
    );
};