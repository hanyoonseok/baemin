import react,{useState, useEffect}  from 'react'
import './css/Nav.css'

export default function Nav(){
    const [position, setPosition] = useState(0);
    const [isScale, setScale]=useState(true);

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
        <div className="nav">
            <nav className="navbar">
                <div className="nav-logo">
                    배달의 민족
                </div>
                <div className="nav-links">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-youtube"></i>
                    <i className="fab fa-twitter"></i>
                </div>
                <div className="download">
                    <img src="../images/blackapp.png" style={{opacity:(position-400)/300}}/>
                </div>
            </nav>
            <div>
                <img src="../images/back.jpg" className={isScale? "active" : ""}/>
            </div>
            <div className="gongbok">
                <p>공복에</p>
                <p>떡볶이가</p>
                <p>그리울 때</p>
            </div>
            <div className="app">
                <img src="../images/app.png"/>
            </div>
        </div>
    )
}