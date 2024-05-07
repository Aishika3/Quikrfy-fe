/*import { Service } from "./Service";
import Almarketing from "../assets/al marketing and content writing.jpg";
import WhatsappAutomatorImage from "../assets/WhatsappAutomator.svg";
import MobileApp from "../assets/MobileApp.svg";
import DataAnalysis from "../assets/DataAnalysis.svg";
import WebsiteDesigner from "../assets/WebsiteDesigner.svg";
import EmailAutomater from "../assets/Email_campaign_pana.svg";

export const Services = () => {
  const services = [
    {
      title: (
        <>
          Quirkfy
          <span className="font-bold text-primary-dark ml-1">
              Automated WhatsApp Marketing and Communication Solution
          </span>
        </>
      ),
      description:
        "WhatsApp automated system for automating your WhatsApp communications, ensuring timely responses and efficient customer service. A powerful tool for managing and streamlining your business communications.",
      linkText: "",
      url: "mailto:anishde85@gmail.com",
      coverImage: WhatsappAutomatorImage,
      id:"whatsappAutomator"
    },
    {
      title: (
        <>
          QuirkMarketing
          <span className="font-bold text-primary-dark ml-1">
            - Al marketing and Content writing
          </span>
        </>
      ),
      description:
        "Effective marketing and content writing combine to create persuasive and engaging messages that captivate audiences and drive business success-build by ChatGPT API",
      linkText: "",
      url: "mailto:anishde85@gmail.com",
      coverImage: Almarketing,
      id:"emailautomater"
    },
    {
      title: (
        <>
          QuirkMail
          <span className="font-bold text-primary-dark ml-1">
            - Automated Email Marketing Solution
          </span>
        </>
      ),
      description:
        "Streamlining your customer outreach with targeted, automated email campaigns.",
      linkText: "",
      url: "showcase/email-marketing",
      coverImage: EmailAutomater,
      id:"emailautomater"
    },
    {
      title: (
        <>
          Quirkfy
          <span className="font-bold text-primary-dark ml-1">
            Website Designer
          </span>
        </>
      ),
      description:
        "Website for providing a seamless platform for creating professional and visually appealing websites. It's designed to be user-friendly, allowing even those with no coding experience to craft a compelling online presence.",
      linkText: "",
      url: "showcase/website",
      coverImage: WebsiteDesigner,
      id:"websiteDesigner"
    },
    {
      title: (
        <>
          Quirkfy
          <span className="font-bold text-primary-dark ml-1">
            Data Analysis Service
          </span>
        </>
      ),
      description:
        "Data Analysis tool which helps businesses understand their customer behavior, preferences, and trends, providing valuable insights for strategic decision-making and targeted marketing campaigns.",
      linkText: "",
      url: "mailto:anishde85@gmail.com",
      coverImage: DataAnalysis,
      id:"dataAnalysis"
    },
    {
      title: (
        <>
          Quirkfy
          <span className="font-bold text-primary-dark ml-1">Mobile App</span>
        </>
      ),
      description:
        "Mobile application designed to foster customer interaction and engagement. It provides a platform for real-time communication, feedback, and updates, enhancing the customer experience and fostering loyalty.",
      linkText: "",
      url: "showcase/mobile-app",
      coverImage: MobileApp,
      id:"mobileApp"
    },
  ];
  return (
    <main className="flex flex-col gap-5 border-t-4 border-primary-normal lg:px-20">
      <h1 className="text-5xl px-8 text-center -mb-8 mt-8">
        Our <span className="font-semibold text-primary-dark ml-1">Services</span>
      </h1>
      {services.map((service,index) => {
        return (
          <Service
            key={service.title}
            coverImage={service.coverImage}
            linkText={service.linkText}
            title={service.title}
            url={service.url}
            description={service.description}
            index={index}
            id={service.id}
          />
        );
      })}
    </main>
  );
};
*/
import { Service } from "./Service";
import Almarketing from "../assets/al marketing and content writing.jpg";
import WhatsappAutomatorImage from "../assets/WhatsappAutomator.svg";
//import MobileApp from "../assets/MobileApp.svg";
//import DataAnalysis from "../assets/DataAnalysis.svg";
//import WebsiteDesigner from "../assets/WebsiteDesigner.svg";
import EmailAutomater from "../assets/Email_campaign_pana.svg";

export const Services = () => {
  const services = [
    {
      title: (
        <>
          AllioChat-
          <span className="font-bold text-primary-dark ml-1">
              Automated WhatsApp Marketing and Communication Solution
          </span>
        </>
      ),
      description:
        "WhatsApp automated system for automating your WhatsApp communications, ensuring timely responses and efficient customer service. A powerful tool for managing and streamlining your business communications.",
      linkText: "",
      url: "mailto:anishde85@gmail.com",
      coverImage: WhatsappAutomatorImage,
      id:"whatsappAutomator"
    },
    {
      title: (
        <>
          AllioMarketing
          <span className="font-bold text-primary-dark ml-1">
            - Al marketing and Content writing
          </span>
        </>
      ),
      description:
        "Effective marketing and content writing combine to create persuasive and engaging messages that captivate audiences and drive business success-build by ChatGPT API",
      linkText: "",
      url: "mailto:anishde85@gmail.com",
      coverImage: Almarketing,
      id:"emailautomater"
    },
    {
      title: (
        <>
          AllioMail
          <span className="font-bold text-primary-dark ml-1">
            - Automated Email Marketing Solution
          </span>
        </>
      ),
      description:
        "Streamlining your customer outreach with targeted, automated email campaigns.",
      linkText: "",
      url: "showcase/email-marketing",
      coverImage: EmailAutomater,
      id:"emailautomater"
    },
  ];
  return (
    <main className="flex flex-col gap-5 border-t-4 border-primary-normal lg:px-20">
      <h1 className="text-5xl px-8 text-center -mb-8 mt-8">
        Our <span className="font-semibold text-primary-dark ml-1">Services</span>
      </h1>
      {services.map((service,index) => {
        return (
          <Service
            key={service.title}
            coverImage={service.coverImage}
            linkText={service.linkText}
            title={service.title}
            url={service.url}
            description={service.description}
            index={index}
            id={service.id}
          />
        );
      })}
    </main>
  );
};