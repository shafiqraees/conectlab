import React from "react";
import Section1 from "../../components/services/section1";
import Img from "../../assets/hero-saas-product-development.webp";
import Img1 from "../../assets/what-saas-development.gif";
import Img2 from "../../assets/a.svg";
import Img3 from "../../assets/b.svg";
import Img4 from "../../assets/c.svg";
import Img5 from "../../assets/d.svg";
import Img6 from "../../assets/e.svg";
import Img7 from "../../assets/icon-project.svg";
import Img8 from "../../assets/qq.svg";
import { columns, SaasData, SaasProductData } from "../../components/services/cardData";
import Card from "../../components/services/card";
import VerticalStepper from "../../components/stepper/stepper";

const SaasProduct = () => {
  const title = "SaaS Product Development Service";
  const paragraph =
    "We build scalable SaaS products that solve real problems for our clients. Our mission is to make a difference in the world by building top-notch products that keep our customers happy.";
  return (
    <div className="main">
      <Section1 title={title} paragraph={paragraph} Img={Img} />
      <div className=" md:h-full h-full bg-[#fdfdfe]">
        <div className="flex justify-center">
          <div className="container max-w-[1200px] mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 items-center">
              <div className="column1">
                <img className="rounded-2xl" src={Img1} alt="design" />
              </div>
              <div className="column2">
                <div className="flex justify-between">
                  <span className="rounded-full h-[1rem] w-[1rem] bg-[#8ad4f4]"></span>
                  <div className="">
                    <h1 className="font-bold text-[#788797] text-[1.3rem]">
                      What is SaaS product development?
                    </h1>
                  </div>
                  <span className="rounded-full h-[1rem] w-[1rem] bg-[#ffdca3]"></span>
                </div>
                <h1 className="text-[#312852]  md:text-[2.5rem] lg:text-[2.5rem] text-[2rem] font-bold  mt-1 leading-tight">
                  Delivering applications over the web — as a service
                </h1>
                <p className=" text-[#6d6685] text-[1.3rem]  mt-2">
                  The SaaS model allows software users to access, use and pay
                  for the software online, without desktop installation or
                  maintenance issues. The SaaS offers a wide range of benefits:
                  cost-effective, flexible usage, easy deployment and
                  management.
                </p>
                <p className=" text-[#6d6685] text-[1.3rem]  mt-2">
                  A SaaS product is a centralized and on-demand software
                  solution that solves a problem. It's both practical and
                  innovative, and it provides your business with the competitive
                  edge you need to succeed.
                </p>
                <p className=" text-[#6d6685] text-[1.3rem]  mt-2">
                  SaaS product development is all about speed and agility. We
                  combine our agile methodology with rapid prototyping,
                  iterative design, and continuous testing to deliver products
                  that are built right the first time and ready for your
                  customers as soon as possible.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <span className="rounded-full h-[1rem] w-[1rem] bg-[#ff808e]"></span>
            </div>
            <div className="new section mt-16">
              <h1 className="text-[#312852] text-center  md:text-[2rem] lg:text-[2rem] text-[1.5rem] font-bold  mt-6 leading-tight">
                The following are some of the most popular SaaS applications.
              </h1>
              <p className=" text-[#6d6685] text-center text-[1.3rem]  mt-2">
                There are several popular and successful SaaS (Software as a
                Service) projects out there, and chances are you have already
                used at least some of them and more than once.
              </p>
              <div className="images mt-12">
                <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-3">
                  <div className="img flex justify-center border-2 rounded-xl ">
                    <img className="w-[128px] h-[128px]" src={Img2} alt="pic" />
                  </div>
                  <div className="img flex justify-center  border-2 rounded-xl ">
                    <img className="w-[128px] h-[128px]" src={Img3} alt="pic" />
                  </div>
                  <div className="img flex justify-center  border-2 rounded-xl ">
                    <img className="w-[128px] h-[128px]" src={Img4} alt="pic" />
                  </div>
                  <div className="img flex justify-center  border-2 rounded-xl ">
                    <img className="w-[128px] h-[128px]" src={Img5} alt="pic" />
                  </div>
                  <div className="img flex justify-center  border-2 rounded-xl ">
                    <img className="w-[128px] h-[128px]" src={Img6} alt="pic" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* NEW SECTION */}
      <div className="mt-5 bg-[#f4f2f9]">
        <div className="flex justify-between">
          <span className="rounded-full h-[1rem] w-[1rem] bg-[#8ad4f4]"></span>

          <div className="border-solid border-[.3125rem] border-[#ff808e] h-[2rem] w-[2rem] block rotate-45 "></div>
          <span className="rounded-full h-[1rem] w-[1rem] bg-[#ff808e]"></span>
        </div>
        <div className="flex justify-center">
          <div className="container max-w-[1200px] mt-3">
            <div className="">
              <h1 className="font-extrabold text-[#312852]  text-[2rem] text-center">
                Come explore the world of SaaS application development services
                at WebReinvent.
              </h1>
              <p className=" text-[#6d6685] text-center text-[1.3rem]  mt-2">
                WebReinvent is a SaaS application development company, focused
                on delivering quality software. Over the decade of delivering
                software product solutions to clients, Our full cycle product
                development services cover all stages of a product from
                conception to manufacturing. We are the one-stop-shop that
                provides you with all your SaaS development needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
                {SaasProductData.map((item, index) => (
                  <Card
                    key={index}
                    image={item.imageUrl}
                    title={item.title}
                    text={item.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f4f2f9] py-16 relative">
        <div className="bg-[#e8e8f9] h-[20rem] w-[20rem] rounded-full absolute left-0 bottom-0"></div>
        <div className="bg-[#e9f5fc] h-[20rem] w-[20rem] rounded-full absolute right-0 bottom-0"></div>
        <div className="bg-[red] ">
          <img
            className=" bg-[red] absolute p-4 left-[8%] top-[18%] h-[104px] z-[333]"
            src={Img7}
            alt="Icon"
          />
        </div>
        <div className="max-w-4xl mx-auto bg-white  shadow-xl overflow-hidden md:max-w-6xl relative ">
          <div className="md:flex">
            <div className="py-8 px-12">
              <div className="uppercase tracking-wide text-sm text-gray-500 font-semibold">
                SaaS or on-premise?
              </div>
              <a
                href="#"
                className="block mt-1 text-[#312852]  text-[2rem] leading-tight font-medium text-black "
              >
                The decision between SaaS and on-premise software development is
                always a tricky dilemma for enterprises.
              </a>
              <div className="h-1 w-8 bg-red-500 mt-2 mb-4"></div>
              <p className="mt-2 text-gray-500">
                They supply innovative solutions to every need, as they are
                always looking for some competitive advantage. Deciding between
                these two will largely depend on your business needs—which means
                it’s important to consider what kind of business you run.
              </p>
              <ul className="mt-4 space-y-2 text-gray-500">
                <li>✔️ The amount of data in the scope of the project.</li>
                <li>
                  ✔️ Does your business grow bigger every year, making you need
                  to upgrade storage facilities?
                </li>
                <li>
                  ✔️ How many of your users need to use the system at the same
                  time?
                </li>
                <li>
                  ✔️ How much money are you spending on hosting, infrastructure,
                  maintenance, etc.?
                </li>
                <li>
                  ✔️ Does the existing system have enough customizable features
                  to deal with the current requirements of the application?
                </li>
              </ul>
              <p className="mt-4 text-gray-500">
                SaaS applications can be a superior choice when developing a
                complex data set and the possibility of multiple users accessing
                the system simultaneously. With SaaS products discovery, you’ll
                get all the best products in one place. It will not only save
                you time, but money too.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* NEW SECTION 2*/}
      <div className=" bg-[#f4f2f9]">
        <div className="flex justify-between">
          <span className="rounded-full h-[1rem] w-[1rem] bg-[#8ad4f4]"></span>

          <div className="border-solid border-[.3125rem] border-[#ff808e] h-[2rem] w-[2rem] block rotate-45 "></div>
          <span className="rounded-full h-[1rem] w-[1rem] bg-[#ff808e]"></span>
        </div>
        <div className="flex justify-center">
          <div className="container max-w-[1200px] mt-3">
            <div className="">
              <h1 className="font-extrabold text-[#312852]  text-[2rem] text-center">
                Here's why SaaS is the best choice for your business:
              </h1>
              <p className=" text-[#6d6685] text-center text-[1.3rem]  mt-2">
                SaaS is a great solution for businesses that are growing or
                simply seeking a secure, stable option to manage their customer
                relationships.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
                {SaasData.map((item, index) => (
                  <Card
                    key={index}
                    image={item.imageUrl}
                    title={item.title}
                    text={item.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-gradient-to-b from-white to-[#f3f1f9] py-16 relative  "
        style={{
          boxShadow: "-25px 0 30px 0 rgba(0, 0, 0, 0.18)",
        }}
      >
        <div className="bg-[red] ">
          <img
            className=" bg-gradient-to-br absolute p-4 left-[7%] top-[18%] h-[104px] z-[333]"
            // className="bg-gradient-to-br"
            style={{
              background:
                "linear-gradient(to right bottom, #243ea1, #283aa2, #2d36a3, #3231a3, #372ca3, #3f2ba4, #462aa6, #4d28a7, #572baa, #602eae, #6932b1, #7235b4)",
            }}
            src={Img8}
            alt="Icon"
          />
        </div>
        <div
          className="max-w-4xl mx-auto bg-white   overflow-hidden md:max-w-6xl relative "
          style={{
            boxShadow: "-25px 0 30px 0 rgba(0, 0, 0, 0.18)",
          }}
        >
          <div className="md:flex">
            <div className="py-16 px-12">
              <div className="uppercase tracking-wide text-sm text-gray-500 font-semibold">
                Our expertise
              </div>
              <a
                href="#"
                className="block mt-1 text-[#312852]  text-[2rem] leading-tight font-medium text-black "
              >
                VaahSaaS
              </a>
              <div className="h-1 w-8 bg-red-500 mt-2 mb-4"></div>
              <p className="mt-2 text-gray-500">
                VaahSaaS is a module for multi-tenancy SaaS product development
                for VaahCMS (Laravel Headless CMS). In the VaahSaaS module, you
                can configure multiple MySql servers and each server can host
                multiple tenant's databases.
              </p>
              <button className="rounded py-3 px-6 border mt-8 border-[#5f4ca4] text-[#5f4ca4] font-[400]">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <div className="container max-w-[1200px] mt-3">
          <div className="">
            <h1 className="font-extrabold text-[#312852]  text-[2rem] text-center">
              The future of SaaS is limitless.
            </h1>
            <p className=" text-[#6d6685] text-center text-[1.3rem]  mt-2">
              It’s safe to say the cloud industry is well and truly mature now,
              and SaaS is one of the most exciting areas in it. With almost $139
              billion in revenue expected by 2022, that’s a pretty huge
              opportunity for any company to take advantage of. Most recent
              innovations in the field of SaaS-based solutions along with added
              features from time to time from new vendors are expected to see
              the growth of this industry.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              {columns.map((item, index) => (
                <Card
                  key={index}
                  image={item.imageUrl}
                  title={item.title}
                  text={item.description}
                />
              ))}
            </div>
          </div>
          <VerticalStepper/>
        </div>
      </div>
   
    </div>
  );
};

export default SaasProduct;
