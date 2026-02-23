import React from 'react'
import Top from "./Top";
import Cardimage from './Cardimage';

const Card = (props) => {
  return (
    <div className='h-full w-full'>
      <Top />
      <div id='card-img-id' className="h-full w-full flex p-4 gap-4 overflow-x-auto">
        { props.data.map(function(elem, i) {
          return <Cardimage id={i}  data={elem}/>
        })}
      </div>
    </div>
  )
}

export default Card
