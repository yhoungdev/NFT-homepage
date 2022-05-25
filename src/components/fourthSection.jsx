import React from 'react'
import {Box, Text, Flex, Button} from '@chakra-ui/react'
import Nft from '../images/nft.gif'
function Fourth() {
  return (
    <>

        <Box background={'green.300'} padding='10em 0'  backgroundImage='https://res.cloudinary.com/dhkccnvyn/image/upload/v1653478854/samples/bg_ueyolu.svg'>
             <div className="container">

                  <Flex flexDirection={['column','row']}>
                  <Box  width={['100%', '60%']}>
                       <Text className='title' fontSize={'2em'} textAlign={['center', 'left']} marginBottom='1em' data-aos='fade-up-down'>Whats on Your Mind</Text>
                        <Text pr={['0','5em']} textAlign={['center','left']} data-aos='fade-up' className='text-font'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum rerum voluptatibus ipsum omnis. Numquam inventore, totam laudantium odit nemo nisi quia repellendus exercitationem esse consequatur, sint impedit ipsum aspernatur. Obcaecati.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, illum dignissimos doloremque et reprehenderit, dolore accusamus error facilis ullam consequatur odit. Quo at nulla quidem commodi, culpa laborum. Voluptates, consequuntur.
                        </Text>
                        <Box margin={'2em 0'}>
                          <Flex justifyContent={['center','left']}>
                           <Button   boxShadow='-5px 6px 2px black' padding={'2em 2em'} background='black' color={'white'} data-aos='zoom-out-up' data-aos-duration='5000'>View on OpenSea</Button>
                          </Flex>
                        </Box>
                   </Box>

                   <Box  width={['100%', '50%']}>
                       <img src={Nft} className='nft' data-aos='fade-up-right'/>
                   </Box>
                  </Flex>

            
            </div>
        </Box>

        
    
    </>
  )
}

export default Fourth