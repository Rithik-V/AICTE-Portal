import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';
import {FaUser} from 'react-icons/fa';
import logo from '../images/AICTE_logo.png'

const Header = () => {
  return (
    <header>
        <Navbar bg = "dark" variant='dark' expand = "md" collapseOnSelect>
            <Container>
                <Navbar.Brand href='/'><img src={logo} style={{height:50}} alt="All India Council for Technical Education"></img> AICTE</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id = "basic-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link href = "/login">HOME</Nav.Link>
                    </Nav>
                    <Nav className='ms-auto'>
                        <Nav.Link href = "/login">ABOUT US</Nav.Link>
                    </Nav>
                    <Nav className='ms-auto'>
                        <Nav.Link href = "/login">NEWSROOM</Nav.Link>
                    </Nav>
                    <Nav className='ms-auto'>
                        <Nav.Link href = "/login">BUREAUS</Nav.Link>
                    </Nav>
                    <Nav className='ms-auto'>
                        <Nav.Link href = "/login">INSTIATIVES</Nav.Link>
                    </Nav>
                    <Nav className='ms-auto'>
                        <Nav.Link href = "/login">SCHEMES</Nav.Link>
                    </Nav>
                    <Nav className='ms-auto'>
                        <Nav.Link href = "/login">EDUCATION</Nav.Link>
                    </Nav>
                    <Nav className='ms-auto'>
                        <Nav.Link href = "/login">OPPORTUNITIES</Nav.Link>
                    </Nav>
                    <Nav className='ms-auto'>
                        <Nav.Link href = "/login">STATISTICS</Nav.Link>
                    </Nav>
                    <Nav className='ms-auto'>
                        <Nav.Link href = "/login">BULLETINS</Nav.Link>
                    </Nav>
                    <Nav className='ms-auto'>
                        <Nav.Link href = "/login"><FaUser/> SIGNIN</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header