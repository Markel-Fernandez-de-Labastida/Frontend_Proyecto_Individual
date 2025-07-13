import React from 'react'
import { CardCompleto } from './CardCompleto'
import { Link, redirect } from 'react-router';
import Swal from 'sweetalert2';
import { useFetch } from '../../hooks/useFetch';

export const Card = ({ item }) => {

    const { loginRegister, update, create, delet, data, isLoading, isError } = useFetch();

    const deleteUsuario = () => {
        console.log("delete id: ", item.id_user)

        Swal.fire({
            title: "Do you want to save the changes?",
            showConfirmButton: false,
            showDenyButton: true,
            showCancelButton: true,
            denyButtonText: `Eliminar`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isDenied) {
                delet(`${import.meta.env.VITE_BACKEND_URL}/api/v1/users/delete/${item.id_post}`)
                //redirect("`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/dashboardEditor")
                console.log("data borrar: ", data)
                Swal.fire("Borrado", "", "success");
                redirect("/editor");
            }
        });

    }


    return (
        <>
            <article>
                <h2>{item.user_name}</h2>
                <Link to={`editar-post/${item.id_post}`}>Editar</Link>
                <button onClick={deleteNoticia}>Borrar</button>
            </article>
        </>
    )
}
