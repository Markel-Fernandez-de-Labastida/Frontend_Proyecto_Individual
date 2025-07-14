import React from 'react'
import { CardCompleto } from './CardCompleto'
import { Link, redirect } from 'react-router';
import Swal from 'sweetalert2';
import { useFetch } from '../../../hooks/useFetch';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export const CardAd = ({ item }) => {

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

            <Card >
                <Card.Body>
                    <Card.Title>{item.user_name}</Card.Title>
                    <Card.Text>{item.user_email}</Card.Text>
                    <Card.Text>{item.role_name}</Card.Text>

                    <Button variant='light'><Link to={`editar-usuario/${item.id_user}`}>Editar usuario</Link></Button>
                    <Button variant='danger' onClick={deleteUsuario}>Borrar</Button>
                </Card.Body>
            </Card>


            {/* <article>
                <h2>{item.user_name}</h2>
                <p>{item.user_email}</p>
                <p>{item.role_name}</p>
                <Link to={`editar-usuario/${item.id_user}`}>Editar</Link>
                <button onClick={deleteUsuario}>Borrar</button>
            </article> */}
        </>
    )
}
