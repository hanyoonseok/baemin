import { useState}  from 'react'
import './css/Main.css'
import fullpage from 'fullpage.js'

export default function Main(){
    const [rider, setRider]=useState(false);
    const [down, setDown] = useState(false);
    new fullpage('#fullPage',{
        autoScrolling:true,
        navigation:true,
        //navigationTooltips:['1','2','3','4'],
        onLeave:function(origin, destination, direction){
            if(origin.index===0)
            {setDown(true)}
            if(destination.index===0)
            {setDown(false)}
            if(destination.index===1)
            {setRider(true)}
            if(origin.index===1)
            {setRider(false)}
        }
    })

    return(
        <>
            <div className={"download " + (down?"down":"")}>
                <img src="../images/blackapp.png" />
            </div>
            <div className="main" id="fullPage">
                <div className="section section1">
                    <div className="text">
                        <p>공복에</p>
                        <p>떡볶이가</p>
                        <p>그리울 때</p>
                    </div>
                    <div className="app">
                        <img src="../images/app.png" alt=""/>
                    </div>
                </div>
                <div className="section section2">
                    <div className="text">
                        <p>그것이</p>
                        <p>무엇이든</p>
                        <p>다~ 있다!</p>
                    </div>
                    <div className={"driver "+(rider ? "slide" : "")}>
                        <img src="../images/character.png" alt=""/>
                    </div>
                </div>
                <div className="section section3">
                    <div className="text">
                        <p>줄 서서</p>
                        <p>먹던 맛집도</p>
                        <p>배달 가능!</p>
                    </div>
                    <div className={"driver "+(rider ? "slide" : "")}>
                        <img src="../images/character.png" alt=""/>
                    </div>
                </div>
                <div className="section section4">
                    <div className="text">
                        <p>너에게</p>
                        <p>밥을보낸다</p>
                        <p>배민선물하기</p>
                    </div>
                    <div className={"driver "+(rider ? "slide" : "")}>
                        <img src="../images/character.png" alt=""/>
                    </div>
                </div>
                <div className="section section5">
                    <div className="text">
                        <p>초소량</p>
                        <p>번쩍배달</p>
                        <p>B마트</p>
                    </div>
                    <div className={"driver "+(rider ? "slide" : "")}>
                        <img src="../images/character.png" alt=""/>
                    </div>
                </div>
                <div className="section section6">
                    <div className="text">
                        <p>할인받고</p>
                        <p>결제까지</p>
                        <p>10초면 끗!</p>
                    </div>
                    <div className={"driver "+(rider ? "slide" : "")}>
                        <img src="../images/character.png" alt=""/>
                    </div>
                </div>
                <div className="section section7">
                    <div className="text">
                        <p>푸터</p>
                    </div>
                </div>
            </div>
        </>
    )
}