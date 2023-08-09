import "./App.css";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Main/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Auth from "./components/Main/Auth/Auth.jsx";

function App() {
  return (
    <>
      <Header />
      {/* TODO route to Auth or Home */}
      <Auth />
      {/* <Home /> */}
      <Footer />
    </>
  );
}

export default App;
