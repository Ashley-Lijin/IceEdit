'use client';
import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { SocialIcon } from 'react-social-icons';

const Hero = () => {

    
  const [hero, setHero] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/api/hero")
      .then(res =>{
       setHero(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  console.log(hero);

  return (
    <div className='stage-cointainer'>
        {hero.map(H => {
            return(
                <div className='main hero'>
                    <div className='main'>
                        <div className='about'>
                            <div className='about-him gap-1'>
                                <h1 className='text-white'>{H.intro} </h1>
                                <h1 className='name'>{H.name}</h1>
                            </div>
                            <h1 className='text-white'>{H.youAre}</h1>
                        </div>
                        <div>
                            <img src={H.heroImg} className='hero-img-warp' />
                        </div>
                    </div>
                    <div className='button'>
                        <div className='btn'>
                            <SocialIcon fgColor='#3BBAC2' bgColor='transparent' url='https://www.youtube.com/' />
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Hero