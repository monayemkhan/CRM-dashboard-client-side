import React from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';

const AddNewClient = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1>ADD NEW CLIENT/LOCATION</h1>
                </Col>
                <Col className='text-end'>
                    <Button>Back</Button>
                </Col>
            </Row>

            <Row>
                <Form className='w-75 mx-auto border p-3'>
                    <Form.Group as={Row} className="mb-3" controlId="">
                        <Form.Label column sm="2">
                            Website
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" defaultValue="" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="">
                        <Form.Label column sm="2">
                            Business Name
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" defaultValue="" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="">
                        <Form.Label column sm="2">
                            Business Address
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control as="textarea" rows={3} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="">
                        <Form.Label column sm="2">
                            Business Phone Number
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="number" defaultValue="" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="">
                        <Form.Label column sm="2">
                            Business Owner Name
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" defaultValue="" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="">
                        <Form.Label column sm="2">
                            Business Description
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control as="textarea" rows={3} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="">
                        <Form.Label column sm="2">
                            Categories
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control as="textarea" rows={3} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="">
                        <Form.Label column sm="2">
                            Upload Business Logo
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="file" defaultValue="" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="">
                        <Form.Label column sm="2">
                            Facebook URL
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" defaultValue="" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="">
                        <Form.Label column sm="2">
                            Twitter URL
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" defaultValue="" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="">
                        <Form.Label column sm="2">
                            Linkedin URL
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" defaultValue="" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="">
                        <Form.Label column sm="2">
                            Youtube URL
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" defaultValue="" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="">
                        <Form.Label column sm="2">
                            Instagram URL
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" defaultValue="" />
                            <input className="btn btn-primary mt-3" type="Submit" />
                        </Col>
                    </Form.Group>
                </Form>
            </Row>
            <Row></Row>
        </Container>
    );
};

export default AddNewClient;