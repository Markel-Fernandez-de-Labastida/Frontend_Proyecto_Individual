import React from 'react'
import { Card, Container, Nav, Navbar } from 'react-bootstrap'

export const Footer = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" fixed="bottom" expanded="true">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link>
                            Footer
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>

    )
}
