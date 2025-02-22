import { FaChevronUp, FaGithub} from "react-icons/fa";
function Footer() {
    
    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    

    return (
        <footer>
            <div className="footer-top" onClick={handleScrollTop}>
                <FaChevronUp size={50} />
            </div>

            <div className="footer-icons">
                <a
                href="https://github.com/haaffiiizzz/portfolio"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
                >
                <FaGithub size={24} />
                </a>
            </div>
            <p>&copy; {new Date().getFullYear()} Abdulhafiz Dada</p>
        </footer>
    );
}

export default Footer;