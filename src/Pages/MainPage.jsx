import { Box, Flex, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar.jsx'
import Info from '../Components/Info.jsx'
import QToken from '../Components/QToken.jsx'
import Price from '../Components/Price.jsx'
import BToken from '../Components/BToken.jsx'
import Leftbar from '../Components/Leftbar.jsx'


const MainPage = () => {
  return (
    <Flex justifyContent={'space-around'} style={{flex:5}}>
<Box width={'250px'}  >
   <Leftbar />
</Box>

<Box height={'100vh'}>
  <Navbar />
<SimpleGrid columns={4} gap={'10px'} >
        <Info/>
        <BToken/>
        <QToken/>
        <Price/>
        <Info/>
        <BToken/>
        <QToken/>
        <Price/>
        <Info/>
        <BToken/>
        <QToken/>
        <Price/>
        <Info/>
        <BToken/>
        <QToken/>
        <Price/>
    </SimpleGrid>
    </Box>
    </Flex>
  )
}

export default MainPage