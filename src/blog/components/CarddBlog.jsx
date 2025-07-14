import React, { useContext } from 'react'
//import { CardCompleto } from './CardCompleto'
import { Link, redirect, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { useFetch } from '../../hooks/useFetch';
import { UserContext } from '../../contexts/UserContext';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export const CarddBlog = ({ item }) => {

    const { user, isRegister } = useContext(UserContext);

    const navigate = useNavigate();

    const { delet, data } = useFetch();

    const deletePost = () => {
        console.log("delete id: ", item.id_post)

        Swal.fire({
            title: "Do you want to save the changes?",
            showConfirmButton: false,
            showDenyButton: true,
            showCancelButton: true,
            denyButtonText: `Eliminar`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isDenied) {
                delet(`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/delete/${item.id_post}`)
                //redirect("`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/dashboardEditor")
                console.log("data borrar: ", data)
                Swal.fire("Borrado", "", "success");
                navigate("/editor");
            }

        });

    }


    return (
        <>
            {/* {JSON.stringify(user)} */}

            <Card >
                <Card.Body>
                    <Card.Title>{item.post_title}</Card.Title>
                    <Card.Text>{item.user_name}</Card.Text>

                    <Button variant='light'><Link to={`../blog/${item.id_post}`}>Ver</Link></Button>
                    {
                        (isRegister && user.role == 2) &&
                        <>
                            <Button variant='light'><Link to={`/editor/editar-post/${item.id_post}`}>Editar noticia</Link></Button>
                            <Button variant='danger' onClick={deletePost}>Borrar</Button>
                        </>

                    }


                </Card.Body>
            </Card>

        </>
    )
}
