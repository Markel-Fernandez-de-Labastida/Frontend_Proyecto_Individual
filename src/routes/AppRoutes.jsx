import React, { useContext } from 'react'
import { Navigate, Route, Router, Routes } from 'react-router'
import { Blog, Dashboard, Login, RegisterPublic } from '../pages'
import { ProtectedRoute } from '../utils/protectedRoute'
import { CreatePost, DashboardEditor, DeletePost, ModifyPost } from '../blog/pages'
import { DashboarsAdmin } from '../admin/pages/DashboarsAdmin'
import { CreateUser, DeleteUser, ModifyUser, CreatePostAdmin, ModifyPostAdmin, DeletePostAdmin } from '../admin/pages'
import { UserProvider } from '../contexts/UserProvider'
import { CardCompleto } from '../blog/components/CardCompleto'
import { UserContext } from '../contexts/UserContext'


export const AppRoutes = () => {

    /*    const { user, isRegister } = useContext(UserContext) */

    /* const user = {
        id: 1,
        role: 'editor',
        nombre: 'Pepe'
    }
    const isRegister = true */

    return (

        <Routes>
            {/* Rutas públicas */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterPublic />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<CardCompleto />} />

            {/* Rutas protegidas Editor*/}
            {

                /*                 (isRegister && user.role == 'editor') &&
                 */
                <Route Route path="editor">
                    <Route index element={<DashboardEditor />} />
                    <Route path="nuevo-post" element={<CreatePost />} />
                    <Route path="editar-post/:id" element={<ModifyPost />} />
                </Route>
            }

            {/* <Route
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
                } /> */}

            {/* Rutas protegidas Administrador*/}

            <Route path="admin">
                <Route index element={<DashboarsAdmin />} />
                <Route path="nuevo-usuario" element={<CreateUser />} />
                <Route path="editar-usuario/:id" element={<ModifyUser />} />
            </Route>
            {/*
            <Route
                path='/dashboardAdmin'
                element={
                    < DashboarsAdmin />
                } />
            */}
            {/* Usuarios */}
            {/*
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
            /*}
            {/* Blog */}
            {/*
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
            */}

            {/* Ruta de acceso denegado */}
            <Route path="/unauthorized" element={<h2>Acceso no autorizado</h2>} />
            <Route path='/*' element={< Navigate to={'./'} />} />
        </Routes >

    )
}
