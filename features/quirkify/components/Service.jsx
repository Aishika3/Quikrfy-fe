import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";

import { BsArrowRight } from "react-icons/bs";
export const Service = ({
  coverImage,
  title,
  description,
  url,
  altText,
  index,
  id = "",
}) => {
  return (
    <section
      id={id}
      className={twMerge(
        "flex flex-col gap-3 px-8 my-4 md:mt-10 md:items-center",
        index % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      <img src={coverImage} alt={altText} className="md:w-1/2" />
      <section className="flex flex-col items-start gap-4 justify-center">
        <h1 className="text-3xl">{title}</h1>
        <p className="text-lg text-slate-800">{description}</p>
        <Link
          to={url}
          className="flex gap-2 items-end text-lg text-slate-800 underline underline-offset-8 font-medium"
        >
          Learn More <BsArrowRight size={25} className="font-medium" />
        </Link>
      </section>
    </section>
  );
};

Service.propTypes = {
  coverImage: PropTypes.string,
  title: PropTypes.node,
  description: PropTypes.string,
  url: PropTypes.string,
  altText: PropTypes.string,
  index: PropTypes.number,
  id: PropTypes.string,
};
