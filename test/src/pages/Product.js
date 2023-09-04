import Header from "../pages/Header"
import Footer from "../components/footer"
import axios from "axios"
import { useState,useEffect } from "react"


function Product() {

    const [products, setproducts]= useState([])


    const getAllproducts = () => {
        axios.get("https://fakestoreapi.com/products").then((Response) => {

             setproducts(Response.data)
        }).catch((error) => {
             console.log(error)
         })
     }
    
    useEffect(() => {
             getAllproducts()
        },[])
      

    return <div>
        <Header />
        <div style={{display: "grid", gridTemplateColumns: "300px 300px 300px", gap: "20px",justifyContent: "center", margin: "20px", padding: "20px", }}>
          
            
            {
                
                products.map((item,index)=> (
                  <div style={{ border: "2px slid",  textAlign: "center" }}>
                <img style={{width:"200px"}} src={item.image}></img>
                        <p>{item.titlr}</p>
                        <h4>{item.price}</h4>
            </div>
                ))
           }
          
              
           
                
            
          
            
     </div>
        <Footer/>
       
    </div>
  
} 
export default Product