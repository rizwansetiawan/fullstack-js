
import { Box,Text,Avatar,Stack,Button,Image } from "@chakra-ui/react"
import { FaHeart } from "react-icons/fa";
import UseHooks from "../../../hooks/useHooks";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BsFillArrowLeftCircleFill,} from "react-icons/bs";
import { PiShareFatBold } from "react-icons/pi";
import moment from "moment";
import { HiEllipsisVertical } from "react-icons/hi2";
import { BiCommentDetail } from "react-icons/bi";
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
  const [like,setLike] = useState(0)
      const [isLike,setIsLike] = useState(false) 

      const LikeButton = ()=>{
        setLike(like+(isLike ? -1 : 1))
        setIsLike(!isLike)
      }


    return threadDetail ? (
        <>

      
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Stack direction={'column'} spacing={0} fontSize={'sm'} w={"520px"}>
          <Link to={"/"}> <Button bg={"gray.200"} h={"30px"} mb={"20px"} > <BsFillArrowLeftCircleFill color={"gray"} /> </Button> </Link>
            <Box>
            
            <Avatar src= {threadDetail.user?.profil_picture} />
            <Text display={"inline"} fontWeight={500} ms={"10px"}> {threadDetail.user?.fullName} </Text>
            
            <Text display={"inline"}ms={"15px"} color={'gray.500'}> {moment(threadDetail.posted).startOf("minute").fromNow()} </Text>
            <Text display={"inline"} float={"right"} ms={"15px"} color={'gray.500'}> <HiEllipsisVertical fontSize={"30px"} cursor={"pointer"} /> </Text>
            </Box>
            <Text color={'gray.600'} mt={-6}  display={"inline"}ms={"60px"}>@ {threadDetail.user?.userName} </Text>
            <Text color={'gray.400'} ms={16} mt={6}> {threadDetail.content} </Text>
        {showImage && (
            <Image src={threadDetail.image} onError={()=>setImage(false)}
            mt={8} borderRadius={3}></Image>
            )}
            <Box display={"flex"}textAlign={"center"}  mt={8} gap={"80px"}>
        
            <Box display={"flex"}textAlign={"center"} mt={3} ms={"60px"} mb={8} gap={"76px"}>
            <Button onClick={LikeButton}> {like} <FaHeart color={isLike ? "red": "gray"}/>{threadDetail?.likeButton} </Button>
            <Button display={"flex"} gap={'10px'} > {threadDetail?.repliesButton} <BiCommentDetail display={"flex"} gap={"10px"} /> replies</Button>
            <Button display={"flex"} gap={"10px"} > share <PiShareFatBold/> </Button>
            </Box>

            </Box>
          
          </Stack>
        </Stack>
        </>
    ) : (
      <h1>Gagal </h1>
    )

  }