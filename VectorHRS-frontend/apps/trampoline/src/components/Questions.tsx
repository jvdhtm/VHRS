import { Flex, Box, Heading } from "@chakra-ui/react"
import resources from "@vhrs/resources";
import { definitions } from "@vhrs/models";
import { Iquestion } from "@vhrs/resources/types/context";
import { FC, useContext, useEffect } from "react";
import VList from "./Lists";
import {toNumber} from "../util/utils";
import { Link } from 'react-router-dom';

const Question: FC<definitions["Question"]> = (props:definitions["Question"]) =>{
    const link  = `/question/${props.id}`
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


const Questions:FC = ()=>{
    const { questionData, next , questionListFuncProp } = useContext<Iquestion>(resources.contexts.QuestionContext);
    useEffect(() => {
        questionListFuncProp({query:{page_size:10}});
    }, []);

  
    return <Box background={"var(--yellow-050)"} border={'this solid var(--yellow-200);'} borderRadius="lg"  >
                    <Heading as='h3' size="xs" noOfLines={1} borderBottom={"thin solid var(--yellow-200)"}>
                           Common questions
                    </Heading>
                <div className="questions">
                        {questionData && questionData.length > 0 ? <VList className="news__list" items={questionData} curPage={next ? toNumber(next) - 1 : 0}  itemLimit={5}  ItemCard={Question}/> :<></> }
                </div>
            </Box>
}
    


export default Questions;