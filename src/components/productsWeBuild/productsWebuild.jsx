import React, { useState } from 'react';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import Img from '../../assets/top-right-circle.png'
import Img1 from '../../assets/real.jpg'
import Img2 from '../../assets/order-management.jpg'
import Img3 from '../../assets/analytics.jpg'
import Img4 from '../../assets/lms.jpg'
import Img5 from '../../assets/live-streaming.jpg'
import Img6 from '../../assets/bulb-icon.png'
import Img7 from '../../assets/lamp.png'

const ProductsWebuild = () => {
    const [activeTab, setActiveTab] = useState("real");

    const gradiant = {
        background: 'linear-gradient(180deg,rgba(220,230,250,.979),#d0ebff 33%,#cde5f9 74%,#c5d8fe)'
    }

    const handleTabChange = (value) => {
        setActiveTab(value);
    }

    return (
        <>
            <div className=" md:h-full h-full pb-12" style={gradiant}>
                <div className='relative '>
                    <div className='absolute right-[0]'>
                        <img src={Img} alt="circle" />
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="container max-w-[1317px]">
                        <h1 className="text-[#312852] text-center md:text-[3rem] lg:text-[3rem] text-[2rem] font-bold relative z-[333] mt-12">Products&nbsp;
                            <span className="before:bg-[#8ad4f4] before:content-['']  lg:inline-block md:inline-block before:absolute before:bottom-2 before:right-[29rem] before:w-[180px] before:h-1.5 before:bottom-[14px] before:z-[-1]">
                                We Built</span>
                        </h1>
                        <p className="text-[#6d6685] md:text-[1.3rem] lg:text-[1.3rem] text-[18px] font-normal text-center relative z-[333] px-3 md:px-0 lg:px-0">
                            Clients Vision, Our Creations: Bespoke Software Products Showcase
                        </p>
                    </div>
                </div>
                <div className="flex justify-center mt-12">
                    <div className="container max-w-[1100px]">
                        <Tabs value={activeTab} onChange={handleTabChange} className="md:h-[600px] h-full">
                            <div className='a' >
                                <div className='x'>
                                    <TabsHeader className=''  >
                                        <Tab value="real"
                                            className='text-[#312852] md:text-lg text-xs hover:text-[#5375c6] font-semibold border-b-2 border-[#5375c6]'
                                            onClick={() => setActiveTab('real')}
                                            style={{
                                                borderBottom: activeTab == 'real' ? '3px solid #312852' : '',
                                                fontWeight: activeTab == 'real' ? 'bolder' : ''
                                            }}
                                        >
                                            Real Time
                                        </Tab>
                                        <Tab value="order" className='text-[#312852] md:text-lg text-xs hover:text-[#5375c6] font-semibold border-b-2 border-[#5375c6]'
                                            onClick={() => setActiveTab('order')}
                                            style={{
                                                borderBottom: activeTab == 'order' ? '3px solid #312852' : '',
                                                fontWeight: activeTab == 'order' ? 'bolder' : ''
                                            }}
                                        >
                                            Orders
                                        </Tab>
                                        <Tab value="analytic" className='text-[#312852] md:text-lg text-xs hover:text-[#5375c6] font-semibold border-b-2 border-[#5375c6]'
                                            onClick={() => setActiveTab('analytic')}
                                            style={{
                                                borderBottom: activeTab == 'analytic' ? '3px solid #312852' : '',
                                                fontWeight: activeTab == 'analytic' ? 'bolder' : ''
                                            }}
                                        >
                                            Analytic
                                        </Tab>
                                        <Tab value="lms" className='text-[#312852] md:text-lg text-xs hover:text-[#5375c6] font-semibold border-b-2 border-[#5375c6]'
                                            onClick={() => setActiveTab('lms')}
                                            style={{
                                                borderBottom: activeTab == 'lms' ? '3px solid #312852' : '',
                                                fontWeight: activeTab == 'lms' ? 'bolder' : ''
                                            }}
                                        >
                                            LMS
                                        </Tab>
                                        <Tab value="live" className='text-[#312852] md:text-lg text-xs hover:text-[#5375c6] font-semibold border-b-2 border-[#5375c6]'
                                            onClick={() => setActiveTab('live')}
                                            style={{
                                                borderBottom: activeTab == 'live' ? '3px solid #312852' : '',
                                                fontWeight: activeTab == 'live' ? 'bolder' : ''
                                            }}
                                        >
                                            Live
                                        </Tab>
                                    </TabsHeader>
                                </div>
                            </div>

                            <TabsBody>
                                <TabPanel value="real">
                                    <div className='grid md:grid-cols-3 grid-cols-1 mt-12'>
                                        <div className='flex justify-center mt-9'>
                                            <div className=''>
                                                <img className='absolute left-[26px] top-[46px]' src={Img6} alt="bulb-icon" />
                                            </div>
                                            <div className='list text-[#312852] text-[1.1rem] font-medium'>
                                                <ul className=' border-l-2 border-l-[#8bc6f4]'>
                                                    <li className='py-3 ml-7 font-bold'>
                                                        HighLights
                                                    </li>
                                                    <li className='py-3 '>
                                                        <span className='text-[#8bc6f4] font-semibold'>......</span> Live Field Agent Tracking
                                                    </li>
                                                    <li className='py-3'>
                                                        <span className='text-[#8bc6f4] font-semibold'>......</span> Real Time Shipment Updates
                                                    </li>
                                                    <li className='py-3'>
                                                        <span className='text-[#8bc6f4] font-semibold'>......</span> Push Notifications
                                                    </li>
                                                    <li className='py-3'>
                                                        <span className='text-[#8bc6f4] font-semibold'>......</span> Chat & Bots
                                                    </li>
                                                    <li className='py-3'>
                                                        <span className='text-[#8bc6f4] font-semibold'>......</span> Real Time Messaging
                                                    </li>
                                                    <li className='py-3'>
                                                        <span className='text-[#8bc6f4] font-semibold'>......</span> Multi User Collaboration
                                                    </li>
                                                    <li className='py-3'>
                                                        <span className='text-[#8bc6f4] font-semibold'>......</span> Custom Video Meeting
                                                        <br></br>
                                                        <span className='ml-7'>Interface</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='col-span-2 md:mt-0 mt-6'>
                                            <img src={Img1} alt="real" />
                                        </div>
                                    </div>

                                </TabPanel>
                                <TabPanel value="order">
                                    <div className='grid md:grid-cols-3 grid-cols-1 mt-12'>
                                        <div className='flex justify-center mt-9'>
                                            <div className=''>
                                                <img className='absolute left-[30px] top-[46px]' src={Img6} alt="bulb-icon" />
                                            </div>
                                            <div className='list text-[#312852] text-[1.1rem] font-medium'>
                                                <ul className=' border-l-2 border-l-[#8bc6f4]'>
                                                    <li className='py-3 ml-7 font-bold'>
                                                        HighLights
                                                    </li>
                                                    <li className='py-3 '>
                                                        <span className='text-[#8bc6f4] font-semibold'>......</span> Inventory Management
                                                    </li>
                                                    <li className='py-3'>
                                                        <span className='text-[#8bc6f4] font-semibold'>......</span> Real Time Stock
                                                    </li>
                                                    <li className='py-3'>
                                                        <span className='text-[#8bc6f4] font-semibold'>......</span> Low Latency API
                                                    </li>
                                                    <li className='py-3'>
                                                        <span className='text-[#8bc6f4] font-semibold'>......</span> Payment Attempts & Failure <br></br>
                                                        <span className='ml-7'>Reports</span>
                                                    </li>
                                                    <li className='py-3'>
                                                        <span className='text-[#8bc6f4] font-semibold'>......</span> Omnichannel Fulfillment
                                                    </li>
                                                    <li className='py-3'>
                                                        <span className='text-[#8bc6f4] font-semibold'>......</span> Warehouse & Vendor <br></br>
                                                        <span className='ml-7'>Management</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='col-span-2 md:mt-0 mt-6'>
                                            <img src={Img2} alt="real" />
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel value="analytic">
                                    <div className='grid md:grid-cols-3 grid-cols-1 mt-12'>
                                        <div className='flex justify-center mt-9'>
                                            <div className=''>
                                                <img className='absolute left-[45px] top-[46px]' src={Img6} alt="bulb-icon" />
                                            </div>
                                            <div className='list text-[#312852] text-[1.1rem] font-medium'>
                                                <ul className=' border-l-2 border-l-[#8bc6f4]'>
                                                    <li className='py-3 ml-7 font-bold'>
                                                        HighLights
                                                    </li>
                                                    <li className='py-3 '>
                                                        <span className='text-[#8bc6f4] font-semibold'>......</span> Live Visitors
                                                    </li>
                                                    <li className='py-3'>
                                                        <span className='text-[#8bc6f4] font-semibold'>......</span> Custom Granular Filters
                                                    </li>
                                                    <li className='py-3'>
                                                        <span className='text-[#8bc6f4] font-semibold'>......</span> Easy Integration
                                                    </li>
                                                    <li className='py-3'>
                                                        <span className='text-[#8bc6f4] font-semibold'>......</span> Customizable Charts
                                                    </li>
                                                    <li className='py-3'>
                                                        <span className='text-[#8bc6f4] font-semibold'>......</span> Data Analysis & <br></br>
                                                        <span className='ml-7'>Recommendations</span>
                                                    </li>
                                                    <li className='py-3'>
                                                        <span className='text-[#8bc6f4] font-semibold'>......</span> High Performance Data <br></br>
                                                        <span className='ml-7'>Queries</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='col-span-2 md:mt-0 mt-6'>
                                            <img src={Img3} alt="real" />
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel value="lms">
                                    <div className='grid md:grid-cols-3 grid-cols-1 mt-12'>
                                        <div className='flex justify-center mt-9'>
                                            <div className=''>
                                                <img className='absolute left-[32px] top-[46px]' src={Img6} alt="bulb-icon" />
                                            </div>
                                            <div className='list text-[#312852] text-[1.1rem] font-medium'>
                                                <ul className=' border-l-2 border-l-[#8bc6f4]'>
                                                    <li className='py-3 ml-7 font-bold'>
                                                        HighLights
                                                    </li>
                                                    <li className='py-3 '>
                                                        <span className='text-[#8bc6f4] font-semibold'>......</span> Real Time Collaboration
                                                    </li>
                                                    <li className='py-3'>
                                                        <span className='text-[#8bc6f4] font-semibold'>......</span> Customizable Whiteboard
                                                    </li>
                                                    <li className='py-3'>
                                                        <span className='text-[#8bc6f4] font-semibold'>......</span> 35+ Types of Questions for <br></br>
                                                        <span className='ml-7'>Quiz, Test & Exams</span>
                                                    </li>
                                                    <li className='py-3'>
                                                        <span className='text-[#8bc6f4] font-semibold'>......</span> Various Type of Courses & <br></br>
                                                        <span className='ml-7'>Lesson</span>
                                                    </li>
                                                    <li className='py-3'>
                                                        <span className='text-[#8bc6f4] font-semibold'>......</span> Protected Videos & Assets
                                                    </li>
                                                    <li className='py-3'>
                                                        <span className='text-[#8bc6f4] font-semibold'>......</span> Customizable Roles & <br></br>
                                                        <span className='ml-7'>Permissions</span>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div className='col-span-2 md:mt-0 mt-6'>
                                            <img src={Img4} alt="real" />
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel value="live">
                                    <div className='grid md:grid-cols-3 grid-cols-1 mt-12'>
                                        <div className='flex justify-center mt-9'>
                                            <div className=''>
                                                <img className='absolute left-[28px] top-[46px]' src={Img6} alt="bulb-icon" />
                                            </div>
                                            <div className='list text-[#312852] text-[1.1rem] font-medium'>
                                                <ul className=' border-l-2 border-l-[#8bc6f4]'>
                                                    <li className='py-3 ml-7 font-bold'>
                                                        HighLights
                                                    </li>
                                                    <li className='py-3 '>
                                                        <span className='text-[#8bc6f4] font-semibold'>......</span> Mux Integration
                                                    </li>
                                                    <li className='py-3'>
                                                        <span className='text-[#8bc6f4] font-semibold'>......</span> Fast Frontend & Mobile App
                                                    </li>
                                                    <li className='py-3'>
                                                        <span className='text-[#8bc6f4] font-semibold'>......</span> Stripe Connect Payment
                                                    </li>
                                                    <li className='py-3'>
                                                        <span className='text-[#8bc6f4] font-semibold'>......</span> Live Stream Recording
                                                    </li>
                                                    <li className='py-3'>
                                                        <span className='text-[#8bc6f4] font-semibold'>......</span> less than 10 Seconds Global <br></br>
                                                        <span className='ml-7'> Latency</span>
                                                    </li>
                                                    <li className='py-3'>
                                                        <span className='text-[#8bc6f4] font-semibold'>......</span> Streamer & Viewer <br></br>
                                                        <span className='ml-7'>Chat,Comment & Reactions</span>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div className='col-span-2 md:mt-0 mt-6'>
                                            <img src={Img5} alt="real" />
                                        </div>
                                    </div>
                                </TabPanel>
                            </TabsBody>
                        </Tabs>
                        <div className='relative'>
                            <img className='absolute top-[-186px] left-[-170px]' src={Img7} alt='sdsd' />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
};

export default ProductsWebuild;
