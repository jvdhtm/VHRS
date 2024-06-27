import MyComponent from './components/MyComponent'
import { resources } from "@vhrs/resources";
import './App.css'

function App() {

  return (
    <>
      <MyComponent resource={resources["StaffResource"]}></MyComponent>
    </>
  )
}

export default App
