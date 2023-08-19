import { FaImage } from 'react-icons/fa';
import UseHooks from '../hooks/useHooks';
import { Stack,Box,Avatar,Input,FormControl,Button,Text,FormLabel } from "@chakra-ui/react"
export default function ContentCardPost () {
  const {fecthCreatePost,formData,handleChange} = UseHooks();
    return (
        <>
    <Stack direction={'column'} spacing={0} mb={14} fontSize={'sm'} >
      <Text fontSize={"2xl"} mt={6} >Home</Text>
            <Box mt={"20px"} display={"flex"}>
            <Avatar src={'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            } display={"flex"}  />
            <form onSubmit={fecthCreatePost}>
            <Input name='content' onChange={handleChange} value={formData.content} type='text' w={"310px"} placeholder="what happen ..." border={"none"} ms={2} ></Input>
            
            <FormControl id="image" display={"inline"}>
             <FormLabel display={"inline"}> img 
            <Input  name='image'onChange={handleChange} value={formData.image} w={"390px"} type="file" placeholder="image" width={"1px"} bg={"transparent"} hidden color={"transparent"} border={"none"} display={"inline"}>
            </Input>
            </FormLabel>
            <Button bg={"cyan.400"} colorScheme='blue' ms={6} type="submit" color={"white"} display={"inline"} >post</Button>

            </FormControl>

            
            </form>
            </Box>
            
          </Stack>
          </>
    )
}