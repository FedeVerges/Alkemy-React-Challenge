import React from "react";
import {Container } from "react-bootstrap";
const Error = ({error ='', message=''}) => {
    return (
        <Container>
            <h1>Ha ocurrido un error</h1>
            <h2>{error}</h2>
            <h3>{message}</h3>
        </Container>
    );
}
export default Error;