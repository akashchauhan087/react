import React from 'react'

const Navbar = () => {
  return (
    <div className='h-full text-white flex'>
      <div className='h-full w-1/2 px-4 flex items-center'> Navbar </div>
      <div className='h-full w-1/2 px-4 flex items-center justify-end gap-6'>
        <div> Home </div>
        <div> About </div>
        <div> Contact </div>
        <div> Query </div>
      </div>
    </div>
  )
}

export default Navbar
