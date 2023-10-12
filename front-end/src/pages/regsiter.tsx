'use client'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import AuthRegister from '../services/authRegister'

export default function Reister() {
  const [showPassword, setShowPassword] = useState(false)
  const {handleChange,handleRegister} = AuthRegister()
  return (
    <Flex
      minH={'100vh'}
      // align={'center'}
      mt={5}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack  maxW={'lg'} >
        <Stack align={'center'}>
          <Heading fontSize={'8xl'} fontFamily={"cursive"} color={"cyan.400"}>
            circLe
          </Heading>
          <Text fontSize={'lg'} mt={"-5"} color={'gray.600'}>
            create account circle
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={4}
          w={"400px"}
          >
          
          <Stack spacing={4}>
          <FormControl id="fullname" >
              <FormLabel></FormLabel>
              <Input type="text" placeholder='fullname' name='fullName' onChange={handleChange}/>
            </FormControl>
            <FormControl id="username">
              <FormLabel></FormLabel>
              <Input type="text" placeholder='@username' name="userName" onChange={handleChange} />
            </FormControl>
            <FormControl id="email" >
              <FormLabel></FormLabel>
              <Input type="email" placeholder='email' name="email" onChange={handleChange}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel></FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} placeholder='password' name="password" onChange={handleChange} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button onClick={handleRegister}
                loadingText="Submitting"
                size="lg"
                bg={'cyan.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Create Account
              </Button>
            </Stack>
            <Stack >
              <Text align={'left'}>
                Already have account? <Link to={'/login'}>
               <Text display={"inline"} color={"blue.600"}> Sign in</Text>
                  </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}