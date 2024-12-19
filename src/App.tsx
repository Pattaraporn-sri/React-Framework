import {RouterProvider} from "react-router-dom"
import mainRouter from "./router/MainRouter"

function App() {

  return (
    <>
      <RouterProvider router= {mainRouter}/>
      
    </>
  )
}

export default App
