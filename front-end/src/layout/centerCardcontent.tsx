import { Stack,Box,Avatar,Text,Button,Image} from "@chakra-ui/react";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

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
export default function CenterCardcontent(props:ThreadCards){

      const [showImage,setImage] = useState<boolean>(true)


    return(
        <>
        <Stack mt={0} direction={'row'} spacing={4} align={'center'} w={"100%"} >
          <Stack direction={'column'} spacing={0} fontSize={'sm'} w={"510px"}>
  
            <Box>
            
            <Avatar src= {props.user?.profil_picture} />
            <Text display={"inline"} ms={"10px"}> {props.user?.fullName} </Text>
            <Text display={"inline"}ms={"15px"} color={'gray.500'}>@{props.user?.userName}</Text>
            <Text display={"inline"}ms={"15px"} color={'gray.500'}> {props?.posted} </Text>
            </Box>
            <Text marginStart={"60px"} color={'gray.600'} mt={-6}> {props?.content} </Text>
        {showImage && (
             <Image  w={"80%"} h={"100%"} ms={"60px"} borderRadius={3} src={props.image} onError={()=>setImage(false)}></Image>
        )}
            <Box display={"flex"}textAlign={"center"} mt={3} ms={"60px"} mb={8} gap={"30px"}>
            <Button><FaHeart/> {props?.likeButton} </Button>
            <Link to={"/detail/"+props.id}> <Button>    {props?.repliesButton} Replies</Button></Link>

            </Box>
          
          </Stack>
        </Stack>
        </>
    )
}