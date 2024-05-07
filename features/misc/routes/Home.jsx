import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { Services } from "features/services";
import { LogoSlider } from "features/LogoSlider/components/LogoSlider";
//import { ExtendedServices } from "../../extended_services/components/ExtendedServices";
import { Hero as QuirkfyHero } from "features/quirkify";
import "./Home.css";
import { Link } from "react-router-dom";
import { Button } from "components";

export const Home = () => {
  return (
    <div className="home">
      <section className="opener">
        <Navbar />
        <Hero />
      </section>
      <Services />
      <LogoSlider/>
      <QuirkfyHero
       callToAcion={
        <Link to="quirkfy" className="self-start md:mt-8 lg:text-xl" >
          <Button className="text-md">Know More</Button>
        </Link>
      }/>
      <Footer />
    </div>
  );
};
