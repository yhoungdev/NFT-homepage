import { Button, Container, Text, Box } from '@chakra-ui/react'

function Hero() {
  return (
    <div className="container" >
      <Box padding='3em 0' height={'82vh'}>
      <Text color='white' textAlign={'center'} className='font'>GHOST</Text>

        <Box textAlign={'center'} marginTop='5em'>
          <Button padding={'2em 4em'} border='3px solid black' background={'blue.300'} fontWeight='bolder' textAlign={'center'}>View on OpenSea</Button>
        </Box>
      </Box>
    </div>
  )
}

export default Hero