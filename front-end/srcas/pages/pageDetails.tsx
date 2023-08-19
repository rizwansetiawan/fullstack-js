import { Grid,GridItem } from "@chakra-ui/react"
import NavSideBar from "../layout/navSideBar";
import SideBarProfile from "../layout/sideBarProfile";
import FooterCard from "../layout/footer";
import SuggestedCard from "../layout/suggested";
import PageDetails from "../features/threads/components/threadCardDetail";

export default function RepliesPageDetails(){
    return(
        <>
    <Grid templateColumns="repeat(12,1fr)">

        <GridItem colSpan={3}>
        <NavSideBar/>
        </GridItem>

        <GridItem colSpan={5}>
        <PageDetails/>
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