
import{React, useState} from "react"

function SomaliaQuote(){

      const [index, setIndex]= useState(0)

        const xigmad =[
        "1. Aan wado hadalno waa aan heshiino",
        "2. Beenta hore runta danbay u baas baxday",
        "3. Jisaar jiza ugal waa jiko haraati",
        "4. Ama afeef hore lahow ,ama adkaasi danbe",
        "5. Abaal nin gala waa la arkay, nin gudase lama arag",
        "6. Af aamusani marti ma sedo"
    
    ]
      

    const colors = [
        "blue",
        "orange",
        "green",
        "red",
        "yellow",
        "purple"
    ];
   
    

    const nextBtn = () =>{
        if(index < xigmad.length - 1){
            setIndex(index + 1)
        }
    }

      const previousBtn = () => {
        setIndex(index -1)
      }


    return <div className="somalia">

        <p style={{color: colors[index]}}>{xigmad [index]}</p>

        <div className="buttons">
            <button onClick={previousBtn}>Previous</button>
            <button onClick={nextBtn}>Next</button>

        </div>
    </div>
}

export default SomaliaQuote