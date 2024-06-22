export default function Footer() {
    return (
        <footer className="page-footer cyan darken-4">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright by Ilya Petrov 
                </div>
            </div>
        </footer>
    );
}