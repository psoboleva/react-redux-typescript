import React, { FC } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

export const Navigation: FC<{}> = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Back to React</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/galleries">Galleries</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation;