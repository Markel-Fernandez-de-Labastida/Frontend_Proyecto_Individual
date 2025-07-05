export const Dashboard = () => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        window.location.href = '/login';
    };

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Bienvenido, tienes acceso al dashboard.</p>
            <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
    );
};