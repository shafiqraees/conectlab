import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Input,
} from "@material-tailwind/react";
import Img1 from '../../assets/icon-laravel.svg'
import Img2 from '../../assets/icon-nuxt-js.svg'
import Img3 from '../../assets/icon-saas-product.svg'
import Img4 from '../../assets/icon-product-engineering.svg'
import Img5 from '../../assets/icon-vueJs-developers.svg'
import Img6 from '../../assets/icon-e-commerce-development.svg'
import Img7 from '../../assets/icon-cms-development.svg'
import Img8 from '../../assets/Icon-Application-development.svg'
import Img9 from '../../assets/icon-mobile-app-development.svg'

const WhatDoYouNeed = () => {
    const gradiant = {
        background: 'linear-gradient(180deg,rgba(220,230,250,.979),#d0ebff 33%,#cde5f9 74%,#c5d8fe)'
    }
    return (
        <>
            <div className=" md:h-full h-full bg-[#fdfdfe]" >
                <div className="flex justify-center">
                    <div className="container max-w-[917px]">
                        <div className="flex justify-between">
                            <span className="rounded-full h-[1rem] w-[1rem] bg-[#ebc6d8]"></span>
                            <h1 className="text-[#312852] text-center md:text-[3rem] lg:text-[3rem] text-[2rem] font-bold relative z-[333] mt-12">What Do
                                <span className="before:bg-[#8ad4f4] before:content-['']  lg:inline-block md:inline-block before:absolute before:bottom-2 before:right-[0rem] md:before:w-[205px] before:h-1.5 before:bottom-[14px] before:z-[-1]">
                                    You Need</span>
                                {/* <span className='text-[#312852] md:hidden block text-center md:text-[3rem] lg:text-[3rem] text-[2rem] font-bold relative z-[333] mt-[-8px]'>You Need</span> */}
                            </h1>
                            <span className="rounded-full h-[1rem] w-[1rem] bg-[#ebc6d8]"></span>
                        </div>
                        <div className="grid md:grid-cols-3 grid-cols-1 mt-16 gap-2">
                            <div className="px-8 md:px-0">
                                <Card className="hover:bg-[white] hover:border rounded-[30px] p-3 hover:shadow-md">
                                    <CardHeader color="blue-gray" className="relative h-[9rem]">
                                        <img
                                            src={Img1}
                                            alt="card-image"
                                        />
                                    </CardHeader>
                                    <CardBody>
                                        <Typography variant="h5" className="mb-2 font-bold text-[#312852] text-[20px]">
                                            Laravel Development
                                        </Typography>
                                        <Typography className="text-[#575365]">
                                            Laravel is a clean and classy frame-<br></br>work for PHP web development.<br></br> Freeing you
                                            from spaghetti code.
                                        </Typography>
                                    </CardBody>
                                    <CardFooter className="pt-6">
                                        <Button className="bg-[#ebe8f5] text-[#634fab]">View More</Button>
                                    </CardFooter>
                                </Card>
                            </div>

                            <div className="px-8 md:px-0">
                                <Card className="hover:bg-[white] hover:border rounded-[30px] p-3 hover:shadow-md">
                                    <CardHeader color="blue-gray" className="relative h-[9rem]">
                                        <img
                                            src={Img2}
                                            alt="card-image"
                                        />
                                    </CardHeader>
                                    <CardBody>
                                        <Typography variant="h5" className="mb-2 font-bold text-[#312852] text-[20px]">
                                            Nuxt.js Development
                                        </Typography>
                                        <Typography className="text-[#575365]">
                                            NuxtJS is a framework to create <br></br> universal vue applications for <br></br>
                                            building client-side routes, universal
                                        </Typography>
                                    </CardBody>
                                    <CardFooter className="pt-6">
                                        <Button className="bg-[#ebe8f5] text-[#634fab]">View More</Button>
                                    </CardFooter>
                                </Card>
                            </div>

                            <div className="px-8 md:px-0">
                                <Card className="hover:bg-[white] hover:border rounded-[30px] p-3 hover:shadow-md">
                                    <CardHeader color="blue-gray" className="relative h-[9rem]">
                                        <img
                                            src={Img3}
                                            alt="card-image"
                                        />
                                    </CardHeader>
                                    <CardBody>
                                        <Typography variant="h5" className="mb-2 font-bold text-[#312852] text-[20px]">
                                            Saas Product Development
                                        </Typography>
                                        <Typography className="text-[#575365]">
                                            Design and develop user-centric <br></br> online services without making any <br></br>
                                            sacrifices in your time-to-market.
                                        </Typography>
                                    </CardBody>
                                    <CardFooter className="pt-6">
                                        <Button className="bg-[#ebe8f5] text-[#634fab]">View More</Button>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                        <div className="mt-6 md:px-0 px-6">
                            <Input className="p-4 text-[20px] rounded-full" placeholder="Search what you need..." />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-12">
                    <div className="contianer max-w-[1300px]">
                        <div className="grid md:grid-cols-2 grid-cols-1">
                            <div className="column">
                                <Card className="w-full max-w-[48rem] flex-row hover:bg-[white] hover:border rounded-[8px] p-3 hover:shadow-md">
                                    <CardHeader
                                        shadow={false}
                                        floated={false}
                                        className="m-0 p-2 shrink-0 rounded-r-none w-[80px] w-[80px]"
                                    >
                                        <img
                                            src={Img4}
                                            alt="card-image"
                                            className=""
                                        />
                                    </CardHeader>
                                    <CardBody>
                                        <Typography variant="h6" color="gray" className="mb-2 font-bold text-[#312852] text-base">
                                            Product Engineering
                                        </Typography>
                                        <Typography color="gray" className="mb-8 font-normal text-[#575365]">
                                            We provide enterprise end-to-end product development,
                                            <br></br> customization, and integration to build great software <br></br>
                                            solutions for your business.
                                        </Typography>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="column-2">
                                <p className="rounded-full h-[1rem] w-[1rem] bg-[#8ad4f4] float-right"></p>
                                <Card className="w-full max-w-[48rem] flex-row hover:bg-[white] hover:border rounded-[8px] p-3 hover:shadow-md">
                                    <CardHeader
                                        shadow={false}
                                        floated={false}
                                        className="m-0 p-2 shrink-0 rounded-r-none w-[80px] w-[80px]"
                                    >
                                        <img
                                            src={Img5}
                                            alt="card-image"
                                            className=""
                                        />
                                    </CardHeader>
                                    <CardBody>
                                        <Typography variant="h6" color="gray" className="mb-2 font-bold text-[#312852] text-base">
                                            Vue Js Development
                                        </Typography>
                                        <Typography color="gray" className="mb-8 font-normal text-[#575365]">
                                            Vue.js development services that shape your ideas into reality <br></br> giving your business the edge to stay ahead.
                                        </Typography>
                                    </CardBody>
                                </Card>
                            </div>

                            <div className="column">
                                <Card className="w-full max-w-[48rem] flex-row hover:bg-[white] hover:border rounded-[8px] p-3 hover:shadow-md">
                                    <CardHeader
                                        shadow={false}
                                        floated={false}
                                        className="m-0 p-2 shrink-0 rounded-r-none w-[80px] w-[80px]"
                                    >
                                        <img
                                            src={Img6}
                                            alt="card-image"
                                            className=""
                                        />
                                    </CardHeader>
                                    <CardBody>
                                        <Typography variant="h6" color="gray" className="mb-2 font-bold text-[#312852] text-base">
                                            eCommerce Development
                                        </Typography>
                                        <Typography color="gray" className="mb-8 font-normal text-[#575365]">
                                            We design and build custom eCommerce applications that <br></br>
                                            give you and your customers the best experience possible.
                                        </Typography>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="column-2">
                                <Card className="w-full max-w-[48rem] flex-row hover:bg-[white] hover:border rounded-[8px] p-3 hover:shadow-md">
                                    <CardHeader
                                        shadow={false}
                                        floated={false}
                                        className="m-0 p-2 shrink-0 rounded-r-none w-[80px] w-[80px]"
                                    >
                                        <img
                                            src={Img7}
                                            alt="card-image"
                                            className=""
                                        />
                                    </CardHeader>
                                    <CardBody>
                                        <Typography variant="h6" color="gray" className="mb-2 font-bold text-[#312852] text-base">
                                            CMS Development
                                        </Typography>
                                        <Typography color="gray" className="mb-8 font-normal text-[#575365]">
                                            Our Content Management Systems empower businesses with <br></br>
                                            flexibility, security and convenience. We create powerful tools <br></br>
                                            for publishing web content.
                                        </Typography>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="column">
                                <Card className="w-full max-w-[48rem] flex-row hover:bg-[white] hover:border rounded-[8px] p-3 hover:shadow-md">
                                    <CardHeader
                                        shadow={false}
                                        floated={false}
                                        className="m-0 p-2 shrink-0 rounded-r-none w-[80px] w-[80px]"
                                    >
                                        <img
                                            src={Img8}
                                            alt="card-image"
                                            className=""
                                        />
                                    </CardHeader>
                                    <CardBody>
                                        <Typography variant="h6" color="gray" className="mb-2 font-bold text-[#312852] text-base">
                                            Application Development
                                        </Typography>
                                        <Typography color="gray" className="mb-8 font-normal text-[#575365]">
                                            We are a product agency breathing tech into your ideas with <br></br>
                                            our custom Application Development services.
                                        </Typography>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="column-2">
                                <Card className="w-full max-w-[48rem] flex-row hover:bg-[white] hover:border rounded-[8px] p-3 hover:shadow-md">
                                    <CardHeader
                                        shadow={false}
                                        floated={false}
                                        className="m-0 p-2 shrink-0 rounded-r-none w-[80px] w-[80px]"
                                    >
                                        <img
                                            src={Img9}
                                            alt="card-image"
                                            className=""
                                        />
                                    </CardHeader>
                                    <CardBody>
                                        <Typography variant="h6" color="gray" className="mb-2 font-bold text-[#312852] text-base">
                                            Mobile App Development
                                        </Typography>
                                        <Typography color="gray" className="mb-8 font-normal text-[#575365]">
                                            In a mobile-first world, customers and employees want more <br></br> ways to engage with your brand.
                                        </Typography>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                        <div className='flex justify-center mt-16 pb-12'>
                            <Button
                                className='px-4 py-1 font-medium text-base absolute z-[4444] text-[white] border-[#7957d5] border rounded hover:border-[white] bg-gradient-hover'
                                variant="outlined"
                            >
                                View More
                            </Button>
                            <p className="rounded-full h-[1rem] w-[1rem] bg-[#ff808e] mt-[1.75rem]"></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default WhatDoYouNeed;