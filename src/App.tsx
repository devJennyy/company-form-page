import Footer from "./components/Footer";
import Page from "./components/Page";
import Navbar from "./components/Navbar";
import "./styles/App.css";

function App() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full max-w-[1210px] mx-auto lg:px-20">
        <Navbar />
        <Page />
        <Footer />
      </div>
    </div>
  );
}

export default App;
