import React from 'react'
import "./Leftbar.css"
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import vector from "../Images/vector.png"
import nef from "../Images/nef.png"
import socials from "../Images/socials.png"
import chrome from "../Images/chrome.png"
import link from "../Images/link.png"
const Leftbar = () => {
  return (
    <Box color={"white"}  ml={'-10px'}> 
    <Flex direction={'column'} className="main-left"  width={'100%'}>
    <Flex justifyContent={"space-around"} alignItems={"center"} flex={1} >
        <Image src={vector} p={"20px 5px 20px 5px"}  width={"15%"}></Image>
        <Image width={"100px"} ml={["-20px","-50","-70px"]} height={"40px"} pl={"20px"} src={nef} ></Image>

    </Flex>


    <Flex justifyContent={"space-around"} alignItems={"center"}
     flex={1} ml={"-20px"}>
    <Image   src={chrome} p={"20px 5px"}></Image>
    <Text>Token Address</Text>
    </Flex>

    <Flex justifyContent={"space-around"} alignItems={"center"} flex={1} ml={"-20px"}>
    <Image src={link} ml={"-5px"} p={"20px 5px"}></Image>
    <Text pl={"-15px"}>Pair Address</Text>
    </Flex>
    <Flex flex={4}> 
      
    </Flex>
    <Flex flex={1}>
     
        <Image height={"30px"} width={"140px"} ml={"40px"} src={socials}></Image>
    </Flex>
    <Flex flex={1} bg={"#F30050"}>
    
    </Flex>
    </Flex>
      
    </Box>
  )
}

export default Leftbar
