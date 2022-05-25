import { Button, Container, Text, Box, Center } from '@chakra-ui/react'
import Header from './header';

function Hero() {
  return (
  
    <Box backgroundColor={'blue.100'} backgroundImage='https://res.cloudinary.com/dhkccnvyn/image/upload/v1653483162/samples/unsplash_U6WvLJU0l6o-removebg-preview_mbizq0.png' backgroundRepeat={'no-repeat'} backgroundPosition='bottom' backgroundSize={'cover'} >
        <Header/>
        <Box className="container"  position='relative' zIndex={'999'} backgroundColor='' >
      
      <Box position={'absolute'} top='0' left={'0'} className='leave' >
        <img src='https://res.cloudinary.com/dhkccnvyn/image/upload/v1653478395/samples/emojione-v1_globe-showing-europe-africa_eizwr3.svg'  width={'50%'}/>  
      </Box>
      
     <Box padding='3em 0'   >
      <Text color='white' textAlign={'center'} className='font' stroke={'1px solid black'} data-aos='fade-up'>GHOST</Text>

      <Center>
      <Box>
          <img src='https://res.cloudinary.com/dhkccnvyn/image/upload/v1653416824/download__2_-removebg-preview_1_dytewo.png' />
        </Box>
      </Center>
        <Box textAlign={'center'} marginTop='3em'>  
          <Button padding={'2em 4em'} border='3px solid black' background={'blue.300'}  fontWeight='bolder' textAlign={'center'} 
            boxShadow='-5px 6px 2px black'
          >View on OpenSea</Button>
        </Box>
      </Box>
    </Box>
    </Box>
  )
}

export default Hero