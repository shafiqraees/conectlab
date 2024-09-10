import React from "react";
import Section1 from "../../components/services/section1";
import Img from "../../assets/hero-product-engineering.webp";
import Img2 from "../../assets/18.webp";
import Img3 from "../../assets/15.webp";
import Img4 from "../../assets/16.webp";
import Img5 from "../../assets/17.webp";
import Img6 from "../../assets/why-chose-us.webp";
import Img7 from "../../assets/what-we-can-do.webp";

import Card from "../../components/services/card";
import { servicesData } from "../../components/services/cardData";
import ProductsWebuild from "../../components/productsWeBuild/productsWebuild";
import OurCapabilities from "../../components/ourCapabilities/ourCapabailities";
import Carousell from "../../components/carousel/carousel";

const ProductEngineering = () => {
  const title = "Product Engineering";
  const paragraph =
    "We provide enterprise end-to-end product development, customization, and integration to build great software solutions for your business.";
  return (
    <div className="mainsss">
      <Section1 title={title} paragraph={paragraph} Img={Img} />
      <div className=" md:h-full h-full bg-[#fdfdfe]">
        <div className="flex justify-center">
          <div className="container max-w-[1200px]">
            <div className="flex justify-between">
              <span className="rounded-full h-[1rem] w-[1rem] bg-[#ebc6d8]"></span>
              <h1 className="text-[#312852] text-center md:text-[3rem] lg:text-[3rem] text-[2rem] font-bold relative z-[333] mt-12">
                How{" "}
                <span className="relative inline-block">
                  <span className="relative z-[1]">Product Engineering</span>
                  <span className="absolute bottom-0 left-0 w-full h-1.5 bg-[#8ad4f4] z-[-1]"></span>
                </span>{" "}
                Services can help your business thrive.
              </h1>
              <span className="rounded-full h-[1rem] w-[1rem] bg-[#ebc6d8]"></span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 mt-16 items-center">
              {/* Left Text Section */}
              <div className=" mb-8 md:mb-0">
                <h2 className="text-2xl font-semibold mb-4 text-[#312852]">
                  We offer agile, scalable, and cost-effective Product
                  Engineering Services to improve product quality and enhance
                  user experience.
                </h2>
                <ul className="space-y-3 text-[#575365] mt-6">
                  <li className="flex items-center">
                    <span className="bg-purple-100 text-purple-500 rounded-full p-1 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    Strategic consulting
                  </li>
                  <li className="flex items-center">
                    <span className="bg-purple-100 text-purple-500 rounded-full p-1 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    Custom product/ platform development
                  </li>
                  <li className="flex items-center">
                    <span className="bg-purple-100 text-purple-500 rounded-full p-1 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    Product testing
                  </li>
                  <li className="flex items-center">
                    <span className="bg-purple-100 text-purple-500 rounded-full p-1 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    Support and maintenance
                  </li>
                  <li className="flex items-center">
                    <span className="bg-purple-100 text-purple-500 rounded-full p-1 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    Product marketing services
                  </li>
                  <li className="flex items-center">
                    <span className="bg-purple-100 text-purple-500 rounded-full p-1 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    Technology upgrade
                  </li>
                </ul>
              </div>

              {/* Right Cards Section */}
              <div className=" space-y-4 flex justify-center">
                <div className=" space-y-4">
                  <div className="flex items-center p-4 bg-white shadow-lg rounded-md">
                    <span className="bg-[#5f4ca4] text-white p-1 rounded mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-semibold">
                        Product Engineering Services
                      </h3>
                      <p className="text-sm text-gray-500">
                        From the start to the end of the product lifecycle.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-white shadow-md rounded-md">
                    <span className="bg-[#5f4ca4] text-white p-1 rounded mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-semibold">
                        Product Engineering Metrics
                      </h3>
                      <p className="text-sm text-gray-500">
                        The matrix is used by the team to detect problems.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-white shadow-md rounded-md">
                    <span className="bg-[#5f4ca4] text-white p-1 rounded mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-semibold">
                        Product Engineering Team
                      </h3>
                      <p className="text-sm text-gray-500">
                        Marketing, Management, Operations, Sales, etc.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-white shadow-md rounded-md">
                    <span className="bg-[#5f4ca4] text-white p-1 rounded mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-semibold">
                        Product Engineering Company
                      </h3>
                      <p className="text-sm text-gray-500">
                        Covering the full span of product development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className=" text-[#5f4ca4] text-[1.2rem] my-12 border-l-4 pl-3 border-l-[#5f4ca4]">
              We rapidly deliver feature-rich software solutions to suit any
              enterprise ecosystem with our deep technical and domain expertise.{" "}
            </p>

            <div className="flex justify-between">
              <span className="rounded-full h-[1rem] w-[1rem] bg-[#ebc6d8]"></span>
              <h1 className="text-[#312852] text-center md:text-[3rem] lg:text-[3rem] text-[2rem] font-bold relative z-[333] mt-12">
                Our{" "}
                <span className="before:bg-[#8ad4f4] before:content-['']  lg:inline-block md:inline-block before:absolute before:bottom-2 before:right-[0rem] md:before:w-[190px] before:h-1.5 before:bottom-[14px] before:z-[-1]">
                  Services
                </span>
              </h1>
              <span className="rounded-full h-[1rem] w-[1rem] bg-[#ebc6d8]"></span>
            </div>
            <p className="text-center text-[#6d6685] text-[1.3rem] font-[400] mt-5">
              Equipped with diverse industry experience, WebReinvent solves
              complex challenges and re-engineers products custom-made to suit
              each enterprise ecosystem. Our team of dedicated domain experts
              and our wide-ranging portfolio meet enterprise needs from
              consulting, to designing the UI, to developing, testing, and
              deploying the product. We create cost-effective, end-to-end
              product engineering solutions that increase speed-to-market,
              minimize operational and production costs, and enhance ROI. Our
              methodical processes are backed with proven best practices and
              complete transparency.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
              {servicesData.map((item, index) => (
                <Card
                  key={index}
                  image={item.imageUrl}
                  title={item.title}
                  text={item.description}
                />
              ))}
            </div>
            <div className="flex justify-center mt-5">
              <span className="rounded-full h-[1rem] w-[1rem] bg-[#ff808e]"></span>
            </div>
            <div className="text">
              <h1 className="text-[#312852] text-center md:text-[3rem] lg:text-[3rem] text-[2rem] font-bold relative z-[333] mt-12">
                Your Partner in Product Development
              </h1>
              <p className="text-center text-[#6d6685] text-[1.3rem] font-[400] mt-2">
                Let’s face it, the world has become digital, and software
                services have rapidly evolved from lifeless tools to intuitive
                experiences.
              </p>
            </div>
            <div
              style={{ backgroundImage: `url(${Img2})` }}
              className="bg-cover bg-center  w-full mt-8 rounded-xl p-5 bg-[#5f4ca4] h-[400px]"
            >
              <h1 className="text-[3rem] text-white font-bold">Who are we?</h1>
              <p className="text-[#FFFFFFE6] text-[1.3rem] w-[70%]">
                The emphasis on domain expertise, augmented by the latest
                technology available in the market, we provide high performance
                & scalable engineering, faster time-to-market, superior and
                secure performance, and improved RoI.
              </p>
              <p className="text-white text-[1.3rem] w-[70%] mt-5">
                We are strongly positioned as your agile software development
                partner to keep up with these changing dynamics and accelerate
                customer acquisition.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
              <div
                style={{ backgroundImage: `url(${Img3})` }}
                className="bg-cover bg-center  w-full mt-8 rounded-xl p-5 bg-[#5f4ca4] h-[250px]"
              >
                <h1 className="text-[3rem] text-white font-extrabold">10+</h1>
                <p className="text-[#FFFFFFE6] text-[1.3rem] w-[70%]">
                  Years in Business
                </p>
              </div>
              <div
                style={{ backgroundImage: `url(${Img4})` }}
                className="bg-cover bg-center  w-full mt-8 rounded-xl p-5 bg-[#5f4ca4] h-[250px]"
              >
                <h1 className="text-[3rem] text-white font-extrabold">90+</h1>
                <p className="text-[#FFFFFFE6] text-[1.3rem] w-[70%]">
                  Successful Projects
                </p>
              </div>
              <div
                style={{ backgroundImage: `url(${Img5})` }}
                className="bg-cover bg-center  w-full mt-8 rounded-xl p-5 bg-[#5f4ca4] h-[250px]"
              >
                <h1 className="text-[3rem] text-white font-extrabold">150+</h1>
                <p className="text-[#FFFFFFE6] text-[1.3rem] w-[70%]">
                  In-House Talents
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-32">
          <div className="bg-[#f2f2fd] h-[20rem] w-[20rem] rounded-full absolute"></div>
          <div className="bg-[#e9f5fc] h-[20rem] w-[20rem] rounded-full absolute right-0 top-[8rem]"></div>

          <div className="flex justify-center">
            <div className="container max-w-[1200px]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-12">
                {/* {COLUMN 1} */}
                <div className="column1">
                  <div className="flex justify-between">
                    <h1 className="text-[#312852] text-center md:text-[3rem] lg:text-[3rem] text-[2rem] font-bold relative z-[333] mt-12">
                      Why{" "}
                      <span className="before:bg-[#8ad4f4] before:content-['']  lg:inline-block md:inline-block before:absolute before:bottom-2 before:right-[0rem] md:before:w-[190px] before:h-1.5 before:bottom-[14px] before:z-[-1]">
                        choose us?
                      </span>
                    </h1>
                    <span className="rounded-full h-[1rem] w-[1rem] bg-[#ebc6d8]"></span>
                  </div>
                  <div className="text relative z-[333]">
                    <p className=" text-[#6d6685] text-[1.3rem] font-[400] mt-2 ">
                      Custom Product Development done right.
                    </p>
                    <div className="flex justify-between">
                      <ul className="space-y-3 text-[#575365] mt-6">
                        <li className="flex items-center">
                          <span className="bg-purple-100 text-purple-500 rounded-full p-1 mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                          Fast and proficient services
                        </li>
                        <li className="flex items-center">
                          <span className="bg-purple-100 text-purple-500 rounded-full p-1 mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                          Cutting-edge technologiest
                        </li>
                      </ul>
                      <ul className="space-y-3 text-[#575365] mt-6">
                        <li className="flex items-center">
                          <span className="bg-purple-100 text-purple-500 rounded-full p-1 mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                          Increased RoI
                        </li>
                        <li className="flex items-center">
                          <span className="bg-purple-100 text-purple-500 rounded-full p-1 mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                          Support and maintenance
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* {COLUMN 2} */}
                <div className="column2 relative z-[333] flex justify-end">
                  <img className="clap rounded-xl" src={Img6} alt="clap" />
                  <div className="absolute bg-white p-3 border-l-4 border-l-[#5f4ca4] top-[50%] rounded right-[115px]">
                    <h1>Let’s start together</h1>
                    <p>
                      Ready to hire us?{" "}
                      <span className="underline">Click here </span>and let’s
                      get cracking!
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-32 mb-16">
                <div className="column1">
                  <img src={Img7} alt="abc" />
                </div>
                <div>
                  <div className=" ">
                    <span className="rounded-full h-[1rem] w-[1rem] bg-[#ebc6d8]"></span>
                    <h1 className="text-[#312852] leading-tight md:text-[3rem] lg:text-[3rem] text-[2rem] font-extrabold relative z-[333] mt-12">
                      What we can do for{" "}
                      <span className="before:bg-[#8ad4f4] before:content-['']  lg:inline-block md:inline-block before:absolute  before:right-[16rem] md:before:w-[190px] before:h-1.5 before:top-[114px] before:z-[-1]">
                        your business.
                      </span>
                    </h1>
                    <span className="rounded-full h-[1rem] w-[1rem] bg-[#ebc6d8]"></span>
                  </div>
                  <p className=" text-[#6d6685] text-[1.3rem] font-[400] mt-2">
                    We connect innovative applications with customer engagement
                    and help businesses maximize productivity by creating
                    transformative design, development, and product engineering
                    approaches for the digitally savvy world. We also modernize
                    product architecture and implement new features and
                    functionalities for existing products.
                  </p>
                  <div className="flex justify-between">
                      <ul className="space-y-3 text-[#575365] mt-6">
                        <li className="flex items-center">
                          <span className="bg-purple-100 text-purple-500 rounded-full p-1 mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                          Full-stack development
                        </li>
                        <li className="flex items-center">
                          <span className="bg-purple-100 text-purple-500 rounded-full p-1 mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                          Intuitive user experience
                        </li>
                        <li className="flex items-center">
                          <span className="bg-purple-100 text-purple-500 rounded-full p-1 mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                          Full product integration
                        </li>
                      </ul>
                      <ul className="space-y-3 text-[#575365] mt-6">
                        <li className="flex items-center">
                          <span className="bg-purple-100 text-purple-500 rounded-full p-1 mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                          Cross-platform solutions
                        </li>
                        <li className="flex items-center">
                          <span className="bg-purple-100 text-purple-500 rounded-full p-1 mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                          Full product integration
                        </li>
                        <li className="flex items-center">
                          <span className="bg-purple-100 text-purple-500 rounded-full p-1 mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                          Fast response time
                        </li>
                      </ul>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductsWebuild/>
      <OurCapabilities/>
      <Carousell/>
    </div>

  );
};

export default ProductEngineering;
