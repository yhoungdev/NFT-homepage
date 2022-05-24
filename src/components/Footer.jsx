import React from 'react'
import {Box, Text, Button, Center} from '@chakra-ui/react'
function Footer() {
  return (
    <>
        <Box background={'black'} padding='4em 0' color={'white' } >
            <div className="container">
                
                <Center>
                <Box width={'50vw'}>
                    <Text className='title' fontSize={['1em','5em']} textAlign='center'>THANK YOU FOR ATTENTION</Text>
                </Box>
                </Center>

                <Box textAlign={'center'} marginTop='5em'>
                     <Button padding={'2em 4em'} border='3px solid black' background={'purple.800'} fontWeight='bolder' textAlign={'center'}>View on OpenSea</Button>
                </Box>
            </div>
        </Box>

    </>
  )
}

export default Footer