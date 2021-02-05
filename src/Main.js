import { useState}  from 'react'
import './css/Main.css'
import fullpage from 'fullpage.js'

export default function Main(){
    new fullpage('#fullPage',{
        autoScrolling:true,
        navigation:true,
        onLeave:function(origin, destination, direction){
            if(origin.index===0)
            {setDown(true)}
            if(destination.index===0)
            {setDown(false);setCircletop(40.4)}
            if(destination.index===1)
            {setRider(true);setCircletop(43.4)}
            if(destination.index===2)
            {setPeople(true);setCircletop(46.4)}
            if(destination.index===3)
            {setPresent(true);setCircletop(49.4)}
            if(destination.index===4)
            {setBmart(true);setCircletop(52.4)}
            if(destination.index===5)
            {setFlag(true);setCircletop(55.4)}
            if(destination.index===6)
            {setOpac(true);setCircletop(58.4)}
            if(origin.index===6)
            {setOpac(false);}
        }
    })

    const [rider, setRider]=useState(false);
    const [down, setDown] = useState(false);
    const [people, setPeople] = useState(false);
    const [present, setPresent] = useState(false);
    const [bmart, setBmart] = useState(false);
    const [flag, setFlag] = useState(false);
    const [circleTop, setCircletop]=useState(40.4);
    const [opac, setOpac]=useState(false);

    return(
        <>
            <nav className="navbar">
                <div className={"nav-logo "+(opac?"opac":"")}>
                    배달의 민족aaaa
                </div>
                <div className="nav-links">
                    <a href="https://www.facebook.com/smartbaedal"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/baemin_official/"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.youtube.com/user/smartbaedal2"><i className="fab fa-youtube"></i></a>
                    <a href="https://www.facebook.com/smartbaedal"><i className="fab fa-twitter"></i></a>
                </div>
                <div className={"download " + (down?"down":"")}>
                    <img src="../images/blackapp.png" alt=""/>
                </div>
                <div className={"navigation "}>
                    <div className="circle" style={{top:`${circleTop}%`}}></div>
                </div>
            </nav>
            <div className="main" id="fullPage">
                <div className="section section1">
                    <div className="background"></div>
                    <div className="text">
                        <p>마음에도<br/>당 충전이<br/>필요할 때</p>
                    </div>
                    <div className="app">
                        <img src="../images/app.png" alt=""/>
                    </div>
                </div>
                <div className="section">
                    <div className="text">
                        <p>그것이<br/>무엇이든<br/>다~ 있다!</p>
                        <h5>3천만 이상이 선택한 배달의민족,<br/>업계 최다 배달가능 업소 보유 중<br/><br/>(2017년 11월 기준)</h5>
                    </div>
                    <div className={"driver "+(rider ? "slide" : "")}>
                        <img src="../images/character.png" alt=""/>
                    </div>
                </div>
                <div className="section">
                    <div className="text">
                        <p>줄 서서<br/>먹던 맛집도<br/>배달 가능!</p>
                        <h5>배달이 안되던 동네 맛집까지~<br/>배민라이더스가 직접 배달해드립니다.<br/><br/>서울 전지역, 경기 및 광역시 일부 지역에서 서비스 이용 가능!</h5>
                    </div>
                    <div className={"people "+(people ? "rise" : "")}>
                        <img src="../images/people.png" alt=""/>
                    </div>
                </div>
                <div className="section">
                    <div className="text">
                        <p>너에게<br/>밥을보낸다<br/>배민선물하기</p>
                        <h5>지금 밥 한끼 보내주고 싶은 사람에게 선물해보세요.<br/>선물 받은 상품권으로 배민에서 자유롭게 주문할 수 있습니다.<br/><br/>*단, 전국별미, 사전예약 제외</h5>
                    </div>
                    <div className={"present "+(present ? "rise2" : "")}>
                        <img src="../images/present.png" alt=""/>
                    </div>
                </div>
                <div className="section" >
                    <div className="text">
                        <p>초소량<br/>번쩍배달<br/>B마트</p>
                        <h5>마트까지 가지 않아도, 많이 사지 않아도<br/>주문하신 상품을 바로 배달해드립니다.<br/><br/>서울, 인천 및 경기 일부 지역에서 서비스 이용 가능!</h5>                        
                    </div>
                    <div className={"bmart "+(bmart ? "slide2":"")}>
                        <img src="../images/bmart.png" alt=""/>
                    </div>
                </div>
                <div className="section" >
                    <div className="text">
                        <p>할인받고<br/>결제까지<br/>10초면 끗!</p>
                        <h5>배민페이, 네이버페이 등은 물론<br/>각종 신용카드까지 결제 가능!</h5>
                    </div>
                    <div className={"flag "+(flag ? "rise3" : "")}>
                        <img src="../images/flag.png" alt=""/>
                    </div>
                </div>
                <div className="section footer">
                    <div className="container">
                        <div className="upper">
                            <div className="bigtitle">
                                <h2>우리가<br/>어떤 민족<br/>입니까</h2>
                                <h4>배달의민족</h4>
                            </div>
                            <div className="links">
                                <div className="page">
                                    <div>우아한 형제들<br/>배민문방구</div>
                                    <div>배민사장님광장<br/>라이더채용</div>
                                </div>
                                <div className="icons">
                                    <a href="https://www.facebook.com/smartbaedal"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://www.instagram.com/baemin_official/"><i className="fab fa-instagram"></i></a>
                                    <a href="https://www.youtube.com/user/smartbaedal2"><i className="fab fa-youtube"></i></a>
                                    <a href="https://www.facebook.com/smartbaedal"><i className="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="foot">
                            <p>(주)우아한형제들<br/>
                            서울시 송파구 위례성대로 2 장은빌딩 2층<br/><br/>
                            사업자번호:120-87-65763  사업자정보확인<br/>
                            통신판매업: 서울 송파-0515<br/><br/>
                            전자금융분쟁처리<br/>
                            대표전화 : 1600-0987 | 팩스 : 050-6050-0400<br/>
                            대표메일 : help@woowahan.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}