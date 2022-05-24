import React from 'react'
import {
    Box,
    Flex,
    Text,
    UnorderedList,
    ListItem,
    Button
} from '@chakra-ui/react'

function Header() {
  return (
    <>
        <Flex justify={'center'} padding='1em'>
        <Box background='black' padding={'1em 3em'} color='white' borderRadius={'1em'}>
            <UnorderedList listStyleType={'none'} display='flex' gap={'8'}>
                <ListItem mt='2'>
                    <Text>Ghost</Text>
                </ListItem>

                <ListItem  mt='2'>
                    <Text>Ghost</Text>
                </ListItem>

                <ListItem  mt='2'>
                    <Text>Ghost</Text>
                </ListItem>
                <ListItem  mt='2'>
                    <Button backgroundColor={'red'}>Connect</Button>
                </ListItem>
            </UnorderedList>
        </Box>
        </Flex>
    </>
  )
}

export default Header