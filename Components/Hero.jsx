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

  const [soc, setSoc] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/api/socialMedia")
      .then(res =>{
       setSoc(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  console.log(soc);

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
                        {soc.map(socM => {
                            return(
                            <div className='btn'>
                                <SocialIcon fgColor='#3BBAC2' bgColor='transparent' url={socM.Url} />
                            </div>
                            )
                        })}
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Hero