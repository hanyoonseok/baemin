import './css/Nav.css'

export default function Nav(){
    return(
        <>
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
            </nav>
        </>
    )
}