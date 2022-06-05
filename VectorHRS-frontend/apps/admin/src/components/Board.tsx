

function AppBoard({ data }:any) {
    return (
        <div>
            { data && data.lanes.length > 0 ? "board" : "" }
        </div>
    )
}
  
export default AppBoard