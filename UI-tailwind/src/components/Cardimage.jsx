import React from 'react'

const Cardimage = (props) => {
  return (
        <div className='h-full w-80 shrink-0 overflow-hidden rounded-4xl '>
          <img className='h-full w-full object-cover' src={props.data.img} alt='img not found'></img>
        </div>
      )
}

export default Cardimage
