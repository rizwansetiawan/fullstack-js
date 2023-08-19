// import iThreadCard from "../features/threads/components/ThreadCard";
import UseHooks from "../hooks/useHooks";
import ContentCardPost from "./centerCardPost";

import CenterCardcontent from "./centerCardcontent";
export default function HomePage(){
    const {thread} = UseHooks()
    console.log(thread)
    return (
        <>

        <ContentCardPost/>

        {thread?.map((item,index)=>{
            return(
            < CenterCardcontent key={index} id={item.id} user={item.user} posted={item.posted} content={item.content} image={item.image} />
            )
        })}
        </>
    )
}