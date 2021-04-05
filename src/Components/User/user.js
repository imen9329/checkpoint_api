import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const user = ({ user }) => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src="holder.js/171x180" roundedCircle />
                    </Col>
                </Row>
            </Container>
            <h1>Username: {user.username}</h1>
            <p>Full name: {user.name}</p> <br />
            <p>Address: {user.address}</p> <br />
            <p>Email: {user.email}</p> <br />
        </div>
    );
};

export default user;
