import React from 'react'
import { Navigate, Route, Router, Routes } from 'react-router'
import { Blog, Dashboard, Login, RegisterPublic } from '../pages'
import { ProtectedRoute } from '../utils/protectedRoute'
import { CreatePost, DashboardEditor, DeletePost, ModifyPost } from '../blog/pages'
import { DashboarsAdmin } from '../admin/pages/DashboarsAdmin'
import { CreateUser, DeleteUser, ModifyUser, CreatePostAdmin, ModifyPostAdmin, DeletePostAdmin } from '../admin/pages'



export const AppRoutes = () => {
    return (

        <Routes>
            {/* Rutas públicas */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterPublic />} />
            <Route path="/blog" element={<Blog />} />

            {/* Rutas protegidas Editor*/}
            <Route
                path="/dashboardEditor"
                element={
                    <DashboardEditor />
                } />

            <Route
                path='/createPostEditor'
                element={
                    < CreatePost />
                } />
            <Route
                path='/modifyPostEditor'
                element={
                    < ModifyPost />
                } />

            <Route
                path='/deletePostEditor'
                element={
                    < DeletePost />
                } />

            {/* Rutas protegidas Administrador*/}

            <Route
                path='/dashboardAdmin'
                element={
                    < DashboarsAdmin />
                } />

            {/* Usuarios */}

            <Route
                path='/createUser'
                element={
                    < CreateUser />
                } />

            <Route
                path='/updateUser'
                element={
                    < ModifyUser />
                } />

            <Route
                path='/deleteUser'
                element={
                    < DeleteUser />
                } />
            {/* Blog */}
            <Route
                path='/createPost'
                element={
                    < CreatePostAdmin />
                } />

            <Route
                path='/updatePost'
                element={
                    < ModifyPostAdmin />
                } />

            <Route
                path='/DeletePost'
                element={
                    < DeletePostAdmin />
                } />


            {/* Ruta de acceso denegado */}
            <Route path="/unauthorized" element={<h2>Acceso no autorizado</h2>} />
            <Route path='/*' element={< Navigate to={'./'} />} />
        </Routes>

    )
}
