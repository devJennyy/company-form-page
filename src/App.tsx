import Footer from "./components/Footer";
import Page from "./components/Page";
import Navbar from "./components/Navbar";
import "./styles/App.css";

function App() {
  return (
    <div className="w-full flex flex-col justify-center items-center font-poppins">
      <div className="w-full xl:max-w-[1024px] max-w-[620px] mx-auto md:px-0 sm:px-10 px-5">
        <Navbar />
        <Page />
        <Footer />
      </div>
    </div>
  );
}

export default App;
