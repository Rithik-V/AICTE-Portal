import React from 'react'
import {Link} from "react-router-dom";
import {Row, Col, Button} from 'react-bootstrap';
import img1 from '../images/LoginBG.png';
import { FaUser, FaCheckSquare } from 'react-icons/fa';
import { useState } from 'react';

const LoginPage = () => {
  //const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <Row>
        <Col sm = {6} md = {6} lg = {9} xl = {9}>
            <img src={img1} height = "139%"></img>
        </Col>
        <Col style={{textAlign: "center", paddingRight:"5em"}} sm = {6} md = {6} lg = {3} xl = {3}>
            <h1 style={{marginLeft:"-5em", marginTop: "1em"}}>Sign in</h1>
            <FaUser style={{marginTop:"1em"}} fontSize='48px' color='orange'/>
            <form>
                <input
                    type='text'
                    placeholder='Email'
                    style={{
                        borderRadius: "25px",
                        width: "100%",
                        height: "40px",
                        marginTop: "4em",
                        border: "none",
                        backgroundColor: "#000000"
                    }}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='Password'
                    style={{
                        borderRadius: "25px",
                        width: "100%",
                        height: "40px",
                        marginTop: "1.5em",
                        border: "none",
                        backgroundColor: "#000000"

                    }}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <a href='/' style={{marginTop: "-1em"}}><span style={{marginLeft:"9em"}}> Forgot Password?</span></a>
                <input
                    type='checkbox'
                    style={{
                        color: "red",
                        marginTop: "2em",
                        marginLeft: "1em"
                    }}
                /><span>Remember me</span>
                <br></br>
                <button
                    style={{
                        backgroundColor:"orange",
                        height: "40px",
                        width: "35%",
                        borderRadius: "25px",
                        border: "none",
                        marginTop: "2em"
                    }}>
                    <span>Signin</span>
                </button>
                
            </form>
        </Col>
    </Row>
  )
}

export default LoginPage