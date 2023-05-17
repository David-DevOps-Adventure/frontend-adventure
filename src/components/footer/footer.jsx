import "./footer.css";

let currentYear = new Date().getFullYear();

const Footer = () => (
  <div className="footer">
    <footer className="py-1 sticky-bottom dark-section">
      <div className="container text-center">
        <small>DevOps with David {currentYear} &copy; David Del Sol</small>
      </div>
    </footer>
  </div>
);

export default Footer;
