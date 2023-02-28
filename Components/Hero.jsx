'use client';
import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"

const Hero = () => {

    
  const [hero, setHero] = useState([])

  useEffect(() => {
    axios.get("/api/hero")
      .then(res =>{
       setHero(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  const [soc, setSoc] = useState([])

  useEffect(() => {
    axios.get("/api/socialMedia")
      .then(res =>{
       setSoc(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <div className='stage-cointainer'>
        {hero.map(H => {
            return(
                <div className='main hero'>
                    <div className='main'>
                        <motion.div initial={{opacity:0,y:-100}} whileInView={{opacity:1,y:0}} transition={{duration:0.7}} className='about'>
                            <div className='about-him gap-1'>
                                <h1 key={hero._id} className='text-white'>{H.intro} </h1>
                                <h1 key={hero._id} className='name'>{H.name}</h1>
                            </div>
                            <h1 key={hero._id} className='text-white'>{H.youAre}</h1>
                        </motion.div>
                        <motion.div initial={{opacity:0,y:-100}} whileInView={{opacity:1,y:0}} transition={{duration:0.9}} >
                            <img key={hero._id} src={H.heroImg} className='hero-img-warp' />
                        </motion.div>
                    </div>

                    <motion.div initial={{opacity:0,y:25,rotatex:180}} whileInView={{opacity:1,y:0,rotatex:0}}transition={{duration:1.3 ,delay:0.3}} className='button'>
                        {soc.map(socM => {
                            return(
                            <div className='btn'>
                                <SocialIcon fgColor='#3BBAC2' bgColor='transparent' key={socM._id} url={socM.Url} />
                            </div>
                            )
                        })}
                    </motion.div>

                </div>
            )
        })}
    </div>
  )
}

export default Hero