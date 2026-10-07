// import logo from "../assets/images/photo_5913772575202938628_y.jpg";
import "./Header.css";
import '../assets/fonts/fonts.css'

function Header() {
    return (
        <header>
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">A beautiful smile
                      <span>, greater self-confidence.</span>  
                    </h1>
                    <p>Providing specialized dental services using modern equipment.</p>
                    <button>Book an Appointment</button>
                </div>
            </section>
            <div className="img-header">

            </div>
            <div className="Navbar">
                <ul className="Navbar-item">
                    <li>Home</li>
                    <li>Abouts</li>
                    <li>My address</li>
                </ul>
            </div>
        </header>
    )
}

export default Header;





