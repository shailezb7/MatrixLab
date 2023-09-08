import React from 'react'
import token from '../Images/token.png';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'


const QToken = () => {
  return (
    <Box bg={'#390554'} color={'white'}  style={{position:'relative'}} width={'260px'} p={'10px'} borderRadius={'10px'}>
    <Heading mb={'5px'} size={'md'} >Quote Token</Heading>
    <Flex  mb={'5px'} pr={'40px'} justifyContent={'space-between'}>
       <Text>Name</Text>
       <Text>Etherium</Text>
    </Flex>
    <Flex justifyContent={'space-between'} mb={'5px'} pr={'40px'}>
       <Text>Symbol</Text>
       <Text>ETH</Text>
    </Flex>
    <Flex justifyContent={'space-between'}  pr={'40px'} mb={'5px'}>
       <Text>Address</Text>
       <Text>#7890</Text>
    </Flex>

    <Flex  justifyContent={'flex-end'}  mr={'-5px'} mt={'-10px'}>
    <Flex className='circle'
    borderRadius={'50%'} bg={'#960252'} width={'40px'} height={'40px'} p={'8px'}  >
             <Image src={token}   />
        </Flex>
    </Flex>
 </Box>
  )
}

export default QToken