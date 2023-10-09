import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Img from '../../assets/cap-paypal.svg'
import Img1 from '../../assets/cap-mailgun.svg'
import Img2 from '../../assets/clients-zack-rinkins.png'
import Img3 from '../../assets/clients-tiffani-a-gilbert.png'
import Img4 from '../../assets/clients-ankur-shah.png'
import Img5 from '../../assets/clients-pranjal.png'
import Img6 from '../../assets/clients-jeff-crystal.png'
import Img7 from '../../assets/client-daniel-bates.png'
import Img8 from '../../assets/clients-pawan-shah.png'
import Img9 from '../../assets/footer-client.png'
import Img10 from '../../assets/give-us-a-ring.svg'
import Img11 from '../../assets/write-to-us.svg'
import Img12 from '../../assets/skype-with-us.svg'

import '../../App.css'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
    Button,
} from "@material-tailwind/react";
import { useState } from "react";
const Carousell = () => {
    const [isHovered, setIsHovered] = useState(false);
    console.log(isHovered, "isHover")
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <>
            <div className="flex justify-center mt-12">
                <div className="bg-[#8ad4f4] h-[15px] w-[15px] rounded-full"></div>
            </div>
            <div className="flex justify-end">

            </div>
            <div className="flex justify-center">
                <div className="container max-w-[1200px]">
                    <div className="">
                        <span className="rounded-full h-[1rem] w-[1rem] bg-[#ebc6d8]"></span>
                        <h1 className="text-[#312852] text-start md:text-[3rem] lg:text-[3rem] text-[2rem] font-bold relative z-[333] ">We Made Them &nbsp;
                            <span className="before:bg-[#8ad4f4] before:content-['']  lg:inline-block md:inline-block before:absolute before:bottom-2 before:left-[24rem] md:before:w-[150px] before:h-1.5 before:bottom-[14px] before:z-[-1]">
                                Happy.</span>
                        </h1>
                        <p className="text-[#6d6685] md:text-[1.3rem] lg:text-[1.3rem] text-[18px] font-normal text-start relative z-[333] px-3 md:px-0 lg:px-0">
                            We pleased more than <strong>1211+ companies</strong> in last <strong>13+ years</strong>. You could be Next!
                        </p>
                        <div className="bg-[#ebc6d8] h-[15px] float-right w-[15px] mt-[-59px] rounded-full"></div>
                    </div>

                    <div className="ss mt-12 pb-12">
                        <Carousel
                            responsive={responsive} keyBoardControl={true} transitionDuration={500}
                        // autoPlay={true} 
                        >
                            <div className="px-3 md:px-0" >
                                <Card className="p-4 border-2 overflow-hidden md:w-[350px] w-full rounded-lg hover:shadow-md md:h-[395px] h-full px-8 md:px-4">
                                    <CardBody className="md:h-[395px] h-full">
                                        <Typography className="text-[#575365] leading-7 font-normal "  >
                                            We have chosen WebReinvent <br></br> Technologies after a long research.
                                            We <br></br> have cross checked capabilities and <br></br> reviews of many vendors and finally <br></br> awarded our projects to WebReinvent.
                                            I <br></br> can proudly say that my decision was <br></br> correct.
                                            They have given value to my  <br></br> business and were sincere and caring <br></br> towards the project throughout it’s <br></br> lifecycle.
                                        </Typography>

                                    </CardBody>
                                    <CardFooter className="flex items-center justify-between">
                                        <div className="flex gap-[15px] mt-6">
                                            <div>
                                                <img className="rounded-full h-[55px] w-[55px]" src={Img2} alt="abx" />
                                            </div>
                                            <div>
                                                <Typography className="font-semibold">Zack Rinkins</Typography>
                                                <Typography className="text-[text-[#575365]]">Reaction:<span className="text-[#16a286] font-semibold text-sm">Good</span></Typography>
                                            </div>
                                        </div>

                                    </CardFooter>
                                </Card>
                            </div>

                            <div className="px-3 md:px-0">
                                <Card className="p-4 border-2 overflow-hidden md:w-[350px] w-full rounded-lg hover:shadow-md md:h-[395px] h-full px-8 md:px-4">
                                    <CardBody className="md:h-[395px] h-full">
                                        <Typography className="text-[#575365] leading-7 font-normal "  >
                                            From the first day of our contact, we found <br></br> every member of this team is very friendly <br></br> and helpful.
                                            I never felt that I am being <br></br> down because of my less technical <br></br> knowledge.
                                            They not only make web <br></br> applications for you but they train you very <br></br> well to use them as well.
                                            By coming in <br></br> contact of these guys, I started taking more <br></br> educate decisions.
                                        </Typography>

                                    </CardBody>
                                    <CardFooter className="flex items-center justify-between">
                                        <div className="flex gap-[15px] mt-6">
                                            <div>
                                                <img className="rounded-full h-[55px] w-[55px]" src={Img3} alt="abx" />
                                            </div>
                                            <div>
                                                <Typography className="font-semibold">Tiffani A. Gilbert </Typography>
                                                <Typography className="text-[text-[#575365]]">Reaction:<span className="text-[#16a286] font-semibold text-sm">Excellent</span></Typography>
                                            </div>
                                        </div>

                                    </CardFooter>
                                </Card>
                            </div>

                            <div className="px-3 md:px-0">
                                <Card className="p-4 border-2 overflow-hidden md:w-[350px] w-full rounded-lg hover:shadow-md md:h-[395px] h-full px-8 md:px-4" >
                                    <CardBody className="md:h-[395px] h-full">
                                        <Typography className="text-[#575365] leading-7 font-normal "  >
                                            Many, many thanks for your fast and efficient delivery of work.
                                            We have been really, really impressed with the level of customer service Web reinvent has provided to date.
                                            Please pass our thanks and congratulations to your team involved in IFLIIP project.
                                            Will definitely recommend your company’s capabilities and genuine delivery of work to others.
                                        </Typography>

                                    </CardBody>
                                    <CardFooter className="flex items-center justify-between">
                                        <div className="flex gap-[15px] mt-6">
                                            <div>
                                                <img className="rounded-full h-[55px] w-[55px]" src={Img4} alt="abx" />
                                            </div>
                                            <div>
                                                <Typography className="font-semibold">Ankur Shah</Typography>
                                                <Typography className="text-[text-[#575365]]">Reaction:<span className="text-[#16a286] font-semibold text-sm">Good</span></Typography>
                                            </div>
                                        </div>

                                    </CardFooter>
                                </Card>
                            </div>

                            <div className="px-3 md:px-0">
                                <Card className="p-4 border-2 overflow-hidden md:w-[350px] w-full rounded-lg hover:shadow-md md:h-[395px] h-full px-8 md:px-4">
                                    <CardBody className="md:h-[395px] h-full">
                                        <Typography className="text-[#575365] leading-7 font-normal "  >
                                            They appeared in my business as an ultimate solution.
                                            We were in a total loss as our previous designers have not completed my projects and stuck with it at a crucial stage.
                                            They came with brilliant ideas in a tight deadline, did all the needful and made everything working at more than satisfactory level.
                                        </Typography>

                                    </CardBody>
                                    <CardFooter className="flex items-center justify-between">
                                        <div className="flex gap-[15px] mt-6">
                                            <div>
                                                <img className="rounded-full h-[55px] w-[55px]" src={Img5} alt="abx" />
                                            </div>
                                            <div>
                                                <Typography className="font-semibold">Pranjal</Typography>
                                                <Typography className="text-[text-[#575365]]">Reaction:<span className="text-[#16a286] font-semibold text-sm">Good</span></Typography>
                                            </div>
                                        </div>

                                    </CardFooter>
                                </Card>
                            </div>

                            <div className="px-3 md:px-0">
                                <Card className="p-4 border-2 overflow-hidden md:w-[350px] w-full rounded-lg hover:shadow-md md:h-[395px] h-full px-8 md:px-4">
                                    <CardBody className="md:h-[395px] h-full">
                                        <Typography className="text-[#575365] leading-7 font-normal "  >
                                            WebReinvent started with Voltaic's designs for a new site and transformed them into a fully-responsive site on Magento.
                                            The WebReinvent team worked diligently and creatively to produce a great site, on budget.
                                        </Typography>

                                    </CardBody>
                                    <CardFooter className="flex items-center justify-between">
                                        <div className="flex gap-[15px] mt-6">
                                            <div>
                                                <img className="rounded-full h-[55px] w-[55px]" src={Img6} alt="abx" />
                                            </div>
                                            <div>
                                                <Typography className="font-semibold">Jeff Crystal</Typography>
                                                <Typography className="text-[text-[#575365]]">Reaction:<span className="text-[#16a286] font-semibold text-sm">Good</span></Typography>
                                            </div>
                                        </div>

                                    </CardFooter>
                                </Card>
                            </div>

                            <div className="px-3 md:px-0">
                                <Card className="p-4 border-2 overflow-hidden md:w-[350px] w-full rounded-lg hover:shadow-md md:h-[395px] h-full px-8 md:px-4">
                                    <CardBody className="md:h-[395px] h-full">
                                        <Typography className="text-[#575365] leading-7 font-normal "  >
                                            WebReinvent Technologies is a highly skilled team with an eye for details.
                                            We got exactly what we wanted and more.
                                            The project management and communication works really well through the online project tools and the dedicated project manager made a great job keeping things together.
                                            We are looking forward to the next collaboration!
                                        </Typography>

                                    </CardBody>
                                    <CardFooter className="flex items-center justify-between">
                                        <div className="flex gap-[15px] mt-6">
                                            <div>
                                                <img className="rounded-full h-[55px] w-[55px]" src={Img7} alt="abx" />
                                            </div>
                                            <div>
                                                <Typography className="font-semibold">Daniel Bates</Typography>
                                                <Typography className="text-[text-[#575365]]">Reaction:<span className="text-[#16a286] font-semibold text-sm">Good</span></Typography>
                                            </div>
                                        </div>

                                    </CardFooter>
                                </Card>
                            </div>

                            <div className="px-3 md:px-0">
                                <Card className="p-4 border-2 overflow-hidden md:w-[350px] w-full rounded-lg hover:shadow-md md:h-[395px] h-full px-8 md:px-4">
                                    <CardBody className="md:h-[395px] h-full">
                                        <Typography className="text-[#575365] leading-7 font-normal "  >
                                            Thank you for doing such a great job on our website.
                                            Having that personalized approach to helping our business grow with a new and more professional look was invaluable.
                                            You diligently worked with us and came up with a brilliant design that represents our company.
                                            We are really pleased with the result and it was a pleasure working with you.
                                        </Typography>

                                    </CardBody>
                                    <CardFooter className="flex items-center justify-between">
                                        <div className="flex gap-[15px] mt-6">
                                            <div>
                                                <img className="rounded-full h-[55px] w-[55px]" src={Img8} alt="abx" />
                                            </div>
                                            <div>
                                                <Typography className="font-semibold">Pawan Shah</Typography>
                                                <Typography className="text-[text-[#575365]]">Reaction:<span className="text-[#16a286] font-semibold text-sm">Good</span></Typography>
                                            </div>
                                        </div>

                                    </CardFooter>
                                </Card>
                            </div>

                            <div className="px-3 md:px-0">
                                <Card className="p-4 border-2 overflow-hidden md:w-[350px] w-full rounded-lg hover:shadow-md md:h-[395px] h-full px-8 md:px-4">
                                    <CardBody className="md:h-[395px] h-full">
                                        <Typography className="text-[#575365] leading-7 font-normal "  >
                                            I have been working with WebReinvent for over a year now. They are extremely timely and very professional.
                                            I recommend their work to my friends and colleagues all the site because of their creativity in generating ideas for enhancing my site.
                                            If you have a business or need to develop your online presence, WebReinvent is for you!!
                                        </Typography>

                                    </CardBody>
                                    <CardFooter className="flex items-center justify-between">
                                        <div className="flex gap-[15px] mt-6">
                                            <div>
                                                <img className="rounded-full h-[55px] w-[55px]" src={Img2} alt="abx" />
                                            </div>
                                            <div>
                                                <Typography className="font-semibold">Darrell Bennett</Typography>
                                                <Typography className="text-[text-[#575365]]">Reaction:<span className="text-[#16a286] font-semibold text-sm">Good</span></Typography>
                                            </div>
                                        </div>

                                    </CardFooter>
                                </Card>
                            </div>

                        </Carousel>
                    </div>
                    <div className="image relative ">
                        <img src={Img9} alt="bar" />
                        <div className="flex justify-center">
                            <Button
                                className="my-button absolute top-[0px] bg-gradient-hover"
                            >
                                View All Our Clients
                            </Button>

                            <div className="bg-[#ff808e] h-[15px]  w-[15px] rounded-full text-center"></div>
                        </div>
                    </div>
                    <div className=" mt-8">
                        <h1 className="text-[#312852] text-center md:text-[3rem] lg:text-[3rem] text-[2rem] font-bold">
                            Excited? Let’s Talk
                        </h1>
                        <p className="text-[#6d6685] md:text-[1.3rem] lg:text-[1.3rem] text-[18px] font-normal text-center relative z-[333] px-3 md:px-0 lg:px-0">
                            You’re Our First Priority. Rest All Can Wait.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 mt-12">
                        <div className="flex justify-center">
                            <div className="">
                                <div className="flex items-end gap-2 justify-center md:justify-start">
                                    <p className="">GIVE US A RING</p>
                                    <img src={Img10} alt="ako" />
                                </div>
                                <h4 className="font-bold text-[1.5rem]">+1 (502) 287-0005</h4>
                            </div>
                        </div>
                        <div className="flex justify-center md:mt-0 mt-6">
                            <div className="">
                                <div className="flex items-end gap-2 justify-center md:justify-start">
                                    <p>WRITE TO US</p>
                                    <img src={Img11} alt="ako" />
                                </div>
                                <h4 className="font-bold text-[1.5rem]">we@webreinvent.com</h4>
                            </div>
                        </div>
                        <div className="flex justify-center md:mt-0 mt-6">
                            <div className="">
                                <div className="flex items-end gap-2 justify-center md:justify-start">
                                    <p>SKYPE WITH US</p>
                                    <img src={Img12} alt="ako" />
                                </div>
                                <h4 className="font-bold text-[1.5rem]">sales.webreinvent</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Carousell;