import Board from '@vhrs/board'

function AppBoard({ data }:any) {
    return (
        <div>
            { data && data.lanes.length > 0 ? <Board data={data} style={{height:'auto', backgroundColor: 'transparent', padding:'0'}} /> : "" }
        </div>
    )
}
  
export default AppBoard