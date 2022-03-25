import { faBars, faFile, faListAlt, faNewspaper, faUsd, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link, NavLink, Route } from 'react-router-dom';

const DashboardHome = () => {
    return (
        <Container fluid className='bg-dark' >
            <Row>
                <h1 className='text-light'>Dashboard</h1>
            </Row>
            <Row>
                <Col md={2}>
                    <Link to='view-clients'>
                        <div className="icon-box text-center">
                            <FontAwesomeIcon className='icon' size="4x" icon={faUsers}></FontAwesomeIcon>

                            <h6>View Clients</h6>
                        </div>
                    </Link>
                </Col>
                <Col md={2}>
                    <Link to='view-clients'>
                        <div className="icon-box text-center">
                            <FontAwesomeIcon className='icon' size="4x" icon={faBars}></FontAwesomeIcon>

                            <h6>View Projects</h6>
                        </div>
                    </Link>
                </Col>
                <Col md={2}>
                    <Link to='view-clients'>
                        <div className="icon-box text-center">
                            <FontAwesomeIcon className='icon' size="4x" icon={faFile}></FontAwesomeIcon>

                            <h6>Order New Services</h6>
                        </div>
                    </Link>
                </Col>
                <Col md={2}>
                    <Link to='view-clients'>
                        <div className="icon-box text-center">
                            <FontAwesomeIcon className='icon' size="4x" icon={faUsd}></FontAwesomeIcon>

                            <h6>Deposit Found</h6>
                        </div>
                    </Link>
                </Col>
                <Col md={2}>
                    <Link to='view-clients'>
                        <div className="icon-box text-center">
                            <FontAwesomeIcon className='icon' size="4x" icon={faListAlt}></FontAwesomeIcon>

                            <h6>Transaction Logs</h6>
                        </div>
                    </Link>
                </Col>
            </Row>
            <Row className='bg-light'>
                <Row className='bg-dark'>
                    <p>4 Things to Do When You First Login</p>
                </Row>
                <Row>
                    <Col>
                        <iframe width="853" height="480" src="https://www.youtube.com/embed/sd0ypO9MTWY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>
                    <Col>
                        <p className=''>
                            <span className='badge badge-primary'>1</span>
                            <a href="javaScript">Make Sure Your Address Is Correct.</a>
                            " Sometimes we send items via post mail... SEO plans, newsletters, etc... Make sure your address is somewhere you can get these goodies.
                        </p>
                        <p className=''>
                            <span className='badge badge-primary'>1</span>
                            <a href="javaScript">Upload Your Logo.</a>
                            We would like to whitelabel your reports for you, please make sure a logo is uploaded so we can easily grab it.
                        </p>
                        <p className=''>
                            <span className='badge badge-primary'>1</span>
                            <a href="javaScript">Add Yourself As a Client. </a>
                            I recommend adding yourself as a client first, any sites you can test our stuff out on. Hopefully what we offer is impressive enough for your clients.
                        </p>
                        <p className=''>
                            <span className='badge badge-primary'>1</span>
                            <a href="javaScript">Download Our Price List.</a>
                            It gets updated intermittently but is still a handy way to give an overview of everything we have.
                        </p>
                    </Col>
                </Row>
                <Row >
                    <Row className='bg-dark'>
                        <FontAwesomeIcon className='icon text-light' size="4x" icon={faNewspaper}></FontAwesomeIcon>
                        <h4 className='text-light'>Latest News from Marketer's Center</h4>
                    </Row>
                    <Row className='bg-primary'>
                        <a className='text-light' href="">No News Record Found!</a>
                    </Row>
                </Row>
            </Row>
        </Container>

    );
};

export default DashboardHome;