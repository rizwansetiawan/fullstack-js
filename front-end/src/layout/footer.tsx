import { Box,Text } from "@chakra-ui/react";

export default function FooterCard(){
    return (
        <>
        <Box float={"right"}me={10}>

          <Box fontSize={16} w={"375px"}h={"50px"}  bg={"gray.100"} borderRadius={6}boxShadow={"2xl"}>
            <Text ms={4}>Developed By Marko</Text>
            <Text ms={4}>powered By Dumbways #coding</Text>

            </Box>
          </Box>
        </>
    )
} 