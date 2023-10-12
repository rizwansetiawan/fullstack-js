import { Text ,Box} from "@chakra-ui/react";

import DotLoader from "react-spinners/DotLoader";

export function IsLoading(){
    // const navigateTo = useNavigate()
    return (
        <>
        {/* <Box w={"100%"} h={"100%"} bg={"gray.100"} > */}
        <Text ms={'600px'} mt={"200px"} >
        <DotLoader color="#000000"size={90}/>
        <DotLoader color="#00ece4" size={90}/>
        </Text>
        {/* </Box> */}
        </>
    )
}