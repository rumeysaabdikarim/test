
import {Route, Routes} from "react-router-dom"
import Home from "./page/Home";
import Service from "./page/Service";
import Feautures from "./page/Features";
import Blog from "./page/Blog";

function App(){
    return <div>
<Routes>
    
    <Route path="/home"  element={<Home/>} />
    <Route path="/service" element={<Service/>} />
    <Route path="/Features" element={<Feautures/>} />
    <Route path="/blog" element={<Blog/>} />
</Routes>


    </div>
}
 export default App