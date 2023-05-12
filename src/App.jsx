import "./App.css";
import { Container } from "react-bootstrap";
import Navigation from "./components/navigation/navigation";

import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="container-fluid">
      <Navigation />

      <Footer />
    </div>
  );
}

export default App;
