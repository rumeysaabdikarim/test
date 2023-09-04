import {useState, React} from "react"

function Menu1(){

    //state
    const[color, setColor]= useState("")


// on function 

const onBtn =() =>{
    setColor("yellow")
}
// off function

 const offBtn = ()=>{
    setColor("")
 }


return <div className="box-parent">

    <div>
        <div className="box" style={{backgroundColor: color}}> </div>
            <button onClick={onBtn}>ON</button>
            <button onClick={offBtn}>OFF</button>
        </div>
   
 </div>
}
  

export default Menu1




