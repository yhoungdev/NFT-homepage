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
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
function Homepage() {
  return (
    <>
        <Box backgroundColor={'purple.400'} position='relative' top='0' h='100vh'>
             <Header/>
             <Hero/>
             <Ghost/>
             <Third/>
             <Fourth/>
             <Footer/>
        </Box>
    </>
  )
}

export default Homepage