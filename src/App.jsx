import "./App.css";
import { Container } from "react-bootstrap";
import Navigation from "./components/navigation/navigation";

import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Container fluid="lg" className="App">
        <Navigation />

        <Footer />
      </Container>
    </div>
  );
}

export default App;
