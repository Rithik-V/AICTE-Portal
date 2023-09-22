import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';
import {FaUserCircle, FaQuestionCircle, FaBell} from 'react-icons/fa';
import logo from '../images/AICTE_logo.png'
import { color } from 'highcharts';

const Header = () => {
  return (
    <header>
        <Navbar bg = "dark" variant='dark' expand = "md" collapseOnSelect>
            <Container style={{textAlign:"center"}}>
                <h3 style={{color:"white", marginLeft:"8em"}}>अखिल भारतीय तकनीकी शिक्षा परिषद
                <Navbar.Brand href='/'><img src={logo} style={{height:50, marginLeft:"1em"}} alt="All India Council for Technical Education"></img> All India Council for Technical Education </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                </h3>
            </Container>
        </Navbar>
        <Navbar bg = "orange" variant='dark' expand = "md" collapseOnSelect>
            <Container>
                <Navbar.Brand href='/'><img src={logo} style={{height:25, marginLeft:"-15em", marginTop:"-2em"}} alt="All India Council for Technical Education"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            </Container>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto" style={{marginLeft:"-90em", marginTop:"-1em"}}>
                    <li class="nav-item active" style={{marginLeft:"0em"}}>
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    </li>
                    <li class="nav-item" style={{marginLeft:"0.5em"}}>
                        <button class="btn btn-outline-success my-2 my-sm-0"  type="submit">Search</button>
                    </li>
                    <li class="nav-item" style={{marginLeft:"60em"}}>
                        <FaQuestionCircle style={{fontSize:"24px", color:"orange"}}/>
                    </li>
                    <li class="nav-item" style={{marginLeft:"1em"}}>
                        <FaBell style={{fontSize:"30px", color:"orange"}}/>
                    </li>
                    <li class="nav-item" style={{marginLeft:"1em"}}>
                        <FaUserCircle style={{fontSize:"36px", color:"red"}}/>
                    </li>
                </ul>

            </div>
        </Navbar>
    </header>
  )
}

export default Header