'use client';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link';

const Navbar = ({navbars}) => {

  const [nav, setnav] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/api/navbar")
      .then(res =>{
        setnav(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
  
console.log(nav);
  return (
    <div className='flex items-center justify-between max-h-12 w-[95%] mx-auto'>

      <div className='flex items-center'>
        <img src="/art.png" className='h-[50px] w-[50px]' draggable='false'/>
        <h3 className='text-[24px] font-semibold' >Ice Edit</h3>
      </div>

      <div className='flex'>
      {nav.map(navabr => {
        return(
          <div className='px-3 text-[18px] font-semibold'>
            <Link href={navabr.navUrl}>{navabr.navItem}</Link>
          </div>
        )
      })}
      </div>
      
    </div>
  )
}

export default Navbar