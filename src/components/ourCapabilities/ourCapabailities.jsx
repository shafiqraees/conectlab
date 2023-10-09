import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import Img from '../../assets/technologies-laravel.png';
import Img1 from '../../assets/cap-laravel.svg';
import Img2 from '../../assets/technologies-vueJS.png';
import Img3 from '../../assets/cap-vue.svg';
import Img4 from '../../assets/capability-mor-api-small.svg';
import Img5 from '../../assets/logo-kolmisoft.svg';
import { CardsA, CardsB, CardsC } from "./cardsArray";
import { useState,useRef, useEffect } from "react";
const OurCapabilities = () => {
    const [displayCount, setDisplayCount] = useState(2);
    const scrollToRef = useRef(null);
    useEffect(() => {
        if (scrollToRef.current) {
          scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, [displayCount]);
    const handleClick = () => {
        setDisplayCount(displayCount + 2);
      };
    return (
        <>
            <div className=" md:h-full h-full bg-[#fdfdfe]" >
                <div className="relative">
                    <div className="rounded-full h-[17rem] w-[17rem]  bg-[#f2f2fd] absolute z-4 top-0 left-[0px] mt-[1rem] opacity-[0.5]">
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="container max-w-[1200px]">
                        <div className="">
                            <span className="rounded-full h-[1rem] w-[1rem] bg-[#ebc6d8]"></span>
                            <h1 className="text-[#312852] text-center md:text-[3rem] lg:text-[3rem] text-[2rem] font-bold relative z-[333] mt-12">Our &nbsp;
                                <span className="before:bg-[#8ad4f4] before:content-['']  lg:inline-block md:inline-block before:absolute before:bottom-2 before:right-[25rem] md:before:w-[275px] before:h-1.5 before:bottom-[14px] before:z-[-1]">
                                    Capabilities</span>
                            </h1>
                            <p className="text-[#6d6685] md:text-[1.3rem] lg:text-[1.3rem] text-[18px] font-normal text-center relative z-[333] px-3 md:px-0 lg:px-0">
                                Clients Vision, Our Creations: Bespoke Software Products Showcase
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ">
                            <div className="column1 md:px-0 px-4">
                                <Card className="mt-6 md:w-96 w-full hover:shadow-md">
                                    <CardHeader color="blue-gray " className="relative ">
                                        <img
                                            className="md:w-[444px] w-full"
                                            src={Img}
                                            alt="card-image"
                                        />
                                    </CardHeader>
                                    <CardBody className="border-2 rounded-b-xl pb-6">
                                        <div className="flex mt-6 gap-[3px] p-1">
                                            <img
                                                className="w-[35px]"
                                                src={Img1}
                                                alt="card-image"
                                            />
                                            <Typography className="p-3 text-[#575365]">
                                                <p className="text-[#312852] text-[18px] font-bold">Laravel</p>
                                                Open-source object-oriented model-view-controller for PHP.
                                            </Typography>
                                        </div>

                                    </CardBody>

                                </Card>
                            </div>
                            <div className="column2 md:px-0 px-4">
                                <Card className="mt-6  md:w-96 w-full hover:shadow-md">
                                    <CardHeader color="blue-gray " className="relative ">
                                        <img
                                            className="w-[444px]"
                                            src={Img2}
                                            alt="card-image"
                                        />
                                    </CardHeader>
                                    <CardBody className="border-2 rounded-b-xl pb-6">
                                        <div className="flex mt-6 gap-[3px] p-1">
                                            <img
                                                className="w-[35px]"
                                                src={Img3}
                                                alt="card-image"
                                            />
                                            <Typography className="p-3 text-[#575365]">
                                                <p className="text-[#312852] text-[18px] font-bold">VUE.JS</p>
                                                Easily build astounding single page apps much faster.
                                            </Typography>
                                        </div>

                                    </CardBody>
                                </Card>
                            </div>
                            <div className="column3  md:px-0 px-4">
                                <Card className="mt-6 md:w-96 w-full hover:shadow-md">
                                    <CardHeader color="blue-gray " className="relative ">
                                        <img
                                            className="w-[444px]"
                                            src={Img4}
                                            alt="card-image"
                                        />
                                    </CardHeader>
                                    <CardBody className="border-2 rounded-b-xl pb-6">
                                        <div className="flex mt-6 gap-[3px] p-1">
                                            <img
                                                className="w-[35px]"
                                                src={Img5}
                                                alt="card-image"
                                            />
                                            <Typography className="p-3 text-[#575365]">
                                                <p className="text-[#312852] text-[18px] font-bold">MOR API</p>
                                                We specialize in providing high-quality and cost-effective MOR API integration services.
                                            </Typography>
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 " >
                            <div className="column1 md:px-0 px-4">
                                {
                                    CardsA.slice(0, displayCount).map((item) => (
                                        <Card className="mt-6 md:w-96 h-[144px] w-full hover:shadow-md" ref={scrollToRef}>
                                            <CardBody className="border-2 rounded-b-xl pb-6">
                                                <div className="flex mt-6 gap-[10px] p-1 items-center">
                                                    <div>
                                                        <img
                                                            className="w-[55px] mt-5 ml-2"
                                                            src={item?.image}
                                                            alt="card-image"
                                                        />
                                                    </div>
                                                    <Typography className="p-3 text-[#575365]">
                                                        <p className="text-[#312852] text-[18px] font-bold">{item.title}</p>
                                                        {item?.content}
                                                    </Typography>
                                                </div>
                                            </CardBody>

                                        </Card>
                                    ))
                                }

                            </div>
                            <div className="column2 md:px-0 px-4">
                                {
                                    CardsB.slice(0, displayCount).map((item) => (
                                        <Card className="mt-6  md:w-96 w-full hover:shadow-md h-[144px]" ref={scrollToRef}>
                                            <CardBody className="border-2 rounded-b-xl pb-6">
                                                <div className="flex mt-6 gap-[10px] p-1 items-center">
                                                    <div>
                                                        <img
                                                            className="w-[55px] mt-5 ml-2"
                                                            src={item?.image}
                                                            alt="card-image"
                                                        />
                                                    </div>
                                                    <Typography className="p-3 text-[#575365]">
                                                        <p className="text-[#312852] text-[18px] font-bold">{item.title}</p>
                                                        {item?.content}
                                                    </Typography>
                                                </div>

                                            </CardBody>
                                        </Card>
                                    ))
                                }
                            </div>
                            <div className="column3  md:px-0 px-4" >
                                {
                                    CardsC.slice(0, displayCount).map((item) => (
                                        <Card className="mt-6 md:w-96 w-full hover:shadow-md md:h-[144px] h-[166px]" ref={scrollToRef}>
                                            <CardBody className="border-2 rounded-b-xl pb-6">
                                                <div className="flex mt-6 gap-[10px] p-1 items-center" >
                                                    <img
                                                        className="w-[55px] mt-5 ml-2"
                                                        src={item?.image}
                                                        alt="card-image"
                                                    />
                                                    <Typography className="p-3 text-[#575365]">
                                                        <p className="text-[#312852] text-[18px] font-bold">{item.title}</p>
                                                        {item?.content}
                                                    </Typography>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    ))
                                }
                            </div>
                        </div>
                        
                    <div className="flex justify-center mt-12 md:mt-6 cursor-pointer"
                        onClick={()=>handleClick()}
                        
                        >
                            <div className="rounded-full h-[46px] w-[46px] border border-[#a4b1bc] flex items-center justify-center gap-[1px]">
                                <div className="bg-[#ff808e] h-[4px] w-[4px] rounded-full"></div>
                                <div className="bg-[#ffdca3] h-[4px] w-[4px] rounded-full"></div>
                                <div className="bg-[#a795e4] h-[4px] w-[4px] rounded-full"></div>
                            </div>
                        </div>
                   
                    </div>

                </div>
            </div>
        </>
    )
};

export default OurCapabilities