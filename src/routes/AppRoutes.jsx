import React from 'react'
import { Navigate, Route, Router, Routes } from 'react-router'
import { Blog, Dashboard, Login, Register } from '../pages'
import { ProtectedRoute } from '../utils/protectedRoute'



export const AppRoutes = () => {
    return (

        <Routes>
            {/* Rutas públicas */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/blog" element={<Blog />} />

            {/* Rutas protegidas */}
            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute allowedRoles={['admin', 'user']}>
                        <Dashboard />
                    </ProtectedRoute>
                } />

            {/* Ruta de acceso denegado */}
            <Route path="/unauthorized" element={<h2>Acceso no autorizado</h2>} />
            <Route path='/*' element={< Navigate to={'./'} />} />
        </Routes>

    )
}
