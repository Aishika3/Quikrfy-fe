import { Button } from "components";
import Websiteshowcase from "../assets/WebsiteShowcase.svg";
import T1 from "../assets/Business website.svg";
import T2 from "../assets/E-Commerce.svg";
import T3 from "../assets/ONLINE COURSES log in.svg";
import T4 from "../assets/ONLINE OURSES course.svg";
import T5 from "../assets/ONLINE COURSES.svg";

export const WebsiteShowcase = () => {
  const Templates = [T1, T2, T3, T4, T5];
  return (
    <section>
      <section className="px-8 flex flex-col  md:flex-row md:items-center lg:px-14 lg:gap-10">
        <div className="flex flex-col gap-3  lg:max-w-xl">
          <h1 className="text-3xl font-semibold">
            Discover the world&apos;s top creative{" "}
            <span className="text-primary-dark">Website </span>
            UI Layouts below
          </h1>
        </div>
        <img
          src={Websiteshowcase}
          alt="Website"
          className="md:w-1/2 max-w-[500px]"
        />
      </section>
      <section className="mt-4 mb-6 px-10 flex flex-wrap justify-around gap-10">
        {Templates.map((template, index) => (
          <article
            className=" border-2 border-primary-normal min-w-[400px] flex-1 max-w-[600px] lg:max-w-[450px] rounded-md overflow-hidden"
            key={index}
          >
            <img src={template} alt="" />
          </article>
        ))}
      </section>
    </section>
  );
};
