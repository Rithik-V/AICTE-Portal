import React from 'react'
import { Navbar } from 'react-bootstrap'
import Header2 from '../components/Header2'
import { Nav, Container } from 'react-bootstrap'

const Chat = () => {
  return (
    <>
      <Header2/>
      <Navbar bg = "warning" variant='dark' expand = "md" collapseOnSelect style={{fontSize:"18px", fontWeight:"bold", height:"48px"}}>
            <Container>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id = "basic-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link href = "/login">Comments</Nav.Link>
                    </Nav>
                    <Nav className='ms-auto'>
                        <Nav.Link href = "/login">My Favourites</Nav.Link>
                    </Nav>
                    <Nav className='ms-auto'>
                        <Nav.Link href = "/login">Feeds</Nav.Link>
                    </Nav>
                    <Nav className='ms-auto'>
                        <Nav.Link href = "/login">Assigned</Nav.Link>
                    </Nav>
                    <Nav className='ms-auto'>
                        <Nav.Link href = "/login">Settings</Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    </>
  )
}

export default Chat