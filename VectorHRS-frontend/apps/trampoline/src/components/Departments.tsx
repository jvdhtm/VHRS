import { Box,Image,Badge } from "@chakra-ui/react"
import { StarIcon} from '@chakra-ui/icons';
import resources from "@vhrs/resources";
import { definitions } from "@vhrs/models";
import { Idepartment } from "@vhrs/resources/types/context";
import { FC, useContext, useEffect } from "react";
import VList from "./Lists";
import {toNumber} from "../util/utils";


const Department: FC<definitions["Department"]> = (props:definitions["Department"]) =>{

    return <div>
                {props.description}
           </div>
}


const Departments:FC = ()=>{
    const { departmentData, next } = useContext<Idepartment>(resources.contexts.DepartmentContext);
    const { departmentListFuncProp } = useContext<Idepartment>(resources.contexts.DepartmentContext);
    useEffect(() => {
            departmentListFuncProp({query:{}});
    }, []);
  
    return  departmentData && departmentData.length > 0 ? <VList items={departmentData} curPage={next ? toNumber(next) - 1 : 0}  itemLimit={5}  ItemCard={Department}/> :<></>
}
    


export default Departments;