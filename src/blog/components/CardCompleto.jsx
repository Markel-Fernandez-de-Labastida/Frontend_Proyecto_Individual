import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import { useFetch } from '../../hooks/useFetch';
import { Card } from 'react-bootstrap';


export const CardCompleto = (props) => {
    const { id } = useParams();
    console.log("parametro cardCompleto: ", id);

    const { get, data, isLoading, isError } = useFetch();

    useEffect(() => {
        get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/allDetails/${id}`)

    }, [])

    return (
        <>
            <h1>{data.post_title}</h1>
            <Card >
                <Card.Body>
                    <Card.Text className="fs-3">{data.post_subtitle}</Card.Text>
                    <Card.Text >{data.post_content}</Card.Text>
                    <Card.Body>
                        <Card.Text >{data.user_name}</Card.Text>
                        <Card.Text >{data.date_insert?.slice(0, 10)}</Card.Text>
                    </Card.Body>
                </Card.Body>
            </Card>

        </>
    )
}
