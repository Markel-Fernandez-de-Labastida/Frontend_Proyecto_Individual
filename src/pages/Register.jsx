import { useState } from 'react';

export const Register = () => {
    const [formData, setFormData] = useState({ username: '', password: '', role: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await consultFetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/register`, 'POST', formData);

            console.log('Usuario registrado correctamente');

        } catch (error) {
            console.error('Error al registrar usuario:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Registrar Usuario</h2>
            <input
                type="text"
                placeholder="Nombre de usuario"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            >
                <option value="">Selecciona un rol</option>
                <option value="admin">Admin</option>
                <option value="user">Usuario</option>
            </select>
            <button type="submit">Registrar</button>
        </form>
    );
};