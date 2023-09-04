import {useState, React} from "react"

function Tasbih() {

    const[counter, setCounter]=useState(0)
    const[color, setColor]= useState("")

    const incrementBtn = () => {
        setCounter(counter +1)
        if(counter===9){
            setColor("yellow")
        }
        else{
            setColor("")
        }
    }
    const resetBtn = () => {
        setCounter(0)
    }
    const decrementBtn = () => {
    if(counter > 0)
    setCounter(counter -1)
    
    }

    
return <div className="box">
<h1 style={{color: color}}>{counter}</h1>
<button onClick={incrementBtn} className="btn">Increment</button>
<button onClick={resetBtn}  className="btn">Reset</button>
<button onClick={decrementBtn} className="btn">Decrement</button>

</div>


}


export default Tasbih