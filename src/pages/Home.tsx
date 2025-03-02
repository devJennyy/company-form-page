import Footer from "@/components/Footer";
import Form from "@/components/Form";
import HeroCopy from "@/components/HeroCopy";
import LogoMarquee from "@/components/LogoMarquee";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div className="w-full xl:max-w-[1050px] max-w-[620px] mx-auto flex flex-col sm:gap-16 gap-10 md:px-0 sm:px-10 px-5 font-poppins">
      <Navbar />
      <div className="xl:hidden">
        <HeroCopy variant={"title"} />
      </div>
      <section className="flex xl:flex-row flex-col justify-between xl:gap-0 gap-12">
        <Form />
        <HeroCopy variant={"primary"} />
      </section>
      <LogoMarquee />
      <HeroCopy variant={"secondary"} />
      <Footer />
    </div>
  );
};

export default Home;
