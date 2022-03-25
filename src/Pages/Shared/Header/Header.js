import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/image.png'

const Header = () => {
    return (
        <div >
            <div className='d-flex'>
                <div className="col-md-4">
                    <img className='w-50' src={logo} alt="" />
                </div>
                <div className="col-md-6">
                    <button className="btn btn-primary mt-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Dashboard</button>
                </div>
                <div className="col-md-2">
                    <ul className="navbar-nav d-flex me-3">
                        <li className="nav-item p-2">
                            <NavLink to="/login">
                                <button className="btn btn-outline-danger me-2 mt-2" ><FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon> </button>
                            </NavLink>
                        </li>
                        <li className="nav-item mt-4">
                            <h6>Shongi</h6>
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                    <div class="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasScrollingLabel">DASHBOARD</h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ListGroup as="ul" className="my-5 mx-auto  ">
                            <Link to={``}>
                                <ListGroup.Item className="bg-dark border-bottom text-light" as="li"  >
                                    <Button className="text-light fs-6" variant="transparent">
                                        Dashboard
                                    </Button>
                                </ListGroup.Item>
                            </Link>
                            <Link to={`add-new-client`}>
                                <ListGroup.Item className="bg-dark border-bottom text-light" as="li"  >
                                    <Button className="text-light fs-6" variant="transparent">
                                        Add New Client
                                    </Button>
                                </ListGroup.Item>
                            </Link>
                            <Link to={`view-all-client`}>
                                <ListGroup.Item className="bg-dark border-bottom text-light" as="li"  >
                                    <Button className="text-light fs-6" variant="transparent">
                                        View All Client
                                    </Button>
                                </ListGroup.Item>
                            </Link>
                            <Link to={``}>
                                <ListGroup.Item className="bg-dark border-bottom text-light" as="li"  >
                                    <Button className="text-light fs-6" variant="transparent">
                                        Payment Method
                                    </Button>
                                </ListGroup.Item>
                            </Link>
                            <ListGroup.Item className="bg-dark border-bottom text-light" as="li"  >
                                <Button className="text-light fs-6" variant="transparent" >Log Out</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                </div>
                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasWithBackdropLabel">Offcanvas with backdrop</h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <p>.....</p>
                    </div>
                </div>
                <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <p>Try scrolling the rest of the page to see this option in action.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;