import React,{useState} from "react";



export const TrafficLight = () => {

    return(
        <>
           
           <div className="principal">

              < Semaforo/>
           </div>

        </>
    );

}

const Semaforo = ()=>{

    const [color,setcolor] = useState("red"); 
     
    
    
    
    return(
        <>
            
            <div className="cajanegra">

                <div onClick={()=> setcolor("rojo")} className={`rojo ${color=="rojo" ? "brillo":" "}`}> 

                </div>

                <div onClick={()=> setcolor("amarillo")} className={`amarillo ${color=="amarillo" ? "brillo":" "}`}>

                </div>

    <div onClick={()=> setcolor("verde")} className={ ` verde ${color=="verde" ? "brillo":" "}` }>

                </div>

            </div>
            
        </>
    );

}
