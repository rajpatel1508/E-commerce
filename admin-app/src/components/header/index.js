import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Link } from 'react-router-dom'
import { signout } from '../../actions';
export default function Header() {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(signout());
    }
    const renderLoggedInLinks = () => {
        return (<Nav>
            <li className="nav-item">
                <span className="nav-link" onClick={logout}>Signout</span>
            </li>
            {/* <Nav.Link href="#deets">Sign in</Nav.Link> */}
        </Nav>)
    }

    const renderNonLoggedInLinks = () => {
        return (
            <Nav>
                <li className="nav-item">
                    <NavLink to="/signin" className="nav-link">Signin</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/signup" className="nav-link">Signup</NavLink>
                </li>


                {/* <Nav.Link href="#deets">Sign in</Nav.Link> */}
            </Nav>
        );
    }

    return (
        <Navbar style={{ zIndex: 1 }} collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>
                {/* <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand> */}
                <Link to="/" className='navbar-brand'>Admin Dashboard</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
                    </Nav>
                    {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
