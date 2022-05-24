import { Box, Text, Flex, Button, Center, Avatar } from '@chakra-ui/react'
import React from 'react'
import '../App.css'
function Ghost() {
  return (

    <Box background={'pink.200'} height='100vh' padding={'9em 0'}>
      <div className="container ">
       <Flex display={'flex'} justifyContent='center' alignContent={'center'} >
         
          <Box padding={'2em 2em'} position='relative' borderRadius='0.3em' border={'3px solid black'} width={['100%','40vw']} background='whitesmoke' data-aos="zoom-in">
            <Center>
              <Box position={['static','absolute']}>
                <Avatar height={'6em'} width='6em'/>
              </Box>
            </Center>
             <Text className='title' fontSize={'3em'} textAlign='center'>GET YOUR GHOSTS</Text>

             <Box>
            <Text textAlign={'center'}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, aut facilis deleniti fuga, eligendi unde voluptatibus voluptatum alias distinctio eveniet dolorum soluta, nisi earum quia fugiat dolorem maxime maiores. Beatae.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, aut facilis deleniti fuga, eligendi unde voluptatibus voluptatum alias distinctio eveniet dolorum soluta, nisi earum quia fugiat dolorem maxime maiores. Beatae.
            </Text>
            <Center>
            <Button p={'2em 4em'} background='red.300' color={'white'} margin='4em 0'>VIew On OpenSea</Button>
            </Center>
          </Box>
          </Box>

      
       </Flex>
      </div>
    </Box>
  )
}

export default Ghost