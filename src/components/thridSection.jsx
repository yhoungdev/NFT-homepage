import React from 'react'
import { Box, Text, Flex, Button, Center, Avatar } from '@chakra-ui/react'
function Third() {
  const samples = [
    {
      name:'mic',
      url:'https://res.cloudinary.com/dhkccnvyn/image/upload/v1653411852/samples/6486_htjdxz.png'
    },
    {
      name:'mic',
      url:'https://res.cloudinary.com/dhkccnvyn/image/upload/v1653411677/samples/nft_tzir1s.gif'
    },
    
    {
      name:'mic',
      url:'https://res.cloudinary.com/dhkccnvyn/image/upload/v1653411674/samples/mBtNRxR6iO3T_3vGwqea4MeP_nZDrPX628cV1CdUmNk_dzvala.png'
    },
    {
      name:'mic',
      url:'https://res.cloudinary.com/dhkccnvyn/image/upload/v1653411673/samples/q7qr999YxfEZyZtxii-QHx90sx9WwTW47XyVGW-E6R0_j6utsy.png'
    },
    {
      name:'mic',
      url:'https://res.cloudinary.com/dhkccnvyn/image/upload/v1653411669/samples/ak_Q7m4hcbOjVkOrNh_H9AARA0f69LYcnBgLuU8u98I_xxx50b.png'
    }
    ,
    {
      name:'mic',
      url:'https://res.cloudinary.com/dhkccnvyn/image/upload/v1653411852/samples/6486_htjdxz.png'
    },
    {
      name:'mic',
      url:'https://res.cloudinary.com/dhkccnvyn/image/upload/v1653411677/samples/nft_tzir1s.gif'
    },
    {
      name:'mic',
      url:'https://res.cloudinary.com/dhkccnvyn/image/upload/v1653411852/samples/6486_htjdxz.png'
    },
    
    {
      name:'mic',
      url:'https://res.cloudinary.com/dhkccnvyn/image/upload/v1653411673/samples/q7qr999YxfEZyZtxii-QHx90sx9WwTW47XyVGW-E6R0_j6utsy.png'
    },
    {
      name:'mic',
      url:'https://res.cloudinary.com/dhkccnvyn/image/upload/v1653411669/samples/ak_Q7m4hcbOjVkOrNh_H9AARA0f69LYcnBgLuU8u98I_xxx50b.png'
    },
    {
      name:'mic',
      url:'https://res.cloudinary.com/dhkccnvyn/image/upload/v1653411852/samples/6486_htjdxz.png'
    },
    {
      name:'mic',
      url:'https://res.cloudinary.com/dhkccnvyn/image/upload/v1653411677/samples/nft_tzir1s.gif'
    },
  ]
  return (
    <>

<Box background={'purple.600'} height='110vh' padding={'5em 0'} position='relative'>
      <div className="container ">
       <Flex display={'flex'} justifyContent='center' alignContent={'center'} >
         
          <Box padding={'1em 2em'} position='relative'  borderRadius='1.5em' border={'5px solid black'} width={['100%','40vw']} background='whitesmoke'
          
          >
        
             <Text className='title' fontSize={'3em'} textAlign='left'>RARITY</Text>

             <Box margin={'3em 0'}>
                <Flex gap={'2'} overflow='hidden' flexWrap={'wrap'}>
                  {
                    samples.map ( item => {
                      return (
                        <img src={item.url} className='samples'/>
                      )
                    })
                  }
                </Flex>
             <Box>
               
            <Center>
                  <Box margin={'2em 0'}>
                   <Button background={'black'} color='white' padding={'1.5em 5em'}>View More </Button>
                  </Box>
            </Center>

             </Box>
          </Box>
          </Box>

      
       </Flex>
      </div>
    </Box>
    
    </>
  )
}

export default Third