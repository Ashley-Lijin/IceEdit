'use client';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
 
const Navbar = ({navbars}) => {

  const [showMenu, setShowMenu] = useState(false);

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
    <header>    
      <div className='menu-bg'>
        <div className='res menu-pc'>

        <div className='logo-warp'>
            <img src="/art.png" className='img-warp' draggable='false'/>
            <h3 className='text-warp' >Ice Edit</h3>
          </div>

          <div className='res'>
          {nav.map(navabr => {
            return(
              <div className='nav-i-pc nav-item'>
                <Link href={navabr.navUrl}>{navabr.navItem}</Link>
              </div>
            )
          })}
          </div>
        </div>
      </div>

       {/* mob */}

      <div className='menu-bg menu-mob'>

          <div className='mob-head'>
            <div className='logo-warp'>
              <img src="/art.png" className='img-warp' draggable='false'/>
              <h3 className='text-warp' >Ice Edit</h3>
            </div>

            <div>
              <div>
                  {showMenu ? <AiOutlineClose className='burger-btn' size={25} onClick={() => setShowMenu(!showMenu)}/> : <AiOutlineMenu className='burger-btn' size={25} onClick={() => setShowMenu(!showMenu)}/>}
              </div>
            </div>
          </div>

          {showMenu && (
          <div className='nav-box'>
            <div className='nav-i'>
            {nav.map(navabr => {
              return(
                <div className='nav-i-mob nav-item'>
                  <Link href={navabr.navUrl}>{navabr.navItem}</Link>
                </div>
              )
            })}
            </div>
          </div>
          )}

      </div>
    </header>

  )
}

export default Navbar