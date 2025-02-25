
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./styles/App.css";


function App() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
