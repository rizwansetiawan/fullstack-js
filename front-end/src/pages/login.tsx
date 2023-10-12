"use client";

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
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import AuthLogin from "../services/authLogin";
import { Link } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { handleChange, handleLogin } = AuthLogin();
  return (
    <Flex
      minH={"100vh"}
      mt={5}
      // align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack maxW={"lg"}>
        <Stack align={"left"} textAlign={"center"}>
          <Heading fontSize={"8xl"} fontFamily={"cursive"} color={"cyan.400"}>
            circLe
          </Heading>
          <Text fontSize={"lg"} mt={"-5"} color={"gray.600"}>
            login to circle
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          w={"400px"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={4}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel></FormLabel>
              <Input
                type="email"
                placeholder="Email address"
                name="email"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="password">
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  onChange={handleChange}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword: any) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Text color={"blue.400"}>Forgot password?</Text>
              </Stack>
              <Button
                onClick={handleLogin}
                bg={"cyan.600"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign in
              </Button>
              <Box display={"flex"} mt={"-5"} gap={2}>
                <Text textAlign={"center"}>Not have ready account ? </Text>
                <Link to={"/register"}>
                  {" "}
                  <Text
                    display={"flex"}
                    textAlign={"center"}
                    color={"blue.400"}
                    cursor={"pointer"}
                  >
                    {" "}
                    Sign up
                  </Text>
                </Link>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

