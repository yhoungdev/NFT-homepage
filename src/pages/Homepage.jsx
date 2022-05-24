import React from 'react'
import {
    Box,
    Container,
    Text
} from '@chakra-ui/react'
import Header from '../components/header'
import Hero from '../components/hero'
import Ghost from '../components/ghostSection'
function Homepage() {
  return (
    <>
        <Box backgroundColor={'purple.400'} position='relative' top='0' h='100vh'>
             <Header/>


             <Hero/>
             <Ghost/>
        </Box>
    </>
  )
}

export default Homepage