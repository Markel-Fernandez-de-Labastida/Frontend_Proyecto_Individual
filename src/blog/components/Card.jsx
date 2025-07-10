import React from 'react'
import { CardCompleto } from './CardCompleto'
import { Link, redirect } from 'react-router';
import Swal from 'sweetalert2';
import { useFetch } from '../../hooks/useFetch';

export const Card = ({ item }) => {

    const { loginRegister, update, create, delet, data, isLoading, isError } = useFetch();

    const deleteNoticia = () => {
        Swal.fire({
            title: "Do you want to save the changes?",
            showConfirmButton: false,
            showDenyButton: true,
            showCancelButton: true,
            denyButtonText: `Eliminar`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isDenied) {
                Swal.fire("Borrado", "", "success");
                delet(`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/Delete`, item.id_post)
                //redirect("`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/dashboardEditor")
                console.log(data)
            }
        });

    }


    return (
        <>
            <article>
                <h2>{item.post_title}</h2>
                <p>{item.user_name}</p>
                <Link to={`blog/${item.id_post}`}>Ver</Link>
                <Link to={`editar-post/${item.id_post}`}>Editar</Link>
                <button onClick={deleteNoticia}>Borrar</button>
            </article>
        </>
    )
}
