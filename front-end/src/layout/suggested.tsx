
'use client'
import {
  Avatar,
  Box,
  Center,
  Text,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'

export default function SocialProfileWithImage2() {
  return (
    <Center py={6} >
      <Box
        maxW={'370px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
       <Box w={"60%"} h={"100%"} paddingBottom={10} bg={"transparent"} ms={4}>
        <Text fontSize={18} mb={9}>suggested For You</Text>
         
        <Box display={"flex"} mt={8} w={"300px"}h={"100%"}>
        <Avatar src="image.jpg" />
        <Text fontSize={16} ms={2}>jamal </Text>
        <Text textAlign={"end"}> <Button ms={"100%"} bg={"cyan.400"} color={"white"}colorScheme={"blue"}>follow</Button> </Text>
        </Box>
         <Text fontSize={12} ms={14}mt={-6}>@jamal </Text>

       </Box>
      </Box>
    </Center>
  )
}
