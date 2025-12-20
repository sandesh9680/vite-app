import React, { useState, useEffect } from 'react';
import '../components/ServicesPage.css';

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
import img8 from '../assets/images/img-8.png';
import img13 from '../assets/images/img-13.png';
import img15 from '../assets/images/img-15.png';
import testimonialImg from '../assets/images/testimonial.png';
import trustedPartners from '../assets/images/trusted-partners.png';
import faqsImg from '../assets/images/faqs.png';
import callIcon from '../assets/images/call-icon.svg';
import mailIcon from '../assets/images/mail-icon.svg';

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
          className="absolute top-0 left-0 w-64 h-64 bg-orange-100 dark:bg-orange-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"
        ></div>
        <div
          className="absolute top-0 right-0 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"
        ></div>
        <div
          className="max-w-7xl w-full mx-auto grid lg:grid-cols-3 gap-12 lg:gap-5 items-center z-10"
        >
          <div className="space-y-8 col-span-2 lg:pe-16">
            <div>
              <span
                className="text-primary font-bold tracking-wider uppercase text-xs border-b-2 border-orange-200 pb-1"
              >
                Professional Business Services
              </span>
            </div>
            <h1
              className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              Launch Your Business the Right Way with Quick
              <span className="text-gray-900 dark:text-white"
                >GST Registration</span
              >
            </h1>
            <p
              className="text-lg text-gray-900 dark:text-gray-800 max-w-xl leading-relaxed"
            >
              Hassle-Free, Fast, and Reliable GST Registration to Get You
              Started in Just a Few Days.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <span className="material-icons-outlined text-green-500"
                  >check_circle</span
                >
                <span className="text-gray-700 dark:text-gray-300"
                  >Lowest price guarantee in the market</span
                >
              </li>
              <li className="flex items-center space-x-3">
                <span className="material-icons-outlined text-green-500"
                  >check_circle</span
                >
                <span className="text-gray-700 dark:text-gray-300"
                  >100% Online process, no office visit needed</span
                >
              </li>
              <li className="flex items-center space-x-3">
                <span className="material-icons-outlined text-green-500"
                  >check_circle</span
                >
                <span className="text-gray-700 dark:text-gray-300"
                  >Expert assistance from CA/CS professionals</span
                >
              </li>
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              <div
                className="gradientcolor dark:bg-gray-800 border border-blue-100 dark:border-gray-700 rounded-xl p-4 flex flex-col items-center text-center shadow-lg hover:shadow-md transition-shadow"
              >
                <div className="dark:bg-gray-700 p-2 rounded-full mb-2">
                  <img src={icon1} alt="" />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  GST Registration from just
                </p>
                <p className="text-lg font-bold text-gray-900 dark:text-white">
                  ₹1,200/-
                </p>
              </div>
              <div
                className="gradientcolor dark:bg-gray-800 border border-blue-100 dark:border-gray-700 rounded-xl p-4 flex flex-col items-center text-center shadow-lg hover:shadow-md transition-shadow"
              >
                <div className="dark:bg-gray-700 p-2 rounded-full mb-2">
                  <img src={icon2} alt="" />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  CA/CS Assisted
                </p>
                <div className="flex flex-col items-center">
                  <p className="text-lg font-bold text-gray-900 dark:text-white">
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
                className="gradientcolor dark:bg-gray-800 border border-blue-100 dark:border-gray-700 rounded-xl p-4 flex flex-col items-center text-center shadow-lg hover:shadow-md transition-shadow"
              >
                <div className="dark:bg-gray-700 p-2 rounded-full mb-2">
                  <img src={icon3} alt="" />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  Get GSTIN in just
                </p>
                <p className="text-lg font-bold text-gray-900 dark:text-white">
                  4-6 Days
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                className="flex items-center justify-center space-x-2 bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <span className="material-icons-outlined text-xl">play_circle</span>
                <span>Watch a demo</span>
              </button>
              <button
                className="flex items-center justify-center space-x-2 bg-white dark:bg-gray-800 border-2 border-primary text-gray-900 dark:text-white font-semibold py-3 px-8 rounded-full hover:bg-orange-50 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="material-icons-outlined text-primary text-xl"
                  >description</span
                >
                <span>View Packages</span>
              </button>
            </div>
          </div>
          <div className="relative mt-12 lg:mt-0">
            <div
              className="absolute -top-10 -left-6 z-20 flex flex-col items-start space-y-1"
            >
              <img src={img1} width="120" alt="" />
            </div>
            <div
              className="bg-[#FFF8EB] dark:bg-form-bg-dark rounded-3xl p-6 md:p-8 shadow-card border border-[#FFD1A1] dark:border-gray-700 relative"
            >
              <div className="text-center mb-6 mt-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Need assistance?<br />
                  <span className="text-gray-800 dark:text-gray-200"
                    >Our team will call.</span
                  >
                </h2>
              </div>
              <form className="space-y-5">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 ml-1"
                    htmlFor="name"
                    >Name</label
                  >
                  <input
                    className="w-full rounded-full border-orange-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-5 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow placeholder-gray-400"
                    id="name"
                    placeholder="Amrit Kumar"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 ml-1"
                    htmlFor="email"
                    >Email ID</label
                  >
                  <input
                    className="w-full rounded-full border-orange-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-5 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow placeholder-gray-400"
                    id="email"
                    placeholder="abcdefg@gmail.com"
                    type="email"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 ml-1"
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
                        className="block w-full rounded-full border-orange-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white pl-10 pr-8 py-3 focus:ring-2 focus:ring-primary focus:border-primary appearance-none outline-none"
                      >
                        <option>+91</option>
                        <option>+1</option>
                        <option>+44</option>
                      </select>
                      <div
                        className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300"
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
                      className="w-2/3 rounded-full border-orange-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-5 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow placeholder-gray-400"
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
                      className="w-5 h-5 border-gray-300 rounded text-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600"
                      id="terms"
                      name="terms"
                      type="checkbox"
                    />
                  </div>
                  <div className="ml-2 text-sm">
                    <label
                      className="font-medium text-gray-600 dark:text-gray-400"
                      htmlFor="terms"
                      >I hereby accept the
                      <span
                        className="text-red-800 font-semibold cursor-pointer hover:underline"
                        >T&amp;C</span
                      >
                      of Ebizfiling</label
                    >
                  </div>
                </div>
                <button
                  className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3.5 px-6 rounded-full shadow-lg transform active:scale-95 transition-all flex items-center justify-center space-x-2 text-lg"
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
        className="font-body shadow-lg text-slate-800 dark:text-slate-100 min-h-screen flex flex-col items-center pt-10 transition-colors duration-300"
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
                className="block w-full rounded-full border-[#8FCBFF] dark:border-slate-700 bg-white dark:bg-slate-800 py-4 pl-14 pr-14 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent shadow-soft transition-all duration-200 text-lg"
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
            <div className="inline-block relative mb-3">
              <h2
                className="text-primary font-bold tracking-[0.2em] text-xs uppercase"
              >
                Trusted by Thousands
              </h2>
              <div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-primary/30"
              ></div>
            </div>
            <h1
              className="text-3xl md:text-4xl lg:text-4xl font-bold text-slate-900 dark:text-white mt-4"
            >
              Rated 4.5<span className="text-slate-800 dark:text-slate-200">★</span>
              On Google &amp; Trustpilot
            </h1>
          </div>
          <div
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-full mx-auto pb-20"
          >
            <div
              className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-soft border border-slate-100 dark:border-slate-700 flex flex-col justify-center h-full hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-16 h-16"
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
                <div className="flex flex-col">
                  <div className="flex items-center space-x-1 mb-1">
                    <span className="material-symbols-outlined text-yellow-400">
                      star
                    </span>
                    <span className="material-symbols-outlined text-yellow-400">
                      star
                    </span>
                    <span className="material-symbols-outlined text-yellow-400">
                      star
                    </span>
                    <span className="material-symbols-outlined text-yellow-400">
                      star
                    </span>
                    <span className="material-symbols-outlined text-yellow-400">
                      star
                    </span>
                  </div>
                  <div className="text-xl font-bold text-slate-900 dark:text-white">
                    5/5 Google Reviews
                  </div>
                  <div className="flex items-center mt-2 pl-2">
                    <div className="flex -space-x-3">
                      <img
                        alt="User 1"
                        className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTIukZpN5tDZTaOpIW_ajiJVg2jc1Pbp8_IOvyDvUlT0YoTYC2B5mZTQg8pusI2FrG6vYuEFJCcFZ-TeiCyCJVmlDrjAcjZDROv_PDDEY1N_AYCT0ygoHMzVejdkulTqIKWmLqWAhEhi0zE0hwxUjJ_E0OISwm0nQuHmeE1B2riUl7jStIgWMkQnIzRIys-oGRVS7YioiNqwowouTY8k9VrZ08NSRhpdaPv8cJGZIOQDFIu7-fZvXdx-Ma_5EuHvH45gc2-iCvUCmI"
                      />
                      <img
                        alt="User 2"
                        className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNTtdCrR-3GlXED6EO_edi5TI4zj7lp6Cf6gEjoyQQavO-vUnMb_gBNljS0MYn67f0DRm_ZVA63N4xlVhqBVApF2CB90i7ME2S0uv6ujqrSxcvF5Hc-70tCkY-uUivOPcktWlY5wZfVK6_FIn31NyJ12KLcuCF9xvqh6IfHvqjckZuIJRtuykJWYVS-9_rqbZc6Em468SbQGE9mF9VYcbwcePTyUPhb3bSWC6UtKrcJJoEb9mPhyBwjUrPD3Gx6wHZrz7SYLxvtmkN"
                      />
                      <img
                        alt="User 3"
                        className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4LkB3FWMrlxTOsA6Faad6e_60ZaZUo9CK5aDF5GGml2DxRR_INaQ3sRGZGCN7WaGrUIvZ0NjaO70g3_NPROzAXznlsfP1IJ5lva9SoJMTmUW0z7ZOICoREK372Y97dy-BPDik3qf-WyefkqgPjcm3VgLywORJyvVIK-T48yzVQeLBEXhc7N6bOJJ-MU7UH6jMRzSGsE7YGNbC7reZZsphdm8xqwCYpr86Ou633GFXtp-lqf8537qRQa58YvFWtfEEW2ntAgCzRsDs"
                      />
                      <img
                        alt="User 4"
                        className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3_pm8OtQJ22N2tZWfmlYf0mrwWovZJSN1EM4BSrMAoXrF3u4qpLciqatE6w_uRzdMgke2QGMJ_24mgsDLcln-Ov8NNjzlvgcjADOEib-r-PER_rqVQ3Hgyi1Q0bl43a1ouK_k5kbDJB_YBk4bps8ogPtFL4tLXG_cBkflTi9Uqrq0Jx2wojhS9dWSUXzcPjUw03uMvmQOgQwIUAfsF8exc5MKYlT6QWujfwyXQjX2fND6ve1em5GbtN8PHfM4ExCsms8zzFGz77FK"
                      />
                      <img
                        alt="User 5"
                        className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJs_YOaAwkV6_ot4ey0WmyWeTdqe1y7pDgy2HkC-JJdq6qeeg81Vks8GIiFJWppTiFxjBCLG_4eH69TUWoAMBF1anHAq88IzNkXmUuXiWeznWrChv-EE1YYIbE-ef_kXOuT0cHC2L2lqDfdM5REe15szZsLjxxH5xKv4K3lPAQ-UvamuXZ53jazp8bVNJNhkRiB736ZEeB5CJt02heVNWCHDe_Muw0koT0CZlUwvtqxvLFcnxBerPdJftlfvxrLAiGteQc8Jmm8aAh"
                      />
                      <div
                        className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 bg-purple-700 text-white flex items-center justify-center text-xs font-bold z-10"
                      >
                        20K+
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-soft border border-slate-100 dark:border-slate-700 flex gap-4 items-start hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className="flex-shrink-0 flex flex-col items-center justify-center mt-1"
              >
                <div className="wreath-container">
                  <img src={img2} alt="" />
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-between h-full">
                <div>
                  <h3
                    className="text-lg font-bold text-slate-900 dark:text-white mb-1"
                  >
                    Award Name
                  </h3>

                  <p
                    className="text-sm text-slate-500 dark:text-slate-400 leading-snug mb-4"
                  >
                    Ullamcorper ultrices quis ullam tincidunt felis, placerat
                    Lorem Ut leo.
                  </p>
                </div>
                <div
                  className="flex flex-col justify-between sm:flex-row sm:items-center sm:justify-between text-xs pt-3 border-t border-slate-100 dark:border-slate-700"
                >
                  <span className="text-slate-400 mb-1 sm:mb-0">02/05/2025</span>
                  <a
                    className="text-primary text-[10px] hover:text-orange-700 transition-colors font-medium"
                    href="#"
                    >Know more about this award</a
                  >
                </div>
              </div>
            </div>
            <div
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-700 overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className="bg-[#00B67A] px-6 py-4 flex items-center justify-center space-x-2"
              >
                <svg
                  className="w-8 h-8 text-white fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.004 2.482l2.923 8.988h9.45l-7.646 5.556 2.922 8.991-7.65-5.558-7.647 5.558 2.922-8.991-7.647-5.556h9.45z"
                  ></path>
                </svg>
                <span className="text-white font-bold text-2xl tracking-tight"
                  >Trustpilot</span
                >
              </div>
              <div className="p-4 flex flex-col items-center justify-center flex-1">
                <div
                  className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-3"
                >
                  Excellent
                </div>
                <div className="flex space-x-1 mb-3">
                  <div className="trustpilot-star-box bg-[#00B67A] rounded-sm">
                    <span className="material-icons-round text-white text-[20px]"
                      >star</span
                    >
                  </div>
                  <div className="trustpilot-star-box bg-[#00B67A] rounded-sm">
                    <span className="material-icons-round text-white text-[20px]"
                      >star</span
                    >
                  </div>
                  <div className="trustpilot-star-box bg-[#00B67A] rounded-sm">
                    <span className="material-icons-round text-white text-[20px]"
                      >star</span
                    >
                  </div>
                  <div className="trustpilot-star-box bg-[#00B67A] rounded-sm">
                    <span className="material-icons-round text-white text-[20px]"
                      >star</span
                    >
                  </div>
                  <div className="trustpilot-star-box bg-[#00B67A] rounded-sm">
                    <span className="material-icons-round text-white text-[20px]"
                      >star</span
                    >
                  </div>
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  Based on
                  <a
                    className="font-semibold underline decoration-slate-400 hover:text-slate-800 dark:hover:text-white"
                    href="#"
                    >456 reviews</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Trusted by Thousands end */}


{/* Benefits of GST Registration */}
      <div
        className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-body antialiased transition-colors duration-300"
      >
        <nav
          className="sticky top-0 z-50 w-full bg-gradient-to-r from-orange-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 border-b border-gray-100 dark:border-slate-800 shadow-sm backdrop-blur-sm bg-opacity-95"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="flex justify-center md:justify-between items-center overflow-x-auto whitespace-nowrap no-scrollbar space-x-2 md:space-x-4"
            >
              <a
                className="bg-primary text-white px-8 py-2.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                href="#"
              >
                Benefits
              </a>
              <a
                className="text-slate-800 dark:text-slate-300 font-bold text-sm px-5 py-2.5 rounded-full hover:bg-white/50 dark:hover:bg-slate-800 hover:text-primary transition-all"
                href="#"
              >
                Services
              </a>
              <a
                className="text-slate-800 dark:text-slate-300 font-bold text-sm px-5 py-2.5 rounded-full hover:bg-white/50 dark:hover:bg-slate-800 hover:text-primary transition-all"
                href="#"
              >
                Process
              </a>
              <a
                className="text-slate-800 dark:text-slate-300 font-bold text-sm px-5 py-2.5 rounded-full hover:bg-white/50 dark:hover:bg-slate-800 hover:text-primary transition-all"
                href="#"
              >
                Plans &amp; Pricing
              </a>
              <a
                className="text-slate-800 dark:text-slate-300 font-bold text-sm px-5 py-2.5 rounded-full hover:bg-white/50 dark:hover:bg-slate-800 hover:text-primary transition-all"
                href="#"
              >
                Why Ebizfiling
              </a>
              <a
                className="text-slate-800 dark:text-slate-300 font-bold text-sm px-5 py-2.5 rounded-full hover:bg-white/50 dark:hover:bg-slate-800 hover:text-primary transition-all"
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
      <div className="py-20 px-4 sm:px-6 lg:px-10 bg-[#FBFCFF] my-6 mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block relative mb-4 group">
            <h2
              className="text-primary font-bold tracking-[0.15em] uppercase text-sm md:text-base relative z-10 pb-2"
            >
              Benefits of GST Registration
            </h2>
            <div
              className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/20 scale-x-50 group-hover:scale-x-100 transition-transform duration-500"
            ></div>
          </div>
          <h1
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2 leading-tight"
          >
            Why <span className="text-primary">(Service Name)</span> Is A Smart
            Choice?
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <div
            className="gradientcolor dark:bg-slate-800 border border-blue-100 dark:border-slate-700 rounded-xl p-4 sm:p-6 hover:shadow-soft dark:hover:shadow-glow transition-all duration-300 group flex flex-col h-full"
          >
            <div className="mb-1 relative w-16 h-16">
              <img src={icon4} alt="" />
            </div>
            <h3
              className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4"
            >
              Tax Savings — Reduce costs with credits
            </h3>
            <p
              className="text-slate-600 dark:text-slate-400 leading-relaxed text-base"
            >
              With GST, you can claim input tax credits on purchases made for
              your business. This helps reduce your overall tax liability. In
              simple terms, you spend less and save more while staying
              compliant.
            </p>
          </div>
          <div
            className="gradientcolor dark:bg-slate-800 border border-card-border-light dark:border-slate-700 rounded-xl p-4 sm:p-6 hover:shadow-soft dark:hover:shadow-glow transition-all duration-300 group flex flex-col h-full"
          >
            <div className="mb-1 relative w-16 h-16">
              <img src={icon4} alt="" />
            </div>
            <h3
              className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4"
            >
              Tax Savings — Reduce costs with credits
            </h3>
            <p
              className="text-slate-600 dark:text-slate-400 leading-relaxed text-base"
            >
              With GST, you can claim input tax credits on purchases made for
              your business. This helps reduce your overall tax liability. In
              simple terms, you spend less and save more while staying
              compliant.
            </p>
          </div>
          <div
            className="gradientcolor dark:bg-slate-800 border border-card-border-light dark:border-slate-700 rounded-xl p-4 sm:p-6 hover:shadow-soft dark:hover:shadow-glow transition-all duration-300 group flex flex-col h-full"
          >
            <div className="mb-1 relative w-16 h-16">
              <img src={icon4} alt="" />
            </div>
            <h3
              className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4"
            >
              Tax Savings — Reduce costs with credits
            </h3>
            <p
              className="text-slate-600 dark:text-slate-400 leading-relaxed text-base"
            >
              With GST, you can claim input tax credits on purchases made for
              your business. This helps reduce your overall tax liability. In
              simple terms, you spend less and save more while staying
              compliant.
            </p>
          </div>
          <div
            className="gradientcolor dark:bg-slate-800 border border-card-border-light dark:border-slate-700 rounded-xl p-4 sm:p-6 shadow-soft dark:shadow-none hover:shadow-lg dark:hover:shadow-glow transition-all duration-300 group flex flex-col h-full"
          >
            <div className="mb-1 relative w-16 h-16">
              <img src={icon4} alt="" />
            </div>
            <h3
              className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4"
            >
              Tax Savings — Reduce costs with credits
            </h3>
            <p
              className="text-slate-600 dark:text-slate-400 leading-relaxed text-base"
            >
              With GST, you can claim input tax credits on purchases made for
              your business. This helps reduce your overall tax liability. In
              simple terms, you spend less and save more while staying
              compliant.
            </p>
          </div>
        </div>
      </div>
{/* Plans and Pricing end */}


      <div
        className="font-sans text-slate-800 dark:text-slate-100 antialiased transition-colors duration-300"
      >
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2
              className="text-primary font-bold tracking-widest text-sm uppercase relative inline-block"
            >
              Plans and Pricing
              <span
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-orange-200 dark:bg-orange-900/50 rounded-full"
              ></span>
            </h2>
            <h1
              className="text-3xl md:text-4xl lg:text-4xl font-display font-bold text-slate-900 dark:text-white mt-4"
            >
              Choose The Right Plan To Grow Your Business
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div
              className="group relative bg-white dark:bg-card-dark rounded-2xl p-6 border-2 border-blue-100 dark:border-slate-700 shadow-soft hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                <div
                  className="w-16 h-16 mb-4 flex items-center justify-center text-blue-500"
                >
                  <img src={icon5} alt="" />
                </div>
                <h3
                  className="text-xl font-bold text-slate-900 dark:text-white uppercase tracking-tight"
                >
                  Basic Plan
                </h3>
                <div className="flex items-center gap-2 mt-2 text-sm">
                  <span className="text-slate-400 line-through">₹ 1999</span>
                  <span
                    className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold px-2 py-0.5 rounded"
                    >40% OFF SAVE BIG</span
                  >
                </div>
                <div className="mt-2 text-center">
                  <span
                    className="text-4xl font-bold text-slate-900 dark:text-white"
                    >₹ 999</span
                  >
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    per registration
                  </div>
                </div>
                <div
                  className="mt-4 border border-slate-200 dark:border-slate-600 rounded-full px-3 py-1 text-xs text-slate-600 dark:text-slate-300 flex items-center gap-1"
                >
                  Offer ends in:
                  <span className="font-mono font-bold text-red-500">24:27:56</span>
                </div>
                <div
                  className="mt-3 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 px-2 py-1 rounded border border-dashed border-slate-300 dark:border-slate-600 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  Use Code:
                  <span className="font-bold text-slate-700 dark:text-slate-300"
                    >GrabNavratriOffer</span
                  >
                  <svg
                    className="w-3 h-3 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>
                <div
                  className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-100 dark:border-yellow-900/20 rounded-lg flex items-start gap-3 w-full"
                >
                  <div
                    className="w-8 h-8 rounded bg-yellow-200 dark:bg-yellow-800 flex-shrink-0"
                  >
                    <img src={icon8} alt="" />
                  </div>
                  <div
                    className="text-[10px] text-slate-600 dark:text-slate-400 leading-tight"
                  >
                    <span
                      className="font-bold text-slate-800 dark:text-slate-200 block mb-0.5"
                      >tincidunt urna</span
                    >
                    Ut in Nam at urna Lorem venenatis ipsum tincidunt non,
                    tincidunt sit Donec
                  </div>
                </div>
                <button
                  className="w-full mt-6 bg-gradient-to-r from-[#FF7F50] to-primary hover:to-primary-hover text-white font-bold py-3 px-6 rounded-full shadow-lg shadow-orange-200 dark:shadow-none transform transition hover:-translate-y-0.5"
                >
                  Get Basic Plan
                </button>
              </div>
              <div className="mt-8">
                <h4
                  className="font-bold text-sm text-slate-900 dark:text-white mb-4"
                >
                  What You'll Get Here
                </h4>
                <ul className="space-y-3">
                  <li
                    className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                    </svg>
                    <span>Company Name Check</span>
                  </li>
                  <li
                    className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                    </svg>
                    <span>Basic Documention Support</span>
                  </li>
                  <li
                    className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                    </svg>
                    <span>4-6 Working Days Processing</span>
                  </li>
                  <li
                    className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                    </svg>
                    <span>Email Support</span>
                  </li>
                  <li
                    className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                    </svg>
                    <span>Government Fee Included</span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="relative overflow-hidden bg-orange-50 dark:bg-slate-800 rounded-2xl p-6 border-2 border-orange-200 dark:border-orange-500/50 shadow-xl z-10 lg:-mt-4 lg:pb-10 transform transition-transform hover:scale-[1.02]"
            >
              <div className="ribbon-wrapper">
                <div className="ribbon bg-blue-700 shadow-md">Premium Package</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <img src={icon6} alt="" />
                </div>
                <h3
                  className="text-xl font-bold text-slate-900 dark:text-white uppercase tracking-tight"
                >
                  Premium Plan
                </h3>
                <div className="flex items-center gap-2 mt-2 text-sm">
                  <span className="text-slate-400 line-through">₹ 1999</span>
                  <span
                    className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold px-2 py-0.5 rounded"
                    >40% OFF SAVE BIG</span
                  >
                </div>
                <div className="mt-2 text-center">
                  <span
                    className="text-4xl font-bold text-slate-900 dark:text-white"
                    >₹ 999</span
                  >
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    per registration
                  </div>
                </div>
                <div
                  className="mt-4 border border-orange-200 dark:border-orange-800 bg-white dark:bg-slate-900 rounded-full px-3 py-1 text-xs text-slate-600 dark:text-slate-300 flex items-center gap-1"
                >
                  Offer ends in:
                  <span className="font-mono font-bold text-red-500">24:27:56</span>
                </div>
                <div
                  className="mt-3 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900/50 px-2 py-1 rounded border border-dashed border-orange-300 dark:border-orange-700 cursor-pointer hover:bg-orange-50 dark:hover:bg-slate-800 transition-colors"
                >
                  Use Code:
                  <span className="font-bold text-slate-700 dark:text-slate-300"
                    >GrabNavratriOffer</span
                  >
                  <svg
                    className="w-3 h-3 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>
                <div
                  className="mt-4 p-3 bg-white dark:bg-slate-900/50 border border-orange-100 dark:border-orange-900/20 rounded-lg flex items-start gap-3 w-full shadow-sm"
                >
                  <div
                    className="w-8 h-8 rounded bg-yellow-200 dark:bg-yellow-800 flex-shrink-0"
                  >
                    <img src={icon8} alt="" />
                  </div>
                  <div
                    className="text-[10px] text-slate-600 dark:text-slate-400 leading-tight"
                  >
                    <span
                      className="font-bold text-slate-800 dark:text-slate-200 block mb-0.5"
                      >tincidunt urna</span
                    >
                    Ut in Nam at urna Lorem venenatis ipsum tincidunt non,
                    tincidunt sit Donec
                  </div>
                </div>
                <button
                  className="w-full mt-6 bg-gradient-to-r from-[#FF7F50] to-primary hover:to-primary-hover text-white font-bold py-3 px-6 rounded-full shadow-lg shadow-orange-300/50 dark:shadow-none transform transition hover:-translate-y-0.5"
                >
                  Get Premium Plan
                </button>
              </div>
              <div className="mt-8">
                <h4
                  className="font-bold text-sm text-slate-900 dark:text-white mb-4"
                >
                  What You'll Get Here
                </h4>
                <ul className="space-y-5">
                  <li
                    className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                    </svg>
                    <span>Everything in Basic</span>
                  </li>
                  <li
                    className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                    </svg>
                    <span>Priority CA/CS Support</span>
                  </li>
                  <li
                    className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                    </svg>
                    <span>Basic Documention Support</span>
                  </li>
                  <li
                    className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                    </svg>
                    <span className="font-semibold text-slate-800 dark:text-white"
                      >4-6 Working Days</span
                    >Processing
                  </li>
                  <li
                    className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                    </svg>
                    <div className="flex-1 flex justify-between items-center">
                      <span>Email Support/Phone Support</span>
                      <span
                        className="ml-2 text-[10px] font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-1 py-0.5 rounded border border-green-200 dark:border-green-800"
                        >FREE</span
                      >
                    </div>
                  </li>
                  <li
                    className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                    </svg>
                    <span>Government Fee Included</span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="group relative bg-white dark:bg-card-dark rounded-2xl p-6 border-2 border-blue-100 dark:border-slate-700 shadow-soft hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                <div
                  className="w-16 h-16 mb-4 flex items-center justify-center text-blue-500"
                >
                  <img src={icon7} alt="" />
                </div>
                <h3
                  className="text-xl font-bold text-slate-900 dark:text-white uppercase tracking-tight"
                >
                  Elite Plan
                </h3>
                <div className="flex items-center gap-2 mt-2 text-sm">
                  <span className="text-slate-400 line-through">₹ 7000</span>
                  <span
                    className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold px-2 py-0.5 rounded"
                    >40% OFF SAVE BIG</span
                  >
                </div>
                <div className="mt-2 text-center">
                  <span
                    className="text-4xl font-bold text-slate-900 dark:text-white"
                    >₹ 4999</span
                  >
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    per registration
                  </div>
                </div>
                <div className="mt-1 mb-2">
                  <span
                    className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold px-2 py-0.5 rounded-full"
                    >+ FREE SERVICE WORTH 3000/-</span
                  >
                </div>
                <div
                  className="mt-2 border border-slate-200 dark:border-slate-600 rounded-full px-3 py-1 text-xs text-slate-600 dark:text-slate-300 flex items-center gap-1"
                >
                  Offer ends in:
                  <span className="font-mono font-bold text-red-500">24:27:56</span>
                </div>
                <div
                  className="mt-3 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 px-2 py-1 rounded border border-dashed border-slate-300 dark:border-slate-600 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  Use Code:
                  <span className="font-bold text-slate-700 dark:text-slate-300"
                    >GrabNavratriOffer</span
                  >
                  <svg
                    className="w-3 h-3 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>
                <div
                  className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-100 dark:border-yellow-900/20 rounded-lg flex items-start gap-3 w-full"
                >
                  <div
                    className="w-8 h-8 rounded bg-yellow-200 dark:bg-yellow-800 flex-shrink-0"
                  >
                    <img src={icon8} alt="" />
                  </div>
                  <div
                    className="text-[10px] text-slate-600 dark:text-slate-400 leading-tight"
                  >
                    <span
                      className="font-bold text-slate-800 dark:text-slate-200 block mb-0.5"
                      >tincidunt urna</span
                    >
                    Ut in Nam at urna Lorem venenatis ipsum tincidunt non,
                    tincidunt sit Donec
                  </div>
                </div>
                <button
                  className="w-full mt-6 bg-gradient-to-r from-[#FF7F50] to-primary hover:to-primary-hover text-white font-bold py-3 px-6 rounded-full shadow-lg shadow-orange-200 dark:shadow-none transform transition hover:-translate-y-0.5"
                >
                  Get Basic Plan
                </button>
              </div>
              <div className="mt-4">
                <h4
                  className="font-bold text-sm text-slate-900 dark:text-white mb-4"
                >
                  What You'll Get Here
                </h4>
                <ul className="space-y-1">
                  <li
                    className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                    </svg>
                    <span>Everything in Premium</span>
                  </li>
                  <li
                    className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                    </svg>
                    <span
                      >Express
                      <span className="font-bold text-slate-900 dark:text-white"
                        >24-48 Hours</span
                      >
                      Processing</span
                    >
                  </li>
                  <li
                    className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                    </svg>
                    <span>Priority CA/CS Support</span>
                  </li>
                  <li
                    className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                    </svg>
                    <span>24/7 WhatsApp + Phone Support</span>
                  </li>
                  <li
                    className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                    </svg>
                    <div className="flex-1 flex justify-between items-center">
                      <span>Email Support/Phone Support</span>
                      <span
                        className="ml-2 text-[10px] font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-1 py-0.5 rounded border border-green-200 dark:border-green-800"
                        >FREE</span
                      >
                    </div>
                  </li>
                  <li
                    className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                    </svg>
                    <span
                      >Government
                      <span className="font-bold text-slate-900 dark:text-white"
                        >Fee Included</span
                      ></span
                    >
                  </li>
                  <li
                    className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                    </svg>
                    <span>Everything in Premium</span>
                  </li>
                  <li
                    className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                    </svg>
                    <div className="flex-1 flex justify-between items-start">
                      <span>FREE Video Call Consultation (Worth ₹2,000)</span>
                      <span
                        className="ml-2 mt-0.5 text-[10px] font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-1 py-0.5 rounded border border-green-200 dark:border-green-800"
                        >FREE</span
                      >
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="mt-16 gradientcolor rounded-xl shadow-md p-4 flex flex-col md:flex-row justify-center items-center gap-16 border border-slate-100 dark:border-slate-700"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-2 text-blue-600 dark:text-blue-400">
                <svg
                  fill="none"
                  height="36"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">
                6,000+
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Happy Clients
              </div>
            </div>
            <div
              className="hidden md:block w-px h-12 bg-slate-200 dark:bg-slate-700"
            ></div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-2 text-yellow-500">
                <svg
                  className="text-yellow-400"
                  fill="currentColor"
                  height="36"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon
                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                  ></polygon>
                </svg>
              </div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">
                4.8/5
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Customer Reviews
              </div>
            </div>
            <div
              className="hidden md:block w-px h-12 bg-slate-200 dark:bg-slate-700"
            ></div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-2 text-blue-600 dark:text-blue-400">
                <svg
                  fill="none"
                  height="36"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">
                100%
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Compliance Guarantee
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <div
        className="font-display text-gray-800 dark:text-gray-200 antialiased min-h-screen py-10 px-4 transition-colors duration-300"
      >
        <div className="px-12 mx-auto">
          <div className="text-center mb-10">
            <h2
              className="text-primary font-bold tracking-wider text-sm uppercase mb-3"
            >
              Company Overview
            </h2>
            <h1
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              Key Details About Private Limited Registration In India
            </h1>
          </div>
          <div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-10 border border-gray-100 dark:border-gray-700"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
              <div className="lg:col-span-7">
                <h2
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
                >
                  Overview
                </h2>
                <div
                  className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 text-sm leading-relaxed space-y-4 text-justify"
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
              <div className="lg:col-span-5 flex items-start justify-center">
                <div className="relative w-full h-64 lg:h-80 overflow-hidden">
                  <img
                    alt="Legal scales of justice held by a professional in a suit"
                    className="w-full h-full object-cover"
                    src={img3}
                  />
                </div>
              </div>
            </div>
            <div className="mb-10">
              <h2
                className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-5"
              >
                What is a
                <span className="text-primary">Private Limited Company</span> (Pvt
                Ltd)?
              </h2>
              <div
                className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 text-sm leading-relaxed text-justify"
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
              className="bg-blue-50 dark:bg-slate-800/50 rounded-lg p-6 border border-blue-100 dark:border-slate-700"
            >
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                Companies Act, 2013
              </h3>
              <p className="text-primary text-sm font-medium mb-6">
                Under the Companies Act, 2013, a Private Limited Company must
                comply with the following legal conditions:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  className="bg-white dark:bg-slate-700 rounded-md p-4 flex items-start gap-3 shadow-sm border border-gray-100 dark:border-slate-600"
                >
                  <span
                    className="pt-[2px] bg-[#E3F1FF] shadow-lg text-center rounded-full w-6 h-6 text-blue-400 text-sm mt-0.5"
                    >a</span
                  >
                  <p
                    className="text-xs text-gray-600 dark:text-gray-200 leading-tight"
                  >
                    Minimum of 2 and maximum of 200 members (shareholders),
                    excluding employees and ex-employees
                  </p>
                </div>
                <div
                  className="bg-white dark:bg-slate-700 rounded-md p-4 flex items-start gap-3 shadow-sm border border-gray-100 dark:border-slate-600"
                >
                  <span
                    className="pt-[2px] bg-[#E3F1FF] shadow-lg text-center rounded-full w-6 h-6 text-blue-400 text-sm mt-0.5"
                    >b</span
                  >
                  <p
                    className="text-xs text-gray-600 dark:text-gray-200 leading-tight"
                  >
                    Minimum of 2 and maximum of 200 members (shareholders),
                    excluding employees and ex-employees
                  </p>
                </div>
                <div
                  className="bg-white dark:bg-slate-700 rounded-md p-4 flex items-start gap-3 shadow-sm border border-gray-100 dark:border-slate-600"
                >
                  <span
                    className="pt-[2px] bg-[#E3F1FF] shadow-lg text-center rounded-full w-6 h-6 text-blue-400 text-sm mt-0.5"
                    >c</span
                  >
                  <p
                    className="text-xs text-gray-600 dark:text-gray-200 leading-tight"
                  >
                    Minimum of 2 and maximum of 200 members (shareholders),
                    excluding employees and ex-employees
                  </p>
                </div>
                <div
                  className="bg-white dark:bg-slate-700 rounded-md p-4 flex items-start gap-3 shadow-sm border border-gray-100 dark:border-slate-600"
                >
                  <span
                    className="pt-[2px] bg-[#E3F1FF] shadow-lg text-center rounded-full w-6 h-6 text-blue-400 text-sm mt-0.5"
                    >d</span
                  >
                  <p
                    className="text-xs text-gray-600 dark:text-gray-200 leading-tight"
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
        className="bg-[#FBFCFF] my-8 text-slate-600 dark:text-slate-300 transition-colors duration-300 font-sans antialiased min-h-screen flex flex-col justify-center"
      >
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="text-center mb-12 space-y-4">
            <h2
              className="text-primary font-bold tracking-wider text-sm sm:text-base uppercase mb-2"
            >
              Features of GST Service
            </h2>
            <h1
              className="text-3xl sm:text-4xl md:text-4xl font-bold text-black dark:text-white leading-tight"
            >
              Faucibus Adipiscing Viverra Placerat Ex
            </h1>
            <p
              className="max-w-3xl mx-auto text-slate-500 dark:text-slate-400 text-base sm:text-lg leading-relaxed"
            >
              Experience hassle-free GST registration with our comprehensive
              service designed to make your business compliant quickly and
              efficiently, backed by expert support every step of the way.
            </p>
          </div>
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
          >
            <div className="space-y-4">
              <div
                className="group flex items-center p-3 bg-card-light dark:bg-card-dark rounded-lg border border-orange-100 dark:border-slate-700 hover:border-orange-200 dark:hover:border-primary/30 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex-shrink-0 mr-4">
                  <div
                    className="dark:bg-slate-800 flex items-center justify-center text-green-500"
                  >
                    <span className="material-icons text-xl">verified_user</span>
                  </div>
                </div>
                <div>
                  <h3
                    className="font-bold text-slate-900 dark:text-white text-base mb-1"
                  >
                    100% Legal Compliance
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Complete adherence to GST laws and government regulations
                  </p>
                </div>
              </div>
              <div
                className="group flex items-center p-3 bg-card-light dark:bg-card-dark rounded-lg border border-orange-100 dark:border-slate-700 hover:border-orange-200 dark:hover:border-primary/30 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex-shrink-0 mr-4">
                  <div
                    className="dark:bg-slate-800 flex items-center justify-center text-green-500"
                  >
                    <span className="material-icons text-xl">verified_user</span>
                  </div>
                </div>
                <div>
                  <h3
                    className="font-bold text-slate-900 dark:text-white text-base mb-1"
                  >
                    100% Legal Compliance
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Complete adherence to GST laws and government regulations
                  </p>
                </div>
              </div>
              <div
                className="group flex items-center p-3 bg-card-light dark:bg-card-dark rounded-lg border border-orange-100 dark:border-slate-700 hover:border-orange-200 dark:hover:border-primary/30 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex-shrink-0 mr-4">
                  <div
                    className="dark:bg-slate-800 flex items-center justify-center text-green-500"
                  >
                    <span className="material-icons text-xl">verified_user</span>
                  </div>
                </div>
                <div>
                  <h3
                    className="font-bold text-slate-900 dark:text-white text-base mb-1"
                  >
                    100% Legal Compliance
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Complete adherence to GST laws and government regulations
                  </p>
                </div>
              </div>
              <div
                className="group flex items-center p-3 bg-card-light dark:bg-card-dark rounded-lg border border-orange-100 dark:border-slate-700 hover:border-orange-200 dark:hover:border-primary/30 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex-shrink-0 mr-4">
                  <div
                    className="dark:bg-slate-800 flex items-center justify-center text-green-500"
                  >
                    <span className="material-icons text-xl">verified_user</span>
                  </div>
                </div>
                <div>
                  <h3
                    className="font-bold text-slate-900 dark:text-white text-base mb-1"
                  >
                    100% Legal Compliance
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Complete adherence to GST laws and government regulations
                  </p>
                </div>
              </div>
              <div
                className="group flex items-center p-3 bg-card-light dark:bg-card-dark rounded-lg border border-orange-100 dark:border-slate-700 hover:border-orange-200 dark:hover:border-primary/30 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex-shrink-0 mr-4">
                  <div
                    className="dark:bg-slate-800 flex items-center justify-center text-green-500"
                  >
                    <span className="material-icons text-xl">verified_user</span>
                  </div>
                </div>
                <div>
                  <h3
                    className="font-bold text-slate-900 dark:text-white text-base mb-1"
                  >
                    100% Legal Compliance
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Complete adherence to GST laws and government regulations
                  </p>
                </div>
              </div>
              <div
                className="group flex items-center p-3 bg-card-light dark:bg-card-dark rounded-lg border border-orange-100 dark:border-slate-700 hover:border-orange-200 dark:hover:border-primary/30 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex-shrink-0 mr-4">
                  <div
                    className="dark:bg-slate-800 flex items-center justify-center text-green-500"
                  >
                    <span className="material-icons text-xl">verified_user</span>
                  </div>
                </div>
                <div>
                  <h3
                    className="font-bold text-slate-900 dark:text-white text-base mb-1"
                  >
                    100% Legal Compliance
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Complete adherence to GST laws and government regulations
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative flex justify-center items-center h-full min-h-[400px]"
            >
              <div
                className="absolute w-64 h-64 bg-orange-100 dark:bg-orange-900/20 rounded-full blur-3xl -z-10 top-1/4 right-1/4 animate-pulse"
              ></div>
              <div
                className="absolute w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl -z-10 bottom-1/4 left-1/4"
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
              className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white"
            >
              Join 50,000+ businesses who trust eBizFiling
            </h3>
            <button
              className="bg-primary hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-glow transform hover:-translate-y-0.5 transition-all duration-200 text-lg flex items-center justify-center mx-auto space-x-2"
            >
              <span>Start Registration</span>
              <span className="material-icons text-white">arrow_forward</span>
            </button>
          </div>
        </section>
      </div>

      {/* Features of GST Service end */}
       {/* testimonial */}
      <img src={testimonialImg} alt="img" />
{/* testimonial end */}
 {/* What Happen Next? */}
      <div
        className="bg-[#FBFCFF] my-8 text-gray-800 dark:text-gray-200 transition-colors duration-300"
      >
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10"
          >
            <div
              className="absolute top-1/4 left-10 w-96 h-96 bg-orange-100 dark:bg-orange-900/20 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-normal"
            ></div>
            <div
              className="absolute bottom-1/4 right-10 w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-normal"
            ></div>
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 relative">
              <div className="inline-block relative mb-3">
                <h3
                  className="text-primary font-bold tracking-widest text-sm uppercase"
                >
                  What Happen Next?
                </h3>
                <div
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-primary/30"
                ></div>
              </div>
              <h1
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
              >
                Post Service <span className="text-primary">Compliances</span>
              </h1>
              <p
                className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg leading-relaxed"
              >
                After your GST registration is complete, we ensure seamless
                compliance and ongoing support to keep your business running
                smoothly.
              </p>
            </div>
            <div
              className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20"
            >
              <div className="w-full lg:w-5/12 relative flex justify-center">
                <div className="relative w-full max-w-md">
                  <div
                    className="absolute inset-0 bg-gradient-to-tr from-orange-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 rounded-full transform scale-110 blur-2xl -z-10"
                  ></div>
                  <img
                    alt="Illustration of a thoughtful person looking at direction signs"
                    className="w-full h-auto object-contain drop-shadow-lg mix-blend-multiply dark:mix-blend-normal dark:opacity-90 rounded-2xl"
                    src={img6}
                  />
                </div>
              </div>
              <div className="w-full lg:w-7/12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div
                    className="p-4 rounded-xl bg-[#F6FAFF] dark:bg-surface-dark hover:border-t-4 border-l border-r border-b border-t-primary border-l-gray-300 border-r-gray-300 border-b-gray-300 dark:border-gray-700 hover:shadow transform md:-translate-y-1 relative z-10"
                  >
                    <div className="mb-4 text-indigo-600 dark:text-indigo-400">
                      <img src={icon9} alt="icon" />
                    </div>
                    <h3
                      className="font-bold text-lg mb-2 text-gray-900 dark:text-white"
                    >
                      Deadline Reminders
                    </h3>
                    <p
                      className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed"
                    >
                      Never miss important due dates with our automated reminder
                      system for returns and payments.
                    </p>
                  </div>
                  <div
                    className="p-4 rounded-xl bg-[#F6FAFF] dark:bg-surface-dark hover:border-t-4 border-l border-r border-b border-t-primary border-l-gray-300 border-r-gray-300 border-b-gray-300 dark:border-gray-700 hover:shadow transform md:-translate-y-1 relative z-10"
                  >
                    <div className="mb-4 text-indigo-600 dark:text-indigo-400">
                      <img src={icon9} alt="icon" />
                    </div>
                    <h3
                      className="font-bold text-lg mb-2 text-gray-900 dark:text-white"
                    >
                      Deadline Reminders
                    </h3>
                    <p
                      className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed"
                    >
                      Never miss important due dates with our automated reminder
                      system for returns and payments.
                    </p>
                  </div>
                  <div
                    className="p-4 rounded-xl bg-[#F6FAFF] dark:bg-surface-dark hover:border-t-4 border-l border-r border-b border-t-primary border-l-gray-300 border-r-gray-300 border-b-gray-300 dark:border-gray-700 hover:shadow transform md:-translate-y-1 relative z-10"
                  >
                    <div className="mb-4 text-indigo-600 dark:text-indigo-400">
                      <img src={icon9} alt="icon" />
                    </div>
                    <h3
                      className="font-bold text-lg mb-2 text-gray-900 dark:text-white"
                    >
                      Deadline Reminders
                    </h3>
                    <p
                      className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed"
                    >
                      Never miss important due dates with our automated reminder
                      system for returns and payments.
                    </p>
                  </div>
                  <div
                    className="p-4 rounded-xl bg-[#F6FAFF] dark:bg-surface-dark hover:border-t-4 border-l border-r border-b border-t-primary border-l-gray-300 border-r-gray-300 border-b-gray-300 dark:border-gray-700 hover:shadow transform md:-translate-y-1 relative z-10"
                  >
                    <div className="mb-4 text-indigo-600 dark:text-indigo-400">
                      <img src={icon9} alt="icon" />
                    </div>
                    <h3
                      className="font-bold text-lg mb-2 text-gray-900 dark:text-white"
                    >
                      Deadline Reminders
                    </h3>
                    <p
                      className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed"
                    >
                      Never miss important due dates with our automated reminder
                      system for returns and payments.
                    </p>
                  </div>
                  <div
                    className="p-4 rounded-xl bg-[#F6FAFF] dark:bg-surface-dark hover:border-t-4 border-l border-r border-b border-t-primary border-l-gray-300 border-r-gray-300 border-b-gray-300 dark:border-gray-700 hover:shadow transform md:-translate-y-1 relative z-10"
                  >
                    <div className="mb-4 text-indigo-600 dark:text-indigo-400">
                      <img src={icon9} alt="icon" />
                    </div>
                    <h3
                      className="font-bold text-lg mb-2 text-gray-900 dark:text-white"
                    >
                      Deadline Reminders
                    </h3>
                    <p
                      className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed"
                    >
                      Never miss important due dates with our automated reminder
                      system for returns and payments.
                    </p>
                  </div>
                  <div
                    className="p-4 rounded-xl bg-[#F6FAFF] dark:bg-surface-dark hover:border-t-4 border-l border-r border-b border-t-primary border-l-gray-300 border-r-gray-300 border-b-gray-300 dark:border-gray-700 hover:shadow transform md:-translate-y-1 relative z-10"
                  >
                    <div className="mb-4 text-indigo-600 dark:text-indigo-400">
                      <img src={icon9} alt="icon" />
                    </div>
                    <h3
                      className="font-bold text-lg mb-2 text-gray-900 dark:text-white"
                    >
                      Deadline Reminders
                    </h3>
                    <p
                      className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed"
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

{/* faqs */}
      <div className="faqsec">
        <img src={img15} alt="" />
      </div>
{/* faqs end */}
 {/* Committed to Security */}
      <div
        className="bg-[#FBFCFF] transition-colors duration-300 antialiased min-h-screen flex flex-col items-center justify-center py-20"
      >
        <div className="container mx-auto px-12">
          <div className="text-center mb-16 max-w-6xl mx-auto">
            <div className="relative inline-block mb-4">
              <span
                className="text-primary font-bold tracking-widest uppercase text-sm md:text-base px-4 py-1 relative z-10"
              >
                Committed to Security
              </span>
              <div
                className="absolute bottom-0 left-0 w-full h-[2px] bg-primary/20 dark:bg-primary/40 -mb-1 transform scale-x-75"
              ></div>
            </div>
            <h1
              className="text-3xl md:text-4xl lg:text-4xl font-bold text-heading-light dark:text-heading-dark mb-8 leading-tight"
            >
              Your Data Stays Safe With Enterprise-Grade Protection And
              Compliance
            </h1>
            <p
              className="text-text-light dark:text-text-dark text-base md:text-lg leading-relaxed max-w-7xl mx-auto"
            >
              ex Quisque efficitur. cursus lacus sed facilisis id odio vitae
              Nunc commodo felis, sollicitudin. Nunc urna. odio maximus Nam
              commodo non. sit viverra non ex nec vitae convallis. Ut in Nam at
              urna Lorem venenatis ipsum tincidunt non, tincidunt sit Donec
              amet, commodo tincidunt Quisque lacus, lacus urna ipsum Ut id
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div
              className="bg-[#F0F5FF] dark:bg-card-dark rounded-2xl p-8 border border-transparent dark:border-card-border-dark hover:shadow-card transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="mb-6">
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-lg"
                >
                  <img src={icon10} alt="" />
                </div>
              </div>
              <h3
                className="text-xl font-bold text-heading-light dark:text-heading-dark mb-4"
              >
                End-to-End Encryption
              </h3>
              <p
                className="text-sm text-text-light dark:text-text-dark leading-relaxed mb-8 flex-grow"
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
              className="bg-card-light dark:bg-card-dark rounded-2xl p-8 shadow-card border border-gray-100 dark:border-card-border-dark flex flex-col h-full transform md:-translate-y-2 relative z-10"
            >
              <div className="mb-6">
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-lg"
                >
                  <img src={icon10} alt="" />
                </div>
              </div>
              <h3
                className="text-xl font-bold text-heading-light dark:text-heading-dark mb-4"
              >
                End-to-End Encryption
              </h3>
              <p
                className="text-sm text-text-light dark:text-text-dark leading-relaxed mb-8 flex-grow"
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
              className="bg-[#F0F5FF] dark:bg-card-dark rounded-2xl p-8 border border-transparent dark:border-card-border-dark hover:shadow-card transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="mb-6">
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-lg"
                >
                  <img src={icon10} alt="" />
                </div>
              </div>
              <h3
                className="text-xl font-bold text-heading-light dark:text-heading-dark mb-4"
              >
                End-to-End Encryption
              </h3>
              <p
                className="text-sm text-text-light dark:text-text-dark leading-relaxed mb-8 flex-grow"
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
            <h2
              className="text-2xl md:text-3xl font-bold text-heading-light dark:text-heading-dark mb-8"
            >
              Questions About Our Data Security?
            </h2>
            <button
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-bold text-lg py-4 px-10 rounded-full shadow-lg shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1"
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
        <img src={trustedPartners} alt="" />
      </div>
{/* our partner */}
      {/* process gst registration */}
      <div>
        <div className="mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-primary font-bold tracking-widest uppercase text-sm mb-3"
            >
              Process for GST Registration
            </h2>
            <h1
              className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white"
            >
              Company Registration Made Simple
            </h1>
          </div>
          <div
            className="gst_timeline text-slate-800 dark:text-slate-200 p-4 md:p-8 lg:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <div
                className="bg-[#FBFCFF] dark:bg-slate-800 rounded-2xl p-6 md:p-10 border border-blue-100 dark:border-slate-700 shadow-sm flex flex-col h-full"
              >
                <div className="mb-8">
                  <h3
                    className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2"
                  >
                    GST Registration in 3 Simple Steps
                  </h3>
                  <p
                    className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed"
                  >
                    Our streamlined process makes company registration quick and
                    hassle-free
                  </p>
                </div>
                <div className="flex-grow space-y-4 mb-8">
                  <div
                    className="bg-white dark:bg-slate-700/50 border border-gray-100 dark:border-slate-600 rounded-xl p-4 shadow-sm flex items-start gap-4 transition-transform hover:-translate-y-1 duration-300"
                  >
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 dark:bg-slate-600 flex items-center justify-center shadow-inner"
                    >
                      <span className="font-bold text-slate-700 dark:text-slate-200"
                        >1</span
                      >
                    </div>
                    <div>
                      <h4
                        className="font-bold text-slate-900 dark:text-white text-base mb-1"
                      >
                        Answer Quick Questions
                      </h4>
                      <p
                        className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed"
                      >
                        Fill out our simple online form with your business
                        details. Our smart questionnaire guides you through all
                        required information in just 10 minutes.
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-white dark:bg-slate-700/50 border border-gray-100 dark:border-slate-600 rounded-xl p-4 shadow-sm flex items-start gap-4 transition-transform hover:-translate-y-1 duration-300"
                  >
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 dark:bg-slate-600 flex items-center justify-center shadow-inner"
                    >
                      <span className="font-bold text-slate-700 dark:text-slate-200"
                        >1</span
                      >
                    </div>
                    <div>
                      <h4
                        className="font-bold text-slate-900 dark:text-white text-base mb-1"
                      >
                        Answer Quick Questions
                      </h4>
                      <p
                        className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed"
                      >
                        Fill out our simple online form with your business
                        details. Our smart questionnaire guides you through all
                        required information in just 10 minutes.
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-white dark:bg-slate-700/50 border border-gray-100 dark:border-slate-600 rounded-xl p-4 shadow-sm flex items-start gap-4 transition-transform hover:-translate-y-1 duration-300"
                  >
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 dark:bg-slate-600 flex items-center justify-center shadow-inner"
                    >
                      <span className="font-bold text-slate-700 dark:text-slate-200"
                        >1</span
                      >
                    </div>
                    <div>
                      <h4
                        className="font-bold text-slate-900 dark:text-white text-base mb-1"
                      >
                        Answer Quick Questions
                      </h4>
                      <p
                        className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed"
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
                    className="px-8 py-2.5 rounded-full border border-primary text-slate-900 dark:text-white font-medium hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    Download
                  </button>
                </div>
              </div>
              <div
                className="bg-[#FBFCFF] dark:bg-slate-800 rounded-2xl p-6 md:p-10 border border-orange-100 dark:border-slate-700 shadow-sm flex flex-col h-full relative overflow-hidden"
              >
                <div
                  className="absolute top-0 right-0 w-64 h-64 bg-blue-50 dark:bg-slate-700/30 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2"
                ></div>
                <div className="mb-8 relative z-10">
                  <h3
                    className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2"
                  >
                    Timeline to Register a Company
                  </h3>
                  <p
                    className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed"
                  >
                    Track your company registration journey from start to finish
                  </p>
                </div>
                <div className="relative flex-grow mb-8 z-10">
                  <div
                    className="absolute left-[19px] top-4 bottom-12 w-0.5 bg-gray-200 dark:bg-slate-600"
                  ></div>
                  <div className="space-y-8">
                    <div className="relative flex items-start group">
                      <div
                        className="absolute left-0 top-0 bg-white dark:bg-slate-800 p-1 rounded-full z-10"
                      >
                        <div
                          className="w-8 h-8 rounded-full border-2 border-green-500 dark:border-green-400 flex items-center justify-center"
                        >
                          <span
                            className="material-icons-round text-green-500 dark:text-green-400 text-lg"
                            >check</span
                          >
                        </div>
                      </div>
                      <div className="ml-14 w-full">
                        <div
                          className="bg-white dark:bg-slate-700/50 border border-gray-100 dark:border-slate-600 rounded-xl p-4 shadow-sm group-hover:shadow-md transition-shadow"
                        >
                          <span
                            className="inline-block px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-semibold rounded-full mb-2"
                            >Day 1-2</span
                          >
                          <h4
                            className="font-bold text-slate-900 dark:text-white text-base mb-1"
                          >
                            Application Processing
                          </h4>
                          <p
                            className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed"
                          >
                            Document preparation and name availability check
                            with government authorities.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="relative flex items-start group">
                      <div
                        className="absolute left-0 top-0 bg-white dark:bg-slate-800 p-1 rounded-full z-10"
                      >
                        <div
                          className="w-8 h-8 rounded-full border-2 border-orange-400 dark:border-orange-400 flex items-center justify-center"
                        >
                          <span
                            className="material-icons-outlined text-orange-500 dark:text-orange-400 text-lg"
                            >schedule</span
                          >
                        </div>
                      </div>
                      <div className="ml-14 w-full">
                        <div
                          className="bg-white dark:bg-slate-700/50 border border-gray-100 dark:border-slate-600 rounded-xl p-4 shadow-sm group-hover:shadow-md transition-shadow"
                        >
                          <span
                            className="inline-block px-3 py-1 bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-semibold rounded-full mb-2"
                            >Day 3-6</span
                          >
                          <h4
                            className="font-bold text-slate-900 dark:text-white text-base mb-1"
                          >
                            Government Submission
                          </h4>
                          <p
                            className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed"
                          >
                            Filing incorporation documents and regulatory
                            approvals with relevant authorities.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="relative flex items-start group">
                      <div
                        className="absolute left-0 top-0 bg-white dark:bg-slate-800 p-1 rounded-full z-10"
                      >
                        <div
                          className="w-8 h-8 rounded-full bg-gray-200 dark:bg-slate-600 flex items-center justify-center"
                        >
                          <span
                            className="material-icons-outlined text-gray-500 dark:text-gray-300 text-lg"
                            >calendar_today</span
                          >
                        </div>
                      </div>
                      <div className="ml-14 w-full">
                        <div
                          className="bg-white dark:bg-slate-700/50 border border-gray-100 dark:border-slate-600 rounded-xl p-4 shadow-sm group-hover:shadow-md transition-shadow"
                        >
                          <span
                            className="inline-block px-3 py-1 bg-gray-100 dark:bg-slate-600 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded-full mb-2"
                            >Day 7-9</span
                          >
                          <h4
                            className="font-bold text-slate-900 dark:text-white text-base mb-1"
                          >
                            Verification &amp; Review
                          </h4>
                          <p
                            className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed"
                          >
                            Government review process and verification of
                            submitted documents and details.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="relative flex items-start group">
                      <div
                        className="absolute left-0 top-0 bg-white dark:bg-slate-800 p-1 rounded-full z-10"
                      >
                        <div
                          className="w-8 h-8 rounded-full bg-gray-200 dark:bg-slate-600 flex items-center justify-center"
                        >
                          <span
                            className="material-icons-outlined text-gray-500 dark:text-gray-300 text-lg"
                            >description</span
                          >
                        </div>
                      </div>
                      <div className="ml-14 w-full">
                        <div
                          className="bg-white dark:bg-slate-700/50 border border-gray-100 dark:border-slate-600 rounded-xl p-4 shadow-sm group-hover:shadow-md transition-shadow"
                        >
                          <span
                            className="inline-block px-3 py-1 bg-gray-100 dark:bg-slate-600 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded-full mb-2"
                            >Day 10-12</span
                          >
                          <h4
                            className="font-bold text-slate-900 dark:text-white text-base mb-1"
                          >
                            Certificate Issuance
                          </h4>
                          <p
                            className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed"
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
                    className="px-8 py-2.5 rounded-full border border-primary text-slate-900 dark:text-white font-medium hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3
                className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-6"
              >
                Ready to Start Your Company Registration?
              </h3>
              <button
                className="bg-primary hover:bg-orange-600 text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 text-lg"
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
        <section className="max-w-4xl w-full mx-auto py-12">
          <div className="text-center mb-10">
            <h2
              className="text-primary font-bold tracking-widest uppercase text-sm mb-3"
            >
              How It Works?
            </h2>
            <h1
              className="text-3xl md:text-4xl font-bold text-text-main-light dark:text-text-main-dark"
            >
              Faucibus Adipiscing Viverra Placerat Ex
            </h1>
          </div>
          <div className="space-y-4">
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className="border border-border-light dark:border-border-dark rounded-xl overflow-hidden shadow-sm"
              >
                {/* Header */}
                <button
                  onClick={() => handleAccordionToggle(index)}
                  className="accordion-header w-full bg-card-header-light dark:bg-card-header-dark p-4 md:p-5 flex justify-between items-center group"
                >
                  <span
                    className="font-bold text-lg text-text-main-light dark:text-text-main-dark"
                  >
                    Step {index + 1}
                  </span>
                  <span
                    className={`material-icons text-icon-color dark:text-red-400 font-bold transition-transform duration-300 ${
                      accordionStates[index] ? 'rotate-45' : ''
                    }`}
                  >
                    add
                  </span>
                </button>

                {/* Body */}
                <div
                  className={`accordion-body gradientcolor overflow-hidden transition-all duration-300 bg-card-body-light dark:bg-slate-900/50 ${
                    accordionStates[index] ? 'max-h-[500px]' : 'max-h-0'
                  }`}
                >
                  <div
                    className="p-6 border-t border-border-light dark:border-border-dark"
                  >
                    <ul
                      className="list-disc pl-5 space-y-3 text-text-muted-light dark:text-text-muted-dark leading-relaxed"
                    >
                      <li>ex Quisque efficitur. cursus lacus sed facilisis.</li>
                      <li>Nam commodo non sit viverra non ex nec vitae.</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-end w-full">
            <button
              className="bg-primary hover:bg-orange-600 dark:hover:bg-orange-500 text-white font-semibold py-3 px-8 rounded-full shadow-md transition-colors duration-200"
            >
              Download the Steps
            </button>
          </div>
        </section>
      </div>
{/*  How It Works? end */}
  {/* Compare Your Services */}
      <div className="bg-[#FBFCFF] dark:bg-background-dark duration-300">
        <div className="mx-auto px-12 py-16">
          <div className="text-center mb-12">
            <h3
              className="text-primary font-bold tracking-widest uppercase mb-4 relative inline-block"
            >
              Compare Your Services
              <span
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary/30 w-1/2 mx-auto"
              ></span>
            </h3>
            <h1
              className="text-4xl md:text-4xl font-bold text-text-light dark:text-text-dark mt-2"
            >
              Company Registration Made Simple
            </h1>
          </div>
          <div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-soft overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[1000px]">
                <thead>
                  <tr
                    className="bg-surface-light dark:bg-surface-dark bg-[#F6FAFF]"
                  >
                    <th
                      className="p-4 text-xl font-bold text-text-light dark:text-text-dark w-1/4 sticky left-0 z-10 bg-[#F6FAFF] dark:bg-surface-dark border-b border-gray-200 dark:border-gray-700"
                    >
                      Features
                    </th>
                    <th
                      className="p-4 text-center border-b border-gray-200 dark:border-gray-700 w-[15%]"
                    >
                      <div
                        className="font-bold text-text-light dark:text-text-dark text-sm md:text-base"
                      >
                        Limited Liability Partnership
                      </div>
                      <div
                        className="text-xs text-subtext-light dark:text-subtext-dark mt-1 font-normal"
                      >
                        Professional Services
                      </div>
                    </th>
                    <th
                      className="p-4 text-center border-b border-gray-200 dark:border-gray-700 w-[15%]"
                    >
                      <div
                        className="font-bold text-text-light dark:text-text-dark text-sm md:text-base"
                      >
                        One Person Company
                      </div>
                      <div
                        className="text-xs text-subtext-light dark:text-subtext-dark mt-1 font-normal"
                      >
                        Solo Entrepreneurs
                      </div>
                    </th>
                    <th
                      className="p-4 text-center border-b border-gray-200 dark:border-gray-700 w-[15%]"
                    >
                      <div
                        className="font-bold text-text-light dark:text-text-dark text-sm md:text-base"
                      >
                        One Person Company
                      </div>
                      <div
                        className="text-xs text-subtext-light dark:text-subtext-dark mt-1 font-normal"
                      >
                        Solo Entrepreneurs
                      </div>
                    </th>
                    <th
                      className="p-4 text-center border-b border-gray-200 dark:border-gray-700 w-[15%]"
                    >
                      <div
                        className="font-bold text-text-light dark:text-text-dark text-sm md:text-base"
                      >
                        One Person Company
                      </div>
                      <div
                        className="text-xs text-subtext-light dark:text-subtext-dark mt-1 font-normal"
                      >
                        Solo Entrepreneurs
                      </div>
                    </th>
                    <th
                      className="p-4 text-center border-b border-gray-200 dark:border-gray-700 w-[15%]"
                    >
                      <div
                        className="font-bold text-text-light dark:text-text-dark text-sm md:text-base"
                      >
                        One Person Company
                      </div>
                      <div
                        className="text-xs text-subtext-light dark:text-subtext-dark mt-1 font-normal"
                      >
                        Solo Entrepreneurs
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                  <tr
                    className="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
                  >
                    <td
                      className="p-4 sticky left-0 bg-white dark:bg-gray-800 border-r border-gray-100 dark:border-gray-700 z-10"
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-primary mt-1">
                          <span className="material-icons text-2xl"
                            >description</span
                          >
                        </div>
                        <div>
                          <div
                            className="font-semibold text-text-light dark:text-text-dark flex items-center gap-1"
                          >
                            Government Registration
                            <span
                              className="material-icons text-subtext-light dark:text-subtext-dark text-sm cursor-help"
                              >expand_more</span
                            >
                          </div>
                          <div
                            className="text-xs text-subtext-light dark:text-subtext-dark mt-0.5"
                          >
                            Mandatory registration requirement
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <span
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-500 dark:bg-green-900/30 dark:text-green-400"
                      >
                        <span className="material-icons text-lg">check</span>
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-500 dark:bg-green-900/30 dark:text-green-400"
                      >
                        <span className="material-icons text-lg">check</span>
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-500 dark:bg-green-900/30 dark:text-green-400"
                      >
                        <span className="material-icons text-lg">check</span>
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-500 dark:bg-green-900/30 dark:text-green-400"
                      >
                        <span className="material-icons text-lg">check</span>
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-500 dark:bg-green-900/30 dark:text-green-400"
                      >
                        <span className="material-icons text-lg">check</span>
                      </span>
                    </td>
                  </tr>
                  <tr
                    className="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
                  >
                    <td
                      className="p-4 sticky left-0 bg-white dark:bg-gray-800 border-r border-gray-100 dark:border-gray-700 z-10"
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-primary mt-1">
                          <span className="material-icons text-2xl"
                            >description</span
                          >
                        </div>
                        <div>
                          <div
                            className="font-semibold text-text-light dark:text-text-dark flex items-center gap-1"
                          >
                            Number of Partners
                            <span
                              className="material-icons text-subtext-light dark:text-subtext-dark text-sm cursor-help"
                              >expand_more</span
                            >
                          </div>
                          <div
                            className="text-xs text-subtext-light dark:text-subtext-dark mt-0.5"
                          >
                            Minimum requirement
                          </div>
                        </div>
                      </div>
                    </td>
                    <td
                      className="p-4 text-center text-text-light dark:text-text-dark text-lg font-medium"
                    >
                      1
                    </td>
                    <td
                      className="p-4 text-center text-text-light dark:text-text-dark text-lg font-medium"
                    >
                      1
                    </td>
                    <td
                      className="p-4 text-center text-text-light dark:text-text-dark text-lg font-medium"
                    >
                      1
                    </td>
                    <td
                      className="p-4 text-center text-text-light dark:text-text-dark text-lg font-medium"
                    >
                      1
                    </td>
                    <td
                      className="p-4 text-center text-text-light dark:text-text-dark text-lg font-medium"
                    >
                      1
                    </td>
                  </tr>
                  <tr
                    className="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
                  >
                    <td
                      className="p-4 sticky left-0 bg-white dark:bg-gray-800 border-r border-gray-100 dark:border-gray-700 z-10"
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-primary mt-1">
                          <span className="material-icons text-2xl"
                            >description</span
                          >
                        </div>
                        <div>
                          <div
                            className="font-semibold text-text-light dark:text-text-dark flex items-center gap-1"
                          >
                            Liability Protection
                            <span
                              className="material-icons text-subtext-light dark:text-subtext-dark text-sm cursor-help"
                              >expand_more</span
                            >
                          </div>
                          <div
                            className="text-xs text-subtext-light dark:text-subtext-dark mt-0.5"
                          >
                            Asset protection level
                          </div>
                        </div>
                      </div>
                    </td>
                    <td
                      className="p-4 text-center text-subtext-light dark:text-subtext-dark text-lg font-medium"
                    >
                      Limited
                    </td>
                    <td
                      className="p-4 text-center text-subtext-light dark:text-subtext-dark text-lg font-medium"
                    >
                      Limited
                    </td>
                    <td
                      className="p-4 text-center text-subtext-light dark:text-subtext-dark text-lg font-medium"
                    >
                      Limited
                    </td>
                    <td
                      className="p-4 text-center text-subtext-light dark:text-subtext-dark text-lg font-medium"
                    >
                      Limited
                    </td>
                    <td
                      className="p-4 text-center text-subtext-light dark:text-subtext-dark text-lg font-medium"
                    >
                      Limited
                    </td>
                  </tr>
                  <tr
                    className="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
                  >
                    <td
                      className="p-4 sticky left-0 bg-white dark:bg-gray-800 border-r border-gray-100 dark:border-gray-700 z-10"
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-primary mt-1">
                          <span className="material-icons text-2xl"
                            >description</span
                          >
                        </div>
                        <div>
                          <div
                            className="font-semibold text-text-light dark:text-text-dark flex items-center gap-1"
                          >
                            Cost of Registration
                            <span
                              className="material-icons text-subtext-light dark:text-subtext-dark text-sm cursor-help"
                              >expand_more</span
                            >
                          </div>
                          <div
                            className="text-xs text-subtext-light dark:text-subtext-dark mt-0.5"
                          >
                            Initial setup expense
                          </div>
                        </div>
                      </div>
                    </td>
                    <td
                      className="p-4 text-center text-subtext-light dark:text-subtext-dark text-lg font-medium"
                    >
                      High
                    </td>
                    <td
                      className="p-4 text-center text-subtext-light dark:text-subtext-dark text-lg font-medium"
                    >
                      High
                    </td>
                    <td
                      className="p-4 text-center text-subtext-light dark:text-subtext-dark text-lg font-medium"
                    >
                      Low
                    </td>
                    <td
                      className="p-4 text-center text-subtext-light dark:text-subtext-dark text-lg font-medium"
                    >
                      Low
                    </td>
                    <td
                      className="p-4 text-center text-subtext-light dark:text-subtext-dark text-lg font-medium"
                    >
                      Low
                    </td>
                  </tr>
                  <tr
                    className="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
                  >
                    <td
                      className="p-4 sticky left-0 bg-white dark:bg-gray-800 border-r border-gray-100 dark:border-gray-700 z-10"
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-primary mt-1">
                          <span className="material-icons text-2xl"
                            >description</span
                          >
                        </div>
                        <div>
                          <div
                            className="font-semibold text-text-light dark:text-text-dark flex items-center gap-1"
                          >
                            Capital Requirement
                            <span
                              className="material-icons text-subtext-light dark:text-subtext-dark text-sm cursor-help"
                              >expand_more</span
                            >
                          </div>
                          <div
                            className="text-xs text-subtext-light dark:text-subtext-dark mt-0.5"
                          >
                            Minimum authorized capital
                          </div>
                        </div>
                      </div>
                    </td>
                    <td
                      className="p-4 text-center text-subtext-light dark:text-subtext-dark text-lg font-medium"
                    >
                      1 Lakh
                    </td>
                    <td
                      className="p-4 text-center text-subtext-light dark:text-subtext-dark text-lg font-medium"
                    >
                      1 Lakh
                    </td>
                    <td
                      className="p-4 text-center text-subtext-light dark:text-subtext-dark text-lg font-medium"
                    >
                      1 Lakh
                    </td>
                    <td
                      className="p-4 text-center text-subtext-light dark:text-subtext-dark text-lg font-medium"
                    >
                      1 Lakh
                    </td>
                    <td
                      className="p-4 text-center text-subtext-light dark:text-subtext-dark text-lg font-medium"
                    >
                      1 Lakh
                    </td>
                  </tr>
                  <tr
                    className="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
                  >
                    <td
                      className="p-4 sticky left-0 bg-white dark:bg-gray-800 border-r border-gray-100 dark:border-gray-700 z-10"
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-primary mt-1">
                          <span className="material-icons text-2xl"
                            >description</span
                          >
                        </div>
                        <div>
                          <div
                            className="font-semibold text-text-light dark:text-text-dark flex items-center gap-1"
                          >
                            Annual Compliance
                            <span
                              className="material-icons text-subtext-light dark:text-subtext-dark text-sm cursor-help"
                              >expand_more</span
                            >
                          </div>
                          <div
                            className="text-xs text-subtext-light dark:text-subtext-dark mt-0.5"
                          >
                            Yearly filing requirements
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <span
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-500 dark:bg-green-900/30 dark:text-green-400"
                      >
                        <span className="material-icons text-lg">check</span>
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-500 dark:bg-green-900/30 dark:text-green-400"
                      >
                        <span className="material-icons text-lg">check</span>
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-500 dark:bg-red-900/30 dark:text-red-400"
                      >
                        <span className="material-icons text-lg">close</span>
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-500 dark:bg-red-900/30 dark:text-red-400"
                      >
                        <span className="material-icons text-lg">close</span>
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-500 dark:bg-red-900/30 dark:text-red-400"
                      >
                        <span className="material-icons text-lg">close</span>
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-surface-light/50 dark:bg-surface-dark/30">
                    <td
                      className="p-6 sticky left-0 bg-white dark:bg-surface-dark/95 border-r border-gray-100 dark:border-gray-700 z-10 backdrop-blur-sm"
                    >
                      <a
                        className="text-primary font-bold underline hover:text-primary-hover decoration-2 underline-offset-4 text-sm whitespace-nowrap"
                        href="#"
                      >
                        Download Comparison
                      </a>
                    </td>
                    <td className="p-4 text-center">
                      <button
                        className="bg-primary hover:bg-primary-hover text-white font-semibold py-2.5 px-6 rounded-full shadow-lg shadow-orange-500/30 transition-all transform hover:-translate-y-0.5"
                      >
                        Get Started
                      </button>
                    </td>
                    <td className="p-4 text-center">
                      <button
                        className="bg-white dark:bg-transparent border border-primary text-text-light dark:text-text-dark font-semibold py-2.5 px-6 rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-colors"
                      >
                        Read More
                      </button>
                    </td>
                    <td className="p-4 text-center">
                      <button
                        className="bg-white dark:bg-transparent border border-primary text-text-light dark:text-text-dark font-semibold py-2.5 px-6 rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-colors"
                      >
                        Read More
                      </button>
                    </td>
                    <td className="p-4 text-center">
                      <button
                        className="bg-white dark:bg-transparent border border-primary text-text-light dark:text-text-dark font-semibold py-2.5 px-6 rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-colors"
                      >
                        Read More
                      </button>
                    </td>
                    <td className="p-4 text-center">
                      <button
                        className="bg-white dark:bg-transparent border border-primary text-text-light dark:text-text-dark font-semibold py-2.5 px-6 rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-colors"
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
        className="bg-[#EBF2FF] my-10 dark:bg-background-dark text-gray-800 dark:text-gray-200 font-body antialiased flex items-center justify-center p-4"
      >
        <section
          className="w-full max-w-[1400px] mx-auto py-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-12">
            <div className="inline-block relative mb-4">
              <h2
                className="text-primary font-bold tracking-widest uppercase text-sm md:text-base mb-1"
              >
                Quick Access Guides
              </h2>
              <div
                className="h-0.5 w-full bg-primary/30 mx-auto mt-1 rounded-full"
              ></div>
            </div>
            <h1
              className="text-3xl md:text-4xl lg:text-4xl font-bold text-text-main dark:text-text-main-dark mt-2 tracking-tight"
            >
              Faucibus Adipiscing Viverra Placerat Ex
            </h1>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-16"
          >
            <div
              className="bg-white dark:bg-card-dark rounded-xl shadow-card hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] ring-1 ring-black/5 dark:ring-white/10 p-6 flex flex-col h-full relative lg:-mt-4 lg:mb-4 lg:py-6 z-10 border border-transparent dark:border-gray-700"
            >
              <h3
                className="text-xl font-bold text-text-main dark:text-text-main-dark mb-4 leading-tight"
              >
                odio maximus Nam commodo non
              </h3>
              <p
                className="text-text-muted dark:text-text-muted-dark text-sm leading-relaxed mb-8 flex-grow"
              >
                Nunc urna. odio maximus Nam commodo non. sit viverra non ex nec
                vitae convallis. Ut in Nam at urna Lorem venenatis ipsum at urna
                Lorem venenatis ipsum.
              </p>
              <div className="mt-auto">
                <button
                  className="w-full bg-primary hover:bg-primary-hover text-white font-medium py-2.5 px-4 rounded-full transition-colors duration-200 text-sm shadow-md"
                >
                  Know More
                </button>
              </div>
            </div>
            <div
              className="bg-white dark:bg-card-dark rounded-xl shadow-card hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] ring-1 ring-black/5 dark:ring-white/10 p-6 flex flex-col h-full relative lg:-mt-4 lg:mb-4 lg:py-6 z-10 border border-transparent dark:border-gray-700"
            >
              <h3
                className="text-xl font-bold text-text-main dark:text-text-main-dark mb-4 leading-tight"
              >
                odio maximus Nam commodo non
              </h3>
              <p
                className="text-text-muted dark:text-text-muted-dark text-sm leading-relaxed mb-8 flex-grow"
              >
                Nunc urna. odio maximus Nam commodo non. sit viverra non ex nec
                vitae convallis. Ut in Nam at urna Lorem venenatis ipsum at urna
                Lorem venenatis ipsum.
              </p>
              <div className="mt-auto">
                <button
                  className="w-full bg-primary hover:bg-primary-hover text-white font-medium py-2.5 px-4 rounded-full transition-colors duration-200 text-sm shadow-md flex items-center justify-center gap-2 group"
                >
                  Know More
                  <span
                    className="material-icons text-sm transform group-hover:translate-x-1 transition-transform"
                    >arrow_forward</span
                  >
                </button>
              </div>
            </div>
            <div
              className="bg-white dark:bg-card-dark rounded-xl shadow-card hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] ring-1 ring-black/5 dark:ring-white/10 p-6 flex flex-col h-full relative lg:-mt-4 lg:mb-4 lg:py-6 z-10 border border-transparent dark:border-gray-700"
            >
              <h3
                className="text-xl font-bold text-text-main dark:text-text-main-dark mb-4 leading-tight"
              >
                odio maximus Nam commodo non
              </h3>
              <p
                className="text-text-muted dark:text-text-muted-dark text-sm leading-relaxed mb-8 flex-grow"
              >
                Nunc urna. odio maximus Nam commodo non. sit viverra non ex nec
                vitae convallis. Ut in Nam at urna Lorem venenatis ipsum at urna
                Lorem venenatis ipsum.
              </p>
              <div className="mt-auto">
                <button
                  className="w-full bg-primary hover:bg-primary-hover text-white font-medium py-2.5 px-4 rounded-full transition-colors duration-200 text-sm shadow-md"
                >
                  Know More
                </button>
              </div>
            </div>
            <div
              className="bg-white dark:bg-card-dark rounded-xl shadow-card hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] ring-1 ring-black/5 dark:ring-white/10 p-6 flex flex-col h-full relative lg:-mt-4 lg:mb-4 lg:py-6 z-10 border border-transparent dark:border-gray-700"
            >
              <h3
                className="text-xl font-bold text-text-main dark:text-text-main-dark mb-4 leading-tight"
              >
                odio maximus Nam commodo non
              </h3>
              <p
                className="text-text-muted dark:text-text-muted-dark text-sm leading-relaxed mb-8 flex-grow"
              >
                Nunc urna. odio maximus Nam commodo non. sit viverra non ex nec
                vitae convallis. Ut in Nam at urna Lorem venenatis ipsum at urna
                Lorem venenatis ipsum.
              </p>
              <div className="mt-auto">
                <button
                  className="w-full bg-primary hover:bg-primary-hover text-white font-medium py-2.5 px-4 rounded-full transition-colors duration-200 text-sm shadow-md"
                >
                  Know More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
{/* Quick Access Guides end */}
 {/* Why Us */}
      <div
        className="gst_timeline dark:bg-background-dark flex flex-col justify-center"
      >
        <section
          className="relative py-16 px-4 sm:px-6 lg:px-8 bg-soft-gradient dark:bg-soft-gradient-dark overflow-hidden"
        >
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-block mb-4">
              <span
                className="text-primary font-bold tracking-wider text-sm uppercase border-b-2 border-primary/30 pb-1"
              >
                Why Us
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-16 tracking-tight"
            >
              Your Trusted Partner In Business Growth
            </h2>
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-center"
            >
              <div
                className="bg-white dark:bg-card-dark rounded-xl p-6 hover:shadow-xl border border-orange-200 hover:border-t-4 hover:border-t-primary hover:border-r hover:border-b hover:border-l hover:border-orange-200 dark:border-slate-600 relative transform lg:scale-110 z-10 transition-transform duration-300"
              >
                <div
                  className="flex flex-col items-center justify-center text-center"
                >
                  <span
                    className="counter text-4xl font-bold text-text-main dark:text-white mb-2"
                    data-target="10000"
                    >10,000</span
                  >
                  <div
                    className="flex items-center gap-2 text-text-muted dark:text-gray-400 font-medium"
                  >
                    <img src={Icon11} width="24" alt="" />
                    <span>Clients Globally</span>
                  </div>
                </div>
              </div>
              <div
                className="bg-white dark:bg-card-dark rounded-xl p-6 hover:shadow-xl border border-orange-200 hover:border-t-4 hover:border-t-primary hover:border-r hover:border-b hover:border-l hover:border-orange-200 dark:border-slate-600 relative transform lg:scale-110 z-10 transition-transform duration-300"
              >
                <div
                  className="flex flex-col items-center justify-center text-center"
                >
                  <span
                    className="counter text-4xl font-bold text-text-main dark:text-white mb-3"
                    data-target="10000"
                    >10,000</span
                  >
                  <div
                    className="flex items-center gap-2 text-text-muted dark:text-gray-300 font-medium"
                  >
                    <img src={Icon11} width="24" alt="" />
                    <span>Clients Globally</span>
                  </div>
                </div>
              </div>
              <div
                className="bg-white dark:bg-card-dark rounded-xl p-6 hover:shadow-xl border border-orange-200 hover:border-t-4 hover:border-t-primary hover:border-r hover:border-b hover:border-l hover:border-orange-200 dark:border-slate-600 relative transform lg:scale-110 z-10 transition-transform duration-300"
              >
                <div
                  className="flex flex-col items-center justify-center text-center"
                >
                  <span
                    className="counter text-4xl font-bold text-text-main dark:text-white mb-2"
                    data-target="10000"
                    >10,000</span
                  >
                  <div
                    className="flex items-center gap-2 text-text-muted dark:text-gray-400 font-medium"
                  >
                    <img src={Icon11} width="24" alt="" />

                    <span>Clients Globally</span>
                  </div>
                </div>
              </div>
              <div
                className="bg-white dark:bg-card-dark rounded-xl p-6 hover:shadow-xl border border-orange-200 hover:border-t-4 hover:border-t-primary hover:border-r hover:border-b hover:border-l hover:border-orange-200 dark:border-slate-600 relative transform lg:scale-110 z-10 transition-transform duration-300"
              >
                <div
                  className="flex flex-col items-center justify-center text-center"
                >
                  <span
                    className="counter text-4xl font-bold text-text-main dark:text-white mb-2"
                    data-target="10000"
                    >10,000</span
                  >
                  <div
                    className="flex items-center gap-2 text-text-muted dark:text-gray-400 font-medium"
                  >
                    <img src={Icon11} width="24" alt="" />
                    <span>Clients Globally</span>
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
            <div className="inline-block relative">
              <h3
                className="text-primary font-bold tracking-[0.15em] uppercase text-sm md:text-base mb-2"
              >
                Why Choose Ebiz
              </h3>
              <div
                className="h-[2px] w-full bg-primary/30 absolute -bottom-1 left-0"
              ></div>
              <div
                className="h-[2px] w-1/2 bg-primary absolute -bottom-1 left-1/4"
              ></div>
            </div>
            <h1
              className="text-3xl md:text-4xl lg:text-4xl font-bold text-heading-dark dark:text-white tracking-tight leading-tight"
            >
              Faucibus Adipiscing Viverra Placerat Ex
            </h1>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
          >
            <div
              className="group gradientcolor dark:bg-card-bg-dark rounded-xl p-6 shadow hover:shadow-lg dark:shadow-none dark:hover:bg-slate-800 transition-all duration-300 border border-blue-50 dark:border-slate-700 h-full flex flex-col"
            >
              <div className="mb-2">
                <img src={icon12} alt="" />
              </div>
              <h3
                className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors"
              >
                Accurate Filing
              </h3>
              <p
                className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-grow"
              >
                Nunc urna. odio maximus Nam commodo non. sit viverra non ex nec
                vitae convallis. Ut in Nam at urna Lorem venenatis ipsum at urna
                Lorem venenatis ipsum
              </p>
            </div>
            <div
              className="group gradientcolor dark:bg-card-bg-dark rounded-xl p-6 shadow hover:shadow-lg dark:shadow-none dark:hover:bg-slate-800 transition-all duration-300 border border-blue-50 dark:border-slate-700 h-full flex flex-col"
            >
              <div className="mb-2">
                <img src={icon12} alt="" />
              </div>
              <h3
                className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors"
              >
                Accurate Filing
              </h3>
              <p
                className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-grow"
              >
                Nunc urna. odio maximus Nam commodo non. sit viverra non ex nec
                vitae convallis. Ut in Nam at urna Lorem venenatis ipsum at urna
                Lorem venenatis ipsum
              </p>
            </div>
            <div
              className="group gradientcolor dark:bg-card-bg-dark rounded-xl p-6 shadow hover:shadow-lg dark:shadow-none dark:hover:bg-slate-800 transition-all duration-300 border border-blue-50 dark:border-slate-700 h-full flex flex-col"
            >
              <div className="mb-2">
                <img src={icon12} alt="" />
              </div>
              <h3
                className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors"
              >
                Accurate Filing
              </h3>
              <p
                className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-grow"
              >
                Nunc urna. odio maximus Nam commodo non. sit viverra non ex nec
                vitae convallis. Ut in Nam at urna Lorem venenatis ipsum at urna
                Lorem venenatis ipsum
              </p>
            </div>
            <div
              className="group gradientcolor dark:bg-card-bg-dark rounded-xl p-6 shadow hover:shadow-lg dark:shadow-none dark:hover:bg-slate-800 transition-all duration-300 border border-blue-50 dark:border-slate-700 h-full flex flex-col"
            >
              <div className="mb-2">
                <img src={icon12} alt="" />
              </div>
              <h3
                className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors"
              >
                Accurate Filing
              </h3>
              <p
                className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-grow"
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
              className="text-lg md:text-xl text-slate-700 dark:text-slate-300 font-medium"
            >
              Looking for the Perfect Partner to Power Your Growth?
            </p>
            <button
              className="bg-primary hover:bg-primary-hover text-white font-bold text-lg py-3 px-8 rounded-full shadow-glow hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-3 group"
            >
              <span>Explore Partnerships</span>
              <span
                className="material-icons-round group-hover:translate-x-1 transition-transform"
                >arrow_forward</span
              >
            </button>
          </div>
        </section>
      </div>
{/*  Why Choose Ebiz end */}
  {/* Get Personalized Assistance */}
      <div className="bg-[#E7F3FF] dark:bg-gray-900">
        <section
          className="relative w-full bg-background-light dark:bg-background-dark transition-colors duration-300 overflow-hidden"
        >
          <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div
              className="grid grid-cols-2 lg:grid-cols-3 items-center justify-between gap-12 lg:gap-20"
            >
              <div
                className="flex-1 w-full md:max-w-3xl lg:col-span-2 text-center md:text-left z-10"
              >
                <h2
                  className="text-lg md:text-2xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-[1.15]"
                >
                  Get Personalized Assistance
                </h2>
                <p
                  className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed"
                >
                  Connect with our experts for quick, reliable support tailored
                  to your business goals.
                </p>
                <button
                  className="group inline-flex items-center justify-center bg-primary hover:bg-orange-600 text-white font-bold text-lg py-4 px-10 rounded-full shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-900"
                >
                  Get Assistance
                  <span
                    className="material-icons ml-2 group-hover:translate-x-1 transition-transform text-xl"
                    >arrow_forward</span
                  >
                </button>
              </div>
              <div
                className="flex-1 w-full flex justify-center md:justify-end relative z-10"
              >
                <div className="relative w-full max-w-md lg:max-w-lg">
                  <img
                    alt="Team of three business professionals standing together collaborating"
                    className="relative w-full h-auto object-cover transform rotate-1 hover:rotate-0 transition-transform duration-500"
                    src={img7}
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
        className="dark:bg-background-dark text-text-main dark:text-slate-200 transition-colors duration-300"
      >
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-4 inline-block relative">
              <span
                className="text-primary font-bold tracking-widest uppercase text-sm border-b-2 border-primary/20 pb-1 px-1"
              >
                Calculators
              </span>
            </div>
            <h1
              className="text-3xl md:text-4xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight"
            >
              Faucibus Adipiscing Viverra Placerat Ex
            </h1>
            <p
              className="max-w-5xl mx-auto text-text-muted dark:text-slate-400 text-lg leading-relaxed font-light"
            >
              Get instant access to professional-grade tools including Income
              Tax Calculator, Capital Gains Estimator, Section 80 Deduction
              Guide, and more. Simplify complex calculations with our
              user-friendly interface.
            </p>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            <div
              className="group bg-white dark:bg-card-dark border border-blue-100 dark:border-slate-700 rounded-xl p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-slate-600"
            >
              <div
                className="mb-2 rounded-lg transform group-hover:scale-105 transition-transform duration-300"
              >
                <img src={icon13} width="80" alt="" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-0">
                Tax Calculators
              </h3>
              <p className="text-slate-700 dark:text-slate-400">Instant Results</p>
            </div>
            <div
              className="group bg-white dark:bg-card-dark border border-blue-100 dark:border-slate-700 rounded-xl p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-slate-600"
            >
              <div
                className="mb-2 rounded-lg transform group-hover:scale-105 transition-transform duration-300"
              >
                <img src={icon13} width="80" alt="" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-0">
                Tax Calculators
              </h3>
              <p className="text-slate-700 dark:text-slate-400">Instant Results</p>
            </div>
            <div
              className="group bg-white dark:bg-card-dark border border-blue-100 dark:border-slate-700 rounded-xl p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-slate-600"
            >
              <div
                className="mb-2 rounded-lg transform group-hover:scale-105 transition-transform duration-300"
              >
                <img src={icon13} width="80" alt="" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-0">
                Tax Calculators
              </h3>
              <p className="text-slate-700 dark:text-slate-400">Instant Results</p>
            </div>
            <div
              className="group bg-white dark:bg-card-dark border border-blue-100 dark:border-slate-700 rounded-xl p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-slate-600"
            >
              <div
                className="mb-2 rounded-lg transform group-hover:scale-105 transition-transform duration-300"
              >
                <img src={icon13} width="80" alt="" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-0">
                Tax Calculators
              </h3>
              <p className="text-slate-700 dark:text-slate-400">Instant Results</p>
            </div>
          </div>
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button
              className="bg-primary hover:bg-orange-600 text-white font-bold py-3.5 px-10 rounded-full shadow-lg shadow-orange-100 dark:shadow-none transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Explore Tools
            </button>
            <button
              className="bg-transparent hover:bg-orange-50 dark:hover:bg-slate-800 border-2 border-primary text-slate-900 dark:text-white font-bold py-3.5 px-10 rounded-full transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Try a Calculator
            </button>
          </div>
          <div
            className="flex flex-wrap justify-center items-center gap-x-20 gap-y-6 text-slate-600 dark:text-slate-300 text-sm font-medium pt-10"
          >
            <div className="flex items-center gap-2.5">
              <svg
                className="h-6 w-6 text-slate-700 dark:text-slate-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>100% Secure</span>
            </div>
            <div className="flex items-center gap-2.5">
              <svg
                className="h-6 w-6 text-slate-700 dark:text-slate-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>Instant Results</span>
            </div>
            <div className="flex items-center gap-2.5">
              <svg
                className="h-6 w-6 text-slate-700 dark:text-slate-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>Always Free</span>
            </div>
            <div className="flex items-center gap-2.5">
              <svg
                className="h-6 w-6 text-slate-700 dark:text-slate-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>Professional Grade</span>
            </div>
          </div>
        </section>
      </div>
{/* Calculators end */}
 {/* Document Required */}
      <div
        className="gradientcolor22 dark:bg-background-dark text-gray-800 dark:text-gray-200 min-h-screen flex flex-col justify-center py-10 transition-colors duration-300"
      >
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h3
              className="text-primary font-bold uppercase tracking-widest text-sm mb-3"
            >
              Document Required
            </h3>
            <h1
              className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Faucibus Adipiscing Viverra Placerat Ex
            </h1>
            <p
              className="text-gray-500 dark:text-gray-400 text-base md:text-lg max-w-4xl mx-auto leading-relaxed"
            >
              ex Quisque efficitur. cursus lacus sed facilisis id odio vitae
              Nunc commodo felis, sollicitudin. Nunc urna. odio maximus Nam
              commodo non. sit viverra non ex nec vitae convallis.
            </p>
          </div>
          <div className="flex flex-col xl:flex-row gap-8">
            <div
              className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <div
                className="bg-[#FBFCFF] dark:bg-card-dark rounded-xl p-5 shadow dark:border-gray-700 relative group hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="absolute top-4 right-4 text-primary text-xl font-bold"
                >
                  *
                </div>
                <div className="w-10 h-10 mb-3 text-primary">
                  <img src={icon13Svg} alt="" />
                </div>
                <h3
                  className="text-lg font-bold text-gray-900 dark:text-white mb-2"
                >
                  PAN Card
                </h3>
                <p
                  className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-6"
                >
                  Valid PAN card for all directors and shareholders. Required
                  for identity verification and tax compliance during company
                  registration.
                </p>
                <button
                  className="w-full py-2 px-4 border border-primary text-black rounded-full text-sm font-semibold hover:bg-primary hover:text-white transition-colors duration-200"
                >
                  View Sample
                </button>
              </div>
              <div
                className="bg-[#FBFCFF] dark:bg-card-dark rounded-xl p-5 shadow dark:border-gray-700 relative group hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="absolute top-4 right-4 text-primary text-xl font-bold"
                >
                  *
                </div>
                <div className="w-10 h-10 mb-3 text-primary">
                  <img src={icon13Svg} alt="" />
                </div>
                <h3
                  className="text-lg font-bold text-gray-900 dark:text-white mb-2"
                >
                  PAN Card
                </h3>
                <p
                  className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-6"
                >
                  Valid PAN card for all directors and shareholders. Required
                  for identity verification and tax compliance during company
                  registration.
                </p>
                <div className="border border-gray-200 mb-3"></div>
                <button
                  className="w-full py-2 px-4 border border-primary text-black rounded-full text-sm font-semibold hover:bg-primary hover:text-white transition-colors duration-200"
                >
                  View Sample
                </button>
              </div>
              <div
                className="bg-[#FBFCFF] dark:bg-card-dark rounded-xl p-5 shadow dark:border-gray-700 relative group hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="absolute top-4 right-4 text-primary text-xl font-bold"
                >
                  *
                </div>
                <div className="w-10 h-10 mb-3 text-primary">
                  <img src={icon13Svg} alt="" />
                </div>
                <h3
                  className="text-lg font-bold text-gray-900 dark:text-white mb-2"
                >
                  PAN Card
                </h3>
                <p
                  className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-6"
                >
                  Valid PAN card for all directors and shareholders. Required
                  for identity verification and tax compliance during company
                  registration.
                </p>
                <div className="border border-gray-200 mb-3"></div>
                <button
                  className="w-full py-2 px-4 border border-primary text-black rounded-full text-sm font-semibold hover:bg-primary hover:text-white transition-colors duration-200"
                >
                  View Sample
                </button>
              </div>
              <div
                className="bg-[#FBFCFF] dark:bg-card-dark rounded-xl p-5 shadow dark:border-gray-700 relative group hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="absolute top-4 right-4 text-primary text-xl font-bold"
                >
                  *
                </div>
                <div className="w-10 h-10 mb-3 text-primary">
                  <img src={icon13Svg} alt="" />
                </div>
                <h3
                  className="text-lg font-bold text-gray-900 dark:text-white mb-2"
                >
                  PAN Card
                </h3>
                <p
                  className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-6"
                >
                  Valid PAN card for all directors and shareholders. Required
                  for identity verification and tax compliance during company
                  registration.
                </p>
                <div className="border border-gray-200 mb-3"></div>
                <button
                  className="w-full py-2 px-4 border border-primary text-black rounded-full text-sm font-semibold hover:bg-primary hover:text-white transition-colors duration-200"
                >
                  View Sample
                </button>
              </div>
              <div
                className="bg-[#FBFCFF] dark:bg-card-dark rounded-xl p-5 shadow dark:border-gray-700 relative group hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="absolute top-4 right-4 text-primary text-xl font-bold"
                >
                  *
                </div>
                <div className="w-10 h-10 mb-3 text-primary">
                  <img src={icon13Svg} alt="" />
                </div>
                <h3
                  className="text-lg font-bold text-gray-900 dark:text-white mb-2"
                >
                  PAN Card
                </h3>
                <p
                  className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-6"
                >
                  Valid PAN card for all directors and shareholders. Required
                  for identity verification and tax compliance during company
                  registration.
                </p>
                <div className="border border-gray-200 mb-3"></div>
                <button
                  className="w-full py-2 px-4 border border-primary text-black rounded-full text-sm font-semibold hover:bg-primary hover:text-white transition-colors duration-200"
                >
                  View Sample
                </button>
              </div>
              <div
                className="bg-[#FBFCFF] dark:bg-card-dark rounded-xl p-5 shadow dark:border-gray-700 relative group hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="absolute top-4 right-4 text-primary text-xl font-bold"
                >
                  *
                </div>
                <div className="w-10 h-10 mb-3 text-primary">
                  <img src={icon13Svg} alt="" />
                </div>
                <h3
                  className="text-lg font-bold text-gray-900 dark:text-white mb-2"
                >
                  PAN Card
                </h3>
                <p
                  className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-6"
                >
                  Valid PAN card for all directors and shareholders. Required
                  for identity verification and tax compliance during company
                  registration.
                </p>
                <div className="border border-gray-200 mb-3"></div>
                <button
                  className="w-full py-2 px-4 border border-primary text-black rounded-full text-sm font-semibold hover:bg-primary hover:text-white transition-colors duration-200"
                >
                  View Sample
                </button>
              </div>
            </div>
            <div className="w-full xl:w-80 flex-shrink-0">
              <div
                className="bg-blue-50 dark:bg-slate-800 rounded-xl overflow-hidden shadow-sidebar border border-blue-300 dark:border-gray-700 flex flex-col h-full max-h-[500px] xl:max-h-none xl:sticky xl:top-4"
              >
                <div
                  className="bg-blue-100 dark:bg-slate-700 py-2 px-4 text-center border-b border-blue-200 dark:border-slate-600"
                >
                  <h3 className="font-bold text-lg text-gray-800 dark:text-white">
                    List of document
                  </h3>
                </div>
                <div
                  className="flex-1 overflow-y-auto custom-scrollbar p-0 bg-white dark:bg-slate-800 relative"
                >
                  <div
                    className="absolute right-0 top-0 bottom-0 w-4 bg-blue-50 dark:bg-slate-900/50 border-l border-blue-100 dark:border-slate-700 pointer-events-none"
                  ></div>
                  <ul className="py-2 pl-4 pr-6 space-y-2">
                    <li className="flex items-center gap-3 py-1">
                      <span
                        className="material-icons text-green-500 text-sm border border-green-500 rounded-full px-1"
                        >check</span
                      >
                      <span className="text-gray-800 dark:text-gray-300"
                        >Pan Card</span
                      >
                    </li>
                    <li className="flex items-center gap-3 py-1">
                      <span
                        className="material-icons text-green-500 text-sm border border-green-500 rounded-full px-1"
                        >check</span
                      >
                      <span className="text-gray-800 dark:text-gray-300"
                        >Aadhar Card</span
                      >
                    </li>
                    <li className="flex items-center gap-3 py-1">
                      <span
                        className="material-icons text-green-500 text-sm border border-green-500 rounded-full px-1"
                        >check</span
                      >
                      <span className="text-gray-800 dark:text-gray-300"
                        >Electricity Bill</span
                      >
                    </li>
                    <li className="flex items-center gap-3 py-1">
                      <span
                        className="material-icons text-green-500 text-sm border border-green-500 rounded-full px-1"
                        >check</span
                      >
                      <span className="text-gray-800 dark:text-gray-300"
                        >Pan Card</span
                      >
                    </li>
                    <li className="flex items-center gap-3 py-1">
                      <span
                        className="material-icons text-green-500 text-sm border border-green-500 rounded-full px-1"
                        >check</span
                      >
                      <span className="text-gray-800 dark:text-gray-300"
                        >Aadhar Card</span
                      >
                    </li>
                    <li className="flex items-center gap-3 py-1">
                      <span
                        className="material-icons text-green-500 text-sm border border-green-500 rounded-full px-1"
                        >check</span
                      >
                      <span className="text-gray-800 dark:text-gray-300"
                        >Electricity Bill</span
                      >
                    </li>
                    <li className="flex items-center gap-3 py-1">
                      <span
                        className="material-icons text-green-500 text-sm border border-green-500 rounded-full px-1"
                        >check</span
                      >
                      <span className="text-gray-800 dark:text-gray-300"
                        >Pan Card</span
                      >
                    </li>
                    <li className="flex items-center gap-3 py-1">
                      <span
                        className="material-icons text-green-500 text-sm border border-green-500 rounded-full px-1"
                        >check</span
                      >
                      <span className="text-gray-800 dark:text-gray-300"
                        >Aadhar Card</span
                      >
                    </li>
                    <li className="flex items-center gap-3 py-1">
                      <span
                        className="material-icons text-green-500 text-sm border border-green-500 rounded-full px-1"
                        >check</span
                      >
                      <span className="text-gray-800 dark:text-gray-300"
                        >Electricity Bill</span
                      >
                    </li>
                    <li className="flex items-center gap-3 py-1">
                      <span
                        className="material-icons text-green-500 text-sm border border-green-500 rounded-full px-1"
                        >check</span
                      >
                      <span className="text-gray-800 dark:text-gray-300"
                        >Pan Card</span
                      >
                    </li>
                    <li className="flex items-center gap-3 py-1">
                      <span
                        className="material-icons text-green-500 text-sm border border-green-500 rounded-full px-1"
                        >check</span
                      >
                      <span className="text-gray-800 dark:text-gray-300"
                        >Aadhar Card</span
                      >
                    </li>
                  </ul>
                </div>
                <div
                  className="p-4 bg-white dark:bg-slate-800 border-t border-gray-100 dark:border-slate-700"
                >
                  <button
                    className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-4 rounded-lg shadow-md transition-colors duration-200 text-sm"
                  >
                    Download list of document
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 flex justify-center">
            <div
              className="bg-white dark:bg-slate-800 rounded-full shadow-lg border border-gray-100 dark:border-slate-700 py-3 px-6 flex items-center gap-4 text-xs sm:text-sm"
            >
              <div
                className="flex items-center gap-2 border-r border-gray-200 dark:border-slate-600 pr-4"
              >
                <span className="text-primary font-bold">*</span>
                <span className="text-gray-500 dark:text-gray-400 font-medium"
                  >Required documents</span
                >
              </div>
              <div className="text-gray-400 dark:text-gray-500">
                We'll help you prepare everything
              </div>
            </div>
          </div>
        </div>
        
      </div>
{/* Document Required end */}
 {/* PREMIUM PLAN SECTION */}
      <div
        className="gradientcolor22 my-10 dark:bg-background-dark text-slate-800 dark:text-slate-200 antialiased flex items-center justify-center p-4"
      >
        <section className="max-w-7xl mx-auto w-full py-6 lg:py-10">
          <div className="text-center mb-16 px-4">
            <div className="inline-block relative mb-4">
              <h3
                className="text-primary font-bold tracking-widest text-sm uppercase"
              >
                PREMIUM PLAN SECTION
              </h3>
              <div
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-orange-200 dark:bg-orange-900 w-full mx-auto"
              ></div>
            </div>
            <h1
              className="text-3xl md:text-4xl lg:text-4xl font-bold text-slate-900 dark:text-white mt-4 max-w-4xl mx-auto leading-tight"
            >
              Faucibus Adipiscing Viverra Placerat Ex
            </h1>
          </div>
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center px-4 md:px-8"
          >
            <div className="space-y-8 order-2 lg:order-1">
              <p
                className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed"
              >
                ex Quisque efficitur. cursus lacus sed facilisis id odio vitae
                Nunc commodo felis, sollicitudin. Nunc urna. odio maximus Nam
                commodo non.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-icons-outlined text-teal-500 mt-0.5"
                    >check_circle</span
                  >
                  <span className="text-slate-700 dark:text-slate-300 font-medium"
                    >Express incorporation in 7 business days</span
                  >
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-icons-outlined text-teal-500 mt-0.5"
                    >check_circle</span
                  >
                  <span className="text-slate-700 dark:text-slate-300 font-medium"
                    >Premium registered office address in prime location</span
                  >
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-icons-outlined text-teal-500 mt-0.5"
                    >check_circle</span
                  >
                  <span className="text-slate-700 dark:text-slate-300 font-medium"
                    >Complete documentation with leather-bound
                    certificates</span
                  >
                </li>
              </ul>
              <div className="flex flex-wrap gap-4 pt-2">
                <div
                  className="bg-white dark:bg-slate-800 shadow-sm rounded-full px-4 py-2 flex items-center gap-2 border border-slate-100 dark:border-slate-700"
                >
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span
                    className="text-sm font-bold text-slate-700 dark:text-slate-200"
                    >Trusted by 10,000+</span
                  >
                </div>
                <div
                  className="bg-white dark:bg-slate-800 shadow-sm rounded-full px-4 py-2 flex items-center gap-2 border border-slate-100 dark:border-slate-700"
                >
                  <div className="flex text-yellow-400 text-sm">
                    <span
                      className="material-icons-outlined"
                      style={{fontSize: '16px'}}
                      >star</span
                    >
                    <span
                      className="material-icons-outlined"
                      style={{fontSize: '16px'}}
                      >star</span
                    >
                    <span
                      className="material-icons-outlined"
                      style={{fontSize: '16px'}}
                      >star</span
                    >
                    <span
                      className="material-icons-outlined"
                      style={{fontSize: '16px'}}
                      >star</span
                    >
                    <span
                      className="material-icons-outlined"
                      style={{fontSize: '16px'}}
                      >star_half</span
                    >
                  </div>
                  <span
                    className="text-sm font-bold text-slate-700 dark:text-slate-200"
                    >4.9</span
                  >
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  className="bg-primary hover:bg-orange-600 transition-colors text-white rounded-full px-8 py-3 shadow-lg shadow-orange-200 dark:shadow-none flex items-center justify-center gap-1 group"
                >
                  <span className="font-bold text-lg">₹29,000 onwards</span>
                  <span className="text-xs opacity-80 font-normal mt-1"
                    >per project</span
                  >
                </button>
                <button
                  className="bg-transparent border border-slate-300 dark:border-slate-600 hover:border-primary dark:hover:border-primary text-slate-700 dark:text-white hover:text-primary dark:hover:text-primary transition-all rounded-full px-10 py-3 font-semibold bg-white dark:bg-slate-800"
                >
                  Know More
                </button>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
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
        className="bg-white dark:bg-background-dark flex items-center justify-center font-body transition-colors duration-300 p-4"
      >
        <section
          className="w-full max-w-6xl bg-[#FBFCFF] dark:bg-card-dark shadow-xl overflow-hidden flex flex-col lg:flex-row relative z-10"
        >
          <div
            className="w-full lg:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center"
          >
            <div className="mb-8">
              <h1
                className="font-display text-4xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight"
              >
                Upgrade to Pro
              </h1>
              <h2
                className="font-display text-xl md:text-2xl font-semibold text-gray-500 dark:text-gray-300"
              >
                Get more feature and support
              </h2>
            </div>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center space-x-3">
                <span className="material-icons-outlined text-green-500 text-2xl"
                  >check_circle_outline</span
                >
                <span className="text-gray-700 dark:text-gray-200 text-lg"
                  >Quick registration process</span
                >
              </li>
              <li className="flex items-center space-x-3">
                <span className="material-icons-outlined text-green-500 text-2xl"
                  >check_circle_outline</span
                >
                <span className="text-gray-700 dark:text-gray-200 text-lg"
                  >Quick registration process</span
                >
              </li>
              <li className="flex items-center space-x-3">
                <span className="material-icons-outlined text-green-500 text-2xl"
                  >check_circle_outline</span
                >
                <span className="text-gray-700 dark:text-gray-200 text-lg"
                  >Quick registration process</span
                >
              </li>
            </ul>
            <div
              className="gradientcolor dark:bg-slate-800/80 border border-blue-100 dark:border-slate-700 rounded-lg p-4 md:p-5 mb-10 max-w-md relative"
            >
              <p
                className="text-gray-600 dark:text-gray-400 font-medium mb-1 text-lg"
              >
                Special Offer
              </p>
              <div className="flex items-baseline gap-3 mb-1">
                <span
                  className="text-4xl font-bold text-gray-900 dark:text-white font-display"
                  >₹ 999/-</span
                >
                <span
                  className="text-xl text-gray-800 line-through font-medium font-display"
                  >₹2999/-</span
                >
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Save 50% on your first registration
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button
                className="bg-primary text-white px-10 py-3.5 rounded-full font-bold text-base shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:bg-opacity-90 transform transition-all hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                Get Started
              </button>
              <button
                className="bg-transparent border border-orange-200 dark:border-gray-600 text-gray-800 dark:text-gray-200 px-8 py-3.5 rounded-full font-bold text-base hover:bg-orange-50 dark:hover:bg-slate-700 transition-colors text-center whitespace-nowrap"
              >
                Talk to Experts
              </button>
            </div>
          </div>
          <div
            className="w-full lg:w-2/5 relative flex items-center justify-center bg-white dark:bg-card-dark lg:bg-transparent p-8 lg:p-0"
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
        className="dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased transition-colors duration-300"
      >
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-primary font-bold tracking-wider text-sm md:text-base uppercase inline-block border-b border-primary/30 pb-1 mb-3"
            >
              ADD ON SERVICES
            </h2>
            <h1
              className="text-3xl md:text-4xl lg:text-4xl font-bold text-slate-900 dark:text-white leading-tight"
            >
              Services That Will And More Value To Your Package
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <article
              className="flex flex-col p-6 sm:p-4 rounded-lg bg-[#F8FBFF] dark:bg-slate-800 border border-blue-100 dark:border-slate-700 transition-all hover:shadow-lg dark:hover:shadow-slate-900/50"
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
                    className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white"
                  >
                    Add on services
                  </h3>
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="text-xl font-bold text-slate-900 dark:text-white"
                      >₹12,999</span
                    >
                    <span
                      className="text-sm text-slate-400 dark:text-slate-500 line-through decoration-slate-400"
                      >₹15,999</span
                    >
                    <span
                      className="bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 text-xs font-bold px-2.5 py-1 rounded-full"
                      >Save 19%</span
                    >
                  </div>
                </div>
              </div>

              <p
                className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-grow"
              >
                tincidunt ex. malesuada adipiscing est. elit ac risus
                ullamcorper at dolor porta quis sit placerat. vitae odio tempor
                venenatis Cras Sed elit. malesuada risus ac urna. consectetur
                dui malesuada vehicula, malesuada dignissim, dui. maximus
                vehicula, at, elit ullamcorper nec cursus faucibus non nisl.
                Donec vitae elit id non, vitae ex enim.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                <button
                  className="w-full bg-primary hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-200 text-sm shadow-sm hover:shadow-md"
                >
                  Add Service
                </button>
                <button
                  className="w-full bg-white dark:bg-transparent border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-200 font-semibold py-3 px-6 rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200 text-sm"
                >
                  Learn More
                </button>
              </div>
            </article>
            <article
              className="flex flex-col p-6 sm:p-4 rounded-lg bg-[#F8FBFF] dark:bg-slate-800 border border-blue-100 dark:border-slate-700 transition-all hover:shadow-lg dark:hover:shadow-slate-900/50"
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
                    className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white"
                  >
                    Add on services
                  </h3>
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="text-xl font-bold text-slate-900 dark:text-white"
                      >₹12,999</span
                    >
                    <span
                      className="text-sm text-slate-400 dark:text-slate-500 line-through decoration-slate-400"
                      >₹15,999</span
                    >
                    <span
                      className="bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 text-xs font-bold px-2.5 py-1 rounded-full"
                      >Save 19%</span
                    >
                  </div>
                </div>
              </div>

              <p
                className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-grow"
              >
                tincidunt ex. malesuada adipiscing est. elit ac risus
                ullamcorper at dolor porta quis sit placerat. vitae odio tempor
                venenatis Cras Sed elit. malesuada risus ac urna. consectetur
                dui malesuada vehicula, malesuada dignissim, dui. maximus
                vehicula, at, elit ullamcorper nec cursus faucibus non nisl.
                Donec vitae elit id non, vitae ex enim.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                <button
                  className="w-full bg-primary hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-200 text-sm shadow-sm hover:shadow-md"
                >
                  Add Service
                </button>
                <button
                  className="w-full bg-white dark:bg-transparent border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-200 font-semibold py-3 px-6 rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200 text-sm"
                >
                  Learn More
                </button>
              </div>
            </article>
            <article
              className="flex flex-col p-6 sm:p-4 rounded-lg bg-[#F8FBFF] dark:bg-slate-800 border border-blue-100 dark:border-slate-700 transition-all hover:shadow-lg dark:hover:shadow-slate-900/50"
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
                    className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white"
                  >
                    Add on services
                  </h3>
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="text-xl font-bold text-slate-900 dark:text-white"
                      >₹12,999</span
                    >
                    <span
                      className="text-sm text-slate-400 dark:text-slate-500 line-through decoration-slate-400"
                      >₹15,999</span
                    >
                    <span
                      className="bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 text-xs font-bold px-2.5 py-1 rounded-full"
                      >Save 19%</span
                    >
                  </div>
                </div>
              </div>

              <p
                className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-grow"
              >
                tincidunt ex. malesuada adipiscing est. elit ac risus
                ullamcorper at dolor porta quis sit placerat. vitae odio tempor
                venenatis Cras Sed elit. malesuada risus ac urna. consectetur
                dui malesuada vehicula, malesuada dignissim, dui. maximus
                vehicula, at, elit ullamcorper nec cursus faucibus non nisl.
                Donec vitae elit id non, vitae ex enim.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                <button
                  className="w-full bg-primary hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-200 text-sm shadow-sm hover:shadow-md"
                >
                  Add Service
                </button>
                <button
                  className="w-full bg-white dark:bg-transparent border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-200 font-semibold py-3 px-6 rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200 text-sm"
                >
                  Learn More
                </button>
              </div>
            </article>
            <article
              className="flex flex-col p-6 sm:p-4 rounded-lg bg-[#F8FBFF] dark:bg-slate-800 border border-blue-100 dark:border-slate-700 transition-all hover:shadow-lg dark:hover:shadow-slate-900/50"
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
                    className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white"
                  >
                    Add on services
                  </h3>
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="text-xl font-bold text-slate-900 dark:text-white"
                      >₹12,999</span
                    >
                    <span
                      className="text-sm text-slate-400 dark:text-slate-500 line-through decoration-slate-400"
                      >₹15,999</span
                    >
                    <span
                      className="bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 text-xs font-bold px-2.5 py-1 rounded-full"
                      >Save 19%</span
                    >
                  </div>
                </div>
              </div>

              <p
                className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-grow"
              >
                tincidunt ex. malesuada adipiscing est. elit ac risus
                ullamcorper at dolor porta quis sit placerat. vitae odio tempor
                venenatis Cras Sed elit. malesuada risus ac urna. consectetur
                dui malesuada vehicula, malesuada dignissim, dui. maximus
                vehicula, at, elit ullamcorper nec cursus faucibus non nisl.
                Donec vitae elit id non, vitae ex enim.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                <button
                  className="w-full bg-primary hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-200 text-sm shadow-sm hover:shadow-md"
                >
                  Add Service
                </button>
                <button
                  className="w-full bg-white dark:bg-transparent border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-200 font-semibold py-3 px-6 rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200 text-sm"
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
        <img src={faqsImg} alt="" />
      </div>
{/* Aliquip AdipiscingElit */}
      <div
        className="flex flex-col justify-center text-gray-800 dark:text-gray-200 antialiased"
      >
        <div className="w-full max-w-7xl mx-auto px-6 py-12 lg:px-12 lg:py-20">
          <div className="text-center mb-16">
            <div
              className="inline-block flex flex-col items-center justify-center mb-3"
            >
              <h3
                className="text-primary font-bold uppercase tracking-wider text-sm md:text-base mb-2"
              >
                Lorem Ipsum Dolor
              </h3>
              <div className="w-full h-[2px] relative">
                <div
                  className="absolute left-1/2 -translate-x-1/2 w-28 h-full bg-primary"
                ></div>
              </div>
            </div>
            <h1
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-4"
            >
              Aliquip <span className="text-primary">Adipiscing</span> Elit
            </h1>
          </div>
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12"
          >
            <div
              className="relative w-full aspect-video bg-black rounded-lg overflow-hidden shadow-2xl group cursor-pointer border border-gray-200 dark:border-gray-700"
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
                className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight"
              >
                Lorem ipsum dolor sit amet, <br className="hidden lg:block" />
                aliquip adipiscing elit?
              </h2>
              <p
                className="text-gray-800 dark:text-gray-300 text-base md:text-lg leading-relaxed text-justify lg:text-left"
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
              className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed text-justify lg:text-left"
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
      <div className="faqsec">
        <img src={img13} alt="" />
      </div>
{/* contact */}
      <div
        className="bg-[#E7F3FF] shadow-2xl mb-10 dark:bg-background-dark font-body antialiased transition-colors duration-300"
      >
        <section
          className="w-full flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl w-full text-center space-y-6">
            <h1
              className="text-4xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
            >
              Contact Us
            </h1>
            <p
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-normal max-w-2xl mx-auto"
            >
              Experts handle the process so you can focus on growth.
            </p>
            <div className="pt-2 pb-6">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Have More Questions? Seek Help of an Expert
              </p>
            </div>
            <div
              className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mt-8"
            >
              <a
                className="group flex items-center gap-2.5 transition-transform hover:scale-105"
                href="tel:+00000000000"
              >
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-slate-800 text-primary"
                >
                  <img src={callIcon} alt="" />
                </div>
                <span
                  className="text-lg font-medium text-slate-700 dark:text-slate-200 group-hover:text-primary transition-colors"
                >
                  +00-000000000
                </span>
              </a>
              <a
                className="group flex items-center gap-2.5 transition-transform hover:scale-105"
                href="mailto:reach@delegrace.com"
              >
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-slate-800 text-primary"
                >
                  <img src={mailIcon} alt="" />
                </div>
                <span
                  className="text-lg font-medium text-slate-700 dark:text-slate-200 group-hover:text-primary transition-colors"
                >
                  reach@delegrace.com
                </span>
              </a>
              <a
                className="group flex items-center gap-2.5 transition-transform hover:scale-105"
                href="tel:+00000000000"
              >
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-slate-800 text-primary"
                >
                  <img src={callIcon} alt="" />
                </div>
                <span
                  className="text-lg font-medium text-slate-700 dark:text-slate-200 group-hover:text-primary transition-colors"
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

