import { Button } from "components";
import T1 from "../assets/BUSINESS APP.svg";
import T2 from "../assets/BUSINESS APP LOGIN.svg";
import T3 from "../assets/E COMMERCE APP.svg";
import MobileAppShowCase from "../assets/MobileAppShowcase.svg"

export const MobileAppShowcase = () => {
  const Templates = [T1, T2, T3];
  return (
    <section>
      <section className="px-8 flex flex-col  md:flex-row md:items-center lg:px-14 lg:gap-10">
        <div className="flex flex-col gap-3  lg:max-w-xl">
          <h1 className="text-3xl font-semibold">
            Discover the world&apos;s top creative{" "}
            <span className="text-primary-dark">App </span>
            UI Layouts below
          </h1>
        </div>
        <img
          src={MobileAppShowCase}
          alt="Website"
          className="md:w-1/2 max-w-[500px]"
        />
      </section>
      <section className="mt-4 mb-6 px-10 flex flex-wrap justify-around gap-10">
        {Templates.map((template, index) => (
          <article
            className="p-2 border-2 border-primary-normal min-w-[400px] flex-1 max-w-[600px] lg:max-w-[450px] rounded-md overflow-hidden"
            key={index}
          >
            <img src={template} alt="" className="w-full"/>
          </article>
        ))}
      </section>
    </section>
  );
};
