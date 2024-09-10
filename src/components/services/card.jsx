import React from "react";
import { useLocation } from "react-router-dom";

const Card = ({ image, title, text }) => {
  const location = useLocation();
  return (
    <div
      className={`max-w-md mx-auto rounded-xl overflow-hidden md:max-w-2xl ${
        location.pathname !== "/services/saas-product-development"
          ? "border-2"
          : ""
      }`}
    >
      {image ? (
        <div className="">
          <img
            className={` object-cover ${
              location.pathname !== "/services/saas-product-development"
                ? "h-48 w-full"
                : "h-[64px] w-[64px]"
            }`}
            src={image}
            alt={title}
          />
        </div>
      ) : (
        ""
      )}
      <div className="md:flex">
        <div
          className={`${
            location.pathname === "/services/saas-product-development"
              ? "p-0 my-3"
              : "p-8"
          }`}
        >
          <h3 className="uppercase tracking-wide text-[1rem] text-[#312852] font-bold">
            {title}
          </h3>
          <p className="mt-2 text-[#575365]">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
