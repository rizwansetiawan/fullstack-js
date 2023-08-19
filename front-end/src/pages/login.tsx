'use client'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import AuthLogin from '../services/authLogin'

export default function Login() {
  const {handleChange,handleLogin} = AuthLogin()
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'left'}>
          <Heading fontSize={'4xl'}color={"cyan.400"}>circle</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            login to circle <Text color={'blue.400'}></Text> 
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>

            <FormControl id="email">
              <FormLabel></FormLabel>
              <Input type="email" placeholder='Email address' name='email' onChange={handleChange} />
            </FormControl>
            <FormControl id="password">
              <FormLabel></FormLabel>
              <Input type="password" placeholder='password' name='password' onChange={handleChange} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text color={'blue.400'}>Forgot password?</Text>
              </Stack>
              <Button onClick={handleLogin}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Login
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}