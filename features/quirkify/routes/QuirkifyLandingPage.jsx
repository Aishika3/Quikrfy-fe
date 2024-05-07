import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { ProductDemo } from "../components/ProductDemo";
import { Services } from "../components/Services";
import { Footer } from "../components/Footer";

export const QuirkifyLandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductDemo />
      <Services />
      <Footer />
    </>
  );
};
