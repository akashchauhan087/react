import React from 'react'
import Navbar from './Navbar'
import Card from './Card'

const Section1 = (props) => {
  return (
    <div>
        <Navbar />
        <Card data={props.users}/>
    </div>
  )
}

export default Section1
