import { Link, Outlet } from "react-router-dom";
import logo from "../assets/img/logo.png";

export default function Layout() {
    return (
        <>
            <div className="layout">
                <nav className="navbar">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/education">Education</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                
                <main>
                    <Outlet />
                </main>

                <footer className="footer">
                    <div className="footer-content">
                        {/* --- Email & Contact Button --- */}
                        <p>👋 Get in touch at</p>
                        <a href="mailto:amrasaeed.eng@gmail.com" className="footer-email">
                            amrasaeed.eng@gmail.com</a>
                        <a href="/contact" className="btn-contact">
                            Contact Me</a>
                        <hr />
                    </div>

                    <div className="social-links">
                        <span class="received-info">© 2025 Amra Badurdeen. All Rights Reserved</span>
                        <a href="https://www.linkedin.com/in/amra-badurdeen/" target="_blank"
                            rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </footer>
            </div>
        </>
    )
}