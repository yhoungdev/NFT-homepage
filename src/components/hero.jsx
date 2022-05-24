import { Button, Container, Text, Box, Center } from '@chakra-ui/react'

function Hero() {
  return (
    <div className="container" >
      
      <Box position={'absolute'} top='0' left={'0'} className='leave'>
        <img src='https://res.cloudinary.com/dhkccnvyn/image/upload/v1653408757/samples/leaf3_luzk2x.svg'  width={'50%'}/>  
      </Box>
      
          <Box padding='3em 0' height={'82vh'} position='relative' zIndex={'999'}>
      <Text color='white' textAlign={'center'} className='font' stroke={'1px solid black'} data-aos='fade-up'>GHOST</Text>

      <Center>
      <Box>
          <img src='https://res.cloudinary.com/dhkccnvyn/image/upload/v1653416824/download__2_-removebg-preview_1_dytewo.png' />
        </Box>
      </Center>
        <Box textAlign={'center'} marginTop='3em'>  
          <Button padding={'2em 4em'} border='3px solid black' background={'blue.300'} fontWeight='bolder' textAlign={'center'} 
            boxShadow='-5px 6px 2px black'
          >View on OpenSea</Button>
        </Box>
      </Box>
    </div>
  )
}

export default Hero