import React from 'react'
import {
    Box,
    Flex,
    Text,
    UnorderedList,
    ListItem,
    Button
} from '@chakra-ui/react'

import {GoThreeBars} from 'react-icons/go'

function Header() {
  return (
    <>
          <Box display={['none','block']}>
          <Flex justify={'center'} padding='1em' >
            <Box background='black' padding={'1em 3em'} color='white' borderRadius={'1em'}>
                <UnorderedList listStyleType={'none'} display='flex' gap={'8'}>
                    <ListItem mt='2'>
                        <Text>Ghost</Text>
                    </ListItem>

                    <ListItem  mt='2'>
                        <Text>Market</Text>
                    </ListItem>

                    <ListItem  mt='2'>
                        <Text>Collections</Text>
                    </ListItem>
                    <ListItem  mt='2'>
                        <Button backgroundColor={'red'}>Connect</Button>
                    </ListItem>
                </UnorderedList>
        </Box>
        </Flex>
          </Box>

         <Box display={['block','none']} padding='1em 2em' alignItems={'center'} alignContent='center'>
            <Flex justify={'space-between'}>
                <Box padding={'0.7em'} borderRadius='6px' className='bar' color={'white'}>
                    <GoThreeBars/>
                </Box>

                <Box>
                 <Button backgroundColor={'red'} color='white'>Connect</Button>
                </Box>

            </Flex>
        </Box>
    </>
  )
}

export default Header