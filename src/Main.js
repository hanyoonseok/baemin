import react, { useState, useEffect }  from 'react'
import './css/Main.css'
import fullpage from 'fullpage.js'

export default function Main(){
    new fullpage('#fullPage',{
        autoScrolling:true
    })
    const [position, setPosition] = useState(0);
    const [scrolldir, setDir]= useState(true);
    var prev=0;

    function onScroll(){
        setPosition(window.pageYOffset);
        if(prev>window.scrollY) //up    
            setDir(true);
        if(prev<window.scrollY) //down
            setDir(false);
        prev=window.scrollY;
    }
    useEffect(()=>{
        window.addEventListener("scroll", onScroll);
        return ()=>{
            window.removeEventListener("scroll", onScroll);
        }
    },[])

    return(
        <>
            {/* <div className={scrolldir ? " main up" : "main down"}> */}
            <div className="main" id="fullPage">
                <div className="section section1">
                    <div className="text">
                        <p>공복에</p>
                        <p>떡볶이가</p>
                        <p>그리울 때</p>
                    </div>
                    <div className="app">
                        <img src="../images/app.png"/>
                    </div>
                </div>
                <div className="section section2">
                    <div className="text">
                        <p>그것이</p>
                        <p>무엇이든</p>
                        <p>다~ 있다!</p>
                    </div>
                    <div className={"driver "+(position>720 ? "slide" : "")}>
                        <img src="../images/character.png" alt=""/>
                    </div>
                </div>
                <div className="section section3">
                    <div className="text">
                        <p>그것이</p>
                        <p>무엇이든</p>
                        <p>다~ 있다!</p>
                    </div>
                    <div className={"driver "+(position>720 ? "slide" : "")}>
                        <img src="../images/character.png" alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}