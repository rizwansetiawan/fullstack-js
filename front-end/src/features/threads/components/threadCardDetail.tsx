
import { Box,Text,Avatar,Stack,Button,Image } from "@chakra-ui/react"
import { FaHeart } from "react-icons/fa";
import UseHooks from "../../../hooks/useHooks";
import { Link } from "react-router-dom";
import { useState } from "react";
// export interface ThreadCards {
//   id?:number;
//   user?:User;
//   image?:string;
//   content?:string;
//   posted?:string;
//   likeButton?:string;
//   repliesButton?:string;
// }
// export interface User{
//   fullName?:string;
//   userName?:string;
//   profil_picture?:string;
//   password?:string;
// }
export default function PageDetails(){

  const {threadDetail} = UseHooks();
  const [showImage,setImage] = useState<boolean>(true)


    return threadDetail ? (
        <>


        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Stack direction={'column'} spacing={0} fontSize={'sm'} w={"520px"}>
          <Link to={"/"}><Button w={"30px"} h={"26px"} mb={10} > back </Button></Link>
            <Box>
            
            <Avatar src= {threadDetail.user?.profil_picture} />
            <Text display={"inline"} fontWeight={500} ms={"10px"}> {threadDetail.user?.fullName} </Text>
            
            <Text display={"inline"}ms={"15px"} color={'gray.500'}> {threadDetail.posted} </Text>
            <Text display={"inline"} float={"right"} ms={"15px"} color={'gray.500'}> : </Text>
            </Box>
            <Text color={'gray.600'} mt={-6}  display={"inline"}ms={"60px"}>@ {threadDetail.user?.userName} </Text>
            <Text color={'gray.400'} ms={16} mt={6}> {threadDetail.content} </Text>
        {showImage && (
            <Image src={threadDetail.image} onError={()=>setImage(false)}
            mt={8} borderRadius={3}></Image>
            )}
            <Box display={"flex"}textAlign={"center"}  mt={8} gap={"80px"}>
        
            <Button bg={"cyan.400"} color={"white"} ><FaHeart/> {threadDetail.likeButton} </Button>
            <Button bg={"cyan.400"} color={"white"} > {threadDetail.repliesButton} Replies</Button>

            </Box>
          
          </Stack>
        </Stack>
        </>
    ) : (
      <h1>Gagal </h1>
    )

  }