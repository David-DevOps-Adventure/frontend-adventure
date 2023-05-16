import "./App.scss";
import { Container } from "react-bootstrap";
import Navigation from "./components/navigation/navigation";

import Footer from "./components/footer/footer";
import About from "./components/sections/about/about";
import Experience from "./components/sections/experience/experience";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Container fluid="lg" className="App">
        <Navigation />
        <div>
          <About />
        </div>

        <Footer />
      </Container>
    </div>
  );
}

export default App;
