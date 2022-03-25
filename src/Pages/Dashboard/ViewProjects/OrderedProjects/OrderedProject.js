import React from 'react';
import { Container, Row, Table } from 'react-bootstrap';

const OrderedProject = () => {
    return (
        <div>
            <Container className="my-5 border border-danger rounded-3">
                <Row>
                    <h4 className="text-uppercase bg-danger text-light p-3 fw-bold">All Order</h4>
                    <Table striped bordered hover className="">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Price</th>
                                <th>Address</th>
                                <th>Status</th>
                                <th>Update</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                    </Table>
                </Row>
            </Container>
        </div>
    );
};

export default OrderedProject;