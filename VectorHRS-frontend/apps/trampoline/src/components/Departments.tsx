import { Box,Image,Badge } from "@chakra-ui/react"
import { StarIcon} from '@chakra-ui/icons';
import resources from "@vhrs/resources";
import { Idepartment } from "@vhrs/resources/types/context";
import { FC, useContext } from "react";
import VList from "./Lists";





const Departments:FC = ()=>{
    const { departmentData, count } = useContext<Idepartment>(resources.contexts.DepartmentContext);
    console.log(departmentData);
    return  departmentData ? <VList items={departmentData} curPage={count}  itemLimit={0} ItemCard={"symbol"}/> :<></>
}
    


export default Departments;