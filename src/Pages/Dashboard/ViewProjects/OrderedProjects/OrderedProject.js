import React from 'react';

const OrderedProject = () => {
    return (
        <div>
            <Container className="my-5 border border-danger rounded-3">
                <Row>
                    <h4 className="text-uppercase bg-danger text-light p-3 fw-bold">All Order: {orders?.length}</h4>
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
                        {orders?.map((order, index) => (
                            <tbody>
                                <tr>
                                    <td>{index}</td>
                                    <td>{order?.bike_name}</td>
                                    <td>{order?.user_email}</td>
                                    <td>{order?.bike_price}</td>
                                    <td>{order?.user_address}</td>
                                    <td>{order?.bike_status}</td>
                                    <td>
                                        <button
                                            onClick={() => handleUpdateStatus(order?._id)}
                                            className="btn btn-outline-danger p-2"
                                        >
                                            Shipped
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDelete(order?._id)}
                                            className="btn btn-outline-danger  p-2"
                                        >
                                            <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </Table>
                </Row>
            </Container>
        </div>
    );
};

export default OrderedProject;