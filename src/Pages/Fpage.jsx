import react from "react";
import { useNavigate } from "react-router-dom";


function Fpage() {
   const navigate =  useNavigate()
    return (
        <>
        <div >
            <h1>Weather Website</h1>
            <h4 style={{fontWeight:'lighter'}}>Created By Nikoloz Lomidze</h4>
            <button onClick={() => navigate('/Spage')} className="FpageButton">Continue</button>
        </div>
        </>
    )
}

export default Fpage;

