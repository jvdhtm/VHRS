import { Board } from '@vhrs/lines'
import { IColumn } from '@vhrs/lines/dist/types'

function AppBoard({ data }:any) {

    const items:IColumn[] = []
    return (
        <div>
            <Board columns={items} changeColumnCallback={()=>{}} refresh={false}/>
        </div>
    )
}
  
export default AppBoard