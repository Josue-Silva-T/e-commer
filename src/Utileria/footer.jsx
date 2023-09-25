import { Link } from 'react-router-dom';
import './footer.css';

export function Footer(){
    return <div className="footer">
        <div className="footer-content">
            <div className="footer-sectionAbout">
                <h1 className="logo-text">PRIME</h1>
                <Link to="#">About us</Link>
                <Link to="#">Legalacy</Link>
                <Link to="#">Promotonial PRIME</Link>
                <div className="contact">
                    <span><i className="fas fa-phone"></i>123-456-789</span>
                    <span><i className="fas fa-envelope"></i> </span>;
                </div>
            </div>
        </div>
    </div>
}