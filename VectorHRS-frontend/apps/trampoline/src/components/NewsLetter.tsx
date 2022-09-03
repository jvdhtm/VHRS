import { Flex,Image,Badge, Heading } from "@chakra-ui/react"
import { StarIcon} from '@chakra-ui/icons';
import resources from "@vhrs/resources";
import { definitions } from "@vhrs/models";
import { Inewsletter } from "@vhrs/resources/types/context";
import { FC, useContext, useEffect } from "react";
import VIcon from "./VIcon";
import VList from "./Lists";
import {toNumber} from "../util/utils";
import { Link } from 'react-router-dom';

const News: FC<definitions["NewsLetter"]> = (props:definitions["NewsLetter"]) =>{
    const link  = `/news/${props.id}`
    const fallbackSrc  = `https://picsum.photos/seed/${props.id}/150/150`
    return <>
               
                <Link to={link} >
                    {}
                    <Flex w='100%' p={4} color='white' alignItems='center' position={"relative"} borderBottom={"thin solid var(--borderColor)"}>
                        <Badge ml='1' width={"2rem"} display={"flex"} alignItems={"center"} justifyContent={"center"} height={"2rem"} background={'var(--secondary)'} position={"absolute"} top={"1rem"} left={"0.75rem"}>
                         <VIcon color="white" fontSize="1rem" icon="ri-newspaper-fill"></VIcon>
                        </Badge>50
                        <Image  src={fallbackSrc} />
                        <Heading as='h3' size='sm' noOfLines={1}>
                            {props.name ? props.name : ""}
                    </Heading>
                   </Flex>
                </Link>
           </>
}


const NewsList:FC = ()=>{
    const { newsletterData, next } = useContext<Inewsletter>(resources.contexts.NewsletterContext);
    const {  newsletterListFuncProp } = useContext<Inewsletter>(resources.contexts.NewsletterContext);
    useEffect(() => {
        newsletterListFuncProp({query:{}});
    }, []);

  
    return  <div className="news">
                <Heading as='h2' size='md' noOfLines={1}>
                News
                </Heading>
                <div className="news__container">
                {newsletterData && newsletterData.length > 0 ? <VList className="news__list" items={newsletterData} curPage={next ? toNumber(next) - 1 : 0}  itemLimit={5}  ItemCard={News}/> :<></> }
                </div>
            </div>
}
    


export default NewsList;