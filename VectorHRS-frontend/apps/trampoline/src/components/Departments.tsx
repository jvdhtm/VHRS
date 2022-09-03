
import resources from "@vhrs/resources";
import { definitions } from "@vhrs/models";
import { Idepartment } from "@vhrs/resources/types/context";
import { FC, useContext, useEffect } from "react";
import VList from "./Lists";
import {toNumber, includeChildren} from "../util/utils";
import { Link } from 'react-router-dom';
import VIcon from "./VIcon";
type Imodeldepartment = definitions["Department"];

interface Departments extends  Imodeldepartment{
    children: Departments[]; 
}

const Department: FC<Departments> = (props:Departments) =>{
    const link  = `/departments/${props.name}`
    return <>
               
                <Link to={link}  >
                    <VIcon color="var(--secondary)" fontSize="1rem" icon="ri-newspaper-fill" ></VIcon>
                   {props.name ? props.name : "Dep name"}
               
                </Link>
                {props.children ? <VList className="departments__children" items={props.children} curPage={0}  itemLimit={1000}  ItemCard={Department}/> : <></>}
           </>
}


const Departments:FC = ()=>{
    const { departmentData, next } = useContext<Idepartment>(resources.contexts.DepartmentContext);
    const { departmentListFuncProp } = useContext<Idepartment>(resources.contexts.DepartmentContext);
    useEffect(() => {
            departmentListFuncProp({query:{}});
    }, []);

    const departmentDataIndexed = includeChildren(departmentData)
  
    return  <div className="departments">
                {departmentDataIndexed && departmentDataIndexed.length > 0 ? <VList className="departments__list" items={departmentDataIndexed} curPage={next ? toNumber(next) - 1 : 0}  itemLimit={5}  ItemCard={Department}/> :<></> }
            </div>
}
    


export default Departments;