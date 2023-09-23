import React from 'react'
import { Navbar } from 'react-bootstrap'
import Header2 from '../components/Header2'
import { Nav, Container } from 'react-bootstrap'
import {ChatHelper} from '../components/ChatHelper.js'

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
                <button
                    style={{
                        backgroundColor:"orange",
                        height: "40px",
                        width: "35%",
                        borderRadius: "25px",
                        border: "none",
                        marginTop: "10em",
                        marginLeft: "-40em"

                    }}>
                    <span>Subject 1</span>
                </button>
                <button
                    style={{
                        backgroundColor:"orange",
                        height: "40px",
                        width: "35%",
                        borderRadius: "25px",
                        border: "none",
                        marginTop: "15em",
                        marginLeft: "-40em"
                    }}>
                    <span>Subject 1</span>
                </button>
                <button
                    style={{
                        backgroundColor:"orange",
                        height: "40px",
                        width: "35%",
                        borderRadius: "25px",
                        border: "none",
                        marginTop: "20em"
                    }}>
                    <span>Subject 2</span>
                </button>
                <button
                    style={{
                        backgroundColor:"orange",
                        height: "40px",
                        width: "35%",
                        borderRadius: "25px",
                        border: "none",
                        marginTop: "25em"
                    }}>
                    <span>Subject 3</span>
                </button>
                <button
                    style={{
                        backgroundColor:"orange",
                        height: "40px",
                        width: "35%",
                        borderRadius: "25px",
                        border: "none",
                        marginTop: "30em"
                    }}>
                    <span>Subject 4</span>
                </button>
            </Container>
        </Navbar>

    </>
  )
}

export default Chat;