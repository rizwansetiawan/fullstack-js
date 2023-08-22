import { FaImage } from 'react-icons/fa';
import UseHooks from '../hooks/useHooks';
import { Stack,Box,Avatar,Input,FormControl,Button,Text,FormLabel } from "@chakra-ui/react"
export default function ContentCardPost () {
  const {fecthCreatePost,handleImageChange,handleContentChange} = UseHooks();
    return (
        <>
    <Stack direction={'column'} spacing={0} mb={14} fontSize={'sm'} >
      <Text fontSize={"2xl"} mt={6} >Home</Text>
            <Box mt={"20px"} display={"flex"}>
            <Avatar src={'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            } display={"flex"}  />
            <form onSubmit={fecthCreatePost} encType='multipart/form-data' >
            
            <Input name='content' onChange={handleContentChange} type='text' w={"280px"} placeholder="what happen ..." border={"none"} ms={2} ></Input>
            <FormLabel display={'inline'} cursor={"pointer"} >
            <Input  name='image' onChange={handleImageChange} w={"390px"} type="file" placeholder="image" width={"1px"} bg={"transparent"} hidden color={"transparent"} border={"none"} display={"inline"}>
            </Input>
            <Button zIndex={-10} cursor={"pointer"} bg={"transparent"} > <FaImage cursor={"pointer"} color={"grey"} fontSize={28} /> </Button>
            </FormLabel>
            <Button bg={"cyan.400"} colorScheme='blue' ms={6} type="submit" color={"white"} display={"inline"} >post</Button>

            <FormControl id="image" display={"flex"}>
              <Box display={"flex"}>
             <FormLabel display={"flex"}> 
            {/* <Input  name='image' onChange={handleImageChange} w={"390px"} type="file" placeholder="image" width={"1px"} bg={"transparent"} hidden color={"transparent"} border={"none"} display={"inline"}>
            </Input> */}

            </FormLabel>
            
            </Box>
            </FormControl>

            
            </form>
            </Box>
            
          </Stack>
          </>
    )
}