import { Box,Image,Badge } from "@chakra-ui/react"
import { StarIcon} from '@chakra-ui/icons';
import resources from "@vhrs/resources";
import { Idepartment } from "@vhrs/resources/types/context";
import { FC, useContext, useEffect } from "react";
import VList from "./Lists";





const Departments:FC = ()=>{
    const { departmentData, count } = useContext<Idepartment>(resources.contexts.DepartmentContext);
    const { departmentListFuncProp } = useContext<Idepartment>(resources.contexts.DepartmentContext);
    useEffect(() => {
        console.log(departmentData,count)
        if(departmentData?.length === 0)
        {
            departmentListFuncProp({query:{}});
        }
    });
  
    return  departmentData ? <VList items={departmentData} curPage={count}  itemLimit={0} ItemCard={"symbol"}/> :<></>
}
    


export default Departments;