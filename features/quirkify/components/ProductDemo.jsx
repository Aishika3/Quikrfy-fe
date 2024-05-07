import DemoImage from "../assets/Demo.svg";
export const ProductDemo = () => {
  return (
    <section className="px-8 mt-8 flex flex-col gap-3 md:flex-row md:items-center lg:px-20">
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl md:text-3xl">
          <span className="uppercase font-bold text-primary-dark">
            Hassle-Free
          </span>{" "}
          Tech Suite for Empowering Your Business
        </h2>
        <p className="text-md text-slate-800 md:text-lg">
          A holistic solution meticulously crafted to address the unique
          challenges faced by budding businesses in the digital age.
        </p>
      </section>
      <img src={DemoImage} alt="Demo" className="md:w-1/2"/>
    </section>
  );
};
