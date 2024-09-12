import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Menu from "./pages/Menu"
import PageNotFound from "./pages/PageNotFound"
function App() {
  return (
    <>
      <div>
<BrowserRouter>
{/* mujy ye  * notfound ko end mai rakhna h q k agr mai isko top pr rakho gi to ye baki pages ko excute nhi kre ga */}
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/about" element={<About/>}  />
  <Route path="/contact" element={<Contact/>}  /> 
  <Route path="/menu" element={<Menu/>}  />
  <Route path="/*" element={<PageNotFound/>}  />
</Routes>

</BrowserRouter>
       
      </div>
    </>
  )
}

export default App
