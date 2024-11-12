
import './footer.css';

export default function Footer() {
    const footerText = "lorem ipsum etc etc";

    return (
        <footer className="footer">
            <div className="container">
                <p>{footerText}</p>
            </div>
        </footer>
    );
}
