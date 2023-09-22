import React from 'react'
import Header2 from '../components/Header2'
import img1 from '../images/Machine Learning.png'

const BriefSummary = () => {
  return (
    <>
        <Header2/>
        <h1>Brief Summary,</h1>
        <img src={img1} height={"100%"} width={"100%"}></img>
    </>
  )
}

export default BriefSummary