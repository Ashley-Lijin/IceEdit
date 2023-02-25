import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='flex items-center'>
        <img src="/art.png" className='h-[50px] w-[50px]' draggable='false'/>
        <h3 className='text-[24px] font-semibold' >Ice Edit</h3>
      </div>
      <div>
        <h3></h3>
      </div>
    </div>
  )
}

export default Navbar