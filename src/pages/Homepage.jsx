import React from 'react'
import {
    Box,
    Container,
    Text
} from '@chakra-ui/react'
import Header from '../components/header'
import Hero from '../components/hero'
import Ghost from '../components/ghostSection'
import Third from '../components/thridSection'
import Fourth from '../components/fourthSection'
import Footer from '../components/Footer'
import { Parallax } from 'react-scroll-parallax'
// import { Parallax, ParallaxLayer } from '@react-spring/parallax'
function Homepage() {
  return (
    <>
      
            
             <Hero/>
             <Ghost/>
             <Parallax speed={'10'}>
                <Third/>
              </Parallax>
             <Fourth/>
             <Footer/>
      

    
    </>
  )
}

export default Homepage