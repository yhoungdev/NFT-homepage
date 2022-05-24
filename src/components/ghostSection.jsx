import { Box, Text, Flex, Button, Center, Avatar } from '@chakra-ui/react'
import React from 'react'
import '../App.css'
import Monkey from '../images/monkey.png'
function Ghost() {
  const nfts = [
    {
      name: 'Rarity',
      data:'fade-up-left',
      url:'https://res.cloudinary.com/dhkccnvyn/image/upload/v1653408755/samples/ak_Q7m4hcbOjVkOrNh_H9AARA0f69LYcnBgLuU8u98I-removebg-preview_t9jteb.png'
    },
    {
      name: 'Rarity',
      data:'fade-up-right',
      url:'https://res.cloudinary.com/dhkccnvyn/image/upload/v1653408745/samples/k8we9m48PiQ8mm9HVY3xWCHKpDCL_vScxQqX-5SO5bs-removebg-preview_nus6ki.png'
    },
    {
      name: 'Rarity',
      data:'zoom-in',
      url:'https://res.cloudinary.com/dhkccnvyn/image/upload/v1653408753/samples/mBtNRxR6iO3T_3vGwqea4MeP_nZDrPX628cV1CdUmNk-removebg-preview_biw83r.png'
    },
    {
      name: 'Rarity',
      data:'fade-up-right',
      url:'https://res.cloudinary.com/dhkccnvyn/image/upload/v1653408751/samples/q7qr999YxfEZyZtxii-QHx90sx9WwTW47XyVGW-E6R0-removebg-preview_jvwyah.png'
    },
    {
      name: 'Rarity',
      data:'zoom-in',
      url:'https://res.cloudinary.com/dhkccnvyn/image/upload/v1653408753/samples/mBtNRxR6iO3T_3vGwqea4MeP_nZDrPX628cV1CdUmNk-removebg-preview_biw83r.png'
    },
    {
      name: 'Rarity',
      data:'fade-up-right',
      url:'https://res.cloudinary.com/dhkccnvyn/image/upload/v1653408751/samples/q7qr999YxfEZyZtxii-QHx90sx9WwTW47XyVGW-E6R0-removebg-preview_jvwyah.png'
    },
    {
      name: 'Rarity',
      data:'zoom-in',
      url:'https://res.cloudinary.com/dhkccnvyn/image/upload/v1653408753/samples/mBtNRxR6iO3T_3vGwqea4MeP_nZDrPX628cV1CdUmNk-removebg-preview_biw83r.png'
    },
    {
      name: 'Rarity',
      data:'fade-up-right',
      url:'https://res.cloudinary.com/dhkccnvyn/image/upload/v1653408751/samples/q7qr999YxfEZyZtxii-QHx90sx9WwTW47XyVGW-E6R0-removebg-preview_jvwyah.png'
    },
    {
      name: 'Rarity',
      data:'zoom-in',
      url:'https://res.cloudinary.com/dhkccnvyn/image/upload/v1653408753/samples/mBtNRxR6iO3T_3vGwqea4MeP_nZDrPX628cV1CdUmNk-removebg-preview_biw83r.png'
    },
    {
      name: 'Rarity',
      data:'fade-up-right',
      url:'https://res.cloudinary.com/dhkccnvyn/image/upload/v1653408751/samples/q7qr999YxfEZyZtxii-QHx90sx9WwTW47XyVGW-E6R0-removebg-preview_jvwyah.png'
    }
  ]
  return (

    <Box background={'pink.200'} padding={'9em 0'} position='relative' data-aos='fade-up'>
      <div className="container ">
       <Flex display={['column','flex']} gap='1em' justifyContent='center' alignContent={'center'} >
         
          <Box padding={'2em 1em'} position='relative' borderRadius='1em' border={'4px solid black'} width={['100%','40vw']} background='whitesmoke' data-aos="zoom-in">
            <Center>
              <Box position={['static','absolute']}>
                <Avatar height={'6em'} width='6em' src={Monkey}/>
              </Box>
            </Center>

            

             <Box marginTop={['1em ', '5em ']}>
             <Text className='title' fontSize={'2.5em'} textAlign='center'>GET YOUR GHOSTS</Text>
            <Text textAlign={'center'} className='text-font'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, aut facilis deleniti fuga, eligendi unde voluptatibus voluptatum alias distinctio eveniet dolorum soluta, nisi earum quia fugiat dolorem maxime maiores. Beatae.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, aut facilis deleniti fuga, eligendi unde voluptatibus voluptatum alias distinctio eveniet dolorum soluta, nisi earum quia fugiat dolorem maxime maiores. Beatae.
            </Text>
            <Center>
            <Button   boxShadow='-5px 6px 2px black' p={'2em 4em'} background='red.300' color={'white'} margin='4em 0'>VIew On OpenSea</Button>
            </Center>
          </Box>
          </Box>

          {/* second section for box */}
          <Box padding={'2em 1em'} marginTop={['1em','0']} position='relative' borderRadius='1em' border={'4px solid black'} width={['100%','40vw']} background='whitesmoke' data-aos="zoom-in">
            <Center>
              <Box position={['static','absolute']}>
                <Avatar height={'6em'} width='6em' src={Monkey}/>
              </Box>
            </Center>

            

             <Box marginTop={['1em ', '5em ']} >
             <Text className='title' fontSize={'2.5em'} textAlign='center'>GET YOUR GHOSTS</Text>
            <Text textAlign={'center'} className='text-font'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, aut facilis deleniti fuga, eligendi unde voluptatibus voluptatum alias distinctio eveniet dolorum soluta, nisi earum quia fugiat dolorem maxime maiores. Beatae.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, aut facilis deleniti fuga, eligendi unde voluptatibus voluptatum alias distinctio eveniet dolorum soluta, nisi earum quia fugiat dolorem maxime maiores. Beatae.
            </Text>
            <Center>
            <Button   boxShadow='-5px 6px 2px black' p={'2em 4em'} background='red.300' color={'white'} margin='4em 0'>VIew On OpenSea</Button>
            </Center>
          </Box>
          </Box>

      

      
       </Flex>
      </div>

      <Box position={'absolute'} bottom='-20' className='move'>

          <Flex justifyContent={'center'}>
          {
            nfts.map( item => {
              return (
                <>
                  <img src={item.url}  data-aos='zoom-in' width={'10%'}/>
                </>
              )
            })
          }
          </Flex>

          <Flex>
          {
            nfts.map( item => {
              return (
                <>
                  <img src={item.url}  data-aos={item.data} width='10%'/>
                </>
              )
            })
          }
          </Flex>

      </Box>
    </Box>
  )
}

export default Ghost