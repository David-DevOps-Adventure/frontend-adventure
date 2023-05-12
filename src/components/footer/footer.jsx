import "./footer.css";

let currentYear = new Date().getFullYear();

const Footer = () => (
  <div className="footer">
    <footer className="py-2 fixed-bottom dark-section">
      <div className="container text-center">
        <small>DevOps with David &copy; {currentYear}</small>
      </div>
    </footer>
  </div>
);

export default Footer;
