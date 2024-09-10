import React from "react";
import { Button } from "@material-tailwind/react";
const Section1 = ({title,paragraph,Img}) => {
  const gradientStyle = {
    backgroundImage:
      "linear-gradient(to right bottom, #243ea1, #283aa2, #2d36a3, #3231a3, #372ca3, #3f2ba4, #462aa6, #4d28a7, #572baa, #602eae, #6932b1, #7235b4)",
  };
  return (
    <div className="pb-16" style={gradientStyle}>
      <div className="relative">
        <div className="rounded-full h-[15rem] w-[15rem]  bg-[#4e35ab] absolute z-4 top-0 right-[0px] mt-[-7rem] opacity-[0.5]"></div>
      </div>
      <div className="flex justify-center  ">
        <div className="container max-w-[1317px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:items-center">
            <div className="ml-8 order-2 md:order-1 ">
              <h1 className="mt-[4rem] md:text-[3.7rem] text-[40px] font-bold md:leading-[60px] leading-[35px] text-[white] ">
                {" "}
                {title}
              </h1>
              <p className="text-[1.3rem] text-[#ffffff] mt-6">
                {paragraph}
              </p>
            
              <div className="links text-[.75rem] font-semibold text-[#dbdbdb] mt-2"></div>
              <p className="text-[1rem] font-semibold text-white mt-5">
                {" "}
                Excited 🤩! Talk to our experts.
              </p>
              <Button
                className="py-1.5 relative z-[444] px-4 text-sm font-semibold text-[white] border-[white] border rounded hover:bg-gradient-hover hover:border-none mt-4"
                variant="outlined"
              >
                Get a Quote
              </Button>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div>
                <img className="mt-16 " src={Img} alt="main" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative ">
        <div className="rounded-full h-[15rem] w-[15rem]  bg-[#4e35ab] absolute ml-[-4rem] mb-[-4rem] z-4 bottom-[0] left-[0px] mt-[-5rem] opacity-[0.5]"></div>
      </div>
    </div>
  );
};

export default Section1;
