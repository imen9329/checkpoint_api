import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./User.css";

const User = ({ user }) => {
    return (
        <div>
            <Container className="image">
                <Row>
                    <Col>
                        <Image
                            src="https://dental-smile.net/public/uploads/profile_png_1113533201904221555971977765.png"
                            roundedCircle
                        />
                    </Col>
                </Row>
            </Container>
            <Container style={{ color: "white" }}>
                <h4> {user.username}</h4>
                <br />
                <span>Fullname: {user.name}</span>
                <br />
                <span>Address: {user.address.street}</span>
                <br />
                <span>Email: {user.email}</span>
            </Container>
        </div>
    );
};

export default User;
