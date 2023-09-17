import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';
import {FaUser} from 'react-icons/fa';
import logo from '../images/AICTE_logo.png'

const Header = () => {
  return (
    <header>
        <Navbar bg = "dark" variant='dark' expand = "md" collapseOnSelect>
            <Container>
                <Navbar.Brand href='/'><img src={logo} style={{height:50}} alt="All India Council for Technical Education"></img> All India Council for Technical Education</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id = "basic-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link href = "/login"><FaUser/>Sign in</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header