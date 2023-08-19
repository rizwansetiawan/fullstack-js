import { Grid,GridItem } from "@chakra-ui/react"
import NavSideBar from "../layout/navSideBar";
import SideBarProfile from "../layout/sideBarProfile";
import FooterCard from "../layout/footer";
import SuggestedCard from "../layout/suggested";
import HomePage from "../layout/homePage";
export default function IndexPage(){
    return(
        <>
    <Grid templateColumns="repeat(12,1fr)">

        <GridItem colSpan={3}>
        <NavSideBar/>
        </GridItem>

        <GridItem colSpan={5}>
        <HomePage/>
        </GridItem>
        
        <GridItem colSpan={4}>
        <SideBarProfile/>
        <SuggestedCard/>
        <FooterCard/>
        </GridItem>

    </Grid>
        </>
    )
}