import react, { useState, useEffect }  from 'react'
import './css/Main.css'

export default function Main(){
    
    const [position, setPosition] = useState(0);
    function onScroll(){
        //if(window.pageYOffset>position)

        setPosition(window.pageYOffset);
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
                <div className="text">
                    <p>그것이</p>
                    <p>무엇이든</p>
                    <p>다~ 있다!</p>
                </div>
                <div className={"driver "+(position>720 ? "slide" : "")}>
                    <img src="../images/character.png" alt=""/>
                </div>
            </div>
            <div className="main">
                <div className="text">
                    <p>그것이</p>
                    <p>무엇이든</p>
                    <p>다~ 있다!</p>
                </div>
                <div className={"driver "+(position>1440 ? "slide" : "")}>
                    <img src="../images/character.png" alt=""/>
                </div>
            </div>
        </>
    )
}