import { Box,Image,Badge, Heading } from "@chakra-ui/react"
import { StarIcon} from '@chakra-ui/icons';
import resources from "@vhrs/resources";
import { definitions } from "@vhrs/models";
import { Inewsletter } from "@vhrs/resources/types/context";
import { FC, useContext, useEffect } from "react";
import ResourceICon from "./ResourceICon";
import VList from "./Lists";
import {toNumber, includeChildren} from "../util/utils";
import { Link } from 'react-router-dom';
import { ListIcon } from "@chakra-ui/react";

const News: FC<definitions["NewsLetter"]> = (props:definitions["NewsLetter"]) =>{
    const link  = `/news/${props.id}`
    return <>
               
                <Link to={link}  >
                    {}
                    <ListIcon as={ResourceICon}  />
                    <Heading as='h3' size='md' noOfLines={1}>
                        {props.name ? props.name : ""}
                   </Heading>
               
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
                {newsletterData && newsletterData.length > 0 ? <VList className="news__list" items={newsletterData} curPage={next ? toNumber(next) - 1 : 0}  itemLimit={5}  ItemCard={News}/> :<></> }
            </div>
}
    


export default NewsList;