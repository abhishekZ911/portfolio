"use client";
import axios from "axios";
import { EmailJSResponseStatus } from "emailjs-com";
import emailjs from "@emailjs/browser";
import Image from "next/image";

import { useEffect, useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";

export default function Homepage() {
  // const temp=window.innerWidth<700 ? true: false;
  const [hover, setHover] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [mobileResponsive, setMobileResponsive] = useState(
    `${window.innerWidth > 700 ? false : true}`
  );
  // const [mobileResponsive, setMobileResponsive] = useState(false);

  const [sidebarClicked, setSidebarClicked] = useState(false);
  console.log(mobileResponsive);

  const handleResizeWindow = () => {
    console.log(window.innerWidth);
    if (window.innerWidth > 700) setMobileResponsive(false);
    else setMobileResponsive(true);
  };

  useEffect(() => {
    handleResizeWindow();
    window.addEventListener("resize", handleResizeWindow);

    return () => window.removeEventListener("resize", handleResizeWindow);
  }, []);

  useEffect(() => {
    if (sidebarClicked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => (document.body.style.overflow = "auto");
  }, [sidebarClicked]);

  async function handleForm(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    let data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    data = { ...data, to_name: "Abhishek" };

    emailjs
      .send("service_8yhhfv6", "template_6wsdhvs", data, "5Lt_Za0Dp6g0JR8YW")
      .then(
        (response) => {
          console.log("Success", response.status, response.text);
        },
        (error) => {
          console.log("Failed", error);
        }
      );

      event.target.reset(); 
      setIsFormSubmitted(true);

      setTimeout(()=>{
        setIsFormSubmitted(false);
        console.log('yess')
      }, 2000)
  }

  return (
    <>
      {mobileResponsive && (
        <div className="">
          <>
            <div
              className={`sidebar
            fixed
            right-0
            h-[100vh]
            bg-green-800
            z-10
            shadow-lg
            ${sidebarClicked ? "w-[70%]" : "w-[0%]"}`}
            ></div>
          </>
        </div>
      )}

      <section
        id="landing-page"
        className={`
      ${sidebarClicked ? "-z-1" : ""}
      relative `}
      >
        {mobileResponsive && (
          <div
            className={`nav-icon
    fixed
    w-[35px]
    h-[27px]
    right-[20px]
    top-5
    z-20
    ${sidebarClicked ? "open" : ""}`}
            onClick={() => setSidebarClicked(!sidebarClicked)}
          >
            <span
              className={`block h-[4px] 
        ${sidebarClicked ? "bg-black" : "bg-white"}`}
            ></span>
            <span
              className={`block h-[4px] 
        ${sidebarClicked ? "bg-black" : "bg-white"}`}
            ></span>
            <span
              className={`block h-[4px] 
        ${sidebarClicked ? "bg-black" : "bg-white"}`}
            ></span>
          </div>
        )}

        <div
          className="absolute
       z-5 
       flex 
       bottom-[10vh] 
       justify-center 
       w-full 
       text-center 
       mx-auto 
       my-0"
        >
          <div className="relative  text-pink-400 !text-[3rem]">
            <FaArrowCircleDown />
          </div>
        </div>
        <div id="clipped-path" className="relative">
          <img
            className="h-screen 
                w-screen 
                blur-lg
                -z-1"
            src="background.jpg"
            alt=""
          />
          <div
            className={`absolute 
                h-[55vh] 
                w-screen 
                flex
                flex-col 
                top-[40vh]
                md:top-[5vh]
                justify-between
                text-center`}
          >
            {!mobileResponsive && (
              <div
                className="text-white
                  flex
                  w-full
                  justify-center
                  align-end
                  "
              >
                <div className="mx-3 cursor-pointer w-[7%] text-sm hover:font-bold w-30">
                  Home
                </div>
                <div className="mx-3 cursor-pointer w-[7%] text-sm hover:font-bold w-30">
                  Projects
                </div>
                <div className="mx-3 cursor-pointer w-[7%] text-sm hover:font-bold w-30">
                  About Me
                </div>
                <div className="mx-3 cursor-pointer w-[7%] text-sm hover:font-bold w-30">
                  Contact
                </div>
              </div>
            )}

            <div className="text-4xl md:text-5xl  font-light text-white leading-relaxed">
              Abhishek <br />
              <div className=" relative font-extralight leading-relaxed text-lg md:text-xl md:!top-[2%]">
                Passionate Web-Developer and Problem Solver.
              </div>
              <div className="get-in-touch-btn mt-4">
                <button
                  className="text-lg
                            px-5 
                            py-1 
                            duration-200 
                            ease-in 
                            hover:bg-white 
                            hover:text-black 
                            hover:border-white
                            rounded 
                            border-solid 
                            border-2"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full
      h-screen
      relative
      max-w-[1200px]
      my-0
      mx-auto"
        id="about-me-section"
      >
        <div
          className="flex
        relative
        flex-col
        lg:flex-row
        lg:justify-between
        md:flex
        md:flex-col
        md:align-center
        sm:flex
        sm:align-center
        sm:flex-col
        justify-between
        w-full
        pt-[15%]
        "
        >
          <div className="w-full md:w-1/2 lg:w-1/2 p-10">
            <h4 className="tracking-widest text-2xl">WHO AM I ?</h4>
            <br />
            <br />
            <h3 className="text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              interdum turpis pulvinar convallis iaculis. Fusce ac mollis urna.
              Vestibulum velit risus, auctor eu molestie at, posuere vitae
              lorem. Vivamus iaculis, dolor pulvinar dapibus molestie, justo
              nulla vulputate orci, vitae sodales nunc metus in turpis. Cras
              massa urna, vulputate a elit.
            </h3>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 p-10">photo section</div>
        </div>
      </section>

      <section
        className="max-w-[1200px]
      relative
      mx-auto
      my-0
      relative"
        id="projects"
      >
        <div
          className="flex 
            flex-col
            relative
            w-full
            p-10
            lg:p-10
            "
        >
          <div
            className="project-title
              flex flex-row
              justify-between
              align-center"
          >
            <div
              className="w-[auto]
                relative
                font-bold-600
                text-7xl
                "
            >
              #1
            </div>
            <div className="w-[2px] h-[70px] bg-black"></div>
            <div
              className="w-[90%]
                text-3xl
                pl-3
                self-center"
            >
              School Solutions Web-App
            </div>
          </div>
          <div className="h-[2px] bg-black"></div>
        </div>
        <div
          className="flex
            relative
            flex-col
            md:flex-row
            lg:flex-row
            w-full
            p-10
            md:p-10
            lg:p-10
            "
        >
          <div className="w-full p-10 md:w-1/2 lg:w-1/2">
            The School Management System is a web application designed for
            efficient administration and communication. It includes features for
            news updates, class-wise topper details, and an enquiry form system.
            Built with React.js and Chakra UI, it leverages Firebase for
            authentication, data storage, and real-time functionality. The
            system ensures secure access, responsiveness across devices, and a
            user-friendly interface for seamless interaction with school updates
            and services.
          </div>
          <div className="relative p-10 md:w-1/2 lg:w-1/2">
            <div
              onMouseOver={() => setHover(true)}
              onMouseOut={() => setHover(false)}
              className="relative 
                 hover:blur-sm
                 ease-in-out
                duration-300
                rounded-md"
            >
              <img className="" src="ss.png" alt="project" />

              <div
                className="absolute
                top-1/2
                left-1/2
                -translate-x-1/2 -translate-y-1/2"
              >
                Click here
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="max-w-[1200px]
     
      mx-auto
      my-[5%]
      relative
      mx-auto
      my-0
      p-10
     "
      >
        <div
          className="max-width-[1200px]
        relative
        p-10
        flex-col
        flex 
        lg:flex-row
        "
        >
          <div className="lg:w-1/2  relative flex justify-center items-end">
            <img className="lg:w-[75%] w-[85%]" src="/mutual-contact.svg" alt="" />
          </div>
          <div className="w-full h-full lg:w-1/2 my-auto">


            {!isFormSubmitted? 
            <div className="lg:w-1/2 h-full lg:mt-10 mt-[20vh] w-full mx-auto relative">
              <div className="mx-auto my-auto ">
              <Image
              src="/success-icon.svg"
              width={70}
              height={70}
              className="mx-auto my-auto"/>
              <div className="text-center  pt-10">
                <h3 className="text-lg">
                  Details submitted
                </h3>
                <h2 className="text-2xl text-emerald-500">
                  SUCCESSFULLY !
                </h2>
              </div>
              </div>
              
            </div>
            :  
            <>
              {/* <div className="text-center relative text-2xl">Contact me</div>
            <form
              action=""
              onSubmit={handleForm}
              className="form mt-[5%] relative w-full lg:w-1/2 my-auto mx-auto"
            >
              <label
                htmlFor="name"
                className="name 
              block"
              >
                Name:
              </label>
              <input
                id="name"
                className="rounded py-1 my-2 w-full"
                type="text"
                name="from_name"
              />

              <label htmlFor="email" className="mt-2 email block">
                Email:
              </label>
              <input
                id="email"
                className="rounded py-1 my-2 w-full"
                type="email"
                name="email"
              />

              <label htmlFor="contact" className=" mt-2 contact block">
                Contact:
              </label>
              <input
                id="contact"
                className="rounded py-1 my-2 w-full"
                type="number"
                name="contact"
              />

              <label htmlFor="purpose" className="mt-2 purpose block">
                Purpose:
              </label>
              <input
                id="purpose"
                className="rounded py-1 my-2 w-full"
                type="text"
                name="purpose"
              />

              <label htmlFor="" className="block">
                <button
                  className="rounded border-solid bg-black text-white"
                  type="submit"
                >
                  Send
                </button>
              </label>
            </form> */}
            </>
            
            
            }
          </div>            
            
        </div>
      </section>
      <section id="footer"></section>
    </>
  );
}
