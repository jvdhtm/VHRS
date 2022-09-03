import { Flex,Image,Box, Heading } from "@chakra-ui/react"
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
    return <>
               
                <Link to={link} >
                    {}
                    <Flex w='100%' p={4} color='white' alignItems='center' position={"relative"} >
                        <Heading as='h4' size="xs" noOfLines={1}>
                            {props.name ? props.name : ""}
                    </Heading>
                   </Flex>
                </Link>
           </>
}


const RelatedLink:FC = ()=>{
    const { newsletterData, next } = useContext<Inewsletter>(resources.contexts.NewsletterContext);
    const {  newsletterListFuncProp } = useContext<Inewsletter>(resources.contexts.NewsletterContext);
    useEffect(() => {
        newsletterListFuncProp({query:{page_size:10}});
    }, []);

  
    return <Box background={"var(--yellow-050)"} border={'this solid var(--yellow-200);'} borderRadius="lg"  >
                    <Heading as='h3' size="xs" noOfLines={1} borderBottom={"thin solid var(--yellow-200)"}>
                            Related Links
                    </Heading>
                <div className="relatedlinks">
                        {newsletterData && newsletterData.length > 0 ? <VList className="news__list" items={newsletterData} curPage={next ? toNumber(next) - 1 : 0}  itemLimit={5}  ItemCard={News}/> :<></> }
                </div>
            </Box>
}
    


export default RelatedLink;