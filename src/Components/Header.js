import logo from "../images/photo_5913772575202938628_y.jpg";
import "./Header.css";

function Header() {
    return (
        <header>
            <section className="hero">
                <div className="hero-content">
                    <h1>A beautiful smile, greater self-confidence.</h1>
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





