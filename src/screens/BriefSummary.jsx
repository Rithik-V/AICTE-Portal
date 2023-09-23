import React from 'react'
import Header2 from '../components/Header2'
import img1 from '../images/Machine Learning.png'
import { Link } from 'react-router-dom'

const BriefSummary = () => {
  return (
    <>
        <Header2/>
        <h1>Brief Summary,</h1>
        <img src={img1} height={"100%"} width={"100%"}></img>
        <Link to = '/Curriculum'>
            <button
                    style={{
                        backgroundColor:"Red",
                        height: "40px",
                        width: "35%",
                        borderRadius: "25px",
                        border: "none",
                        marginTop: "2em",
                        color:"white"
                    }}>
                    <span>Continue to Curriculum</span>
                </button>
        </Link>
    </>
  )
}

export default BriefSummary