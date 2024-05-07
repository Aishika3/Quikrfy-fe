import { Button } from "components";
import EmailTemplateShowCase from "../assets/EmailTemplateShowCase.svg";
import T1 from "../assets/emailTemplate-2.jpeg";
import T2 from "../assets/emailTemplate-3.jpeg";
import T3 from "../assets/emailTemplate-4.jpeg";
import T4 from "../assets/emailTemplate-5.jpeg";

export const EmailMarketingShowcase = () => {
  const Templates = [T1, T2, T3, T4];
  return (
    <section>
      <section className="px-8 flex flex-col  md:flex-row md:items-center lg:px-14 lg:gap-10">
        <div className="flex flex-col gap-3  lg:max-w-xl">
          <h1 className="text-3xl font-semibold">
            Engage your audience effectively with Innovating {" "}
            <span className="text-primary-dark">Email </span>
            templates, detailed below.
          </h1>
        </div>
        <img
          src={EmailTemplateShowCase}
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
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <a 
          className="self-start md:mt-8 lg:text-xl"
          href="mailto:anishde85@gmail.com"
        >
          <Button className="text-md">Mail us for Customized templates</Button>
        </a>
      </div>
    </section>
    
  );
};
