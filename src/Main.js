import react, { useState, useEffect }  from 'react'
import './css/Main.css'

export default function Main(){
    
    const [position, setPosition] = useState(0);
    function onScroll(){
        setPosition(window.pageYOffset);
        console.log(position);
    }
    useEffect(()=>{
        window.addEventListener("scroll", onScroll);
        return ()=>{
            window.removeEventListener("scroll", onScroll);
        }
    },[])
    return(
        <>
            <div className="main">
            </div>
        </>
    )
}