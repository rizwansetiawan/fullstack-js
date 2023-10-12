
'use client'

import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import { rootState } from '../stores/types/rootState';

export interface ThreadCards {
  id?:number;
  user?:User;
  image?:string;
  content?:string;
  posted?:string;
  likeButton?:string;
  repliesButton?:string;
}
export interface User{
  fullName?:string;
  userName?:string;
  profil_picture?:string;
  password?:string;
}
export default function SideBarProfile() {
  const auth = useSelector((state:rootState)=>state.auth)
  return (
    <Center py={6} >
      <Box
        maxW={'370px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'120px'}
          w={'full'}
          src={
            'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
          }
          objectFit="cover"
          alt="#"
        />
        <Flex justify={'left'} ms={5} mt={-12}> 
          <Avatar
            size={'xl'}
            src={auth.profil_picture}
            css={{
              border: '2px solid white',
            }}
          />
            <Button bg={"cyan.400"} mt={16} ms={16} color={"white"}>edit profile</Button>
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'left'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              {auth.fullName}
            </Heading>
            <Text color={'gray.500'} fontSize={"12px"}>@{auth.userName}</Text>
            <Text color={'gray.900'} fontSize={"12px"}>lorem ipsum dolor sit amet some quick and slice</Text>
            <Text color={'gray.900'} fontSize={"12px"}mt={4} display={"flex"}gap={6}>491 Following
            <Text color={'gray.900'} fontSize={"12px"}>290 Follower</Text>
            </Text>

          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            
          </Stack>
        </Box>
        
      </Box>
    </Center>
  )
}
