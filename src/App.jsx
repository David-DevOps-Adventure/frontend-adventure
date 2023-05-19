import "./App.scss";
import { Container } from "react-bootstrap";
import Navigation from "./components/navigation/navigation";

import Footer from "./components/footer/footer";
import About from "./components/sections/about/about";
import Experience from "./components/sections/experience/experience";
import Testimonials from "./components/sections/testimonials/testimonials";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Container fluid="lg" className="App">
        <Navigation />
        <div>
          <About />
        </div>
        <div className="experience">
          <Experience />
        </div>
        <div className="text-center">
          <Testimonials />
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
