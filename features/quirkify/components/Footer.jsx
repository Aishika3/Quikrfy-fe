import Logo from "../assets/up (2).png";
import { Button } from "components";
import { BsTwitter, BsLinkedin } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-5% to-95% rounded-tr-3xl px-8 mt-10 py-10 pt-20 flex flex-col from-primary-normal">
      <section className="flex flex-col gap-4">
        <h1 className="text-white text-3xl font-semibold">
          Double your Sales with Allio
        </h1>
        <Button className="self-start">
          <a href="mailto:anishde85@gmail.com">Book Demo</a>
        </Button>
      </section>
      <section className="flex flex-col gap-3 mt-5">
      <img
  src={Logo}
  alt=""
  style={{
    width: "150px", 
    height: "auto", 
    borderRadius: "50%", 
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", 
  }}
/>

        <p className="text-xl text-slate-700 lg:w-2/3">
          Enjoy explosive growth with WhatsApp Commerce, live chat, and
          Automated Emails. Exclusively for rapidly scaling Ecommerce brands
        </p>
        <article className="flex gap-3">
          <a href="https://twitter.com/Automatiks">
            <BsTwitter size={28} className="text-primary-dark" />
          </a>
          <a href="https://www.linkedin.com/company/automatiks/">
            <BsLinkedin size={28} className="text-primary-dark" />
          </a>
        </article>
      </section>
      <section className="mt-5 flex flex-col gap-5 md:flex-row lg:mt-10 lg:gap-20">
        <section>
          <ul>
            <li className="text-lg lg:text-xl hover:text-primary-dark">
              <a href="https://automatiks.in/">About Us</a>
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl mb-2 lg:text-3xl">Solutions</h2>
          <ul>
            <li className="text-md lg:text-lg hover:text-primary-dark">
              <a href="#whatsappAutomator">WhatsApp Automator</a>
            </li>
            <li className="text-md lg:text-lg hover:text-primary-dark">
              <a href="#emailautomater">Email Auto Marketer</a>
            </li>
            <li className="text-md lg:text-lg hover:text-primary-dark">
              <a href="#dataAnalysis">Data Analysis</a>
            </li>
            <li className="text-md lg:text-lg hover:text-primary-dark">
              <a href="#websiteDesigner">Website Designer</a>
            </li>
            <li className="text-md lg:text-lg hover:text-primary-dark">
              <a href="#mobileApp">Mobile App Builder</a>
            </li>
          </ul>
        </section>
      </section>
      <h2 className="mt-6 text-slate-700">@ Copyright 2023, Allio</h2>
    </footer>
  );
};
