import "./App.css";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Main/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      {/* TODO route to Auth or Home */}
      <Home />
      <Footer />
    </>
  );
}

export default App;
