/*import HeroImage from "../assets/Hero.svg";
import { Button } from "components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Hero = ({
  callToAcion = (
    <Link to="quirkfy" className="self-start md:mt-8 lg:text-xl">
    <Button className="text-md">Contact Us</Button>
  </Link>
  ),
}) => {
  return (
    <section
      id="#hero"
      className="relative flex justify-center items-center flex-col px-10 py-7 gap-10 md:flex-row lg:pt-0 lg:px-14"
    >
      <img src={HeroImage} alt="" className="md:w-[45%]" />
      <section className="flex flex-col gap-4 md:gap-2">
        <h1 className="text-2xl text-slate-800 md:text-3xl lg:text-4xl">
          Explore our Flagship Product <br />
          <span className="font-bold text-primary-dark">
            Allio
          </span>
        </h1>
        <p className="leading-normal text-md text-slate-700 lg:text-lg">
            Experience Unprecedented Growth: Your One-Stop Business Solution with All Our Services in One Powerful Tech Suite
        </p>
        
        {callToAcion}
      </section>
    </section>
  );
};

Hero.propTypes = {
  callToAcion: PropTypes.node,
};
*/
import HeroImage from "../assets/Hero.svg";
import { Button } from "components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Hero = (
  {
    callToAcion = (
      <Link to="quirkfy/hero" className="self-start md:mt-8 lg:text-xl">
           
      </Link>
    ),
  }
  
) => {
  return (
    <section
      id="hero"
      className="relative flex justify-center items-center flex-col px-10 py-7 gap-10 md:flex-row lg:pt-0 lg:px-14"
    >
      <img src={HeroImage} alt="" className="md:w-[45%]" />
      <section className="flex flex-col gap-4 md:gap-2">
        <h1 className="text-2xl text-slate-800 md:text-3xl lg:text-4xl">
          Explore our Flagship Product <br />
          <span className="font-bold text-primary-dark">
            Allio
          </span>
        </h1>
        <p className="leading-normal text-md text-slate-700 lg:text-lg">
          Experience Unprecedented Growth: Your One-Stop Business Solution with All Our Services in One Powerful Tech Suite
        </p>
        {callToAcion}
      </section>
    </section>
  );
};
Hero.propTypes = {
  callToAcion: PropTypes.node,
};

