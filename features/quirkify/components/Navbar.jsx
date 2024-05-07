import { Button, Dropdown } from "components";
import { useRef, useState } from "react";
import Logo from "../assets/up (2).png"
import { Link } from "react-router-dom";
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const DropDownItems = [
    {
      title: "Solutions",
      children: [
        {
          title: "Allio Website Designer",
          link: "#websiteDesigner",
          description:
            "This tool provides a seamless platform for creating professional and visually appealing websites",
        },
        {
          title: "Allio Email Automater",
          link: "#emailautomater",
          description:
            "Streamlining your customer outreach with targeted, automated email campaigns.",
        },
        {
          title: "Allio WhatsApp Automator",
          link: "#whatsappAutomator",
          description:
            "This sophisticated system automates your WhatsApp communications, ensuring timely responses and efficient customer service.",
        },
        {
          title: "Allio Mobile App",
          link: "#mobileApp",
          description:
            "This mobile application is designed to foster customer interaction and engagement.",
        },
        {
          title: "Allio Data Analysis Service",
          link: "#dataAnalysis",
          description:
            "This advanced tool offers in-depth customer data analysis.",
        },
      ],
    },
  ];
  const animateButton = () => {
    const line1 = buttonRef.current.childNodes[0];
    const line2 = buttonRef.current.childNodes[1];
    if (isMenuOpen) {
      line1.style.margin = `0`;
      line2.style.margin = `0`;
      line1.style.transform = `rotate(0)`;
      line2.style.transform = `rotate(0)`;
    } else {
      line1.style.margin = `-3.5px`;
      line2.style.margin = `-3.5px`;
      line1.style.transform = `rotate(-45deg)`;
      line2.style.transform = `rotate(45deg)`;
    }
  };
  const openMenu = () => {
    if (isMenuOpen) {
      menuRef.current.style.transform = `translateY(-150%)`;
      // menuRef.current.style.opacity = `0`;
    } else {
      menuRef.current.style.transform = `translateY(0)`;
      // menuRef.current.style.opacity = `100%`;
    }
    animateButton();
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <>
      <nav className="py-4 z-[100] px-6 flex justify-between items-center relative md:pt-8 lg:px-14">
      <img
  src={Logo}
  alt=""
  style={{
    width: "100px", // Set the width of the image
    height: "auto", // Maintain the aspect ratio by adjusting the height automatically
    borderRadius: "50%", // Apply a circular border to the image
    //boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Add a box shadow to the image
  }}
/>

        <section className="gap-6 text-lg hidden md:flex">
          <ul className="flex gap-6">
            <Link to="/" className="hover:text-primary-dark">
              <li>Home</li>
            </Link>
          </ul>
          {DropDownItems.map((item) => {
            return (
              <Dropdown
                buttonText={item.title}
                items={item.children}
                key={item.title}
              />
            );
          })}
        </section>
        <div className="flex gap-3 items-center">
          <Button className="text-sm px-6 py-2 lg:text-lg"><a href="mailto:anishde85@gmail.com">MAIL US</a></Button>
          <Button
            className="flex flex-col gap-1.5 bg-transparent hover:bg-transparent px-0 md:hidden"
            onClick={openMenu}
            ref={buttonRef}
          >
            <div className="w-6 h-0.5 bg-primary-dark  origin-center transition-all"></div>
            <div className="w-6 h-0.5 bg-primary-dark origin-center transition-all"></div>
          </Button>
        </div>
      </nav>
      <section
        ref={menuRef}
        className="-translate-y-[150%] bg-white text-base gap-2 z-10 flex flex-col absolute w-full left-0 top-16 px-4 shadow-lg pb-4 transition-all duration-300 ease-in-out"
      >
        <ul className="flex flex-col gap-2">
          <a href="" className="hover:bg-primary-light p-2 px-4 rounded-md">
            <li>Home</li>
          </a>
          <a href="" className="hover:bg-primary-light p-2 px-4 rounded-md">
            <li>Why ALLIO</li>
          </a>
          <a href="" className="hover:bg-primary-light p-2 px-4 rounded-md">
            <li>Pricing</li>
          </a>
        </ul>
        {DropDownItems.map((item) => {
          return (
            <Dropdown
              buttonText={item.title}
              items={item.children}
              key={item.title}
              itemWrapperClassName="flex-col left-0 translate-x-0 w-full relative"
              buttonClassName="hover:bg-primary-light p-2 px-4 rounded-md w-full"
              dropDownItemHeadingClassName="text-base"
              dropDownItemParaClassName="text-sm"
            />
          );
        })}
      </section>
    </>
  );
};
