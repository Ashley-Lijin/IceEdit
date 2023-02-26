'use client';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { easeInOut, motion } from "framer-motion"
 
const Navbar = ({navbars}) => {

  const [showMenu, setShowMenu] = useState(false);

  const [nav, setnav] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/api/navbar")
      .then(res =>{
       setnav(res.data)
      })
      .catch(err => {
        console.log('err');
      })
  }, [])
  
  const [logo, setlogo] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/api/logo")
      .then(res =>{
        setlogo(res.data)
        console.log('logo')
      })
      .catch(err => {
        console.log('err');
      })
  }, [])

  return (
    <header>    
      <div className='menu-bg'>
        <div className='res menu-pc'>

          {logo.map(brand => {
            return(
              <motion.div initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} transition={{duration:0.5, easeInOut}} className='logo-warp'>
              <img src={brand.imgUrl} className='img-warp' draggable='false'/>
              <h3 className='text-warp'>{brand.Name}</h3>
            </motion.div>
            )
          })}

          <motion.div initial={{opacity:0,x:100}} whileInView={{opacity:1,x:0}} transition={{duration:0.5, easeInOut}}  className='res'>
          {nav.map(navabr => {
            return(
              <div className='nav-i-pc nav-item'>
                <Link href={navabr.navUrl}>{navabr.navItem}</Link>
              </div>
            )
          })}
          </motion.div>
        </div>
      </div>

       {/* mob */}

       <div className='menu-bg menu-mob'>

<div className='mob-head'>
  {logo.map(brand => {
    return(
      <motion.div initial={{opacity:0,x:-25}} whileInView={{opacity:1,x:0}} transition={{duration:0.5, easeInOut}} className='logo-warp'>
        <img src={brand.imgUrl} className='img-warp' draggable='false'/>
        <h3 className='text-warp' >{brand.Name}</h3>
      </motion.div>
    )
  })}

  <div>
    <motion.div initial={{opacity:0,x:25}} whileInView={{opacity:1,x:0}} transition={{duration:0.5, easeInOut}}>
        {showMenu ? <AiOutlineClose className='burger-btn' size={25} onClick={() => setShowMenu(!showMenu)}/> : <AiOutlineMenu className='burger-btn' size={25} onClick={() => setShowMenu(!showMenu)}/>}
    </motion.div>
  </div>
</div>

{showMenu && (
<motion.div initial={{opacity:0,y:-15}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}} className='nav-box'>
  <div className='nav-i'>
  {nav.map(navabr => {
    return(
      <div className='nav-i-mob nav-item'>
        <Link href={navabr.navUrl}>{navabr.navItem}</Link>
      </div>
    )
  })}
  </div>
</motion.div>
)}

</div>
    </header>

  )
}

export default Navbar