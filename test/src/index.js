import React from "react"
import {createRoot} from "react-dom/client"
import Headerr from "./components/Headerr"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import Product from "./pages/Product"

const root = createRoot (document.getElementById("root"))
root.render(

  <div>
  {/* <BrowserRouter>
   <App/>
  </BrowserRouter> */}
 {/* <Header/>  
   <div className="menu-parent">
  <Menu name="Australia meat" option="free" price="10$" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfGIzuqauxdVwM0yvCazbuUGs5NyuIS7eYZg&usqp=CAU"/>
   <Menu  name="Somali food" option= "paid"  price= "80$" img ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvgRCXyiAP2lHMlf4SIhRpj1gOAJMv05heYA&usqp=CAU"/>   <Menu  name="Kenya food" option= "free"  price= "20$" img ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi8lD17AcOBrtqN3pgs4I179QoEnxebkY9gg&usqp=CAU"/>
   <Menu name="Korean food" option= "paid" price= "14$" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS--YVqxk79O3rbJJOcWpzT6xT4lI-p6FaPeg&usqp=CAU" />
   <Menu name="Japanese food" option= "paid" price= "65$" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9QI0BYp3N_Q-ccxkIJNb2yduXUSB0DxrrBw&usqp=CAU" />
   <Menu name="Vietnam food" option= "free" price= "20$" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqYUXyke34Ok6Bt3MupRAwZ_GL6YiYnPnyFQ&usqp=CAU" />
  </div>

  <div className="assing-title"> 
  <Assing image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkjrrElDw7nTv5H0JpeAJp-KWrGfNHiaGkEA&usqp=CAU"  btn="btn1" button="technology" name="What is new in 2023 tech" lorem="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae rerum quod, inventore voluptatum dolorum modi explicabo eius fugiat tempore itaque?" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT09SoLJZX5VgjLKlIaz70TQZCJG5CZNEcDoW27_8Evk54n2ncU3aG-TfxN-uTXA_g4PBg&usqp=CAU"  n="Rumeysa A/karim" time="3hours ago"/>
  <Assing image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfGIzuqauxdVwM0yvCazbuUGs5NyuIS7eYZg&usqp=CAU"  btn="btn2"button="food" name="What is new in 2023 tech" lorem="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae rerum quod, inventore voluptatum dolorum modi explicabo eius fugiat tempore itaque?" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmgA_-PleMUrrfzmyckS2Us0XaMK2uphL7Qw&usqp=CAU" n="Ayman A/karim" time="3hours ago"/>
  <Assing image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNeIrGL0Y1r-43Ze7jlmUIxwmMK8kdjhg9PA&usqp=CAU" btn="btn3" button="automobile" name="What is new in 2023 tech" lorem="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae rerum quod, inventore voluptatum dolorum modi explicabo eius fugiat tempore itaque?" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT09SoLJZX5VgjLKlIaz70TQZCJG5CZNEcDoW27_8Evk54n2ncU3aG-TfxN-uTXA_g4PBg&usqp=CAU" n="Zuhur A/karim" time="3hours ago"/>
 
  </div> 
   <Footer/>   
    <Tasbih/> 
    <SomaliaQuote/> 
      <Menu1/> 
         <Headerr/> */}
    <Product/>
  </div>


);

