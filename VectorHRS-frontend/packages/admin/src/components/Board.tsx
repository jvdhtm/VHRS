import Board from 'react-trello'




function AppBoard({ data }:any) {
    return (
        <div>
            { data && data.lanes.length > 0 ? <Board data={data} style={{backgroundColor: 'transparent', padding:'0'}} /> : "" }
        </div>
    )
}
  
export default AppBoard