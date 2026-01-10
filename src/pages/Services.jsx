import React, { useState, useEffect } from 'react';
import '../components/ServicesPage.css';
import Testimonials from '../components/Testimonials';
import '../Service.css'
// Import images
import icon1 from '../assets/images/icon1.png';
import icon2 from '../assets/images/icon2.png';
import icon3 from '../assets/images/icon3.png';
import icon4 from '../assets/images/icon4.png';
import icon5 from '../assets/images/icon5.png';
import icon6 from '../assets/images/icon6.png';
import icon7 from '../assets/images/icon7.png';
import icon8 from '../assets/images/icon8.png';
import icon9 from '../assets/images/icon9.png';
import icon10 from '../assets/images/icon10.png';
import Icon11 from '../assets/images/Icon11.png';
import icon12 from '../assets/images/icon12.png';
import icon13 from '../assets/images/icon13.png';
import icon13Svg from '../assets/images/icon13.svg';
import icon14Svg from '../assets/images/icon14..svg';
import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img-3.png';
import img4 from '../assets/images/img-4.png';
import img6 from '../assets/images/img6.png';
import img7 from '../assets/images/img7.png';
import img_7 from '../assets/images/img-7.png';
import img8 from '../assets/images/img-8.png';
import img13 from '../assets/images/img-13.png';
import img15 from '../assets/images/img-15.png';
import Partnerships from '../components/Partnerships';
import FAQ from '../components/FAQ';
import callIcon from '../assets/images/call-icon.svg';
import mailIcon from '../assets/images/mail-icon.svg';
import Star from '../assets/star.svg';
import UserStar from '../assets/review-user.png';
import GreenStar1 from '../assets/green-star-1.png';
import GreenStar from '../assets/green-star.png';
import Award1 from '../assets/award2.png';
import Plans from '../components/Plans';
import Insights from '../components/Insights';
import HelpfulResources from '../components/HelpfulResources';
import Features from '../components/Features';

const Services = () => {
  const [accordionStates, setAccordionStates] = useState({});


  // Counter animation effect
  useEffect(() => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-target'));
      let count = 0;
      const speed = 2000;
      const increment = Math.ceil(target / (speed / 16));

      const updateCounter = setInterval(() => {
        count += increment;
        if (count >= target) {
          count = target;
          clearInterval(updateCounter);
        }
        counter.textContent = count.toLocaleString();
      }, 16);
    });
  }, []);

  // Accordion toggle handler
  const handleAccordionToggle = (index) => {
    setAccordionStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      {/* Professional Business Services */}
      <div
        className="min-h-screen w-full flex items-center justify-center hero-bg py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div
          className="absolute top-0 left-0 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"
        ></div>
        <div
          className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"
        ></div>
        <div
          className="max-w-7xl w-full mx-auto grid grid-cols-1 xl:!grid-cols-3 gap-0 lg:gap-5 items-center z-10"
        >
          <div className="space-y-4 lg:space-y-8 col-span-2 lg:pe-16">
            <div>
              <span
                className="hero-top-label heading_short pb-1"
              >
                Professional Business Services
              </span>
            </div>
            <h1
              className="text-2xl lg:text-3xl font-bold text-gray-900  leading-tight"
            >
              Launch Your Business the Right Way with Quick
              <span className="text-gray-900 "
              >GST Registration</span
              >
            </h1>
            <p
              className="text-lg text-gray-900 max-w-xl leading-relaxed"
            >
              Hassle-Free, Fast, and Reliable GST Registration to Get You
              Started in Just a Few Days.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <span className="material-icons-outlined text-green-500"
                >check_circle</span
                >
                <span className="text-gray-700"
                >Lowest price guarantee in the market</span
                >
              </li>
              <li className="flex items-center space-x-3">
                <span className="material-icons-outlined text-green-500"
                >check_circle</span
                >
                <span className="text-gray-700"
                >100% Online process, no office visit needed</span
                >
              </li>
              <li className="flex items-center space-x-3">
                <span className="material-icons-outlined text-green-500"
                >check_circle</span
                >
                <span className="text-gray-700"
                >Expert assistance from CA/CS professionals</span
                >
              </li>
            </ul>
            <div className="grid sm:grid-col-1 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-10">
              <div
                className="gradientcolor border border-[#8EC7FC]  rounded-2xl p-2 flex flex-col items-center text-center shadow-lg hover:shadow-md transition-shadow"
              >
                <div className=" p-2 rounded-full mb-2">
                  <img src={icon1} alt="" />
                </div>
                <p className="text-xs text-gray-600 font-medium">
                  GST Registration from just
                </p>
                <p className="text-lg font-bold text-gray-900 ">
                  ₹1,200/-
                </p>
              </div>
              <div
                className="gradientcolor border border-[#8EC7FC]  rounded-2xl p-2 flex flex-col items-center text-center shadow-lg hover:shadow-md transition-shadow"
              >
                <div className=" p-2 rounded-full mb-2">
                  <img src={icon2} alt="" />
                </div>
                <p className="text-xs text-gray-600 font-medium">
                  CA/CS Assisted
                </p>
                <div className="flex flex-col items-center">
                  <p className="text-lg font-bold text-gray-900 ">
                    4.5/5 Ratings
                  </p>
                  <div className="flex text-yellow-400 text-[10px]">
                    <span className="material-icons text-xs">star</span>
                    <span className="material-icons text-xs">star</span>
                    <span className="material-icons text-xs">star</span>
                    <span className="material-icons text-xs">star</span>
                    <span className="material-icons text-xs">star_half</span>
                  </div>
                </div>
              </div>
              <div
                className="gradientcolor border border-[#8EC7FC]  rounded-2xl p-2 flex flex-col items-center text-center shadow-lg hover:shadow-md transition-shadow"
              >
                <div className=" p-2 rounded-full mb-2">
                  <img src={icon3} alt="" />
                </div>
                <p className="text-xs text-gray-600 font-medium">
                  Get GSTIN in just
                </p>
                <p className="text-lg font-bold text-gray-900 ">
                  4-6 Days
                </p>
              </div>
            </div>
            <div className="flex lg:flex-row sm:flex-row gap-4 md:!gap-10 pt-4">
              <button
                className="flex items-center justify-center space-x-2 bg-primary hover:bg-primary-hover text-white font-semibold py-2 px-4 md:px-8 text-sm md:text-base rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
               <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.18201 4.76005C4.18201 4.12072 4.70118 3.60155 5.34051 3.60155H24.0235C24.6628 3.60155 25.182 4.12072 25.182 4.76005V23.4431C25.1817 23.7502 25.0595 24.0447 24.8424 24.2619C24.6252 24.4791 24.3307 24.6012 24.0235 24.6016H5.34051C5.03326 24.6016 4.73859 24.4795 4.52133 24.2622C4.30407 24.045 4.18201 23.7503 4.18201 23.4431V4.76005ZM5.63438 4.92195V23.4431H23.8061V4.92195H5.63438ZM13.0743 9.91905L18.7665 13.713C18.8305 13.7556 18.883 13.8134 18.9193 13.8812C18.9556 13.949 18.9746 14.0247 18.9746 14.1016C18.9746 14.1784 18.9556 14.2541 18.9193 14.3219C18.883 14.3897 18.8305 14.4475 18.7665 14.4901L13.0732 18.284C13.003 18.3306 12.9215 18.3573 12.8374 18.3612C12.7532 18.3652 12.6696 18.3463 12.5953 18.3066C12.521 18.2669 12.4589 18.2078 12.4155 18.1357C12.3721 18.0635 12.349 17.9809 12.3487 17.8967V10.3064C12.3488 10.222 12.3719 10.1392 12.4154 10.0668C12.4588 9.9945 12.5211 9.9353 12.5956 9.89556C12.6701 9.85581 12.7539 9.837 12.8382 9.84114C12.9225 9.84528 13.0041 9.8722 13.0743 9.91905Z" fill="#FFFDFC"/>
</svg>

                <span>Watch a demo</span>
              </button>
              <button
                className="flex items-center justify-center space-x-2  border-2 border-primary text-gray-900  font-semibold py-2 px-4 md:px-8 text-sm md:text-base rounded-full hover:bg-orange-50 transition-colors"
              >
              <svg width="22" height="22" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.24992 6.49935V23.8327H22.7499V25.9993H3.24992C2.67528 25.9993 2.12418 25.7711 1.71785 25.3647C1.31153 24.9584 1.08325 24.4073 1.08325 23.8327V6.49935H3.24992ZM17.3333 9.74935H23.2916L17.3333 3.79102V9.74935ZM7.58325 2.16602H18.4166L24.9166 8.66602V19.4993C24.9166 20.074 24.6883 20.6251 24.282 21.0314C23.8757 21.4377 23.3246 21.666 22.7499 21.666H7.58325C7.00862 21.666 6.45752 21.4377 6.05119 21.0314C5.64486 20.6251 5.41659 20.074 5.41659 19.4993V4.33268C5.41659 3.75805 5.64486 3.20695 6.05119 2.80062C6.45752 2.39429 7.00862 2.16602 7.58325 2.16602ZM7.58325 4.33268V19.4993H22.7499V11.916H15.1666V4.33268H7.58325Z" fill="#0018A6"/>
</svg>

                <span>View Packages</span>
              </button>
            </div>
          </div>
          <div className="relative mt-12 lg:mt-0">
            <div
              className="absolute -top-6 -left-10 z-20 w-full lg:!items-start flex flex-col items-center space-y-1"
            >
              <img src={img1} width="120" alt="" />
            </div>
            <div
              className="bg-[#FFF8EB] rounded-3xl p-6 md:p-8 shadow-card border border-[#FFD1A1]  relative"
            >
              <div className="text-center mb-6 mt-4">
                <h5 className="font-bold leading-8 text-gray-900 ">
                  Need assistance?<br />
                  <span className="text-gray-800"
                  >Our team will call.</span
                  >
                </h5>
              </div>
              <form className="space-y-5">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1 ml-1"
                    htmlFor="name"
                  >Name</label
                  >
                  <input
                    className="w-full rounded-full border-orange-200 bg-white  px-5 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow placeholder-gray-500 border border-[#FFD1A1]"
                    id="name"
                    placeholder="Amrit Kumar"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1 ml-1"
                    htmlFor="email"
                  >Email ID</label
                  >
                  <input
                    className="w-full rounded-full border-orange-200 bg-white  px-5 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow placeholder-gray-500 border border-[#FFD1A1]"
                    id="email"
                    placeholder="abcdefg@gmail.com"
                    type="email"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1 ml-1"
                    htmlFor="phone"
                  >Phone Number</label
                  >
                  <div className="flex gap-3">
                    <div className="relative w-1/3">
                      <div
                        className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                      >
                        <img
                          alt="India"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc9VMmcefu3X3_kfkFp4W1bxNkNhPBEiCiEsGWOD0Fb3Mwq1bVbtrNHQaJ9xTJ-9G-1AgxnayDmgh1GIq3MbkF92hsUhieTyFacwcdbiZaB_io5G31GoJJ6y5NBkQ2x4Ncwjxr9kByYtpmO-wNEMG_2puEc-yvnW3Tr0xODcfbH3NLveiLEzDaDBnHeMAck8sV68lfhd5VPacZro2EAORZCNLgicqYrBm2HieguCpQieT1jKySXstOW0eWisXhfGTN08lEYWXVUB1s"
                          srcSet="https://flagcdn.com/w40/in.png 2x"
                          width="20"
                        />
                      </div>
                      <select
                        className="block w-full rounded-full border border-[#FFD1A1] bg-white  pl-10 pr-8 py-3 focus:ring-2 focus:ring-primary focus:border-primary appearance-none outline-none"
                      >
                        <option>+91</option>
                        <option>+1</option>
                        <option>+44</option>
                      </select>
                      <div
                        className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 "
                      >
                        <svg
                          className="fill-current h-4 w-4"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <input
                      className="w-2/3 rounded-full border border-[#FFD1A1] bg-white  px-5 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow placeholder-gray-500"
                      id="phone"
                      placeholder="8023456789"
                      type="tel"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 py-2">
                  <div className="flex items-center h-5">
                    <input
                      aria-describedby="terms-description"
                      className="w-5 h-5 border border-[#EB612A] rounded text-primary focus:ring-primary "
                      id="terms"
                      name="terms"
                      type="checkbox"
                    />
                  </div>
                  <div className="ml-2 text-sm">
                    <label
                      className="font-medium text-gray-600"
                      htmlFor="terms"
                    >I hereby accept the 
                      <span
                        className="text-red-800 pl-1 font-semibold cursor-pointer hover:underline">T&amp;C </span
                      >
                      of Ebizfiling</label
                    >
                  </div>
                </div>
                <button
                  className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-2 px-6 rounded-full shadow-lg transform active:scale-95 transition-all flex items-center justify-center space-x-2 text-lg"
                  type="submit"
                >
                  <span>Book an Appointment</span>
                  <span className="material-icons">arrow_forward</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Professional Business Services End*/}
      {/* Trusted by Thousands */}
      <div
        className="font-body shadow-lg text-slate-800 flex flex-col items-center pt-10 transition-colors duration-300"
      >
        <div className="w-full max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative group">
              <div
                className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none"
              >
                <span className="material-symbols-outlined"> search </span>
              </div>
              <input
                className="block w-full rounded-full border-1 border-[#8FCBFF]  bg-white  py-3 pl-14 pr-14 text-slate-900  placeholder:text-slate-500 focus:ring-2 focus:ring-primary focus:border-transparent shadow-soft transition-all duration-200 text-sm lg:text-lg"
                placeholder="Looking for Company Registration"
                type="text"
              />
              <div
                className="absolute inset-y-0 right-0 pr-5 flex items-center cursor-pointer"
              >
                <span className="material-symbols-outlined text-[#EB612A]">
                  mic
                </span>
              </div>
            </div>
          </div>
          <div className="text-center mb-12">
            <div className="heading_short_long mb-3">
              <div className="short_title">
                Trusted by Thousands
              </div>
              <h2
                className="long_title"
              >
                Rated 4.5<span className="text-slate-800 "> ★ </span>
                On Google &amp; Trustpilot
              </h2>
            </div>

          </div>
          <div
            className="grid grid-cols-1 lg:!grid-cols-3 gap-6 lg:gap-8 max-full mx-auto pb-10 lg:pb-20"
          >
            <div
              className="bg-white shadow_custome rounded-2xl p-4 shadow-soft  flex flex-col justify-center h-full hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0">
                  <svg
                    className="w-28 h-28"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                      fill="#EA4335"
                    ></path>
                    <path
                      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                      fill="#4285F4"
                    ></path>
                    <path
                      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                      fill="#FBBC05"
                    ></path>
                    <path
                      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                      fill="#34A853"
                    ></path>
                  </svg>
                </div>
                <div className="flex flex-col space-y-3">
                  <div >
                    <ul className="flex items-center space-x-2 mb-1">
                      <li><img className='w-8 h-8' src={Star} alt='star' /></li>
                      <li><img className='w-8 h-8' src={Star} alt='star' /></li>
                      <li><img className='w-8 h-8' src={Star} alt='star' /></li>
                      <li><img className='w-8 h-8' src={Star} alt='star' /></li>
                      <li><img className='w-8 h-8' src={Star} alt='star' /></li>
                    </ul>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 ">
                    5/5 Google Reviews
                  </div>
                  <div className="flex items-center mt-2 pl-2">
                    <div className="flex -space-x-3">
                      <img
                        alt="User 1"
                        className="w-10 h-10 rounded-full border-2 border-white"
                        src={UserStar}
                      />
                      <img
                        alt="User 2"
                        className="w-10 h-10 rounded-full border-2 border-white"
                        src={UserStar}
                      />
                      <img
                        alt="User 3"
                        className="w-10 h-10 rounded-full border-2 border-white"
                        src={UserStar}
                      />
                      <img
                        alt="User 4"
                        className="w-10 h-10 rounded-full border-2 border-white"
                       src={UserStar}
                      />
                      <img
                        alt="User 5"
                        className="w-10 h-10 rounded-full border-2 border-white"
                        src={UserStar}
                      />
                      <div
                        className="w-10 h-10 rounded-full border-2 border-white bg-purple-700 text-white flex items-center justify-center text-xs font-bold z-10"
                      >
                        20K+
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bg-white shadow_custome rounded-2xl p-4 shadow-soft  flex gap-10 items-start hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className="flex-shrink-0 flex flex-col items-center justify-center mt-1"
              >
                <div className="wreath-container">
                  <img src={img2}  alt="" />
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-between h-full">
                <div>
                  <h3
                    className="text-2xl font-bold border-b border-gray-400 text-slate-900 pb-3 mb-3"
                  >
                    Award Name
                  </h3>

                  <p
                    className="text-sm text-slate-500 leading-snug mb-4"
                  >
                    Ullamcorper ultrices quis ullam tincidunt felis, placerat
                    Lorem Ut leo.
                  </p>
                </div>
                <div
                  className="flex justify-between sm:flex-row sm:items-center sm:justify-between text-xs pt-3 border-t border-slate-100 "
                >
                  <span className="text-slate-500 mb-1 sm:mb-0">02/05/2025</span>
                  <a
                    className="text-primary text-[12px] italic hover:text-orange-700 transition-colors font-medium"
                    href="#"
                  >Know more about this award
                  </a>
                </div>
              </div>
            </div>
            <div
              className="bg-white shadow_custome rounded-2xl shadow-soft  overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className="bg-[#00B67A] px-6 py-4 flex items-center justify-center space-x-2"
              >
                <img src={GreenStar1} className='w-10' alt='star' />
                <span className="text-white font-bold text-2xl tracking-tight"
                >Trustpilot</span
                >
              </div>
              <div className="p-4 flex flex-col items-center justify-center flex-1">
                <div
                  className="text-xl font-medium text-slate-800  mb-3"
                >
                  Excellent
                </div>
                <div className="flex space-x-2 mb-3">
                  <div className="trustpilot-star-box bg-[#00B67A] rounded-sm">
                  <img src={GreenStar} alt='star' />
                  </div>
                  <div className="trustpilot-star-box bg-[#00B67A] rounded-sm">
                  <img src={GreenStar} alt='star' />
                  </div>
                  <div className="trustpilot-star-box bg-[#00B67A] rounded-sm">
                  <img src={GreenStar} alt='star' />
                  </div>
                  <div className="trustpilot-star-box bg-[#00B67A] rounded-sm">
                  <img src={GreenStar} alt='star' />
                  </div>
                  <div className="trustpilot-star-box bg-[#00B67A] rounded-sm">
                  <img src={GreenStar} alt='star' />
                  </div>
                </div>
                <div className="text-sm text-black">
                  Based on <a
                    className="font-bold underline decoration-slate-500  hover:text-slate-800"
                    href="#"
                  > 456 reviews</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Trusted by Thousands end */}


      {/* Benefits of GST Registration */}
      <div
        className="gst_timeline my-10 text-slate-800  font-body antialiased transition-colors duration-300"
      >
        <nav
          className="sticky top-0 z-50 w-full bg-gradient-to-r from-orange-50 via-white to-blue-50 border-b border-gray-100 shadow-sm backdrop-blur-sm bg-opacity-95"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="flex justify-between md:justify-between items-center overflow-x-auto whitespace-nowrap no-scrollbar space-x-2 md:space-x-4"
            >
              <a
                className="bg-primary text-white px-8 py-2.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                href="#"
              >
                Benefits
              </a>
              <a
                className="text-slate-800 font-bold text-sm px-5 py-2.5 rounded-full hover:bg-white/50 hover:text-primary transition-all"
                href="#"
              >
                Services
              </a>
              <a
                className="text-slate-800 font-bold text-sm px-5 py-2.5 rounded-full hover:bg-white/50 hover:text-primary transition-all"
                href="#"
              >
                Process
              </a>
              <a
                className="text-slate-800 font-bold text-sm px-5 py-2.5 rounded-full hover:bg-white/50 hover:text-primary transition-all"
                href="#"
              >
                Plans &amp; Pricing
              </a>
              <a
                className="text-slate-800 font-bold text-sm px-5 py-2.5 rounded-full hover:bg-white/50 hover:text-primary transition-all"
                href="#"
              >
                Why Ebizfiling
              </a>
              <a
                className="text-slate-800 font-bold text-sm px-5 py-2.5 rounded-full hover:bg-white/50 hover:text-primary transition-all"
                href="#"
              >
                FAQ's
              </a>
            </div>
          </div>
        </nav>
      </div>
      {/* Benefits of GST Registration end */}
      {/* Plans and Pricing */}
      <div className="lg:py-20 py-10 px-4 sm:px-6 lg:px-16 bg-[#FBFCFF] my-6 mx-auto">
        <div className="text-center mb-8 lg:mb-16">
          <div className="heading_short_long mb-4 group">
            <div className="short_title">
              Benefits of GST Registration
            </div>
            <h2 className="long_title">
              Why <span className="text-primary">(Service Name)</span> Is A Smart
              Choice?
            </h2>
          </div>

        </div>
        <div className="grid grid-cols-1 md:!grid-cols-2 lg:!grid-cols-2 gap-8 lg:gap-10">
          <div
            className="gradientcolor shadow_custome1 border border-[#8EC7FC]  rounded-xl p-4 sm:p-6 transition-all duration-300 group flex flex-col h-full"
          >
            <div className="mb-1 relative w-16 h-16">
              <img src={icon4} alt="" />
            </div>
            <h3
              className="text-xl md:text-2xl font-bold text-slate-900  mb-4"
            >
              Tax Savings — Reduce costs with credits
            </h3>
            <p
              className=" leading-relaxed text-base text-gray-500"
            >
              With GST, you can claim input tax credits on purchases made for
              your business. This helps reduce your overall tax liability. In
              simple terms, you spend less and save more while staying
              compliant.
            </p>
          </div>
          <div
            className="gradientcolor shadow_custome1 border border-[#8EC7FC]  rounded-xl p-4 sm:p-6 transition-all duration-300 group flex flex-col h-full"
          >
            <div className="mb-1 relative w-16 h-16">
              <img src={icon4} alt="" />
            </div>
            <h3
              className="text-xl md:text-2xl font-bold text-slate-900  mb-4"
            >
              Tax Savings — Reduce costs with credits
            </h3>
            <p
              className=" leading-relaxed text-base text-gray-500"
            >
              With GST, you can claim input tax credits on purchases made for
              your business. This helps reduce your overall tax liability. In
              simple terms, you spend less and save more while staying
              compliant.
            </p>
          </div>
          <div
            className="gradientcolor shadow_custome1 border border-[#8EC7FC]  rounded-xl p-4 sm:p-6 transition-all duration-300 group flex flex-col h-full"
          >
            <div className="mb-1 relative w-16 h-16">
              <img src={icon4} alt="" />
            </div>
            <h3
              className="text-xl md:text-2xl font-bold text-slate-900  mb-4"
            >
              Tax Savings — Reduce costs with credits
            </h3>
            <p
              className=" leading-relaxed text-base text-gray-500"
            >
              With GST, you can claim input tax credits on purchases made for
              your business. This helps reduce your overall tax liability. In
              simple terms, you spend less and save more while staying
              compliant.
            </p>
          </div>
          <div
            className="gradientcolor shadow_custome1 border border-[#8EC7FC]  rounded-xl p-4 sm:p-6  transition-all duration-300 group flex flex-col h-full"
          >
            <div className="mb-1 relative w-16 h-16">
              <img src={icon4} alt="" />
            </div>
            <h3
              className="text-xl md:text-2xl font-bold text-slate-900  mb-4"
            >
              Tax Savings — Reduce costs with credits
            </h3>
            <p
              className=" leading-relaxed text-base text-gray-500"
            >
              With GST, you can claim input tax credits on purchases made for
              your business. This helps reduce your overall tax liability. In
              simple terms, you spend less and save more while staying
              compliant.
            </p>
          </div>
        </div>
      </div>


      {/* Plans  */}
      <Plans />

      {/* Company Overview */}
      <div
        className="font-display text-gray-800 antialiased min-h-screen py-10 px-4 transition-colors duration-300"
      >
        <div className="px-0 lg:px-12 mx-auto">
          <div className="heading_short_long text-center mb-10">
            <div className="short_title">
              Company Overview
            </div>
            <h2
              className="long_title">
              Key Details About Private Limited Registration In India
            </h2>
          </div>
          <div
            className="bg-white rounded-xl shadow-lg p-6 md:p-10 border border-gray-100 "
          >
            <div className="grid grid-cols-1 lg:!grid-cols-12 gap-8 mb-12">
              <div className="lg:col-span-6">
                <h2
                  className="text-2xl font-bold text-gray-900  mb-5"
                >
                  Overview
                </h2>
                <div
                  className="prose max-w-none text-gray-700 text-base leading-relaxed space-y-4"
                >
                  <p>
                    Private Limited Company registration in India is one of the
                    most popular business structures for startups, SMEs, and
                    entrepreneurs looking to formalize their operations. This
                    legal entity offers numerous benefits including limited
                    liability protection, separate legal identity, ease of
                    raising capital, and enhanced credibility in the market. The
                    registration process is governed by the Ministry of
                    Corporate Affairs (MCA) and ensures compliance with Indian
                    corporate laws. Private Limited Company registration in
                    India is one of the most popular business structures for
                    startups, SMEs, and entrepreneurs looking to formalize their
                    operations.
                  </p>
                  <p>
                    To register a Private Limited Company, businesses must meet
                    specific requirements set under the Companies Act, 2013,
                    including a minimum of 2 directors and 2 shareholders, a
                    unique company name, registered office address, and proper
                    documentation. The process involves obtaining a Digital
                    Signature Certificate (DSC), Director Identification Number
                    (DIN), name approval, filing incorporation documents, and
                    maintaining ongoing compliance with annual filing
                    requirements and statutory audits. To register a Private
                    Limited Company, businesses must meet specific requirements
                    set under the Companies Act, 2013.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-6 flex items-start justify-center">
                <div className="relative w-full h-64 lg:!h-[450px] overflow-hidden">
                  <img
                    alt="Legal scales of justice held by a professional in a suit"
                    className="w-full h-full object-cover"
                    src={img3}
                  />
                </div>
              </div>
              <div className="lg:col-span-12">
              <div
                  className="prose max-w-none text-gray-700 text-base leading-relaxed space-y-4"
                >
              <p>To register a Private Limited Company, businesses must meet specific requirements set under the Companies Act, 2013, including a minimum of 2 directors and 2 shareholders, a unique company name, registered office address, and proper documentation. The process involves obtaining a Digital Signature Certificate (DSC), Director Identification Number (DIN), name approval, filing incorporation documents, and maintaining ongoing compliance with annual filing requirements and statutory audits. To register a Private Limited Company, businesses must meet specific requirements set under the Companies Act, 2013, including a minimum of 2 directors and 2 shareholders, a unique company name, registered office address, and proper documentation.</p>
                </div>
            </div>
            </div>
            <div className="mb-10">
              <h3
                className="text-2xl md:text-3xl font-bold text-gray-900  mb-5"
              >
                What is a
                <span className="text-primary"> Private Limited Company</span> (Pvt
                Ltd)?
              </h3>
              <div
                className="prose max-w-none text-gray-700 text-base leading-relaxed space-y-4"
              >
                <p>
                  A Private Limited Company is a privately held business entity
                  where the liability of shareholders is limited to their share
                  capital. It's an ideal structure for startups and SMEs as it
                  offers the perfect balance of limited liability protection,
                  operational flexibility, and credibility. Unlike public
                  companies, shares cannot be freely transferred or traded on
                  stock exchanges, making it suitable for businesses with a
                  close-knit group of stakeholders. A Private Limited Company is
                  a privately held business entity where the liability of
                  shareholders is limited to their share capital. It's an ideal
                  structure for startups and SMEs as it offers the perfect
                  balance of limited liability protection, operational
                  flexibility, and credibility.
                </p>
              </div>
            </div>
            <div
              className="bg-blue-50 /50 rounded-lg p-6 border border-[#8EC7FC] "
            >
              <h3 className="font-bold text-lg text-gray-900  mb-2">
                Companies Act, 2013
              </h3>
              <p className="text-primary text-sm font-medium mb-6">
                Under the Companies Act, 2013, a Private Limited Company must
                comply with the following legal conditions:
              </p>
              <div className="grid grid-cols-1 md:!grid-cols-2 gap-4">
                <div
                  className="bg-white rounded-md p-4 flex items-center gap-3 shadow-sm border border-gray-100"
                >
                  <span
                    className="pt-[2px] bg-[#E3F1FF] shadow-lg text-center rounded-full w-6 h-6 text-gray-700 text-sm mt-0.5"
                  >a</span
                  >
                  <p
                    className="text-sm text-gray-800 leading-tight"
                  >
                    Minimum of 2 and maximum of 200 members (shareholders),
                    excluding employees and ex-employees
                  </p>
                </div>
                <div
                  className="bg-white rounded-md p-4 flex items-center gap-3 shadow-sm border border-gray-100"
                >
                  <span
                    className="pt-[2px] bg-[#E3F1FF] shadow-lg text-center rounded-full w-6 h-6 text-gray-700 text-sm mt-0.5"
                  >b</span
                  >
                  <p
                    className="text-sm text-gray-800 leading-tight"
                  >
                    Minimum of 2 and maximum of 200 members (shareholders),
                    excluding employees and ex-employees
                  </p>
                </div>
                <div
                  className="bg-white rounded-md p-4 flex items-center gap-3 shadow-sm border border-gray-100"
                >
                  <span
                    className="pt-[2px] bg-[#E3F1FF] shadow-lg text-center rounded-full w-6 h-6 text-gray-700 text-sm mt-0.5"
                  >c</span
                  >
                  <p
                    className="text-sm text-gray-800 leading-tight"
                  >
                    Minimum of 2 and maximum of 200 members (shareholders),
                    excluding employees and ex-employees
                  </p>
                </div>
                <div
                  className="bg-white rounded-md p-4 flex items-center gap-3 shadow-sm border border-gray-100"
                >
                  <span
                    className="pt-[2px] bg-[#E3F1FF] shadow-lg text-center rounded-full w-6 h-6 text-gray-700 text-sm mt-0.5"
                  >d</span
                  >
                  <p
                    className="text-sm text-gray-800 leading-tight"
                  >
                    Minimum of 2 and maximum of 200 members (shareholders),
                    excluding employees and ex-employees
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Company Overview end */}
      {/* Features of GST Service */}
      <div
        className="bg-[#FBFCFF] my-8  transition-colors duration-300 font-sans antialiased min-h-screen flex flex-col justify-center"
      >
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="heading_short_long text-center mb-12 space-y-4">
            <div className='short_title'>
              Features of GST Service
            </div>
            <h2
              className="long_title">
              Faucibus Adipiscing Viverra Placerat Ex
            </h2>
            <p
              className="mx-auto  text-base sm:text-lg leading-relaxed"
            >
              Experience hassle-free GST registration with our comprehensive service designed to make your business compliant quickly and efficiently, backed by expert support every step of the way.
            </p>
          </div>
          <div
            className="grid grid-cols-1 lg:!grid-cols-2 gap-12 items-center mb-10"
          >
            <div className="space-y-4">
              <div
                className="group flex items-center p-3 bg-card-light rounded-lg border border-orange-100  hover:border-orange-200/30 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex-shrink-0 mr-4">
                  <div
                    className=" flex items-center justify-center text-green-500"
                  >
                    <svg width="27" height="33" viewBox="0 0 27 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.1507 32.4658C12.9589 32.4658 12.7808 32.4521 12.6164 32.4247C12.4521 32.3973 12.2877 32.3562 12.1233 32.3014C8.42466 31.0685 5.47945 28.7879 3.28767 25.4597C1.09589 22.1315 0 18.549 0 14.7123V6.94521C0 6.26027 0.198904 5.64384 0.596712 5.09589C0.99452 4.54795 1.50795 4.15068 2.13699 3.90411L12 0.205479C12.3836 0.0684931 12.7671 0 13.1507 0C13.5342 0 13.9178 0.0684931 14.3014 0.205479L24.1644 3.90411C24.7945 4.15068 25.3085 4.54795 25.7063 5.09589C26.1041 5.64384 26.3025 6.26027 26.3014 6.94521V14.7123C26.3014 18.5479 25.2055 22.1304 23.0137 25.4597C20.8219 28.789 17.8767 31.0696 14.1781 32.3014C14.0137 32.3562 13.8493 32.3973 13.6849 32.4247C13.5205 32.4521 13.3425 32.4658 13.1507 32.4658ZM13.1507 29.1781C16 28.274 18.3562 26.4658 20.2192 23.7534C22.0822 21.0411 23.0137 18.0274 23.0137 14.7123V6.94521L13.1507 3.24658L3.28767 6.94521V14.7123C3.28767 18.0274 4.21918 21.0411 6.08219 23.7534C7.9452 26.4658 10.3014 28.274 13.1507 29.1781Z" fill="#14AE5C"/>
</svg>

                  </div>
                </div>
                <div>
                  <h3
                    className="font-bold text-slate-900  !text-xl mb-1"
                  >
                    100% Legal Compliance
                  </h3>
                  <p className="text-base text-gray-600">
                    Complete adherence to GST laws and government regulations
                  </p>
                </div>
              </div>
              <div
                className="group flex items-center p-3 bg-card-light rounded-lg border border-orange-100  hover:border-orange-200/30 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex-shrink-0 mr-4">
                  <div
                    className=" flex items-center justify-center text-green-500"
                  >
                    <svg width="27" height="33" viewBox="0 0 27 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.1507 32.4658C12.9589 32.4658 12.7808 32.4521 12.6164 32.4247C12.4521 32.3973 12.2877 32.3562 12.1233 32.3014C8.42466 31.0685 5.47945 28.7879 3.28767 25.4597C1.09589 22.1315 0 18.549 0 14.7123V6.94521C0 6.26027 0.198904 5.64384 0.596712 5.09589C0.99452 4.54795 1.50795 4.15068 2.13699 3.90411L12 0.205479C12.3836 0.0684931 12.7671 0 13.1507 0C13.5342 0 13.9178 0.0684931 14.3014 0.205479L24.1644 3.90411C24.7945 4.15068 25.3085 4.54795 25.7063 5.09589C26.1041 5.64384 26.3025 6.26027 26.3014 6.94521V14.7123C26.3014 18.5479 25.2055 22.1304 23.0137 25.4597C20.8219 28.789 17.8767 31.0696 14.1781 32.3014C14.0137 32.3562 13.8493 32.3973 13.6849 32.4247C13.5205 32.4521 13.3425 32.4658 13.1507 32.4658ZM13.1507 29.1781C16 28.274 18.3562 26.4658 20.2192 23.7534C22.0822 21.0411 23.0137 18.0274 23.0137 14.7123V6.94521L13.1507 3.24658L3.28767 6.94521V14.7123C3.28767 18.0274 4.21918 21.0411 6.08219 23.7534C7.9452 26.4658 10.3014 28.274 13.1507 29.1781Z" fill="#14AE5C"/>
</svg>

                  </div>
                </div>
                <div>
                  <h3
                    className="font-bold text-slate-900  !text-xl mb-1"
                  >
                    100% Legal Compliance
                  </h3>
                  <p className="text-base text-gray-600">
                    Complete adherence to GST laws and government regulations
                  </p>
                </div>
              </div>
              <div
                className="group flex items-center p-3 bg-card-light rounded-lg border border-orange-100  hover:border-orange-200/30 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex-shrink-0 mr-4">
                  <div
                    className=" flex items-center justify-center text-green-500"
                  >
                    <svg width="27" height="33" viewBox="0 0 27 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.1507 32.4658C12.9589 32.4658 12.7808 32.4521 12.6164 32.4247C12.4521 32.3973 12.2877 32.3562 12.1233 32.3014C8.42466 31.0685 5.47945 28.7879 3.28767 25.4597C1.09589 22.1315 0 18.549 0 14.7123V6.94521C0 6.26027 0.198904 5.64384 0.596712 5.09589C0.99452 4.54795 1.50795 4.15068 2.13699 3.90411L12 0.205479C12.3836 0.0684931 12.7671 0 13.1507 0C13.5342 0 13.9178 0.0684931 14.3014 0.205479L24.1644 3.90411C24.7945 4.15068 25.3085 4.54795 25.7063 5.09589C26.1041 5.64384 26.3025 6.26027 26.3014 6.94521V14.7123C26.3014 18.5479 25.2055 22.1304 23.0137 25.4597C20.8219 28.789 17.8767 31.0696 14.1781 32.3014C14.0137 32.3562 13.8493 32.3973 13.6849 32.4247C13.5205 32.4521 13.3425 32.4658 13.1507 32.4658ZM13.1507 29.1781C16 28.274 18.3562 26.4658 20.2192 23.7534C22.0822 21.0411 23.0137 18.0274 23.0137 14.7123V6.94521L13.1507 3.24658L3.28767 6.94521V14.7123C3.28767 18.0274 4.21918 21.0411 6.08219 23.7534C7.9452 26.4658 10.3014 28.274 13.1507 29.1781Z" fill="#14AE5C"/>
</svg>

                  </div>
                </div>
                <div>
                  <h3
                    className="font-bold text-slate-900  !text-xl mb-1"
                  >
                    100% Legal Compliance
                  </h3>
                  <p className="text-base text-gray-600">
                    Complete adherence to GST laws and government regulations
                  </p>
                </div>
              </div>
              <div
                className="group flex items-center p-3 bg-card-light rounded-lg border border-orange-100  hover:border-orange-200/30 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex-shrink-0 mr-4">
                  <div
                    className=" flex items-center justify-center text-green-500"
                  >
                    <svg width="27" height="33" viewBox="0 0 27 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.1507 32.4658C12.9589 32.4658 12.7808 32.4521 12.6164 32.4247C12.4521 32.3973 12.2877 32.3562 12.1233 32.3014C8.42466 31.0685 5.47945 28.7879 3.28767 25.4597C1.09589 22.1315 0 18.549 0 14.7123V6.94521C0 6.26027 0.198904 5.64384 0.596712 5.09589C0.99452 4.54795 1.50795 4.15068 2.13699 3.90411L12 0.205479C12.3836 0.0684931 12.7671 0 13.1507 0C13.5342 0 13.9178 0.0684931 14.3014 0.205479L24.1644 3.90411C24.7945 4.15068 25.3085 4.54795 25.7063 5.09589C26.1041 5.64384 26.3025 6.26027 26.3014 6.94521V14.7123C26.3014 18.5479 25.2055 22.1304 23.0137 25.4597C20.8219 28.789 17.8767 31.0696 14.1781 32.3014C14.0137 32.3562 13.8493 32.3973 13.6849 32.4247C13.5205 32.4521 13.3425 32.4658 13.1507 32.4658ZM13.1507 29.1781C16 28.274 18.3562 26.4658 20.2192 23.7534C22.0822 21.0411 23.0137 18.0274 23.0137 14.7123V6.94521L13.1507 3.24658L3.28767 6.94521V14.7123C3.28767 18.0274 4.21918 21.0411 6.08219 23.7534C7.9452 26.4658 10.3014 28.274 13.1507 29.1781Z" fill="#14AE5C"/>
</svg>

                  </div>
                </div>
                <div>
                  <h3
                    className="font-bold text-slate-900  !text-xl mb-1"
                  >
                    100% Legal Compliance
                  </h3>
                  <p className="text-base text-gray-600">
                    Complete adherence to GST laws and government regulations
                  </p>
                </div>
              </div>
              <div
                className="group flex items-center p-3 bg-card-light rounded-lg border border-orange-100  hover:border-orange-200/30 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex-shrink-0 mr-4">
                  <div
                    className=" flex items-center justify-center text-green-500"
                  >
                    <svg width="27" height="33" viewBox="0 0 27 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.1507 32.4658C12.9589 32.4658 12.7808 32.4521 12.6164 32.4247C12.4521 32.3973 12.2877 32.3562 12.1233 32.3014C8.42466 31.0685 5.47945 28.7879 3.28767 25.4597C1.09589 22.1315 0 18.549 0 14.7123V6.94521C0 6.26027 0.198904 5.64384 0.596712 5.09589C0.99452 4.54795 1.50795 4.15068 2.13699 3.90411L12 0.205479C12.3836 0.0684931 12.7671 0 13.1507 0C13.5342 0 13.9178 0.0684931 14.3014 0.205479L24.1644 3.90411C24.7945 4.15068 25.3085 4.54795 25.7063 5.09589C26.1041 5.64384 26.3025 6.26027 26.3014 6.94521V14.7123C26.3014 18.5479 25.2055 22.1304 23.0137 25.4597C20.8219 28.789 17.8767 31.0696 14.1781 32.3014C14.0137 32.3562 13.8493 32.3973 13.6849 32.4247C13.5205 32.4521 13.3425 32.4658 13.1507 32.4658ZM13.1507 29.1781C16 28.274 18.3562 26.4658 20.2192 23.7534C22.0822 21.0411 23.0137 18.0274 23.0137 14.7123V6.94521L13.1507 3.24658L3.28767 6.94521V14.7123C3.28767 18.0274 4.21918 21.0411 6.08219 23.7534C7.9452 26.4658 10.3014 28.274 13.1507 29.1781Z" fill="#14AE5C"/>
</svg>

                  </div>
                </div>
                <div>
                  <h3
                    className="font-bold text-slate-900  !text-xl mb-1"
                  >
                    100% Legal Compliance
                  </h3>
                  <p className="text-base text-gray-600">
                    Complete adherence to GST laws and government regulations
                  </p>
                </div>
              </div>
              <div
                className="group flex items-center p-3 bg-card-light rounded-lg border border-orange-100  hover:border-orange-200/30 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex-shrink-0 mr-4">
                  <div
                    className=" flex items-center justify-center text-green-500"
                  >
                    <svg width="27" height="33" viewBox="0 0 27 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.1507 32.4658C12.9589 32.4658 12.7808 32.4521 12.6164 32.4247C12.4521 32.3973 12.2877 32.3562 12.1233 32.3014C8.42466 31.0685 5.47945 28.7879 3.28767 25.4597C1.09589 22.1315 0 18.549 0 14.7123V6.94521C0 6.26027 0.198904 5.64384 0.596712 5.09589C0.99452 4.54795 1.50795 4.15068 2.13699 3.90411L12 0.205479C12.3836 0.0684931 12.7671 0 13.1507 0C13.5342 0 13.9178 0.0684931 14.3014 0.205479L24.1644 3.90411C24.7945 4.15068 25.3085 4.54795 25.7063 5.09589C26.1041 5.64384 26.3025 6.26027 26.3014 6.94521V14.7123C26.3014 18.5479 25.2055 22.1304 23.0137 25.4597C20.8219 28.789 17.8767 31.0696 14.1781 32.3014C14.0137 32.3562 13.8493 32.3973 13.6849 32.4247C13.5205 32.4521 13.3425 32.4658 13.1507 32.4658ZM13.1507 29.1781C16 28.274 18.3562 26.4658 20.2192 23.7534C22.0822 21.0411 23.0137 18.0274 23.0137 14.7123V6.94521L13.1507 3.24658L3.28767 6.94521V14.7123C3.28767 18.0274 4.21918 21.0411 6.08219 23.7534C7.9452 26.4658 10.3014 28.274 13.1507 29.1781Z" fill="#14AE5C"/>
</svg>

                  </div>
                </div>
                <div>
                  <h3
                    className="font-bold text-slate-900  !text-xl mb-1"
                  >
                    100% Legal Compliance
                  </h3>
                  <p className="text-base text-gray-600">
                    Complete adherence to GST laws and government regulations
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative flex justify-center items-center h-full min-h-[400px]"
            >
              <div
                className="absolute w-64 h-64 bg-orange-100 rounded-full blur-3xl -z-10 top-1/4 right-1/4 animate-pulse"
              ></div>
              <div
                className="absolute w-64 h-64 bg-blue-100 rounded-full blur-3xl -z-10 bottom-1/4 left-1/4"
              ></div>
              <img
                alt="Illustration of a man pointing to a smartphone showing key features of GST service"
                className="object-contain max-h-[500px] w-auto drop-shadow-xl rounded-2xl"
                src={img4}
              />
            </div>
          </div>
          <div className="text-center space-y-6">
            <h3
              className="text-xl sm:text-2xl font-bold text-slate-900 "
            >
              Join 50,000+ businesses who trust eBizFiling
            </h3>
            <button
              className="bg-primary hover:bg-orange-600 text-white font-semibold py-2 px-10 rounded-full shadow-lg hover:shadow-glow transform hover:-translate-y-0.5 transition-all duration-200 text-lg flex items-center justify-center mx-auto space-x-2"
            >
              <span>Start Registration</span>
             
            </button>
          </div>
        </section>
      </div>

      {/* Features of GST Service end */}
      {/* testimonial */}
      <Testimonials showForm={false} />
      {/* testimonial end */}
      {/* What Happen Next? */}
      <div
        className="bg-[#FBFCFF] my-8 text-gray-800 transition-colors duration-300"
      >
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10"
          >
            <div
              className="absolute top-1/4 left-10 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50 mix-blend-multiply"
            ></div>
            <div
              className="absolute bottom-1/4 right-10 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50 mix-blend-multiply"
            ></div>
          </div>
          <div className="mx-auto">
            <div className="text-center mb-8 lg:mb-16 relative">
              <div className="heading_short_long inline-block relative mb-3">
                <div className='short_title'>
                  What Happen Next?
                </div>
                <h2
                  className="long_title inline-block pb-6">
                  Post Service <span className="text-primary">Compliances</span>
                </h2>
                <p
                  className=" mx-auto text-gray-600 text-lg leading-relaxed"
                >
                 After your GST registration is complete, we ensure seamless compliance and ongoing support to keep your business running smoothly.
                </p>
              </div>

            </div>
            <div
              className="flex flex-col lg:!flex-row items-center justify-between gap-12 lg:gap-20"
            >
              <div className="w-full relative flex justify-center">
                <div className="relative w-full max-w-md">
                  <div
                    className="absolute inset-0 bg-gradient-to-tr from-orange-50 to-blue-50 rounded-full transform scale-110 blur-2xl -z-10"
                  ></div>
                  <img
                    alt="Illustration of a thoughtful person looking at direction signs"
                    className="w-full h-auto object-contain drop-shadow-lg rounded-2xl"
                    src={img6}
                  />
                </div>
              </div>
              <div className="w-full lg:w-7/12">
                <div className="grid grid-cols-1 md:!grid-cols-2 gap-y-6 gap-x-10">
                  <div
                    className="p-4 rounded-xl bg-[#F6FAFF] card_deadline relative z-10"
                  >
                    <div className="mb-4 text-indigo-600">
                      <img src={icon9} alt="icon" />
                    </div>
                    <h3
                      className="font-bold text-lg mb-2 text-gray-900 "
                    >
                      Deadline Reminders
                    </h3>
                    <p
                      className="text-sm text-gray-500 leading-relaxed"
                    >
                      Never miss important due dates with our automated reminder
                      system for returns and payments.
                    </p>
                  </div>
                  <div
                    className="p-4 rounded-xl bg-[#F6FAFF] card_deadline relative z-10"
                  >
                    <div className="mb-4 text-indigo-600">
                      <img src={icon9} alt="icon" />
                    </div>
                    <h3
                      className="font-bold text-lg mb-2 text-gray-900 "
                    >
                      Deadline Reminders
                    </h3>
                    <p
                      className="text-sm text-gray-500 leading-relaxed"
                    >
                      Never miss important due dates with our automated reminder
                      system for returns and payments.
                    </p>
                  </div>
                  <div
                    className="p-4 rounded-xl bg-[#F6FAFF] card_deadline relative z-10"
                  >
                    <div className="mb-4 text-indigo-600">
                      <img src={icon9} alt="icon" />
                    </div>
                    <h3
                      className="font-bold text-lg mb-2 text-gray-900 "
                    >
                      Deadline Reminders
                    </h3>
                    <p
                      className="text-sm text-gray-500 leading-relaxed"
                    >
                      Never miss important due dates with our automated reminder
                      system for returns and payments.
                    </p>
                  </div>
                  <div
                    className="p-4 rounded-xl bg-[#F6FAFF] card_deadline relative z-10"
                  >
                    <div className="mb-4 text-indigo-600">
                      <img src={icon9} alt="icon" />
                    </div>
                    <h3
                      className="font-bold text-lg mb-2 text-gray-900 "
                    >
                      Deadline Reminders
                    </h3>
                    <p
                      className="text-sm text-gray-500 leading-relaxed"
                    >
                      Never miss important due dates with our automated reminder
                      system for returns and payments.
                    </p>
                  </div>
                  <div
                    className="p-4 rounded-xl bg-[#F6FAFF] card_deadline relative z-10"
                  >
                    <div className="mb-4 text-indigo-600">
                      <img src={icon9} alt="icon" />
                    </div>
                    <h3
                      className="font-bold text-lg mb-2 text-gray-900 "
                    >
                      Deadline Reminders
                    </h3>
                    <p
                      className="text-sm text-gray-500 leading-relaxed"
                    >
                      Never miss important due dates with our automated reminder
                      system for returns and payments.
                    </p>
                  </div>
                  <div
                    className="p-4 rounded-xl bg-[#F6FAFF] card_deadline relative z-10"
                  >
                    <div className="mb-4 text-indigo-600">
                      <img src={icon9} alt="icon" />
                    </div>
                    <h3
                      className="font-bold text-lg mb-2 text-gray-900 "
                    >
                      Deadline Reminders
                    </h3>
                    <p
                      className="text-sm text-gray-500 leading-relaxed"
                    >
                      Never miss important due dates with our automated reminder
                      system for returns and payments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* What Happen Next? end */}

      {/* sr20 */}

      <HelpfulResources />

      {/* faqs */}
      {/* <div className="faqsec">
        <img src={img15} alt="" />
      </div> */}
      {/* faqs end */}
      {/* Committed to Security */}
      <div
        className="bg-[#FBFCFF] transition-colors duration-300 antialiased min-h-screen flex flex-col items-center justify-center py-20"
      >
        <div className="container mx-auto px-12">
          <div className="heading_short_long text-center mb-10 mx-auto">

            <div className="short_title">
              Committed to Security
            </div>
            <h2 className="long_title pb-6">
              Your Data Stays Safe With Enterprise-Grade Protection And
              Compliance
            </h2>
            <p
              className="text-text-light  text-base md:text-lg leading-relaxed max-w-7xl mx-auto"
            >
              ex Quisque efficitur. cursus lacus sed facilisis id odio vitae
              Nunc commodo felis, sollicitudin. Nunc urna. odio maximus Nam
              commodo non. sit viverra non ex nec vitae convallis. Ut in Nam at
              urna Lorem venenatis ipsum tincidunt non, tincidunt sit Donec
              amet, commodo tincidunt Quisque lacus, lacus urna ipsum Ut id
            </p>
          </div>
          <div className="grid grid-cols-1 md:!grid-cols-3 gap-8 mb-8 lg:mb-10 committed_sec">
            <div
              className="bg-[#F0F5FF] shadow_custome1 rounded-2xl p-8 border border-[#C7E3FF] duration-300 flex flex-col h-full"
            >
              <div className="mb-6">
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-lg"
                >
                  <img src={icon10} alt="" />
                </div>
              </div>
              <h3
                className="text-xl font-bold text-heading-light mb-4"
              >
                End-to-End Encryption
              </h3>
              <p
                className="text-sm text-text-light  leading-relaxed mb-8 flex-grow"
              >
                Your sensitive business documents and personal information are
                protected with military-grade AES-256 encryption both at rest
                and in transit, ensuring complete data security.
              </p>
              <button
                className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 text-sm shadow-md shadow-primary/30"
              >
                Read More
              </button>
            </div>
            <div
              className="bg-[#F0F5FF] shadow_custome1 rounded-2xl p-8 border border-[#C7E3FF] flex flex-col h-full transform md:-translate-y-2 relative z-10"
            >
              <div className="mb-6">
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-lg"
                >
                  <img src={icon10} alt="" />
                </div>
              </div>
              <h3
                className="text-xl font-bold text-heading-light mb-4"
              >
                End-to-End Encryption
              </h3>
              <p
                className="text-sm text-text-light  leading-relaxed mb-8 flex-grow"
              >
                Your sensitive business documents and personal information are
                protected with military-grade AES-256 encryption both at rest
                and in transit, ensuring complete data security.
              </p>
              <button
                className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 text-sm shadow-md shadow-primary/30"
              >
                Read More
              </button>
            </div>
            <div
              className="bg-[#F0F5FF] shadow_custome1 rounded-2xl p-8 border border-[#C7E3FF] transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="mb-6">
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-lg"
                >
                  <img src={icon10} alt="" />
                </div>
              </div>
              <h3
                className="text-xl font-bold text-heading-light mb-4"
              >
                End-to-End Encryption
              </h3>
              <p
                className="text-sm text-text-light  leading-relaxed mb-8 flex-grow"
              >
                Your sensitive business documents and personal information are
                protected with military-grade AES-256 encryption both at rest
                and in transit, ensuring complete data security.
              </p>
              <button
                className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 text-sm shadow-md shadow-primary/30"
              >
                Read More
              </button>
            </div>
          </div>
          <div className="text-center">
            <h5
              className="text-xl sm:text-2xl font-bold text-slate-900 mb-6"
            >
              Questions About Our Data Security?
            </h5>
            <button
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-semibold text-lg py-2.5 px-10 rounded-full shadow-lg shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="material-icons-outlined mr-2">phone</span>
              Contact Us
            </button>
          </div>
        </div>
      </div>
      {/* Committed to Security end */}
      {/* our partner */}
      <div className="trustedpartner p-16">
        <Partnerships />
      </div>
      {/* our partner */}
      {/* process gst registration */}
      <div>
        <div className="mx-auto">
          <div className="heading_short_long text-center mb-12">
            <div className="short_title">
              Process for GST Registration
            </div>
            <h2 className="long_title">
              Company Registration Made Simple
            </h2>
          </div>
          <div
            className="gst_timeline text-slate-800  p-4 md:p-8 lg:p-12"
          >
            <div className="grid grid-cols-1 lg:!grid-cols-2 gap-8 mb-10">
              <div
                className="bg-[#FBFCFF]  rounded-2xl p-6 md:p-10 border border-[#8EC7FC]  shadow-sm flex flex-col h-fit"
              >
                <div className="mb-8">
                  <h3
                    className="text-xl md:text-2xl font-bold text-slate-900  mb-2"
                  >
                    GST Registration in 3 Simple Steps
                  </h3>
                  <p
                    className=" text-sm leading-relaxed"
                  >
                    Our streamlined process makes company registration quick and
                    hassle-free
                  </p>
                </div>
                <div className="flex-grow space-y-4 mb-8">
                  <div
                    className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex items-start gap-4 transition-transform hover:-translate-y-1 duration-300"
                  >
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 shadow-lg flex items-center justify-center shadow-inner"
                    >
                      <span className="font-bold text-slate-700 "
                      >1</span
                      >
                    </div>
                    <div>
                      <h5
                        className="font-bold text-slate-900  text-base mb-1"
                      >
                        Answer Quick Questions
                      </h5>
                      <p
                        className="text-xs  leading-relaxed"
                      >
                        Fill out our simple online form with your business
                        details. Our smart questionnaire guides you through all
                        required information in just 10 minutes.
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex items-start gap-4 transition-transform hover:-translate-y-1 duration-300"
                  >
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 shadow-lg flex items-center justify-center shadow-inner"
                    >
                      <span className="font-bold text-slate-700 "
                      >1</span
                      >
                    </div>
                    <div>
                      <h5
                        className="font-bold text-slate-900  text-base mb-1"
                      >
                        Answer Quick Questions
                      </h5>
                      <p
                        className="text-xs  leading-relaxed"
                      >
                        Fill out our simple online form with your business
                        details. Our smart questionnaire guides you through all
                        required information in just 10 minutes.
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex items-start gap-4 transition-transform hover:-translate-y-1 duration-300"
                  >
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 shadow-lg flex items-center justify-center shadow-inner"
                    >
                      <span className="font-bold text-slate-700 "
                      >1</span
                      >
                    </div>
                    <div>
                      <h5
                        className="font-bold text-slate-900  text-base mb-1"
                      >
                        Answer Quick Questions
                      </h5>
                      <p
                        className="text-xs  leading-relaxed"
                      >
                        Fill out our simple online form with your business
                        details. Our smart questionnaire guides you through all
                        required information in just 10 minutes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-auto">
                  <button
                    className="px-8 py-1 rounded-full border border-primary text-slate-900  font-medium hover:bg-[#ff6f3b] hover:text-white duration-300"
                  >
                    Download
                  </button>
                </div>
              </div>
              <div
                className="bg-[#FBFCFF]  rounded-2xl p-6 md:p-10 border border-orange-100  shadow-sm flex flex-col h-full relative overflow-hidden"
              >
                <div
                  className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2"
                ></div>
                <div className="mb-8 relative z-10">
                  <h3
                    className="text-xl md:text-2xl font-bold text-slate-900  mb-2"
                  >
                    Timeline to Register a Company
                  </h3>
                  <p
                    className=" text-sm leading-relaxed"
                  >
                    Track your company registration journey from start to finish
                  </p>
                </div>
                <div className="relative flex-grow mb-8 z-10">
                  <div
                    className="absolute left-[22px] top-4 bottom-12 w-0.5 bg-gray-200"
                  ></div>
                  <div className="space-y-8">
                    <div className="relative flex items-start group">
                      <div
                        className="absolute left-0 top-0 bg-white rounded-full z-10"
                      >
                        <div
                          className="w-12 h-12 p-2 rounded-full border-1 border-green-500 flex items-center justify-center"
                        >
                          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.6997 14.9973C33.3847 18.3592 32.8965 21.8544 31.3165 24.9C29.7364 27.9455 27.16 30.3574 24.017 31.7333C20.8739 33.1092 17.3541 33.366 14.0446 32.4609C10.7352 31.5557 7.83598 29.5434 5.83061 26.7594C3.82524 23.9755 2.83488 20.5882 3.02469 17.1624C3.2145 13.7366 4.57301 10.4794 6.87367 7.93406C9.17433 5.38868 12.2781 3.70894 15.6673 3.17498C19.0565 2.64101 22.5264 3.28509 25.4982 4.9998" stroke="#0018A6" stroke-width="2.26895" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.4978 16.5L17.9978 21L32.9978 6" stroke="#FE7F10" stroke-width="2.26895" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                        </div>
                      </div>
                      <div className="ml-16 w-full">
                        <div
                          className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm group-hover:shadow-md transition-shadow"
                        >
                          <span
                            className="inline-block px-3 py-1 bg-green-50 text-xs font-semibold rounded-full mb-2"
                          >Day 1-2</span
                          >
                          <h5
                            className="font-bold text-slate-900  text-base mb-1"
                          >
                            Application Processing
                          </h5>
                          <p
                            className="text-xs  leading-relaxed"
                          >
                            Document preparation and name availability check
                            with government authorities.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="relative flex items-start group">
                      <div
                        className="absolute left-0 top-0 bg-white rounded-full z-10"
                      >
                        <div
                          className="w-12 h-12 p-2 rounded-full border-2 border-orange-400 flex items-center justify-center"
                        >
                          <svg width="26" height="26" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.9988 9V18L23.9988 21" stroke="#FE7F10" stroke-width="2.26895" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.0017 33C26.286 33 33.0017 26.2843 33.0017 18C33.0017 9.71573 26.286 3 18.0017 3C9.71744 3 3.00171 9.71573 3.00171 18C3.00171 26.2843 9.71744 33 18.0017 33Z" stroke="#0018A6" stroke-width="2.26895" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                        </div>
                      </div>
                      <div className="ml-16 w-full">
                        <div
                          className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm group-hover:shadow-md transition-shadow"
                        >
                          <span
                            className="inline-block px-3 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-full mb-2"
                          >Day 3-6</span
                          >
                          <h5
                            className="font-bold text-slate-900  text-base mb-1"
                          >
                            Government Submission
                          </h5>
                          <p
                            className="text-xs  leading-relaxed"
                          >
                            Filing incorporation documents and regulatory
                            approvals with relevant authorities.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="relative flex items-start group">
                      <div
                        className="absolute left-0 top-0 bg-white rounded-full z-10"
                      >
                        <div
                          className="w-12 h-12 p-2 rounded-full bg-gray-200 flex items-center justify-center"
                        >
                         <svg width="26" height="26" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0015 3V9" stroke="#6A7282" stroke-width="2.26895" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.0024 3V9" stroke="#6A7282" stroke-width="2.26895" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.5029 6H7.50293C5.84608 6 4.50293 7.34315 4.50293 9V30C4.50293 31.6569 5.84608 33 7.50293 33H28.5029C30.1598 33 31.5029 31.6569 31.5029 30V9C31.5029 7.34315 30.1598 6 28.5029 6Z" stroke="#6A7282" stroke-width="2.26895" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.50293 15H31.5029" stroke="#6A7282" stroke-width="2.26895" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                        </div>
                      </div>
                      <div className="ml-16 w-full">
                        <div
                          className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm group-hover:shadow-md transition-shadow"
                        >
                          <span
                            className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full mb-2"
                          >Day 7-9</span
                          >
                          <h5
                            className="font-bold text-slate-900  text-base mb-1"
                          >
                            Verification &amp; Review
                          </h5>
                          <p
                            className="text-xs  leading-relaxed"
                          >
                            Government review process and verification of
                            submitted documents and details.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="relative flex items-start group">
                      <div
                        className="absolute left-0 top-0 bg-white rounded-full z-10"
                      >
                        <div
                          className="w-12 h-12 p-2 rounded-full bg-gray-200 flex items-center justify-center"
                        >
                          <svg width="26" height="26" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0015 3V9" stroke="#6A7282" stroke-width="2.26895" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.0024 3V9" stroke="#6A7282" stroke-width="2.26895" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.5029 6H7.50293C5.84608 6 4.50293 7.34315 4.50293 9V30C4.50293 31.6569 5.84608 33 7.50293 33H28.5029C30.1598 33 31.5029 31.6569 31.5029 30V9C31.5029 7.34315 30.1598 6 28.5029 6Z" stroke="#6A7282" stroke-width="2.26895" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.50293 15H31.5029" stroke="#6A7282" stroke-width="2.26895" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                        </div>
                      </div>
                      <div className="ml-16 w-full">
                        <div
                          className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm group-hover:shadow-md transition-shadow"
                        >
                          <span
                            className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full mb-2"
                          >Day 10-12</span
                          >
                          <h5
                            className="font-bold text-slate-900  text-base mb-1"
                          >
                            Certificate Issuance
                          </h5>
                          <p
                            className="text-xs  leading-relaxed"
                          >
                            Receive company registration certificate and
                            commence business operations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-auto z-10">
                  <button
                    className="px-8 py-1 rounded-full border border-primary text-slate-900  font-medium hover:bg-[#ff6f3b] hover:text-white duration-300"
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3
                className="text-xl md:text-2xl font-bold text-slate-900  mb-6"
              >
                Ready to Start Your Company Registration?
              </h3>
              <button
                className="bg-primary hover:bg-orange-600 text-white font-semibold py-2 px-10 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 text-lg"
              >
                Start Registration Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* process gst registration end */}
      {/*  How It Works? */}
      <div
        className="min-h-screen flex flex-col items-center justify-center p-4 transition-colors duration-300"
      >
        <section className="max-w-6xl w-full mx-auto py-12">
          <div className="heading_short_long text-center mb-10">
            <div className="short_title">
              How It Works?
            </div>
            <h2 className="long_title">
              Faucibus Adipiscing Viverra Placerat Ex
            </h2>
          </div>
          <div className="space-y-4">
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className="border border-blue-200 rounded-xl overflow-hidden shadow-sm"
              >
                {/* Header */}
                <button
                  onClick={() => handleAccordionToggle(index)}
                  className="accordion-header w-full bg-card-header-light p-4 md:p-5 flex justify-between items-center group"
                >
                  <span
                    className="font-bold text-lg text-text-main-light"
                  >
                    Step {index + 1}
                  </span>
                  <span
                    className={`material-icons text-[#942326] transition-transform duration-300 ${accordionStates[index] ? 'rotate-42' : ''
                      }`}
                  >
                    add
                  </span>
                </button>

                {/* Body */}
                <div
                  className={`accordion-body gradientcolor overflow-hidden transition-all duration-300 bg-card-body-light  ${accordionStates[index] ? 'max-h-[500px]' : 'max-h-0'
                    }`}
                >
                  <div
                    className="p-6 border-t border-border-light"
                  >
                    <ul
                      className="list-disc pl-5 space-y-3 text-text-muted-light  leading-relaxed"
                    >
                      <li>ex Quisque efficitur. cursus lacus sed facilisis id odio vitae Nunc commodo felis, sollicitudin. </li>
                      <li>Nunc urna. odio maximus Nam commodo non. sit viverra non ex  nec vitae convallis. Ut in Nam at urna Lorem venenatis ipsum tincidunt non, tincidunt sit Donec amet, commodo tincidunt Quisque lacus, lacus urna ipsum Ut id</li>

          
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-end w-full">
            <button
              className="bg-primary hover:bg-orange-600 text-white font-semibold py-2 px-8 rounded-full shadow-md transition-colors duration-200"
            >
              Download the Steps
            </button>
          </div>
        </section>
      </div>
      {/*  How It Works? end */}
      {/* Compare Your Services */}
      <div className="bg-[#FBFCFF] duration-300">
        <div className="mx-auto px-6 py-6 lg:px-12 lg:py-16">
          <div className="heading_short_long text-center mb-12">
            <div className="short_title">
              Compare Your Services
            </div>
            <h2 className="long_title">
              Company Registration Made Simple
            </h2>
          </div>
          <div
            className="shadow-soft overflow-hidden border border-gray-200 "
          >
            <div className="overflow-x-auto">
              <table className="w-full plan_table text-left min-w-[1000px]">
                <thead>
                  <tr
                    className="bg-surface-light bg-[#F6FAFF]"
                  >
                    <th
                      className="p-3 text-xl font-bold text-text-light  w-1/5 sticky left-0 z-10 bg-[#F6FAFF] "
                    >
                      Features
                    </th>
                    <th
                      className="p-3 text-center  w-[18%]"
                    >
                      <div
                        className="font-bold text-text-light  text-sm md:text-base"
                      >
                        Limited Liability Partnership
                      </div>
                      <div
                        className="text-xs text-subtext-light mt-1 font-normal"
                      >
                        Professional Services
                      </div>
                    </th>
                    <th
                      className="p-3 text-center  w-[15%]"
                    >
                      <div
                        className="font-bold text-text-light  text-sm md:text-base"
                      >
                        One Person Company
                      </div>
                      <div
                        className="text-xs text-subtext-light mt-1 font-normal"
                      >
                        Solo Entrepreneurs
                      </div>
                    </th>
                    <th
                      className="p-3 text-center  w-[15%]"
                    >
                      <div
                        className="font-bold text-text-light  text-sm md:text-base"
                      >
                        One Person Company
                      </div>
                      <div
                        className="text-xs text-subtext-light mt-1 font-normal"
                      >
                        Solo Entrepreneurs
                      </div>
                    </th>
                    <th
                      className="p-3 text-center  w-[15%]"
                    >
                      <div
                        className="font-bold text-text-light  text-sm md:text-base"
                      >
                        One Person Company
                      </div>
                      <div
                        className="text-xs text-subtext-light mt-1 font-normal"
                      >
                        Solo Entrepreneurs
                      </div>
                    </th>
                    <th
                      className="p-3 text-center  w-[15%]"
                    >
                      <div
                        className="font-bold text-text-light  text-sm md:text-base"
                      >
                        One Person Company
                      </div>
                      <div
                        className="text-xs text-subtext-light mt-1 font-normal"
                      >
                        Solo Entrepreneurs
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr
                    className="hover:bg-gray-50"
                  >
                    <td
                      className="p-3 sticky left-0 z-10"
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-primary mt-1">
                          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.2501 2.83203H8.50008C7.74863 2.83203 7.02797 3.13054 6.49661 3.6619C5.96526 4.19325 5.66675 4.91392 5.66675 5.66536V28.332C5.66675 29.0835 5.96526 29.8041 6.49661 30.3355C7.02797 30.8669 7.74863 31.1654 8.50008 31.1654H25.5001C26.2515 31.1654 26.9722 30.8669 27.5035 30.3355C28.0349 29.8041 28.3334 29.0835 28.3334 28.332V9.91536L21.2501 2.83203Z" stroke="#0018A6" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.8333 2.83203V8.4987C19.8333 9.25014 20.1318 9.97081 20.6631 10.5022C21.1945 11.0335 21.9151 11.332 22.6666 11.332H28.3333" stroke="#0018A6" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.1666 12.75H11.3333" stroke="#FE7F10" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.6666 18.418H11.3333" stroke="#FE7F10" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.6666 24.082H11.3333" stroke="#FE7F10" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                        </div>
                        <div>
                          <div
                            className="font-semibold text-text-light  flex items-center gap-1"
                          >
                            Government Registration
                            <span
                              className="material-icons text-subtext-light text-base cursor-help"
                            >expand_more</span
                            >
                          </div>
                          <div
                            className="text-xs text-gray-500 mt-0.5"
                          >
                            Mandatory registration requirement
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <span
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-500"
                      >
                        <span className="material-icons text-lg">check</span>
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <span
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-500"
                      >
                        <span className="material-icons text-lg">check</span>
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <span
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-500"
                      >
                        <span className="material-icons text-lg">check</span>
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <span
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-500"
                      >
                        <span className="material-icons text-lg">check</span>
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <span
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-500"
                      >
                        <span className="material-icons text-lg">check</span>
                      </span>
                    </td>
                  </tr>
                  <tr
                    className="hover:bg-gray-50"
                  >
                    <td
                      className="p-3 sticky left-0 z-10"
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-primary mt-1">
                          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.2501 2.83203H8.50008C7.74863 2.83203 7.02797 3.13054 6.49661 3.6619C5.96526 4.19325 5.66675 4.91392 5.66675 5.66536V28.332C5.66675 29.0835 5.96526 29.8041 6.49661 30.3355C7.02797 30.8669 7.74863 31.1654 8.50008 31.1654H25.5001C26.2515 31.1654 26.9722 30.8669 27.5035 30.3355C28.0349 29.8041 28.3334 29.0835 28.3334 28.332V9.91536L21.2501 2.83203Z" stroke="#0018A6" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.8333 2.83203V8.4987C19.8333 9.25014 20.1318 9.97081 20.6631 10.5022C21.1945 11.0335 21.9151 11.332 22.6666 11.332H28.3333" stroke="#0018A6" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.1666 12.75H11.3333" stroke="#FE7F10" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.6666 18.418H11.3333" stroke="#FE7F10" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.6666 24.082H11.3333" stroke="#FE7F10" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                        </div>
                        <div>
                          <div
                            className="font-semibold text-text-light  flex items-center gap-1"
                          >
                            Number of Partners
                            <span
                              className="material-icons text-subtext-light text-base cursor-help"
                            >expand_more</span
                            >
                          </div>
                          <div
                            className="text-xs text-gray-500 mt-0.5"
                          >
                            Minimum requirement
                          </div>
                        </div>
                      </div>
                    </td>
                    <td
                      className="p-3 text-center text-text-light  text-lg font-medium"
                    >
                      1
                    </td>
                    <td
                      className="p-3 text-center text-text-light  text-lg font-medium"
                    >
                      1
                    </td>
                    <td
                      className="p-3 text-center text-text-light  text-lg font-medium"
                    >
                      1
                    </td>
                    <td
                      className="p-3 text-center text-text-light  text-lg font-medium"
                    >
                      1
                    </td>
                    <td
                      className="p-3 text-center text-text-light  text-lg font-medium"
                    >
                      1
                    </td>
                  </tr>
                  <tr
                    className="hover:bg-gray-50"
                  >
                    <td
                      className="p-3 sticky left-0 z-10"
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-primary mt-1">
                          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.2501 2.83203H8.50008C7.74863 2.83203 7.02797 3.13054 6.49661 3.6619C5.96526 4.19325 5.66675 4.91392 5.66675 5.66536V28.332C5.66675 29.0835 5.96526 29.8041 6.49661 30.3355C7.02797 30.8669 7.74863 31.1654 8.50008 31.1654H25.5001C26.2515 31.1654 26.9722 30.8669 27.5035 30.3355C28.0349 29.8041 28.3334 29.0835 28.3334 28.332V9.91536L21.2501 2.83203Z" stroke="#0018A6" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.8333 2.83203V8.4987C19.8333 9.25014 20.1318 9.97081 20.6631 10.5022C21.1945 11.0335 21.9151 11.332 22.6666 11.332H28.3333" stroke="#0018A6" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.1666 12.75H11.3333" stroke="#FE7F10" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.6666 18.418H11.3333" stroke="#FE7F10" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.6666 24.082H11.3333" stroke="#FE7F10" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                        </div>
                        <div>
                          <div
                            className="font-semibold text-text-light  flex items-center gap-1"
                          >
                            Liability Protection
                            <span
                              className="material-icons text-subtext-light text-base cursor-help"
                            >expand_more</span
                            >
                          </div>
                          <div
                            className="text-xs text-gray-500 mt-0.5"
                          >
                            Asset protection level
                          </div>
                        </div>
                      </div>
                    </td>
                    <td
                      className="p-3 text-center text-subtext-light text-base font-medium"
                    >
                      Limited
                    </td>
                    <td
                      className="p-3 text-center text-subtext-light text-base font-medium"
                    >
                      Limited
                    </td>
                    <td
                      className="p-3 text-center text-subtext-light text-base font-medium"
                    >
                      Limited
                    </td>
                    <td
                      className="p-3 text-center text-subtext-light text-base font-medium"
                    >
                      Limited
                    </td>
                    <td
                      className="p-3 text-center text-subtext-light text-base font-medium"
                    >
                      Limited
                    </td>
                  </tr>
                  <tr
                    className="hover:bg-gray-50"
                  >
                    <td
                      className="p-3 sticky left-0 z-10"
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-primary mt-1">
                          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.2501 2.83203H8.50008C7.74863 2.83203 7.02797 3.13054 6.49661 3.6619C5.96526 4.19325 5.66675 4.91392 5.66675 5.66536V28.332C5.66675 29.0835 5.96526 29.8041 6.49661 30.3355C7.02797 30.8669 7.74863 31.1654 8.50008 31.1654H25.5001C26.2515 31.1654 26.9722 30.8669 27.5035 30.3355C28.0349 29.8041 28.3334 29.0835 28.3334 28.332V9.91536L21.2501 2.83203Z" stroke="#0018A6" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.8333 2.83203V8.4987C19.8333 9.25014 20.1318 9.97081 20.6631 10.5022C21.1945 11.0335 21.9151 11.332 22.6666 11.332H28.3333" stroke="#0018A6" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.1666 12.75H11.3333" stroke="#FE7F10" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.6666 18.418H11.3333" stroke="#FE7F10" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.6666 24.082H11.3333" stroke="#FE7F10" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                        </div>
                        <div>
                          <div
                            className="font-semibold text-text-light  flex items-center gap-1"
                          >
                            Cost of Registration
                            <span
                              className="material-icons text-subtext-light text-base cursor-help"
                            >expand_more</span
                            >
                          </div>
                          <div
                            className="text-xs text-gray-500 mt-0.5"
                          >
                            Initial setup expense
                          </div>
                        </div>
                      </div>
                    </td>
                    <td
                      className="p-3 text-center text-subtext-light text-base font-medium"
                    >
                      High
                    </td>
                    <td
                      className="p-3 text-center text-subtext-light text-base font-medium"
                    >
                      High
                    </td>
                    <td
                      className="p-3 text-center text-subtext-light text-base font-medium"
                    >
                      Low
                    </td>
                    <td
                      className="p-3 text-center text-subtext-light text-base font-medium"
                    >
                      Low
                    </td>
                    <td
                      className="p-3 text-center text-subtext-light text-base font-medium"
                    >
                      Low
                    </td>
                  </tr>
                  <tr
                    className="hover:bg-gray-50"
                  >
                    <td
                      className="p-3 sticky left-0 z-10"
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-primary mt-1">
                          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.2501 2.83203H8.50008C7.74863 2.83203 7.02797 3.13054 6.49661 3.6619C5.96526 4.19325 5.66675 4.91392 5.66675 5.66536V28.332C5.66675 29.0835 5.96526 29.8041 6.49661 30.3355C7.02797 30.8669 7.74863 31.1654 8.50008 31.1654H25.5001C26.2515 31.1654 26.9722 30.8669 27.5035 30.3355C28.0349 29.8041 28.3334 29.0835 28.3334 28.332V9.91536L21.2501 2.83203Z" stroke="#0018A6" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.8333 2.83203V8.4987C19.8333 9.25014 20.1318 9.97081 20.6631 10.5022C21.1945 11.0335 21.9151 11.332 22.6666 11.332H28.3333" stroke="#0018A6" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.1666 12.75H11.3333" stroke="#FE7F10" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.6666 18.418H11.3333" stroke="#FE7F10" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.6666 24.082H11.3333" stroke="#FE7F10" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                        </div>
                        <div>
                          <div
                            className="font-semibold text-text-light  flex items-center gap-1"
                          >
                            Capital Requirement
                            <span
                              className="material-icons text-subtext-light text-base cursor-help"
                            >expand_more</span
                            >
                          </div>
                          <div
                            className="text-xs text-gray-500 mt-0.5"
                          >
                            Minimum authorized capital
                          </div>
                        </div>
                      </div>
                    </td>
                    <td
                      className="p-3 text-center text-subtext-light text-base font-medium"
                    >
                      1 Lakh
                    </td>
                    <td
                      className="p-3 text-center text-subtext-light text-base font-medium"
                    >
                      1 Lakh
                    </td>
                    <td
                      className="p-3 text-center text-subtext-light text-base font-medium"
                    >
                      1 Lakh
                    </td>
                    <td
                      className="p-3 text-center text-subtext-light text-base font-medium"
                    >
                      1 Lakh
                    </td>
                    <td
                      className="p-3 text-center text-subtext-light text-base font-medium"
                    >
                      1 Lakh
                    </td>
                  </tr>
                  <tr
                    className="hover:bg-gray-50"
                  >
                    <td
                      className="p-3 sticky left-0 z-10"
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-primary mt-1">
                          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.2501 2.83203H8.50008C7.74863 2.83203 7.02797 3.13054 6.49661 3.6619C5.96526 4.19325 5.66675 4.91392 5.66675 5.66536V28.332C5.66675 29.0835 5.96526 29.8041 6.49661 30.3355C7.02797 30.8669 7.74863 31.1654 8.50008 31.1654H25.5001C26.2515 31.1654 26.9722 30.8669 27.5035 30.3355C28.0349 29.8041 28.3334 29.0835 28.3334 28.332V9.91536L21.2501 2.83203Z" stroke="#0018A6" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.8333 2.83203V8.4987C19.8333 9.25014 20.1318 9.97081 20.6631 10.5022C21.1945 11.0335 21.9151 11.332 22.6666 11.332H28.3333" stroke="#0018A6" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.1666 12.75H11.3333" stroke="#FE7F10" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.6666 18.418H11.3333" stroke="#FE7F10" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.6666 24.082H11.3333" stroke="#FE7F10" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                        </div>
                        <div>
                          <div
                            className="font-semibold text-text-light  flex items-center gap-1"
                          >
                            Annual Compliance
                            <span
                              className="material-icons text-subtext-light text-base cursor-help"
                            >expand_more</span
                            >
                          </div>
                          <div
                            className="text-xs text-gray-500 mt-0.5"
                          >
                            Yearly filing requirements
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <span
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-500"
                      >
                        <span className="material-icons text-lg">check</span>
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <span
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-500"
                      >
                        <span className="material-icons text-lg">check</span>
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <span
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-500 "
                      >
                        <span className="material-icons text-lg">close</span>
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <span
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-500 "
                      >
                        <span className="material-icons text-lg">close</span>
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <span
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-500 "
                      >
                        <span className="material-icons text-lg">close</span>
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-surface-light/50/30 !border-t !border-gray-200">
                    <td
                      className="p-6 sticky left-0  z-10"
                    >
                      <a
                        className="text-primary font-bold underline hover:text-primary-hover decoration-1 underline-offset-2 text-sm whitespace-nowrap"
                        href="#"
                      >
                        Download Comparison
                      </a>
                    </td>
                    <td className="p-3 text-center">
                      <button
                        className="bg-primary hover:bg-primary-hover text-white font-semibold py-1 px-10 rounded-full shadow-lg shadow-orange-500/30 transition-all transform hover:-translate-y-0.5"
                      >
                        Get Started
                      </button>
                    </td>
                    <td className="p-3 text-center">
                      <button
                        className="bg-white border border-primary text-text-light  font-semibold py-1 px-10 rounded-full hover:bg-[#ff6f3b] hover:text-white transition-colors"
                      >
                        Read More
                      </button>
                    </td>
                    <td className="p-3 text-center">
                      <button
                        className="bg-white border border-primary text-text-light  font-semibold py-1 px-10 rounded-full hover:bg-[#ff6f3b] hover:text-white transition-colors"
                      >
                        Read More
                      </button>
                    </td>
                    <td className="p-3 text-center">
                      <button
                        className="bg-white border border-primary text-text-light  font-semibold py-1 px-10 rounded-full hover:bg-[#ff6f3b] hover:text-white transition-colors"
                      >
                        Read More
                      </button>
                    </td>
                    <td className="p-3 text-center">
                      <button
                        className="bg-white border border-primary text-text-light  font-semibold py-1 px-10 rounded-full hover:bg-[#ff6f3b] hover:text-white transition-colors"
                      >
                        Read More
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Compare Your Services end */}
      {/*Quick Access Guides  */}
      <div
        className="bg-[#EBF2FF] my-10 text-gray-800 font-body antialiased flex items-center justify-center p-4"
      >
        <section
          className="w-full max-w-[1400px] mx-auto py-16 px-4 sm:px-6 lg:px-8"
        >
          <div className=" text-center mb-12">
            <div className="heading_short_long inline-block relative mb-4">
              <div className="short_title">
                Quick Access Guides
              </div>

              <h2 className="long_title">
                Faucibus Adipiscing Viverra Placerat Ex
              </h2>
            </div>
          </div>
          <div
            className="grid grid-cols-1 md:!grid-cols-2 lg:!grid-cols-4 gap-6 lg:gap-16 quickaccessguid"
          >
            <div
              className="bg-white rounded-xl shadow-card hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] ring-1 ring-black/5 p-6 flex flex-col relative lg:-mt-4 lg:mb-4 lg:py-6 z-10 border border-transparent "
            >
              <h3
                className="text-xl font-bold text-text-main mb-4 leading-tight"
              >
                odio maximus Nam commodo non
              </h3>
              <p
                className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow"
              >
                Nunc urna. odio maximus Nam commodo non. sit viverra non ex nec
                vitae convallis. Ut in Nam at urna Lorem venenatis ipsum at urna
                Lorem venenatis ipsum.
              </p>
              <div className="mt-auto">
                <button
                  className="w-full btn_knowmore bg-primary hover:bg-primary-hover text-white font-medium py-2 px-4 rounded-full transition-colors duration-200 text-sm shadow-md flex items-center justify-center hover:justify-between gap-2 group"
                >
                  Know More
                  <span
                    className="material-icons text-sm transform transition-transform"
                  >arrow_forward</span
                  >
                </button>
              </div>
            </div>
            <div
              className="bg-white rounded-xl shadow-card hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] ring-1 ring-black/5 p-6 flex flex-col relative lg:-mt-4 lg:mb-4 lg:py-6 z-10 border border-transparent "
            >
              <h3
                className="text-xl font-bold text-text-main mb-4 leading-tight"
              >
                odio maximus Nam commodo non
              </h3>
              <p
                className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow"
              >
                Nunc urna. odio maximus Nam commodo non. sit viverra non ex nec
                vitae convallis. Ut in Nam at urna Lorem venenatis ipsum at urna
                Lorem venenatis ipsum.
              </p>
              <div className="mt-auto">
                <button
                  className="w-full btn_knowmore bg-primary hover:bg-primary-hover text-white font-medium py-2 px-4 rounded-full transition-colors duration-200 text-sm shadow-md flex items-center justify-center hover:justify-between gap-2 group"
                >
                  Know More
                  <span
                    className="material-icons text-sm transform transition-transform"
                  >arrow_forward</span
                  >
                </button>
              </div>
            </div>
            <div
              className="bg-white rounded-xl shadow-card hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] ring-1 ring-black/5 p-6 flex flex-col relative lg:-mt-4 lg:mb-4 lg:py-6 z-10 border border-transparent "
            >
              <h3
                className="text-xl font-bold text-text-main mb-4 leading-tight"
              >
                odio maximus Nam commodo non
              </h3>
              <p
                className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow"
              >
                Nunc urna. odio maximus Nam commodo non. sit viverra non ex nec
                vitae convallis. Ut in Nam at urna Lorem venenatis ipsum at urna
                Lorem venenatis ipsum.
              </p>
              <div className="mt-auto">
                <button
                  className="w-full btn_knowmore bg-primary hover:bg-primary-hover text-white font-medium py-2 px-4 rounded-full transition-colors duration-200 text-sm shadow-md flex items-center justify-center hover:justify-between gap-2 group"
                >
                  Know More
                  <span
                    className="material-icons text-sm transform transition-transform"
                  >arrow_forward</span
                  >
                </button>
              </div>
            </div>
            <div
              className="bg-white rounded-xl shadow-card hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] ring-1 ring-black/5 p-6 flex flex-col relative lg:-mt-4 lg:mb-4 lg:py-6 z-10 border border-transparent "
            >
              <h3
                className="text-xl font-bold text-text-main mb-4 leading-tight"
              >
                odio maximus Nam commodo non
              </h3>
              <p
                className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow"
              >
                Nunc urna. odio maximus Nam commodo non. sit viverra non ex nec
                vitae convallis. Ut in Nam at urna Lorem venenatis ipsum at urna
                Lorem venenatis ipsum.
              </p>
              <div className="mt-auto">
                <button
                  className="w-full btn_knowmore bg-primary hover:bg-primary-hover text-white font-medium py-2 px-4 rounded-full transition-colors duration-200 text-sm shadow-md flex items-center justify-center hover:justify-between gap-2 group"
                >
                  Know More
                  <span
                    className="material-icons text-sm transform transition-transform"
                  >arrow_forward</span
                  >
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Quick Access Guides end */}
      {/* Why Us */}
      <div
        className="gst_timeline flex flex-col justify-center"
      >
        <section
          className="relative py-16 px-4 sm:px-6 lg:px-8 bg-soft-gradient overflow-hidden"
        >
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="heading_short_long inline-block mb-8">
              <div className="short_title">
                Why Us
              </div>
              <h2 className="long_title">
                Your Trusted Partner In Business Growth
              </h2>
            </div>
            <div
              className="grid grid-cols-2 md:!grid-cols-2 lg:!grid-cols-4 gap-4 lg:gap-12 items-center"
            >
              <div
                className="bg-white rounded-xl p-6 hover:shadow-xl border border-orange-200 hover:border-t-4 hover:border-t-primary hover:border-r hover:border-b hover:border-l hover:border-orange-500 relative transform hover:!scale-[1.05] z-10 transition-transform duration-300"
              >
                <div
                  className="flex flex-col items-center justify-center text-center"
                >
                  <h4
                    className="counter text-2xl lg:!text-4x1 font-bold text-text-main  mb-2"
                    data-target="10000"
                  >10,000</h4
                  >
                  <div
                    className="flex items-center gap-2 text-text-muted"
                  >
                    <img src={Icon11} width="24" alt="" />
                    <span className='text-xs lg:text-base'>Clients Globally</span>
                  </div>
                </div>
              </div>
              <div
                className="bg-white rounded-xl p-6 hover:shadow-xl border border-orange-200 hover:border-t-4 hover:border-t-primary hover:border-r hover:border-b hover:border-l hover:border-orange-500 relative transform hover:!scale-[1.05] z-10 transition-transform duration-300"
              >
                <div
                  className="flex flex-col items-center justify-center text-center"
                >
                  <h4
                    className="counter text-2xl lg:!text-4x1 font-bold text-text-main  mb-3"
                    data-target="10000"
                  >10,000</h4
                  >
                  <div
                    className="flex items-center gap-2 text-text-muted"
                  >
                    <img src={Icon11} width="24" alt="" />
                    <span className='text-xs lg:text-base'>Clients Globally</span>
                  </div>
                </div>
              </div>
              <div
                className="bg-white rounded-xl p-6 hover:shadow-xl border border-orange-200 hover:border-t-4 hover:border-t-primary hover:border-r hover:border-b hover:border-l hover:border-orange-500 relative transform hover:!scale-[1.05] z-10 transition-transform duration-300"
              >
                <div
                  className="flex flex-col items-center justify-center text-center"
                >
                  <h4
                    className="counter text-2xl lg:!text-4x1 font-bold text-text-main  mb-2"
                    data-target="10000"
                  >10,000</h4
                  >
                  <div
                    className="flex items-center gap-2 text-text-muted"
                  >
                    <img src={Icon11} width="24" alt="" />

                    <span className='text-xs lg:text-base'>Clients Globally</span>
                  </div>
                </div>
              </div>
              <div
                className="bg-white rounded-xl p-6 hover:shadow-xl border border-orange-200 hover:border-t-4 hover:border-t-primary hover:border-r hover:border-b hover:border-l hover:border-orange-500 relative transform hover:!scale-[1.05] z-10 transition-transform duration-300"
              >
                <div
                  className="flex flex-col items-center justify-center text-center"
                >
                  <h4
                    className="counter text-2xl lg:!text-4x1 font-bold text-text-main  mb-2"
                    data-target="10000"
                  >10,000</h4
                  >
                  <div
                    className="flex items-center gap-2 text-text-muted"
                  >
                    <img src={Icon11} width="24" alt="" />
                    <span className='text-xs lg:text-base'>Clients Globally</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Why Us end */}
      {/*  Why Choose Ebiz */}
      <div
        className="flex flex-col justify-center items-center transition-colors duration-300"
      >
        <section className="w-full max-w-7xl mx-auto px-4 py-16 md:py-20">
          <div className="text-center mb-10 space-y-4">
            <div className="heading_short_long inline-block relative">
              <div className="short_title">
                Why Choose Ebiz
              </div>

              <h2 className="long_title">
                Faucibus Adipiscing Viverra Placerat Ex
              </h2>
            </div>
          </div>
          <div
            className="grid grid-cols-1 md:!grid-cols-2 lg:!grid-cols-4 gap-6 lg:!gap-20 mb-10"
          >
            <div
              className="group gradientcolor rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 border border-blue-50  h-full flex flex-col"
            >
              <div className="mb-2">
                <img src={icon12} alt="" />
              </div>
              <h3
                className="text-lg font-bold text-slate-900  mb-3 group-hover:text-primary transition-colors"
              >
                Accurate Filing
              </h3>
              <p
                className="text-sm text-gray-500 flex-grow"
              >
                Nunc urna. odio maximus Nam commodo non. sit viverra non ex nec
                vitae convallis. Ut in Nam at urna Lorem venenatis ipsum at urna
                Lorem venenatis ipsum
              </p>
            </div>
            <div
              className="group gradientcolor rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 border border-blue-50  h-full flex flex-col"
            >
              <div className="mb-2">
                <img src={icon12} alt="" />
              </div>
              <h3
                className="text-lg font-bold text-slate-900  mb-3 group-hover:text-primary transition-colors"
              >
                Accurate Filing
              </h3>
              <p
                className="text-sm text-gray-500 flex-grow"
              >
                Nunc urna. odio maximus Nam commodo non. sit viverra non ex nec
                vitae convallis. Ut in Nam at urna Lorem venenatis ipsum at urna
                Lorem venenatis ipsum
              </p>
            </div>
            <div
              className="group gradientcolor rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 border border-blue-50  h-full flex flex-col"
            >
              <div className="mb-2">
                <img src={icon12} alt="" />
              </div>
              <h3
                className="text-lg font-bold text-slate-900  mb-3 group-hover:text-primary transition-colors"
              >
                Accurate Filing
              </h3>
              <p
                className="text-sm text-gray-500 flex-grow"
              >
                Nunc urna. odio maximus Nam commodo non. sit viverra non ex nec
                vitae convallis. Ut in Nam at urna Lorem venenatis ipsum at urna
                Lorem venenatis ipsum
              </p>
            </div>
            <div
              className="group gradientcolor rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 border border-blue-50  h-full flex flex-col"
            >
              <div className="mb-2">
                <img src={icon12} alt="" />
              </div>
              <h3
                className="text-lg font-bold text-slate-900  mb-3 group-hover:text-primary transition-colors"
              >
                Accurate Filing
              </h3>
              <p
                className="text-sm text-gray-500 flex-grow"
              >
                Nunc urna. odio maximus Nam commodo non. sit viverra non ex nec
                vitae convallis. Ut in Nam at urna Lorem venenatis ipsum at urna
                Lorem venenatis ipsum
              </p>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-center text-center space-y-6"
          >
            <p
              className="text-lg md:text-xl text-slate-700 font-medium"
            >
              Looking for the Perfect Partner to Power Your Growth?
            </p>
            <button className="btn-primary trusted-btn-primary text-center">Explore Partnerships<span className="btn-arrow border_left"><svg width="20" height="18" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.6824 11.7593L1.19209e-06 11.7593" stroke="#FFFDFC" stroke-width="2"></path><path d="M12.8412 0.759277L25.6824 11.7593L12.8412 22.7593" stroke="#FFFDFC" stroke-width="2"></path></svg></span></button>
          </div>
        </section>
      </div>
      {/*  Why Choose Ebiz end */}
      {/* Get Personalized Assistance */}
      <div className="bg-[#E7F3FF]">
        <section
          className="relative p-0 w-full bg-background-light transition-colors duration-300 overflow-hidden"
        >
          <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div
              className="grid lg:!grid-cols-3 items-center justify-between gap-0 lg:!gap-20 pb-8 md:pb-0"
            >
              <div
                className="flex-1 w-full lg:col-span-2 text-center md:!text-left z-10 order-2 lg:!order-1"
              >
                <h2
                  className="text-lg md:text-2xl lg:text-4xl font-bold tracking-tight text-gray-900  mb-6 leading-[1.15]"
                >
                  Get Personalized Assistance
                </h2>
                <p
                  className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed"
                >
                  Connect with our experts for quick, reliable support tailored
                  to your business goals.
                </p>
                <button
                  className="group inline-flex items-center justify-center bg-primary hover:bg-orange-600 text-white font-bold text-lg py-2 px-10 rounded-full shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-orange-300"
                >
                  Get Assistance
                  <span
                    className="material-icons ml-2 group-hover:translate-x-1 transition-transform text-xl"
                  >arrow_forward</span
                  >
                </button>
              </div>
              <div
                className="flex-1 order-1 lg:!order-2 w-full flex justify-center md:justify-end relative z-10"
              >
                <div className="relative w-full">
                  <img
                    alt="Team of three business professionals standing together collaborating"
                    className="relative w-full h-auto object-cover transform rotate-1 hover:rotate-0 transition-transform duration-500"
                    src={img_7}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      {/* Get Personalized Assistance end */}
      {/* Calculators */}
      <div
        className="text-text-main  transition-colors duration-300"
      >
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-8 lg:mb-16">
            <div className="heading_short_long inline-block relative">
              <div className="short_title">
                Calculators
              </div>

              <h2 className="long_title pb-6">
                Faucibus Adipiscing Viverra Placerat Ex
              </h2>
              <p
                className="max-w-5xl mx-auto text-text-muted text-lg leading-relaxed font-light"
              >
                Get instant access to professional-grade tools including Income
                Tax Calculator, Capital Gains Estimator, Section 80 Deduction
                Guide, and more. Simplify complex calculations with our
                user-friendly interface.
              </p>
            </div>
          </div>
          <div
            className="grid grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-4 gap-6 mb-12"
          >
            <div
              className="group bg-white border border-[#8EC7FC]  rounded-xl p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:border-blue-200"
            >
              <div
                className="mb-2 rounded-lg transform group-hover:scale-105 transition-transform duration-300"
              >
                <img src={icon13} width="80" alt="" />
              </div>
              <h3 className="text-xl font-bold text-slate-900  mb-0">
                Tax Calculators
              </h3>
              <p className="text-slate-700">Instant Results</p>
            </div>
            <div
              className="group bg-white border border-[#8EC7FC]  rounded-xl p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:border-blue-200"
            >
              <div
                className="mb-2 rounded-lg transform group-hover:scale-105 transition-transform duration-300"
              >
                <img src={icon13} width="80" alt="" />
              </div>
              <h3 className="text-xl font-bold text-slate-900  mb-0">
                Tax Calculators
              </h3>
              <p className="text-slate-700">Instant Results</p>
            </div>
            <div
              className="group bg-white border border-[#8EC7FC]  rounded-xl p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:border-blue-200"
            >
              <div
                className="mb-2 rounded-lg transform group-hover:scale-105 transition-transform duration-300"
              >
                <img src={icon13} width="80" alt="" />
              </div>
              <h3 className="text-xl font-bold text-slate-900  mb-0">
                Tax Calculators
              </h3>
              <p className="text-slate-700">Instant Results</p>
            </div>
            <div
              className="group bg-white border border-[#8EC7FC]  rounded-xl p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:border-blue-200"
            >
              <div
                className="mb-2 rounded-lg transform group-hover:scale-105 transition-transform duration-300"
              >
                <img src={icon13} width="80" alt="" />
              </div>
              <h3 className="text-xl font-bold text-slate-900  mb-0">
                Tax Calculators
              </h3>
              <p className="text-slate-700">Instant Results</p>
            </div>
          </div>
          <div
            className="flex md:!flex sm:flex-row items-center justify-center gap-6"
          >
            <button
              className="bg-primary hover:bg-orange-600 text-white font-semibold py-1 px-10 rounded-full shadow-lg shadow-orange-100 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Explore Tools
            </button>
            <button
              className="bg-transparent hover:bg-orange-50 border-2 border-primary text-slate-700  font-semibold py-1 px-10 rounded-full transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Try a Calculator
            </button>
          </div>
          <div
            className="flex flex-wrap justify-center items-center gap-x-20 gap-y-6  text-sm font-medium pt-10"
          >
            <div className="flex items-center gap-2.5">
              <svg width="24" height="24" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.423 15.2253C23.423 21.0803 19.3245 24.0078 14.4532 25.7057C14.1981 25.7922 13.921 25.788 13.6686 25.694C8.78551 24.0078 4.68701 21.0803 4.68701 15.2253V7.02828C4.68701 6.71771 4.81038 6.41986 5.02999 6.20026C5.2496 5.98065 5.54744 5.85728 5.85801 5.85728C8.20001 5.85728 11.1275 4.45208 13.1651 2.67216C13.4131 2.4602 13.7287 2.34375 14.055 2.34375C14.3813 2.34375 14.6969 2.4602 14.945 2.67216C16.9942 4.46379 19.91 5.85728 22.252 5.85728C22.5626 5.85728 22.8604 5.98065 23.08 6.20026C23.2997 6.41986 23.423 6.71771 23.423 7.02828V15.2253Z" stroke="#424349" stroke-width="2.342" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              <span>100% Secure</span>
            </div>
            <div className="flex items-center gap-2.5">
              <svg width="24" height="24" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.68037 16.3949C4.45877 16.3957 4.24151 16.3335 4.05383 16.2157C3.86614 16.0979 3.71573 15.9293 3.62008 15.7294C3.52443 15.5295 3.48746 15.3066 3.51346 15.0865C3.53947 14.8664 3.62738 14.6583 3.76698 14.4862L15.3599 2.54196C15.4469 2.44159 15.5654 2.37376 15.6959 2.34961C15.8265 2.32546 15.9615 2.34642 16.0786 2.40906C16.1957 2.4717 16.288 2.57229 16.3404 2.69432C16.3928 2.81635 16.4022 2.95257 16.367 3.08062L14.1186 10.13C14.0523 10.3075 14.0301 10.4984 14.0537 10.6863C14.0774 10.8742 14.1463 11.0536 14.2546 11.209C14.3628 11.3645 14.5071 11.4914 14.6752 11.5788C14.8432 11.6662 15.03 11.7115 15.2194 11.7109H23.4164C23.638 11.7101 23.8552 11.7723 24.0429 11.8901C24.2306 12.0079 24.381 12.1765 24.4767 12.3764C24.5723 12.5763 24.6093 12.7992 24.5833 13.0193C24.5573 13.2394 24.4694 13.4475 24.3298 13.6196L12.7369 25.5638C12.6499 25.6642 12.5314 25.732 12.4008 25.7562C12.2702 25.7803 12.1353 25.7594 12.0182 25.6967C11.9011 25.6341 11.8087 25.5335 11.7563 25.4115C11.7039 25.2894 11.6946 25.1532 11.7298 25.0252L13.9781 17.9758C14.0444 17.7983 14.0667 17.6075 14.043 17.4195C14.0193 17.2316 13.9504 17.0522 13.8422 16.8968C13.7339 16.7413 13.5896 16.6144 13.4216 16.527C13.2535 16.4396 13.0668 16.3943 12.8774 16.3949H4.68037Z" stroke="#424349" stroke-width="2.342" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              <span>Instant Results</span>
            </div>
            <div className="flex items-center gap-2.5">
             <svg width="24" height="24" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.9001 3.29584C12.9503 3.02722 13.0928 2.7846 13.303 2.61001C13.5133 2.43542 13.7779 2.33984 14.0512 2.33984C14.3245 2.33984 14.5891 2.43542 14.7993 2.61001C15.0096 2.7846 15.1521 3.02722 15.2023 3.29584L16.433 9.80426C16.5204 10.267 16.7453 10.6926 17.0783 11.0256C17.4112 11.3586 17.8369 11.5834 18.2996 11.6708L24.808 12.9016C25.0766 12.9517 25.3192 13.0943 25.4938 13.3045C25.6684 13.5147 25.764 13.7794 25.764 14.0527C25.764 14.3259 25.6684 14.5906 25.4938 14.8008C25.3192 15.011 25.0766 15.1536 24.808 15.2037L18.2996 16.4345C17.8369 16.5219 17.4112 16.7467 17.0783 17.0797C16.7453 17.4127 16.5204 17.8383 16.433 18.301L15.2023 24.8095C15.1521 25.0781 15.0096 25.3207 14.7993 25.4953C14.5891 25.6699 14.3245 25.7655 14.0512 25.7655C13.7779 25.7655 13.5133 25.6699 13.303 25.4953C13.0928 25.3207 12.9503 25.0781 12.9001 24.8095L11.6694 18.301C11.582 17.8383 11.3571 17.4127 11.0241 17.0797C10.6911 16.7467 10.2655 16.5219 9.8028 16.4345L3.29438 15.2037C3.02575 15.1536 2.78314 15.011 2.60854 14.8008C2.43395 14.5906 2.33838 14.3259 2.33838 14.0527C2.33838 13.7794 2.43395 13.5147 2.60854 13.3045C2.78314 13.0943 3.02575 12.9517 3.29438 12.9016L9.8028 11.6708C10.2655 11.5834 10.6911 11.3586 11.0241 11.0256C11.3571 10.6926 11.582 10.267 11.6694 9.80426L12.9001 3.29584Z" stroke="#424349" stroke-width="2.342" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.4165 2.34375V7.02775" stroke="#424349" stroke-width="2.342" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.7607 4.68359H21.0767" stroke="#424349" stroke-width="2.342" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.68038 25.7621C5.97383 25.7621 7.02238 24.7136 7.02238 23.4201C7.02238 22.1267 5.97383 21.0781 4.68038 21.0781C3.38693 21.0781 2.33838 22.1267 2.33838 23.4201C2.33838 24.7136 3.38693 25.7621 4.68038 25.7621Z" stroke="#424349" stroke-width="2.342" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              <span>Always Free</span>
            </div>
            <div className="flex items-center gap-2.5">
             <svg width="24" height="24" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0489 25.7638C20.5161 25.7638 25.7589 20.521 25.7589 14.0538C25.7589 7.5865 20.5161 2.34375 14.0489 2.34375C7.58162 2.34375 2.33887 7.5865 2.33887 14.0538C2.33887 20.521 7.58162 25.7638 14.0489 25.7638Z" stroke="#424349" stroke-width="2.342" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.0509 21.0794C17.9313 21.0794 21.0769 17.9337 21.0769 14.0533C21.0769 10.173 17.9313 7.02734 14.0509 7.02734C10.1706 7.02734 7.0249 10.173 7.0249 14.0533C7.0249 17.9337 10.1706 21.0794 14.0509 21.0794Z" stroke="#424349" stroke-width="2.342" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.0529 16.391C15.3464 16.391 16.3949 15.3425 16.3949 14.049C16.3949 12.7556 15.3464 11.707 14.0529 11.707C12.7595 11.707 11.7109 12.7556 11.7109 14.049C11.7109 15.3425 12.7595 16.391 14.0529 16.391Z" stroke="#424349" stroke-width="2.342" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              <span>Professional Grade</span>
            </div>
          </div>
        </section>
      </div>
      {/* Calculators end */}
      {/* Document Required */}
      <div
        className="gradientcolor22 text-gray-800 min-h-screen flex flex-col justify-center py-10 transition-colors duration-300"
      >
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="heading_short_long text-center mb-12">
            <div className="short_title">
              Document Required
            </div>
            <h2 className="long_title pb-6">
              Faucibus Adipiscing Viverra Placerat Ex
            </h2>
            <p
              className="text-gray-500 text-base md:text-lg max-w-4xl mx-auto leading-relaxed"
            >
              ex Quisque efficitur. cursus lacus sed facilisis id odio vitae
              Nunc commodo felis, sollicitudin. Nunc urna. odio maximus Nam
              commodo non. sit viverra non ex nec vitae convallis.
            </p>
          </div>
          <div className="flex flex-col xl:!flex-row gap-8">
            <div
              className="flex-1 grid grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3 gap-6"
            >
              <div
                className="bg-[#FBFCFF] rounded-xl p-5 shadow  relative group hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="absolute top-4 right-4 text-[#FF6F3B] text-xl font-bold"
                >
                  *
                </div>
                <div className="w-10 h-10 mb-3 text-primary">
                  <img src={icon13Svg} alt="" />
                </div>
                <h3
                  className="text-lg font-bold text-gray-900  mb-2"
                >
                  PAN Card
                </h3>
                <p
                  className="text-xs text-gray-600 leading-relaxed mb-4"
                >
                  Valid PAN card for all directors and shareholders. Required
                  for identity verification and tax compliance during company
                  registration.
                </p>
                <div className="border border-gray-200 mb-3"></div>
                <button
                  className="w-full py-2 px-4 border border-primary text-black rounded-full text-sm font-semibold hover:bg-[#FF6F3B] hover:text-white transition-colors duration-200"
                >
                  View Sample
                </button>
              </div>
              <div
                className="bg-[#FBFCFF] rounded-xl p-5 shadow  relative group hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="absolute top-4 right-4 text-[#FF6F3B] text-xl font-bold"
                >
                  *
                </div>
                <div className="w-10 h-10 mb-3 text-primary">
                  <img src={icon13Svg} alt="" />
                </div>
                <h3
                  className="text-lg font-bold text-gray-900  mb-2"
                >
                  PAN Card
                </h3>
                <p
                  className="text-xs text-gray-600 leading-relaxed mb-4"
                >
                  Valid PAN card for all directors and shareholders. Required
                  for identity verification and tax compliance during company
                  registration.
                </p>
                <div className="border border-gray-200 mb-3"></div>
                <button
                  className="w-full py-2 px-4 border border-primary text-black rounded-full text-sm font-semibold hover:bg-[#FF6F3B] hover:text-white transition-colors duration-200"
                >
                  View Sample
                </button>
              </div>
              <div
                className="bg-[#FBFCFF] rounded-xl p-5 shadow  relative group hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="absolute top-4 right-4 text-[#FF6F3B] text-xl font-bold"
                >
                  *
                </div>
                <div className="w-10 h-10 mb-3 text-primary">
                  <img src={icon13Svg} alt="" />
                </div>
                <h3
                  className="text-lg font-bold text-gray-900  mb-2"
                >
                  PAN Card
                </h3>
                <p
                  className="text-xs text-gray-600 leading-relaxed mb-4"
                >
                  Valid PAN card for all directors and shareholders. Required
                  for identity verification and tax compliance during company
                  registration.
                </p>
                <div className="border border-gray-200 mb-3"></div>
                <button
                  className="w-full py-2 px-4 border border-primary text-black rounded-full text-sm font-semibold hover:bg-[#FF6F3B] hover:text-white transition-colors duration-200"
                >
                  View Sample
                </button>
              </div>
              <div
                className="bg-[#FBFCFF] rounded-xl p-5 shadow  relative group hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="absolute top-4 right-4 text-[#FF6F3B] text-xl font-bold"
                >
                  *
                </div>
                <div className="w-10 h-10 mb-3 text-primary">
                  <img src={icon13Svg} alt="" />
                </div>
                <h3
                  className="text-lg font-bold text-gray-900  mb-2"
                >
                  PAN Card
                </h3>
                <p
                  className="text-xs text-gray-600 leading-relaxed mb-4"
                >
                  Valid PAN card for all directors and shareholders. Required
                  for identity verification and tax compliance during company
                  registration.
                </p>
                <div className="border border-gray-200 mb-3"></div>
                <button
                  className="w-full py-2 px-4 border border-primary text-black rounded-full text-sm font-semibold hover:bg-[#FF6F3B] hover:text-white transition-colors duration-200"
                >
                  View Sample
                </button>
              </div>
              <div
                className="bg-[#FBFCFF] rounded-xl p-5 shadow  relative group hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="absolute top-4 right-4 text-[#FF6F3B] text-xl font-bold"
                >
                  *
                </div>
                <div className="w-10 h-10 mb-3 text-primary">
                  <img src={icon13Svg} alt="" />
                </div>
                <h3
                  className="text-lg font-bold text-gray-900  mb-2"
                >
                  PAN Card
                </h3>
                <p
                  className="text-xs text-gray-600 leading-relaxed mb-4"
                >
                  Valid PAN card for all directors and shareholders. Required
                  for identity verification and tax compliance during company
                  registration.
                </p>
                <div className="border border-gray-200 mb-3"></div>
                <button
                  className="w-full py-2 px-4 border border-primary text-black rounded-full text-sm font-semibold hover:bg-[#FF6F3B] hover:text-white transition-colors duration-200"
                >
                  View Sample
                </button>
              </div>
              <div
                className="bg-[#FBFCFF] rounded-xl p-5 shadow  relative group hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="absolute top-4 right-4 text-[#FF6F3B] text-xl font-bold"
                >
                  *
                </div>
                <div className="w-10 h-10 mb-3 text-primary">
                  <img src={icon13Svg} alt="" />
                </div>
                <h3
                  className="text-lg font-bold text-gray-900  mb-2"
                >
                  PAN Card
                </h3>
                <p
                  className="text-xs text-gray-600 leading-relaxed mb-4"
                >
                  Valid PAN card for all directors and shareholders. Required
                  for identity verification and tax compliance during company
                  registration.
                </p>
                <div className="border border-gray-200 mb-3"></div>
                <button
                  className="w-full py-2 px-4 border border-primary text-black rounded-full text-sm font-semibold hover:bg-[#FF6F3B] hover:text-white transition-colors duration-200"
                >
                  View Sample
                </button>
              </div>
            </div>
            <div className="w-full xl:!w-80 flex-shrink-0">
              <div
                className="bg-blue-50 shadow-xl rounded-xl overflow-hidden shadow-sidebar border border-blue-300  flex flex-col h-full max-h-[560px] xl:max-h-none xl:sticky xl:top-4"
              >
                <div
                  className="bg-blue-100 py-2 px-4 text-center border-b border-blue-200"
                >
                  <h3 className="font-bold text-lg text-gray-800 ">
                    List of document
                  </h3>
                </div>
                <div
                  className="flex-1 overflow-y-auto custom-scrollbar p-0 bg-white  relative"
                >
                  <div
                    className="absolute right-0 top-0 bottom-0 w-4 bg-blue-50  border-l border-blue-100  pointer-events-none"
                  ></div>
                  <ul className="py-2 pl-4 pr-6 space-y-2">
                    <li className="flex items-center gap-3 py-1">
                      <span
                        className="material-icons text-green-500 text-sm border border-green-500 rounded-full px-1"
                      >check</span
                      >
                      <span className="text-gray-800"
                      >Pan Card</span
                      >
                    </li>
                    <li className="flex items-center gap-3 py-1">
                      <span
                        className="material-icons text-green-500 text-sm border border-green-500 rounded-full px-1"
                      >check</span
                      >
                      <span className="text-gray-800"
                      >Aadhar Card</span
                      >
                    </li>
                    <li className="flex items-center gap-3 py-1">
                      <span
                        className="material-icons text-green-500 text-sm border border-green-500 rounded-full px-1"
                      >check</span
                      >
                      <span className="text-gray-800"
                      >Electricity Bill</span
                      >
                    </li>
                    <li className="flex items-center gap-3 py-1">
                      <span
                        className="material-icons text-green-500 text-sm border border-green-500 rounded-full px-1"
                      >check</span
                      >
                      <span className="text-gray-800"
                      >Pan Card</span
                      >
                    </li>
                    <li className="flex items-center gap-3 py-1">
                      <span
                        className="material-icons text-green-500 text-sm border border-green-500 rounded-full px-1"
                      >check</span
                      >
                      <span className="text-gray-800"
                      >Aadhar Card</span
                      >
                    </li>
                    <li className="flex items-center gap-3 py-1">
                      <span
                        className="material-icons text-green-500 text-sm border border-green-500 rounded-full px-1"
                      >check</span
                      >
                      <span className="text-gray-800"
                      >Electricity Bill</span
                      >
                    </li>
                    <li className="flex items-center gap-3 py-1">
                      <span
                        className="material-icons text-green-500 text-sm border border-green-500 rounded-full px-1"
                      >check</span
                      >
                      <span className="text-gray-800"
                      >Pan Card</span
                      >
                    </li>
                    <li className="flex items-center gap-3 py-1">
                      <span
                        className="material-icons text-green-500 text-sm border border-green-500 rounded-full px-1"
                      >check</span
                      >
                      <span className="text-gray-800"
                      >Aadhar Card</span
                      >
                    </li>
                    <li className="flex items-center gap-3 py-1">
                      <span
                        className="material-icons text-green-500 text-sm border border-green-500 rounded-full px-1"
                      >check</span
                      >
                      <span className="text-gray-800"
                      >Electricity Bill</span
                      >
                    </li>
                    <li className="flex items-center gap-3 py-1">
                      <span
                        className="material-icons text-green-500 text-sm border border-green-500 rounded-full px-1"
                      >check</span
                      >
                      <span className="text-gray-800"
                      >Electricity Bill</span
                      >
                    </li>
                    <li className="flex items-center gap-3 py-1">
                      <span
                        className="material-icons text-green-500 text-sm border border-green-500 rounded-full px-1"
                      >check</span
                      >
                      <span className="text-gray-800"
                      >Electricity Bill</span
                      >
                    </li>
                    <li className="flex items-center gap-3 py-1">
                      <span
                        className="material-icons text-green-500 text-sm border border-green-500 rounded-full px-1"
                      >check</span
                      >
                      <span className="text-gray-800"
                      >Electricity Bill</span
                      >
                    </li>
                    <li className="flex items-center gap-3 py-1">
                      <span
                        className="material-icons text-green-500 text-sm border border-green-500 rounded-full px-1"
                      >check</span
                      >
                      <span className="text-gray-800"
                      >Electricity Bill</span
                      >
                    </li>
                    <li className="flex items-center gap-3 py-1">
                      <span
                        className="material-icons text-green-500 text-sm border border-green-500 rounded-full px-1"
                      >check</span
                      >
                      <span className="text-gray-800"
                      >Pan Card</span
                      >
                    </li>
                    <li className="flex items-center gap-3 py-1">
                      <span
                        className="material-icons text-green-500 text-sm border border-green-500 rounded-full px-1"
                      >check</span
                      >
                      <span className="text-gray-800"
                      >Aadhar Card</span
                      >
                    </li>
                  </ul>
                </div>
                <div
                  className="bg-white  border-t border-gray-100 "
                >
                  <button
                    className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-4 rounded-lg shadow-md rounded-t-none transition-colors duration-200 text-sm"
                  >
                    Download list of document
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 flex justify-center">
            <div
              className="bg-white  rounded-full border border-[#8EC7FC]  py-3 px-6 flex items-center gap-4 text-xs sm:text-sm"
            >
              <div
                className="flex items-center gap-2 border-r border-gray-200 pr-4"
              >
                <span className="text-primary font-bold">*</span>
                <span className="text-gray-600 tracking-wider"
                >Required documents</span
                >
              </div>
              <div className="text-gray-600 tracking-widest">
                We'll help you prepare everything
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* Document Required end */}
      {/* PREMIUM PLAN SECTION */}
      <div
        className="gradientcolor22 my-10 text-slate-800  antialiased flex items-center justify-center p-4"
      >
        <section className="max-w-7xl mx-auto w-full py-6 lg:py-10">
          <div className="text-center mb-8 lg:mb-16 px-4">
            <div className="heading_short_long inline-block relative mb-4">
              <div className="short_title">
                PREMIUM PLAN SECTION
              </div>

              <h2 className="long_title">
                Faucibus Adipiscing Viverra Placerat Ex
              </h2>
            </div>
          </div>
          <div
            className="grid grid-cols-1 lg:!grid-cols-2 gap-12 lg:gap-20 items-center px-4 md:px-8"
          >
            <div className="space-y-8 order-2 lg:!order-1">
              <p
                className="text-lg md:!text-xl  leading-relaxed"
              >
                ex Quisque efficitur. cursus lacus sed facilisis id odio vitae
                Nunc commodo felis, sollicitudin. Nunc urna. odio maximus Nam
                commodo non.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.8011 9.9995C22.2578 12.2408 21.9323 14.5709 20.879 16.6013C19.8256 18.6317 18.108 20.2395 16.0126 21.1568C13.9172 22.0741 11.5707 22.2453 9.3644 21.6419C7.15807 21.0385 5.22529 19.6969 3.88838 17.8409C2.55146 15.9849 1.89122 13.7267 2.01776 11.4429C2.14431 9.15904 3.04998 6.98759 4.58375 5.29067C6.11752 3.59375 8.18668 2.47393 10.4462 2.11795C12.7056 1.76198 15.0189 2.19136 17.0001 3.3345" stroke="#009966" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 11L12 14L22 4" stroke="#009966" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                  <span className="text-slate-700 font-medium"
                  >Express incorporation in 7 business days</span
                  >
                </li>
                <li className="flex items-start gap-3">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.8011 9.9995C22.2578 12.2408 21.9323 14.5709 20.879 16.6013C19.8256 18.6317 18.108 20.2395 16.0126 21.1568C13.9172 22.0741 11.5707 22.2453 9.3644 21.6419C7.15807 21.0385 5.22529 19.6969 3.88838 17.8409C2.55146 15.9849 1.89122 13.7267 2.01776 11.4429C2.14431 9.15904 3.04998 6.98759 4.58375 5.29067C6.11752 3.59375 8.18668 2.47393 10.4462 2.11795C12.7056 1.76198 15.0189 2.19136 17.0001 3.3345" stroke="#009966" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 11L12 14L22 4" stroke="#009966" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                  <span className="text-slate-700 font-medium"
                  >Premium registered office address in prime location</span
                  >
                </li>
                <li className="flex items-start gap-3">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.8011 9.9995C22.2578 12.2408 21.9323 14.5709 20.879 16.6013C19.8256 18.6317 18.108 20.2395 16.0126 21.1568C13.9172 22.0741 11.5707 22.2453 9.3644 21.6419C7.15807 21.0385 5.22529 19.6969 3.88838 17.8409C2.55146 15.9849 1.89122 13.7267 2.01776 11.4429C2.14431 9.15904 3.04998 6.98759 4.58375 5.29067C6.11752 3.59375 8.18668 2.47393 10.4462 2.11795C12.7056 1.76198 15.0189 2.19136 17.0001 3.3345" stroke="#009966" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 11L12 14L22 4" stroke="#009966" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                  <span className="text-slate-700 font-medium"
                  >Complete documentation with leather-bound
                    certificates</span
                  >
                </li>
              </ul>
              <div className="flex flex-wrap gap-4 pt-2">
                <div
                  className="bg-white  shadow-lg rounded-full px-4 py-2 flex items-center gap-2 "
                >
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span
                    className="text-sm font-bold text-slate-700 "
                  >Trusted by 10,000+</span
                  >
                </div>
                <div
                  className="bg-white  shadow-lg rounded-full px-4 py-2 flex items-center gap-2 "
                >
                  <div className="flex text-yellow-400 text-sm">
                    <span
                      className="material-icons-outlined"
                      style={{ fontSize: '16px' }}
                    >star</span
                    >
                    <span
                      className="material-icons-outlined"
                      style={{ fontSize: '16px' }}
                    >star</span
                    >
                    <span
                      className="material-icons-outlined"
                      style={{ fontSize: '16px' }}
                    >star</span
                    >
                    <span
                      className="material-icons-outlined"
                      style={{ fontSize: '16px' }}
                    >star</span
                    >
                    <span
                      className="material-icons-outlined"
                      style={{ fontSize: '16px' }}
                    >star_half</span
                    >
                  </div>
                  <span
                    className="text-sm font-bold text-slate-700 "
                  >4.9</span
                  >
                </div>
              </div>
              <div className="flex flex-col sm:!flex-row gap-4 pt-4">
                <button
                  className="bg-primary hover:bg-orange-600 transition-colors text-white rounded-full px-8 py-2 shadow-lg shadow-orange-200 flex items-center justify-center gap-1 group"
                >
                  <span className="font-bold text-lg">₹29,000 onwards</span>
                  <span className="text-xs opacity-80 font-normal mt-1"
                  >per project</span
                  >
                </button>
                <button
                  className="bg-transparent border border-primary hover:border-primary text-black  hover:text-primary transition-all rounded-full px-10 py-2 font-semibold bg-white "
                >
                  Know More
                </button>
              </div>
            </div>
            <div className="order-1 lg:!order-2 relative">
              <div className="relative group">
                <img
                  alt="Professional signing documents at a desk"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  src={img7}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* PREMIUM PLAN SECTION end */}
      {/* Upgrade to Pro */}
      <div
        className="bg-white flex items-center justify-center font-body transition-colors duration-300 p-4"
      >
        <section
          className="w-full p-0 max-w-7xl bg-[#FBFCFF] shadow_custome  overflow-hidden flex flex-col lg:!flex-row relative z-10"
        >
          <div
            className="w-full lg:!w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center"
          >
            <div className="mb-8">
              <h1
                className="font-display text-2x1 md:!text-4xl font-bold text-gray-900  mb-3 tracking-tight"
              >
                Upgrade to Pro
              </h1>
              <h2
                className="font-display text-xl md:!text-3xl !font-semibold text-gray-600"
              >
                Get more feature and support
              </h2>
            </div>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center space-x-3">
                <svg width="26" height="26" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.9999 31.1654C24.824 31.1654 31.1666 24.8227 31.1666 16.9987C31.1666 9.17466 24.824 2.83203 16.9999 2.83203C9.17588 2.83203 2.83325 9.17466 2.83325 16.9987C2.83325 24.8227 9.17588 31.1654 16.9999 31.1654Z" stroke="#00A63E" stroke-width="1.45833" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.75 17.0013L15.5833 19.8346L21.25 14.168" stroke="#00A63E" stroke-width="1.45833" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                <span className="text-gray-700 text-lg"
                >Quick registration process</span
                >
              </li>
              <li className="flex items-center space-x-3">
                <svg width="26" height="26" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.9999 31.1654C24.824 31.1654 31.1666 24.8227 31.1666 16.9987C31.1666 9.17466 24.824 2.83203 16.9999 2.83203C9.17588 2.83203 2.83325 9.17466 2.83325 16.9987C2.83325 24.8227 9.17588 31.1654 16.9999 31.1654Z" stroke="#00A63E" stroke-width="1.45833" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.75 17.0013L15.5833 19.8346L21.25 14.168" stroke="#00A63E" stroke-width="1.45833" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                <span className="text-gray-700 text-lg"
                >Quick registration process</span
                >
              </li>
              <li className="flex items-center space-x-3">
                <svg width="26" height="26" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.9999 31.1654C24.824 31.1654 31.1666 24.8227 31.1666 16.9987C31.1666 9.17466 24.824 2.83203 16.9999 2.83203C9.17588 2.83203 2.83325 9.17466 2.83325 16.9987C2.83325 24.8227 9.17588 31.1654 16.9999 31.1654Z" stroke="#00A63E" stroke-width="1.45833" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.75 17.0013L15.5833 19.8346L21.25 14.168" stroke="#00A63E" stroke-width="1.45833" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                <span className="text-gray-700 text-lg"
                >Quick registration process</span
                >
              </li>
            </ul>
            <div
              className="gradientcolor /80 border border-[#8EC7FC]  rounded-lg p-4 md:p-5 mb-10 max-w-md relative"
            >
              <p
                className="text-gray-600 font-medium mb-1 text-xl"
              >
                Special Offer
              </p>
              <div className="flex items-baseline gap-3 mb-1">
                <span
                  className="text-4xl font-bold text-gray-900  font-display"
                >₹ 999/-</span
                >
                <span
                  className="text-xl text-gray-800 line-through font-medium font-display"
                >₹2999/-</span
                >
              </div>
              <p className="text-sm text-gray-500">
                Save 50% on your first registration
              </p>
            </div>
            <div className="flex justify-between flex-col max-w-md sm:!flex-row gap-4 sm:gap-6">
              <button
                className="bg-primary text-white px-10 py-1 rounded-full !font-semibold text-base shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:bg-opacity-90 transform transition-all hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                Get Started
              </button>
              <button
                className="bg-transparent border border-primary text-gray-800 px-8 py-1 rounded-full !font-semibold text-base hover:text-white hover:bg-orange-500 transition-colors text-center whitespace-nowrap"
              >
                Talk to Experts
              </button>
            </div>
          </div>
          <div
            className="w-full lg:!w-2/5 relative flex items-center justify-center bg-white lg:bg-transparent p-8 lg:p-0"
          >
            <img
              alt="Woman working at desk talking on phone illustration"
              className="relative z-10 w-4/5 lg:w-full max-w-sm lg:max-w-md object-contain transform translate-y-4 lg:translate-y-12 lg:-translate-x-8"
              src={img8}
            />
          </div>
        </section>
      </div>
      {/* Upgrade to Pro end */}
      {/* ADD ON SERVICES */}
      <div
        className="text-slate-900 antialiased transition-colors duration-300"
      >
        <section className="py-16 px-4 sm:px-6 lg:px-20 max-w-8xl mx-auto">
          <div className="heading_short_long text-center mb-12">
            <div className="short_title">
              ADD ON SERVICES
            </div>
            <h2 className="long_title">
              Services That Will And More Value To Your Package
            </h2>
          </div>
          <div className="grid grid-cols-1 md:!grid-cols-2 gap-6 lg:gap-8">
            <article
              className="flex flex-col p-6 sm:p-4 rounded-lg bg-[#F8FBFF]  border border-[#8EC7FC]  transition-all hover:shadow-lg"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="relative flex items-center justify-center w-8 h-8">
                  <img src={icon14Svg} alt="" />
                  <div
                    className="absolute w-1.5 h-1.5 bg-primary rounded-full"
                  ></div>
                </div>
                <div>
                  <h3
                    className="text-xl sm:text-2xl font-bold text-slate-900 "
                  >
                    Add on services
                  </h3>
                  <div className="flex items-center gap-3">
                    <span
                      className="text-xl font-bold text-slate-900 "
                    >₹12,999</span
                    >
                    <span
                      className="text-sm text-slate-400 line-through decoration-slate-400"
                    >₹15,999</span
                    >
                    <span
                      className="bg-green-100 text-green-600 text-xs font-bold px-2.5 py-1 rounded-full"
                    >Save 19%</span
                    >
                  </div>
                </div>
              </div>

              <p
                className=" text-sm mb-4 flex-grow"
              >
                tincidunt ex. malesuada adipiscing est. elit ac risus
                ullamcorper at dolor porta quis sit placerat. vitae odio tempor
                venenatis Cras Sed elit. malesuada risus ac urna. consectetur
                dui malesuada vehicula, malesuada dignissim, dui. maximus
                vehicula, at, elit ullamcorper nec cursus faucibus non nisl.
                Donec vitae elit id non, vitae ex enim.
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <button
                  className="bg-primary hover:bg-orange-600 text-white font-semibold py-2 px-12 rounded-full transition-colors duration-200 text-sm shadow-sm hover:shadow-md"
                >
                  Add Service
                </button>
                <button
                  className="bg-white border border-slate-300   font-semibold py-2 px-12 rounded-full hover:bg-slate-50 transition-colors duration-200 text-sm"
                >
                  Learn More
                </button>
              </div>
            </article>
            <article
              className="flex flex-col p-6 sm:p-4 rounded-lg bg-[#F8FBFF]  border border-[#8EC7FC]  transition-all hover:shadow-lg"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="relative flex items-center justify-center w-8 h-8">
                  <img src={icon14Svg} alt="" />
                  <div
                    className="absolute w-1.5 h-1.5 bg-primary rounded-full"
                  ></div>
                </div>
                <div>
                  <h3
                    className="text-xl sm:text-2xl font-bold text-slate-900 "
                  >
                    Add on services
                  </h3>
                  <div className="flex items-center gap-3">
                    <span
                      className="text-xl font-bold text-slate-900 "
                    >₹12,999</span
                    >
                    <span
                      className="text-sm text-slate-400 line-through decoration-slate-400"
                    >₹15,999</span
                    >
                    <span
                      className="bg-green-100 text-green-600 text-xs font-bold px-2.5 py-1 rounded-full"
                    >Save 19%</span
                    >
                  </div>
                </div>
              </div>

              <p
                className=" text-sm leading-relaxed mb-4 flex-grow"
              >
                tincidunt ex. malesuada adipiscing est. elit ac risus
                ullamcorper at dolor porta quis sit placerat. vitae odio tempor
                venenatis Cras Sed elit. malesuada risus ac urna. consectetur
                dui malesuada vehicula, malesuada dignissim, dui. maximus
                vehicula, at, elit ullamcorper nec cursus faucibus non nisl.
                Donec vitae elit id non, vitae ex enim.
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <button
                  className="bg-primary hover:bg-orange-600 text-white font-semibold py-2 px-12 rounded-full transition-colors duration-200 text-sm shadow-sm hover:shadow-md"
                >
                  Add Service
                </button>
                <button
                  className="bg-white border border-slate-300   font-semibold py-2 px-12 rounded-full hover:bg-slate-50 transition-colors duration-200 text-sm"
                >
                  Learn More
                </button>
              </div>
            </article>
            <article
              className="flex flex-col p-6 sm:p-4 rounded-lg bg-[#F8FBFF]  border border-[#8EC7FC]  transition-all hover:shadow-lg"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="relative flex items-center justify-center w-8 h-8">
                  <img src={icon14Svg} alt="" />
                  <div
                    className="absolute w-1.5 h-1.5 bg-primary rounded-full"
                  ></div>
                </div>
                <div>
                  <h3
                    className="text-xl sm:text-2xl font-bold text-slate-900 "
                  >
                    Add on services
                  </h3>
                  <div className="flex items-center gap-3">
                    <span
                      className="text-xl font-bold text-slate-900 "
                    >₹12,999</span
                    >
                    <span
                      className="text-sm text-slate-400 line-through decoration-slate-400"
                    >₹15,999</span
                    >
                    <span
                      className="bg-green-100 text-green-600 text-xs font-bold px-2.5 py-1 rounded-full"
                    >Save 19%</span
                    >
                  </div>
                </div>
              </div>

              <p
                className=" text-sm leading-relaxed mb-4 flex-grow"
              >
                tincidunt ex. malesuada adipiscing est. elit ac risus
                ullamcorper at dolor porta quis sit placerat. vitae odio tempor
                venenatis Cras Sed elit. malesuada risus ac urna. consectetur
                dui malesuada vehicula, malesuada dignissim, dui. maximus
                vehicula, at, elit ullamcorper nec cursus faucibus non nisl.
                Donec vitae elit id non, vitae ex enim.
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <button
                  className="bg-primary hover:bg-orange-600 text-white font-semibold py-2 px-12 rounded-full transition-colors duration-200 text-sm shadow-sm hover:shadow-md"
                >
                  Add Service
                </button>
                <button
                  className="bg-white border border-slate-300   font-semibold py-2 px-12 rounded-full hover:bg-slate-50 transition-colors duration-200 text-sm"
                >
                  Learn More
                </button>
              </div>
            </article>
            <article
              className="flex flex-col p-6 sm:p-4 rounded-lg bg-[#F8FBFF]  border border-[#8EC7FC]  transition-all hover:shadow-lg"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="relative flex items-center justify-center w-8 h-8">
                  <img src={icon14Svg} alt="" />
                  <div
                    className="absolute w-1.5 h-1.5 bg-primary rounded-full"
                  ></div>
                </div>
                <div>
                  <h3
                    className="text-xl sm:text-2xl font-bold text-slate-900 "
                  >
                    Add on services
                  </h3>
                  <div className="flex items-center gap-3">
                    <span
                      className="text-xl font-bold text-slate-900 "
                    >₹12,999</span
                    >
                    <span
                      className="text-sm text-slate-400 line-through decoration-slate-400"
                    >₹15,999</span
                    >
                    <span
                      className="bg-green-100 text-green-600 text-xs font-bold px-2.5 py-1 rounded-full"
                    >Save 19%</span
                    >
                  </div>
                </div>
              </div>

              <p
                className=" text-sm leading-relaxed mb-4 flex-grow"
              >
                tincidunt ex. malesuada adipiscing est. elit ac risus
                ullamcorper at dolor porta quis sit placerat. vitae odio tempor
                venenatis Cras Sed elit. malesuada risus ac urna. consectetur
                dui malesuada vehicula, malesuada dignissim, dui. maximus
                vehicula, at, elit ullamcorper nec cursus faucibus non nisl.
                Donec vitae elit id non, vitae ex enim.
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <button
                  className="bg-primary hover:bg-orange-600 text-white font-semibold py-2 px-12 rounded-full transition-colors duration-200 text-sm shadow-sm hover:shadow-md"
                >
                  Add Service
                </button>
                <button
                  className="bg-white border border-slate-300   font-semibold py-2 px-12 rounded-full hover:bg-slate-50 transition-colors duration-200 text-sm"
                >
                  Learn More
                </button>
              </div>
            </article>
          </div>
        </section>
      </div>
      {/* ADD ON SERVICES end */}
      <div className="faqsec">
        <FAQ />
      </div>
      {/* Aliquip AdipiscingElit */}
      <div
        className="flex flex-col justify-center text-gray-800 antialiased"
      >
        <div className="w-full max-w-7xl mx-auto px-6 py-12 lg:px-12 lg:py-20">
          <div className="text-center mb-8 lg:mb-16">
            <div
              className="heading_short_long mb-6"
            >
              <div className="short_title">
                Lorem Ipsum Dolor
              </div>

              <h2 className="long_title">
                Aliquip <span className="text-primary">Adipiscing</span> Elit
              </h2>
            </div>
          </div>
          <div
            className="grid grid-cols-1 lg:!grid-cols-2 gap-12 items-center mb-12"
          >
            <div
              className="relative w-full aspect-video bg-black rounded-lg overflow-hidden shadow-2xl group cursor-pointer border border-gray-200 "
            >
              <img
                alt="Hand interacting with a digital interface representing a video player"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-300"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrGQyoXA0iDI4mYlDnBDjAkAtz4XdGA5W9jXSy1gQNuo-Io5TMV9AkBHD6c-QYM5aG5jNifdFqM0PUXw5a3s2U7K3zm-gIxI2JRkuO0hy4vmhb7HjrQpRzqfOIag8NTAKPknJhly_IJj1xbk5SrfiiZP2zLF4hZMYRAboA4YiFvLRv_nwIhGy7bNkCSlZD4uLP_LkPiD_FyjLyHnBIkvveS5ZPVAXMm0b6Gn_bwmcwfGpquzwsUlVTluEGq4noejzc-bIz16mp-_RM"
              />
              <div
                className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded shadow animate-pulse"
              >
                LIVE
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/50 group-hover:scale-110 transition-transform duration-300"
                >
                  <div
                    className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg pl-1"
                  >
                    <span className="material-icons text-white text-3xl"
                    >play_arrow</span
                    >
                  </div>
                </div>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
              >
                <div className="flex items-center space-x-4 text-white">
                  <span className="material-icons text-xl">play_arrow</span>
                  <div
                    className="flex-grow h-1 bg-gray-600 rounded-full overflow-hidden"
                  >
                    <div className="h-full w-1/3 bg-primary relative">
                      <div
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow"
                      ></div>
                    </div>
                  </div>
                  <span className="material-icons text-sm opacity-80"
                  >volume_up</span
                  >
                  <span className="material-icons text-sm opacity-80"
                  >settings</span
                  >
                  <span className="material-icons text-sm opacity-80"
                  >fullscreen</span
                  >
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2
                className="text-2xl md:text-3xl font-bold text-gray-900  leading-tight"
              >
                Lorem ipsum dolor sit amet, <br className="hidden lg:block" />
                aliquip adipiscing elit?
              </h2>
              <p
                className="text-gray-800 text-base md:text-lg leading-relaxed text-justify lg:text-left"
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit praesent luptatum zzril
                delenit augue duis dolore te feugait nulla facilisi. vel illum
                dolore eu feugiat nulla facilisis at vero eros et accumsan et
                iusto odio dignissim qui blandit praesent luptatum zzril delenit
                augue duis dolore te feugait nulla facilisi.
              </p>
            </div>
          </div>
          <div className="w-full">
            <p
              className="text-gray-600 text-base md:text-lg leading-relaxed text-justify lg:text-left"
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi.
            </p>
          </div>
        </div>
      </div>
      {/* Aliquip AdipiscingElit end*/}
      <div className="py-2">
        <Features />
      </div>
      {/* contact */}
      <div
        className="bg-[#E7F3FF] shadow-2xl mb-10 font-body antialiased transition-colors duration-300"
      >
        <section
          className="w-full flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl w-full text-center space-y-3">
            <h1
              className="text-4xl md:text-4xl font-bold text-slate-900  tracking-tight"
            >
              Contact Us
            </h1>
            <p
              className="text-xl md:text-2xl text-gray-600 font-normal max-w-2xl mx-auto"
            >
              Experts handle the process so you can focus on growth.
            </p>
            <div className="pt-2 pb-3">
              <p className="text-sm text-gray-600">
                Have More Questions? Seek Help of an Expert
              </p>
            </div>
            <div
              className="flex flex-col md:!flex-row items-center justify-center gap-6 md:gap-12 mt-8"
            >
              <a
                className="group flex items-center gap-2.5 transition-transform hover:scale-105"
                href="tel:+00000000000"
              >
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-full  text-primary"
                >
                  <img src={callIcon} alt="" />
                </div>
                <span
                  className="text-lg font-medium text-slate-700  group-hover:text-primary transition-colors"
                >
                  +00-000000000
                </span>
              </a>
              <a
                className="group flex items-center gap-2.5 transition-transform hover:scale-105"
                href="mailto:reach@delegrace.com"
              >
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-full  text-primary"
                >
                  <img src={mailIcon} alt="" />
                </div>
                <span
                  className="text-lg font-medium text-slate-700  group-hover:text-primary transition-colors"
                >
                  reach@delegrace.com
                </span>
              </a>
              <a
                className="group flex items-center gap-2.5 transition-transform hover:scale-105"
                href="tel:+00000000000"
              >
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-full  text-primary"
                >
                  <img src={callIcon} alt="" />
                </div>
                <span
                  className="text-lg font-medium text-slate-700  group-hover:text-primary transition-colors"
                >
                  +00-000000000
                </span>
              </a>
            </div>
          </div>
        </section>

      </div>
      {/* contact end */}
    </>
  );
};

export default Services;

