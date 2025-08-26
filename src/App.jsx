import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import Home from "./Home";


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route index element={<Home />}/>
        <Route path="/home" element={<Home/>}/>
    </Route>
))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              

return <RouterProvider router={router}/>
}

export default App
