import React from 'react'
import {Box, Text, Flex, Button} from '@chakra-ui/react'
import Nft from '../images/nft.gif'
function Fourth() {
  return (
    <>

        <Box background={'green.300'} padding='10em 0' height={'100vh'}>
             <div className="container">

                  <Flex flexDirection={['column','row']}>
                  <Box data-aos='fade-up-right' width={['100%', '60%']}>
                       <Text className='title' fontSize={'2em'}>Whats on Your Mind</Text>
                        <Text pr='5em'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum rerum voluptatibus ipsum omnis. Numquam inventore, totam laudantium odit nemo nisi quia repellendus exercitationem esse consequatur, sint impedit ipsum aspernatur. Obcaecati.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, illum dignissimos doloremque et reprehenderit, dolore accusamus error facilis ullam consequatur odit. Quo at nulla quidem commodi, culpa laborum. Voluptates, consequuntur.
                        </Text>
                        <Box margin={'2em 0'}>
                          <Button padding={'2em 2em'} background='black' color={'white'}>View on OpenSea</Button>
                        </Box>
                   </Box>

                   <Box  width={['100%', '50%']}>
                       <img src={Nft} className='nft' data-aos='fade-up-left'/>
                   </Box>
                  </Flex>

            
            </div>
        </Box>

        
    
    </>
  )
}

export default Fourth