import Img from '../../assets/top-right-circle.png'
import Img1 from '../../assets/icon-arrow-down.png'
import Img2 from '../../assets/we-build-web.png'
import Img3 from '../../assets/we-build-mobile-swift.png'
import Img4 from '../../assets/we-build-mobile.png'
import Img5 from '../../assets/we-build-mobile-dart.png'
import Img6 from '../../assets/icon-laravel.png'
import Img7 from '../../assets/icon-adonis.png'
import Img8 from '../../assets/icon-express.png'
import Img9 from '../../assets/icon-faunadb.png'
import Img10 from '../../assets/icon-mongodb.png'
import Img11 from '../../assets/icon-rethinkdb.png'
import Img12 from '../../assets/icon-mysql.png'
import Img13 from '../../assets/icon-react.png'
import Img14 from '../../assets/icon-nuxt.png'
import Img15 from '../../assets/icon-vue.png'
import Img16 from '../../assets/icon-hapi.png'
import Img17 from '../../assets/17.png'
import Img18 from '../../assets/18.png'
import Img19 from '../../assets/19.png'
import Img20 from '../../assets/20.png'
import Img21 from '../../assets/21.png'
import Img22 from '../../assets/22.png'
import Img23 from '../../assets/23.png'
import Img24 from '../../assets/24.png'
import Img25 from '../../assets/25.png'
import Img26 from '../../assets/26.png'
import Img27 from '../../assets/27.png'
import Img28 from '../../assets/28.png'
import Img29 from '../../assets/29.png'

import { Tooltip } from "@material-tailwind/react";
const AgileDevelopment = () => {
    const gradiant = {
        background: 'linear-gradient(180deg,rgba(220,230,250,.979),#d0ebff 33%,#cde5f9 74%,#c5d8fe)'
    }
    return (
        <>
            <div className=" md:h-[1600px] h-[2900px] " style={gradiant}>
                <div className='relative'>
                    <div className='absolute right-[0]'>
                        <img src={Img} alt="circle" />
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="container max-w-[1317px]">
                        <h1 className="text-[#312852] text-center md:text-[3rem] lg:text-[3rem] text-[2rem] font-bold relative z-[333] mt-12">Agile Software
                            <span className="before:bg-[#8ad4f4] before:content-[''] hidden lg:inline-block md:inline-block before:absolute before:bottom-2 before:right-[21rem] before:w-[300px] before:h-1.5 before:bottom-[14px] before:z-[-1]">
                                Development</span>
                            <span className='text-[#312852] md:hidden block text-center md:text-[3rem] lg:text-[3rem] text-[2rem] font-bold relative z-[333] mt-[-8px]'>Development</span>
                        </h1>
                        <p className="text-[#6d6685] md:text-[1.3rem] lg:text-[1.3rem] text-[18px] font-normal text-center relative z-[333] px-3 md:px-0 lg:px-0">
                            Our processes are proven, the expertise is there and our tools are top notch.
                        </p>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:grid-cols-2'>

                            <div className='column1  mt-16 w-full'>
                                <div className='relative block'>
                                    <h1 className='text-center ml-4 text-[#312852] text-[1.5rem] absolute md:left-[47%] lg:left-[47%] left-[38%] top-[-18px] font-bold'>Web</h1>
                                    <div className='relative '>
                                        <div className='border-l-2 border-y-2 absolute border-[#a0b1c6] text-[black] h-[150px] lg:w-[150px] md:w-[150px] w-[115px] md:left-[175px] lg:left-[175px] left-[45px] top-[0px]  border-dashed rounded-l-[25px]  max-w-full'>
                                            <div className='h-[30px] mt-14 ml-[-15px]'>
                                                <img className='h-[30px]' src={Img1} alt='arrow down' />
                                            </div>
                                        </div>
                                        <div className='border-r-2 border-y-2 absolute border-[#a0b1c6] text-[black] h-[210px] md:right-[120px] lg:right-[120px] right-[35px] top-[200px]  lg:w-[129px] md:w-[129px] w-[85px] border-dashed rounded-r-[25px]  max-w-full'>
                                            <div className='h-[30px] mt-20 float-right mr-[-15px]'>
                                                <img className='h-[30px]' src={Img1} alt='arrow down' />
                                            </div>
                                            <h1 className='text-center ml-4 text-[#312852] text-[1.5rem] absolute left-[-135px] top-[188px] font-bold'>Tech Stack</h1>
                                        </div>
                                        <div className='flex justify-center '>
                                            <img className='h-[200px] absolute top-[67px] md:right-[90px] lg:right-[90px] right-[0]' src={Img2} alt='tv' />
                                        </div>
                                    </div>
                                </div>
                                <div className='block h-[400px]'>
                                </div>
                                <div className='absolute left-[0px]'>
                                    <img src={Img29} alt="circle" />
                                </div>
                                <div className='grid grid-cols-2 gap-4 md:gap-0 px-6 lg:gap-0 lg:px-0'>
                                    <div className='inner-column1  mt-16 max-w-[400px]'>
                                        <h1 className='text-center text-[#5577c6] font-bold'>APPS</h1>
                                        <div className='flex justify-center mt-2'>
                                            <div className='relative '>
                                                <span className=' absolute right-[-40px] top-[85px] text-blue-300 font-bold mb-[-32px] w-[105px] text-center transform -translate-y-1/2 -rotate-90 writing-vertical'>
                                                    BACKEND
                                                </span>
                                            </div>
                                            <ul className='rounded-lg border border-[#a0b1c6]  cursor-pointer transform  transition duration-500 hover:scale-90 hover:shadow-xl hover:shadow-indigo-500/40 ease-out'>
                                                <Tooltip
                                                    content={
                                                        <div className='bg-[#7957d5] p-2'>
                                                            <p className='text-xs font-semibold'>
                                                                "Laravel is a Web<br></br> application framework <br></br> for backend <br></br> development"</p>
                                                        </div>
                                                    }
                                                    placement="right">
                                                    <li className=' pr-[59px] py-[15px] pl-[29px]  py-3 rounded-tl-lg rounded-tr-lg border bg-[#dfeffc] hover:bg-[#f8fcff] border-b-[#d8d9fb] border flex gap-4 items-center text-[16px] text-[#2E6AD6] font-semibold '>
                                                        <img className='h-[25px] w-[25px]' src={Img6} alt="laravel" />
                                                        Laravel</li>
                                                </Tooltip>
                                                <Tooltip
                                                    content={
                                                        <div className='bg-[#7957d5] p-2'>
                                                            <p className='text-xs font-semibold'>
                                                                A fully featured web<br></br> framework on Node.js</p>
                                                        </div>
                                                    }
                                                    placement="right">
                                                    <li className=' pr-[59px] py-[15px] pl-[29px] py-3 border-b-[#d8d9fb] bg-[#dfeffc] hover:bg-[#f8fcff] border flex gap-4 items-center text-[16px] text-[#2E6AD6] font-semibold '>
                                                        <img className='h-[25px] w-[25px]' src={Img7} alt="laravel" />
                                                        Adonis Js</li>
                                                </Tooltip>
                                                <Tooltip
                                                    content={
                                                        <div className='bg-[#7957d5] p-2'>
                                                            <p className='text-xs font-semibold'>
                                                                Fast, unopinionated,<br></br>  minimalist web <br></br>framework for Node.js</p>
                                                        </div>
                                                    }
                                                    placement="right">
                                                    <li className=' pr-[59px] py-[15px] pl-[29px] py-3 border-b-[#d8d9fb] rounded-bl-lg rounded-br-lg border bg-[#dfeffc] hover:bg-[#f8fcff] flex gap-4 items-center text-[16px] text-[#2E6AD6] font-semibold '>
                                                        <img className='h-[25px] w-[25px]' src={Img8} alt="laravel" />
                                                        Express JS</li>
                                                </Tooltip>
                                            </ul>
                                        </div>

                                        <div className='flex justify-center mt-4'>
                                            <div className='relative '>
                                                <span className=' absolute right-[-40px] top-[85px] text-blue-300  font-bold mb-[-32px] w-[105px] text-center transform -translate-y-1/2 -rotate-90 writing-vertical'>
                                                    FRONTEND
                                                </span>
                                            </div>
                                            <ul className='rounded-lg border border-[#a0b1c6]  cursor-pointer transform  transition duration-500 hover:scale-90 hover:shadow-xl hover:shadow-indigo-500/40 ease-out'>
                                                <Tooltip
                                                    content={
                                                        <div className='bg-[#7957d5] p-2'>
                                                            <p className='text-xs font-semibold'>
                                                                The progressive<br></br> Javascript Frontend <br></br> framework.</p>
                                                        </div>
                                                    }
                                                    placement="right">
                                                    <li className=' pr-[59px] py-[15px] pl-[29px]  py-3 rounded-tl-lg rounded-tr-lg border bg-[#dfeffc] hover:bg-[#f8fcff] border-b-[#d8d9fb] border flex gap-4 items-center text-[16px] text-[#2E6AD6] font-semibold '>
                                                        <img className='h-[25px] w-[25px]' src={Img15} alt="laravel" />
                                                        VUE</li>
                                                </Tooltip>
                                                <Tooltip
                                                    content={
                                                        <div className='bg-[#7957d5] p-2'>
                                                            <p className='text-xs font-semibold'>
                                                                The Intuitive VueJs <br></br> Framework for Frontend <br></br> Development.
                                                            </p>
                                                        </div>
                                                    }
                                                    placement="right">
                                                    <li className=' pr-[59px] py-[15px] pl-[29px] py-3 border-b-[#d8d9fb] bg-[#dfeffc] hover:bg-[#f8fcff] border flex gap-4 items-center text-[16px] text-[#2E6AD6] font-semibold '>
                                                        <img className='h-[25px] w-[25px]' src={Img14} alt="laravel" />
                                                        NUXT JS</li>
                                                </Tooltip>
                                                <Tooltip
                                                    content={
                                                        <div className='bg-[#7957d5] p-2'>
                                                            <p className='text-xs font-semibold'>
                                                                A Javascript library for <br></br> building frontend user <br></br> interfaces.</p>
                                                        </div>
                                                    }
                                                    placement="right">
                                                    <li className=' pr-[59px] py-[15px] pl-[29px] py-3 border-b-[#d8d9fb] rounded-bl-lg rounded-br-lg border bg-[#dfeffc] hover:bg-[#f8fcff] flex gap-4 items-center text-[16px] text-[#2E6AD6] font-semibold '>
                                                        <img className='h-[25px] w-[25px]' src={Img13} alt="laravel" />
                                                        REACT JS</li>
                                                </Tooltip>
                                            </ul>
                                        </div>

                                        <div className='flex justify-center mt-4'>
                                            <div className=''>
                                                <div className='absolute left-[0px]'>
                                                    <img src={Img27} alt="circle" />
                                                </div>
                                            </div>
                                            <div className='absolute right-[0px]'>
                                                <img src={Img28} alt="circle" />
                                            </div>

                                            <div className='relative '>
                                                <span className=' absolute right-[-40px] top-[115px] text-blue-300  font-bold mb-[-32px] w-[105px] text-center transform -translate-y-1/2 -rotate-90 writing-vertical'>
                                                    DATABASE
                                                </span>
                                            </div>
                                            <ul className='rounded-lg border border-[#a0b1c6]  cursor-pointer transform  transition duration-500 hover:scale-90 hover:shadow-xl hover:shadow-indigo-500/40 ease-out'>
                                                <Tooltip
                                                    content={
                                                        <div className='bg-[#7957d5] p-2'>
                                                            <p className='text-xs font-semibold'>
                                                                The world's most <br></br> popular open source <br></br> database.</p>
                                                        </div>
                                                    }
                                                    placement="right">
                                                    <li className=' pr-[59px] py-[15px] pl-[29px]  py-3 rounded-tl-lg rounded-tr-lg border bg-[#dfeffc] hover:bg-[#f8fcff] border-b-[#d8d9fb] border flex gap-4 items-center text-[16px] text-[#2E6AD6] font-semibold '>
                                                        <img className='h-[25px] w-[25px]' src={Img12} alt="laravel" />
                                                        MY SQL</li>
                                                </Tooltip>
                                                <Tooltip
                                                    content={
                                                        <div className='bg-[#7957d5] p-2'>
                                                            <p className='text-xs font-semibold'>
                                                                The open-source <br></br> database for the real-<br></br>time Web.</p>
                                                        </div>
                                                    }
                                                    placement="right">
                                                    <li className=' pr-[59px] py-[15px] pl-[29px] py-3 border-b-[#d8d9fb] bg-[#dfeffc] hover:bg-[#f8fcff] border flex gap-4 items-center text-[16px] text-[#2E6AD6] font-semibold '>
                                                        <img className='h-[25px] w-[25px]' src={Img11} alt="laravel" />
                                                        Rethink DB</li>
                                                </Tooltip>
                                                <Tooltip
                                                    content={
                                                        <div className='bg-[#7957d5] p-2'>
                                                            <p className='text-xs font-semibold'>
                                                                Fast reliable schema-<br></br>less database.</p>
                                                        </div>
                                                    }
                                                    placement="right">
                                                    <li className=' pr-[59px] py-[15px] pl-[29px] py-3 border-b-[#d8d9fb] rounded-bl-lg rounded-br-lg border bg-[#dfeffc] hover:bg-[#f8fcff] flex gap-4 items-center text-[16px] text-[#2E6AD6] font-semibold '>
                                                        <img className='h-[25px] w-[25px]' src={Img10} alt="laravel" />
                                                        Mongo DB</li>

                                                </Tooltip>
                                                <Tooltip
                                                    content={
                                                        <div className='bg-[#7957d5] p-2'>
                                                            <p className='text-xs font-semibold'>
                                                                A distributed document-<br></br>relational database <br></br> delivered as a cloud API.</p>
                                                        </div>
                                                    }
                                                    placement="right">
                                                    <li className=' pr-[59px] py-[15px] pl-[29px] py-3 border-b-[#d8d9fb] rounded-bl-lg rounded-br-lg border bg-[#dfeffc] hover:bg-[#f8fcff] flex gap-4 items-center text-[16px] text-[#2E6AD6] font-semibold '>
                                                        <img className='h-[25px] w-[25px]' src={Img9} alt="laravel" />
                                                        Fauna DB</li>

                                                </Tooltip>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className='inner-column2 mt-16 max-w-[400px]'>
                                        <h1 className='text-center text-[#5577c6] font-bold'>API</h1>
                                        <div className='flex justify-center mt-2'>

                                            <ul className='rounded-lg border border-[#a0b1c6]  cursor-pointer transform  transition duration-500 hover:scale-90 hover:shadow-xl hover:shadow-indigo-500/40 ease-out'>
                                                <Tooltip
                                                    content={
                                                        <div className='bg-[#7957d5] p-2'>
                                                            <p className='text-xs font-semibold'>
                                                                Fast and low overhead<br></br> API development<br></br> framework, for Node.js</p>
                                                        </div>
                                                    }
                                                    placement="right">
                                                    <li className=' pr-[59px] py-[15px] pl-[29px]  py-3 rounded-tl-lg rounded-tr-lg border bg-[#dfeffc] hover:bg-[#f8fcff] border-b-[#d8d9fb] border flex gap-4 items-center text-[16px] text-[#2E6AD6] font-semibold '>
                                                        <img className='h-[25px] w-[25px]' src={Img20} alt="laravel" />
                                                        Fastify</li>
                                                </Tooltip>
                                                <Tooltip
                                                    content={
                                                        <div className='bg-[#7957d5] p-2'>
                                                            <p className='text-xs font-semibold'>
                                                                The future of Node.js <br></br> Rest development.</p>
                                                        </div>
                                                    }
                                                    placement="right">
                                                    <li className=' pr-[59px] py-[15px] pl-[29px] py-3 border-b-[#d8d9fb] bg-[#dfeffc] hover:bg-[#f8fcff] border flex gap-4 items-center text-[16px] text-[#2E6AD6] font-semibold '>
                                                        <img className='h-[25px] w-[25px]' src={Img19} alt="laravel" />
                                                        Restify</li>
                                                </Tooltip>
                                                <Tooltip
                                                    content={
                                                        <div className='bg-[#7957d5] p-2'>
                                                            <p className='text-xs font-semibold'>
                                                                Fast, unopinionated,<br></br>  minimalist web <br></br>framework for Node.js</p>
                                                        </div>
                                                    }
                                                    placement="right">
                                                    <li className=' pr-[59px] py-[15px] pl-[29px] py-3 border-b-[#d8d9fb] rounded-bl-lg rounded-br-lg border bg-[#dfeffc] hover:bg-[#f8fcff] flex gap-4 items-center text-[16px] text-[#2E6AD6] font-semibold '>
                                                        <img className='h-[25px] w-[25px]' src={Img8} alt="laravel" />
                                                        Express JS</li>
                                                </Tooltip>
                                                <Tooltip
                                                    content={
                                                        <div className='bg-[#7957d5] p-2'>
                                                            <p className='text-xs font-semibold'>
                                                                A microframework by <br></br> Laravel for API <br></br> development.</p>
                                                        </div>
                                                    }
                                                    placement="right">
                                                    <li className=' pr-[59px] py-[15px] pl-[29px] py-3 border-b-[#d8d9fb] rounded-bl-lg rounded-br-lg border bg-[#dfeffc] hover:bg-[#f8fcff] flex gap-4 items-center text-[16px] text-[#2E6AD6] font-semibold '>
                                                        <img className='h-[25px] w-[25px]' src={Img18} alt="laravel" />
                                                        Lumen</li>
                                                </Tooltip>
                                                <Tooltip
                                                    content={
                                                        <div className='bg-[#7957d5] p-2'>
                                                            <p className='text-xs font-semibold'>
                                                                Next Generation web <br></br> framework for Node.js</p>
                                                        </div>
                                                    }
                                                    placement="right">
                                                    <li className=' pr-[59px] py-[15px] pl-[29px] py-3 border-b-[#d8d9fb] rounded-bl-lg rounded-br-lg border bg-[#dfeffc] hover:bg-[#f8fcff] flex gap-4 items-center text-[16px] text-[#2E6AD6] font-semibold '>
                                                        <img className='h-[25px] w-[25px]' src={Img17} alt="laravel" />
                                                        Koa.js</li>
                                                </Tooltip>
                                                <Tooltip
                                                    content={
                                                        <div className='bg-[#7957d5] p-2'>
                                                            <p className='text-xs font-semibold'>
                                                                The Simple, secure <br></br> framework developers <br></br>trust.</p>
                                                        </div>
                                                    }
                                                    placement="right">
                                                    <li className=' pr-[59px] py-[15px] pl-[29px] py-3 border-b-[#d8d9fb] rounded-bl-lg rounded-br-lg border bg-[#dfeffc] hover:bg-[#f8fcff] flex gap-4 items-center text-[16px] text-[#2E6AD6] font-semibold '>
                                                        <img className='h-[25px] w-[25px]' src={Img16} alt="laravel" />
                                                        Hapi.js</li>
                                                </Tooltip>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Column 2*/}

                            <div className='column2  mt-16 w-full relative top-[24px] md:top-0 lg:top-0'>
                                <h1 className='text-center md:ml-4 lg:ml-4 ml-0 text-[#312852] text-[1.5rem] absolute left-[38%] md:left-[46%] lg:left-[46%] top-[-18px] font-bold'>Mobile</h1>
                                <div className='relative '>
                                    <div className='border-r-2 border-y-2 absolute border-[#a0b1c6] text-[black] h-[150px] right-[50px] md:right-[120px] lg:right-[120px] top-[0px] md:w-[140px] w-[120px] border-dashed rounded-r-[25px]  max-w-full'>
                                        <div className='h-[30px] mt-9 float-right mr-[-50px]'>
                                            <img className='h-[90px]' src={Img3} alt='bird' />
                                        </div>
                                        <div className='h-[30px] mt-32 transform rotate-90 float-right mr-[-0px]'>
                                            <img className='h-[30px]' src={Img1} alt='arrow down' />
                                        </div>
                                    </div>
                                    {/* RIght Border */}
                                    <div className='border-r-2 border-y-2 absolute border-[#a0b1c6] text-[black] h-[150px] md:w-[110px] w-[88px] md:right-[120px] right-[54px] top-[250px]  border-dashed rounded-r-[25px]  max-w-full'>
                                        <div className='h-[30px] mt-16 float-right mr-[-15px]'>
                                            <img className='h-[30px]' src={Img1} alt='arrow down' />
                                        </div>
                                        <h1 className='text-center ml-4 text-[#312852] text-[1.5rem] absolute left-[-135px] top-[128px] font-bold'>Tech Stack</h1>
                                    </div>
                                    {/* Left Border */}
                                    <div className='border-l-2 border-t-2 absolute border-[#a0b1c6] text-[black] h-[150px] w-[110px] md:left-[200px] lg:left-[200px] left-[45px] top-[200px]  border-dashed rounded-l-[25px]  max-w-full'>
                                        <div className='h-[30px] mt-[20px]  ml-[5px] transform rotate-90'>
                                            <img className='h-[30px]' src={Img1} alt='arrow down' />
                                        </div>
                                        <img className='ml-[-48px] mt-6' src={Img5} alt="box" />
                                    </div>
                                    <div className='flex justify-center '>
                                        <img className='h-[300px] absolute top-[40px] md:right-[190px] lg:right-[190px] right-[130px]' src={Img4} alt='mobile' />
                                    </div>
                                </div>


                                <div className='block h-[400px]'>
                                </div>

                                <div className='flex justify-center'>
                                    <div className='mt-12 relative z-[2]'>
                                        <div className='flex gap-12'>
                                            <div className='mt-4'>
                                                <h1 className='text-center text-[#5577c6] font-bold'>IOS</h1>
                                                <ul className='rounded-lg border border-[#a0b1c6]  cursor-pointer transform  transition duration-500 hover:scale-90 hover:shadow-xl hover:shadow-indigo-500/40 ease-out'>
                                                    <Tooltip
                                                        content={
                                                            <div className='bg-[#7957d5] p-2 z-[444]'>
                                                                <p className='text-xs font-semibold'>
                                                                    The official language for<br></br> iOS mobile app <br></br>development.</p>
                                                            </div>
                                                        }
                                                        placement="left">
                                                        <li className=' pr-[59px] py-[15px] pl-[29px]  py-3 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg border bg-[#dfeffc] hover:bg-[#f8fcff] border-b-[#d8d9fb] border flex gap-4 items-center text-[16px] text-[#2E6AD6] font-semibold '>
                                                            <img className='h-[25px] w-[25px]' src={Img21} alt="laravel" />
                                                            Swift</li>
                                                    </Tooltip>

                                                </ul>
                                            </div>
                                            <div className='mt-4'>
                                                <h1 className='text-center text-[#5577c6] font-bold '>ANDROID</h1>
                                                <ul className='rounded-lg border border-[#a0b1c6]  cursor-pointer transform  transition duration-500 hover:scale-90 hover:shadow-xl hover:shadow-indigo-500/40 ease-out'>
                                                    <Tooltip
                                                        content={
                                                            <div className='bg-[#7957d5] p-2 '>
                                                                <p className='text-xs font-semibold'>
                                                                    <p>Dart is a client-<br></br>optimized language for <br></br> fast apps.</p></p>
                                                            </div>
                                                        }
                                                        placement="right">
                                                        <li className=' pr-[59px] py-[15px] pl-[29px]  py-3 rounded-tl-lg rounded-tr-lg border bg-[#dfeffc] hover:bg-[#f8fcff] border-b-[#d8d9fb] border flex gap-4 items-center text-[16px] text-[#2E6AD6] font-semibold '>
                                                            <img className='h-[25px] w-[25px]' src={Img23} alt="laravel" />
                                                            Dart</li>
                                                    </Tooltip>
                                                    <Tooltip
                                                        content={
                                                            <div className='bg-[#7957d5] p-2'>
                                                                <p className='text-xs font-semibold'>
                                                                    A modern programming <br></br> language with <br></br>multiplatform support.</p>
                                                            </div>
                                                        }
                                                        placement="right">
                                                        <li className=' pr-[59px] py-[15px] pl-[29px]  py-3 rounded-bl-lg rounded-br-lg  border bg-[#dfeffc] hover:bg-[#f8fcff] border-b-[#d8d9fb] border flex gap-4 items-center text-[16px] text-[#2E6AD6] font-semibold '>
                                                            <img className='h-[25px] w-[25px]' src={Img22} alt="laravel" />
                                                            Kotlin</li>
                                                    </Tooltip>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='relative'>
                                        <div >
                                            <div className='border-x-2 border-b-2 right-[80px] absolute border-[#a0b1c6] text-[black] md:h-[210px] lg:h-[210px] h-[180px] top-[100px] z-[1]  lg:w-[220px] md:w-[220px] w-[225px] border-dashed rounded-l-[25px] rounded-r-[25px]'>
                                            </div>
                                            <div className='border-l-2  right-[180px] absolute border-[#a0b1c6] text-[black] h-[160px] md:top-[310px] lg:top-[310px] top-[280px] z-[1]  border-dashed '>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='block md:h-[250px] lg:h-[250px] h-[220px]'>
                                </div>
                                <div className='flex justify-center ml-6'>
                                    <div className='mt-4'>
                                        <h1 className='text-center text-[#5577c6] font-bold'>Hybrid Apps Tech Stack</h1>
                                        <ul className='rounded-lg mt-2 border border-[#a0b1c6]  cursor-pointer transform  transition duration-500 hover:scale-90 hover:shadow-xl hover:shadow-indigo-500/40 ease-out'>
                                            <Tooltip
                                                content={
                                                    <div className='bg-[#7957d5] p-2 '>
                                                        <p className='text-xs font-semibold'>
                                                            Build mobile apps for <br></br> Android & iOS with single<br></br> code base.</p>
                                                    </div>
                                                }
                                                placement="left">
                                                <li className=' pr-[59px] py-[15px] pl-[29px]  py-3 rounded-tl-lg rounded-tr-lg border bg-[#dfeffc] hover:bg-[#f8fcff] border-b-[#d8d9fb] border flex gap-4 items-center text-[16px] text-[#2E6AD6] font-semibold '>
                                                    <img className='h-[25px] w-[25px]' src={Img26} alt="laravel" />
                                                    Flutter</li>
                                            </Tooltip>
                                            <Tooltip
                                                content={
                                                    <div className='bg-[#7957d5] p-2'>
                                                        <p className='text-xs font-semibold'>
                                                            Build apps with one <br></br> codebase for many <br></br> platforms.</p>
                                                    </div>
                                                }
                                                placement="left">
                                                <li className=' pr-[59px] py-[15px] pl-[29px]  py-3 rounded-bl-lg rounded-br-lg  border bg-[#dfeffc] hover:bg-[#f8fcff] border-b-[#d8d9fb] border flex gap-4 items-center text-[16px] text-[#2E6AD6] font-semibold '>
                                                    <img className='h-[25px] w-[25px]' src={Img25} alt="laravel" />
                                                    Ionic</li>
                                            </Tooltip>
                                            <Tooltip
                                                content={
                                                    <div className='bg-[#7957d5] p-2'>
                                                        <p className='text-xs font-semibold'>
                                                            Create native apps for<br></br> Android and iOS using <br></br>React.</p>
                                                    </div>
                                                }
                                                placement="left">
                                                <li className=' pr-[59px] py-[15px] pl-[29px]  py-3 rounded-bl-lg rounded-br-lg  border bg-[#dfeffc] hover:bg-[#f8fcff] border-b-[#d8d9fb] border flex gap-4 items-center text-[16px] text-[#2E6AD6] font-semibold '>
                                                    <img className='h-[25px] w-[25px]' src={Img24} alt="laravel" />
                                                    React Native</li>
                                            </Tooltip>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AgileDevelopment;