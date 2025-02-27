import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./styles/App.css";

function App() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full max-w-[1440px] mx-auto px-10">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </div>
  );
}

export default App;
