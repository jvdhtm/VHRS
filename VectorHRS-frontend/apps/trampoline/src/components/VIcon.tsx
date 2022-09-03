import { FC } from "react";


export interface IICON {
    color: string;
    icon: string;
    fontSize: string;
}


const VIcon:FC<IICON> = ({color,fontSize, icon})=>{
    const style = {
        fontSize: fontSize,
        color: color
        
      };
    return   <i style={style}  className={icon}></i>
}
  
export default VIcon;