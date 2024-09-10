import { useEffect, useState } from "react";
import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import Img from "../../assets/Logo-blue-white.png";
import {
  Square3Stack3DIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const NavbarMain = () => {
  const [openNav, setOpenNav] = useState(false);
  const navigate = useNavigate();
  const gradientStyle = {
    backgroundImage:
      "linear-gradient(to right bottom, #243ea1, #283aa2, #2d36a3, #3231a3, #372ca3, #3f2ba4, #462aa6, #4d28a7, #572baa, #602eae, #6932b1, #7235b4)",
  };
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpen1, setIsMenuOpen1] = useState(false);
  const [isMenuOpen2, setIsMenuOpen2] = useState(false);
  const [isMenuOpen3, setIsMenuOpen3] = useState(false);
  const [isMenuOpen4, setIsMenuOpen4] = useState(false);
  const [isMenuOpen5, setIsMenuOpen5] = useState(false);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-[1rem] lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-[1rem] text-[white] ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
        onClick={() => navigate("/")}
      >
        Home
      </Typography>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full ">
              <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Services{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className=" bg-[white] text-[#00000] border-none cursor-pointer shadow">
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
            onClick={() => navigate("/product-engineering")}
          >
            Product Engineering
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
            onClick={() => navigate("/services/saas-product-development")}
           
          >
            Saas Product Development
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            CMS Development
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            eCommerce Development
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            Application Development
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            Mobile App Development
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            Website Development
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            API Development
          </Typography>

          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            DevOps Solution
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            Automation Testing
          </Typography>
        </MenuList>
      </Menu>

      <Menu allowHover open={isMenuOpen1} handler={setIsMenuOpen1}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full">
              <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Technologies{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen1 ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className=" bg-[white] text-[#00000] border-none cursor-pointer shadow">
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            Laravel
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            Vue JS
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            React
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            Next
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            Nuxt
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            Node JS
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            Express
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            Flutter
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            ServiceNow
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            Java
          </Typography>
        </MenuList>
      </Menu>
      <Menu allowHover open={isMenuOpen2} handler={setIsMenuOpen2}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full">
              <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Solutions{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen2 ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className=" bg-[white] text-[#00000] border-none cursor-pointer shadow">
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            CRM
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            ERP
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            Project Management System
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            E-Commerce System
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            Inventory Management System
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            Warehouse Automation
          </Typography>
        </MenuList>
      </Menu>
      <Menu allowHover open={isMenuOpen3} handler={setIsMenuOpen3}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full">
              <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Industries{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen3 ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className=" bg-[white] text-[#00000] border-none cursor-pointer shadow">
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            Health Care and Fitness
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            Fintech
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            Education and Training
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            E-Commerce and Retail
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            Supports and Entertainment
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            Food and Beverage
          </Typography>
        </MenuList>
      </Menu>
      <Menu allowHover open={isMenuOpen4} handler={setIsMenuOpen4}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full">
              <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Company{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen4 ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className=" bg-[white] text-[#00000] border-none cursor-pointer shadow">
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            About Us
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            Case Study
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            How We Work
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            Dedicated Team
          </Typography>
        </MenuList>
      </Menu>
      <Menu allowHover open={isMenuOpen5} handler={setIsMenuOpen5}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full">
              <Square3Stack3DIcon className="h-[18px] w-[18px]" /> More{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen5 ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className=" bg-[white] text-[#00000] border-none cursor-pointer shadow">
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            Product Engineering
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            Saas Product Development
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            CMS Development
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            eCommerce Development
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            Application Development
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            Mobile App Development
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            Application Development
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-sm p-2"
          >
            Mvp Development
          </Typography>
        </MenuList>
      </Menu>
    </ul>
  );

  return (
    <>
      <div className=" max-h-[768px] w-[calc(100%+0px)] flex justify-center bg-[#2c38a3] fixed z-[9999]">
        <div className="container max-w-[1317px] relative z-[8888]">
          <Navbar className="sticky top-0  h-max max-w-full rounded-none border-none py-1 px-4 lg:px-8 lg:py-2 z-[999] bg-[#2c38a3]">
            <div className="flex items-center justify-between text-blue-gray-900">
              <img className="h-8" src={Img} alt="abc" />
              <div className="flex items-center gap-4">
                <div className="mr-4 hidden lg:block ">{navList}</div>
                <Button
                  className="p-1.5 text-[white] border-[#7957d5] border rounded hover:border-[white] hover:bg-gradient-hover"
                  variant="outlined"
                >
                  Contact Us
                </Button>
                <IconButton
                  variant="text"
                  className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                  ripple={false}
                  onClick={() => setOpenNav(!openNav)}
                >
                  {openNav ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </IconButton>
              </div>
            </div>
            <MobileNav open={openNav}>
              {openNav && navList}
              <Button variant="gradient" size="sm" fullWidth className="mb-2">
                <span>Buy Now</span>
              </Button>
            </MobileNav>
          </Navbar>
        </div>
      </div>
    </>
  );
};

export default NavbarMain;
