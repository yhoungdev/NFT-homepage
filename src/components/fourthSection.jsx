import React from 'react'
import {Box, Text, Flex} from '@chakra-ui/react'
function Fourth() {
  return (
    <>

        <Box background={'green.300'} padding='10em 0' height={'100vh'}>
             <div className="container">

                  <Flex>
                  <Box>
                       <Text className='title' fontSize={'2em'}>Whats on Your Mind</Text>
                        <Text pr='5em'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum rerum voluptatibus ipsum omnis. Numquam inventore, totam laudantium odit nemo nisi quia repellendus exercitationem esse consequatur, sint impedit ipsum aspernatur. Obcaecati.
                        </Text>
                   </Box>

                   <Box>
                       <Text className='title' fontSize={'2em'}>Whats on Your Mind</Text>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum rerum voluptatibus ipsum omnis. Numquam inventore, totam laudantium odit nemo nisi quia repellendus exercitationem esse consequatur, sint impedit ipsum aspernatur. Obcaecati.
                        </Text>
                   </Box>
                  </Flex>

            
            </div>
        </Box>

        
    
    </>
  )
}

export default Fourth