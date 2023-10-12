import {
  Box,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import {BiHomeCircle, BiLogOut} from "react-icons/bi"
import {CgProfile} from "react-icons/cg"
import {FiHeart} from "react-icons/fi"
import { useDispatch } from 'react-redux'
import { AUTH_LOGOUT } from '../stores/rootReducer'

import {TbUserSearch} from "react-icons/tb"
import { useNavigate } from "react-router-dom";
export default function NavSidebar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const Logout = ()=> {
    dispatch(AUTH_LOGOUT())
    navigate("/login")
    console.log(AUTH_LOGOUT, "ini logout")
  }
  return (
    <>
      <Box position={"fixed"}  h={"100vh"} w={"24%"}>
        <Heading fontFamily={"cursive"}  textAlign={"center"} color={"cyan.600"} fontSize={"6xl"}>
          circLe
        </Heading>
        <Box w={"90%"} ms={5} >
        <List spacing={10} mt={5} >
        <ListItem display={"flex"} >
            <ListIcon fontSize={"3xl"} as={BiHomeCircle}  />
           <Text fontSize={"xl"}>Home</Text> 
          </ListItem>
          <ListItem display={"flex"} >
            <ListIcon fontSize={"3xl"} as={TbUserSearch}  />
           <Text fontSize={"xl"}>Search</Text> 
          </ListItem>
          <ListItem display={"flex"} >
            <ListIcon fontSize={"3xl"} as={FiHeart}  />
           <Text fontSize={"xl"}>Follow</Text> 
          </ListItem>
          <ListItem display={"flex"} >
            <ListIcon fontSize={"3xl"} as={CgProfile}  />
           <Text fontSize={"xl"}>Profile</Text> 
          </ListItem>
          <ListItem textAlign={"center"} color={"white"} cursor={"pointer"} fontWeight={"bold"} py={2} bg={"cyan.600"} borderRadius={"xl"} >
          Create Post
          </ListItem>
          <ListItem display={"flex"} pos={"absolute"} cursor={"pointer"} onClick={Logout} bottom={0} mb={"5"} >
            <ListIcon fontSize={"3xl"} as={BiLogOut}  />
           <Text fontSize={"xl"}>Sign out</Text> 
          </ListItem>
        </List>
        </Box>
      </Box>
    </>
  );
}
