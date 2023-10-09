import Img from '../../assets/footr-star.png'

const Footer = () => {
    return (
        <>
            <div className='footer bg-no-repeat bg-cover bg-footer-hover mt-12 pb-8'>
                <div className="flex justify-center">
                    <div className="container max-w-[1200px]">
                        <div className='grid grid-cols-1 md:grid-cols-4'>
                            <div className='column1 p-4 mt-6 text-[#fff]'>
                                <h1 className='text-[#f7b036] text-[1.6rem]'>Interesting 😍 stuff</h1>
                                <p className='text-[1.6rem] font-bold mt-4'>Our Services</p>
                                <ul>
                                    <li className='py-1'>Product Engineering</li>
                                    <li className='py-1'>SaaS Product Development</li>
                                    <li className='py-1'>CMS Development</li>
                                    <li className='py-1'>eCommerce Development</li>
                                    <li className='py-1'>View All</li>
                                </ul>
                            </div>
                            <div className='column2 p-4 md:mt-6 mt-0  text-[#fff] '>
                                <p className='text-[1.6rem] font-bold md:mt-14 mt-0'>Technologies</p>
                                <ul>
                                    <li className='py-1'>Laravel</li>
                                    <li className='py-1'>Vue.js</li>
                                    <li className='py-1'>Nuxt.js</li>
                                    <li className='py-1'>React.js</li>
                                    <li className='py-1'>View All</li>
                                </ul>
                            </div>
                            <div className='column3 p-4 md:mt-6 mt-0 text-[#fff]'>
                                <p className='text-[1.6rem] font-bold md:mt-14 mt-0'>Solutions</p>
                                <ul>
                                    <li className='py-1'>CRM</li>
                                    <li className='py-1'>ERP</li>
                                    <li className='py-1'>Survey Software</li>
                                    <li className='py-1'>Project Managment System</li>
                                    <li className='py-1'>View All</li>
                                </ul>
                            </div>
                            <div className='column4 p-4 md:mt-6 mt-0 text-[#fff]'>
                                <h1 className='text-[#f7b036] text-[1.6rem]'>B🥱ring stuff</h1>
                                <p className='text-[#b2aadb] text-[.95rem] mt-4'>Copyright © 2009 - 2023 WebReinvent Technologies Pvt. Ltd. All rights reserved.</p>
                                <span className='text-[#b2aadb] text-[.95rem]'>Terms & Conditions /  Privacy Policy / Resources</span>
                                <p className='font-bold'>Like/Follow Us</p>
                                <div className='flex gap-3 mt-5 text-[#b2aadb]'>
                                    <div className='rounded-full h-[41px] w-[41px] border-2'>
                                        <i className="fa fa-github ml-[8px] mt-[2px] text-2xl" />
                                    </div>
                                    <div className='rounded-full h-[41px] w-[41px] border-2'>
                                        <i className="fa fa-facebook ml-[10px] mt-[2px] text-2xl" />
                                    </div>
                                    <div className='rounded-full h-[41px] w-[41px] border-2'>
                                        <i className="fa fa-linkedin ml-[8px] mt-[2px] text-2xl" />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <p className='text-[#fff] text-[1.6rem] font-bold ml-4'> Industries: <span className='text-[#b2aadb] font-normal text-[1rem] ml-3'>Health Care and Fitness  / </span> 
                        <span className='text-[#b2aadb] font-normal text-[1rem]'> Education and Training / </span>  
                        <span className='text-[#b2aadb] font-normal text-[1rem]'> Retail and eCommerce  / </span>  
                        <span className='text-[#b2aadb] font-normal text-[1rem]'> Sports and Entertainment /  </span> 
                        <span className='text-[#b2aadb] font-normal text-[1rem]'> View All </span></p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Footer;