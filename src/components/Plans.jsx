import React from 'react'
import icon5 from '../assets/images/icon5.png';
import icon6 from '../assets/images/icon6.png';
import icon7 from '../assets/images/icon7.png';
import icon8 from '../assets/images/icon8.png';
import Award1 from '../assets/award2.png';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";



const BasicPlan = () => {
    return (
        <div
            className="group relative bg-white rounded-2xl p-6 border-2 border-blue-100  transition-all duration-300 transform transition-transform hover:scale-[1.02]"
        >
            <div className="flex flex-col items-center">
                <div
                    className="w-16 h-16 mb-6 flex items-center justify-center text-blue-500"
                >
                    <img src={icon5} alt="" />
                </div>
                <h3
                    className="text-xl font-bold text-slate-900  uppercase tracking-tight"
                >
                    Basic Plan
                </h3>
                <div className="flex items-center gap-2 mt-4 text-sm">
                    <span className="text-slate-900 line-through">₹ 1999</span>
                    <span
                        className="bg-green-100 text-green-900 text-[10px] font-bold px-2 py-0 rounded-full"
                    >40% OFF SAVE BIG</span
                    >
                </div>
                <div className="mt-2 text-center">
                    <span
                        className="text-4xl font-bold text-slate-900 "
                    >₹ 999</span
                    >
                    <div className="text-xs text-gray-400">
                        per registration
                    </div>
                </div>
                <div
                    className="mt-4 border border-gray-950 text-black font-semibold rounded-full px-3 py-1 text-xs flex items-center gap-1"
                >
                    Offer ends in:
                    <span className="font-mono font-bold">24:27:56</span>
                </div>
                <div
                    className="mt-3 flex items-center gap-2 text-xs text-gray-400 transition-colors"
                >
                    Use Code:
                    <span className="font-bold text-green-700"
                    >GrabNavratriOffer</span
                    >
                    <svg
                        className="w-4 h-4 text-[#037B3B]"
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
                    className="mt-4 p-2 bg-[#F9E5CE]/9 border-l-0 border-r-0 border border-gray-200 rounded-lg flex items-start gap-3 w-full"
                >
                    <div
                        className="w-8 h-8 rounded bg-yellow-200 flex-shrink-0"
                    >
                        <img src={icon8} alt="" />
                    </div>
                    <div
                        className="text-[12px]  leading-tight"
                    >
                        <span
                            className="font-bold text-base text-slate-800  block mb-0.5"
                        >tincidunt urna</span
                        >
                        Ut in Nam at urna Lorem venenatis ipsum tincidunt non,
                        tincidunt sit Donec
                    </div>
                </div>
                <button
                    className="w-full !text-xl mt-6 bg-[#FF6F3B] text-white font-bold py-2 px-6 rounded-full shadow-lg shadow-orange-200 transform transition hover:-translate-y-0.5"
                >
                    Get Basic Plan
                </button>
            </div>
            <div className="mt-5">
                <h6
                    className="font-bold text-slate-700  mb-4"
                >
                    What You'll Get Here
                </h6>
                <ul className="space-y-3">
                    <li
                        className="flex items-center gap-2 text-base"
                    >
                        <svg width="18" height="18" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2151_6854)">
                                <path d="M18.1676 8.74907C18.5482 10.7102 18.2769 12.7491 17.3991 14.5256C16.5213 16.3022 15.09 17.7091 13.3438 18.5117C11.5977 19.3143 9.64227 19.4641 7.80367 18.9361C5.96506 18.4082 4.35441 17.2343 3.24031 15.6103C2.12622 13.9863 1.57602 12.0104 1.68147 10.012C1.78692 8.01367 2.54165 6.11365 3.81979 4.62885C5.09793 3.14405 6.82223 2.1642 8.70514 1.85272C10.588 1.54124 12.5157 1.91695 14.1667 2.9172" stroke="#00A63E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.5 9.625L10 12.25L18.3333 3.5" stroke="#00A63E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2151_6854">
                                    <rect width="20" height="21" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <span>Company Name Check</span>
                    </li>
                    <li
                        className="flex items-center gap-2 text-base"
                    >
                        <svg width="18" height="18" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2151_6854)">
                                <path d="M18.1676 8.74907C18.5482 10.7102 18.2769 12.7491 17.3991 14.5256C16.5213 16.3022 15.09 17.7091 13.3438 18.5117C11.5977 19.3143 9.64227 19.4641 7.80367 18.9361C5.96506 18.4082 4.35441 17.2343 3.24031 15.6103C2.12622 13.9863 1.57602 12.0104 1.68147 10.012C1.78692 8.01367 2.54165 6.11365 3.81979 4.62885C5.09793 3.14405 6.82223 2.1642 8.70514 1.85272C10.588 1.54124 12.5157 1.91695 14.1667 2.9172" stroke="#00A63E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.5 9.625L10 12.25L18.3333 3.5" stroke="#00A63E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2151_6854">
                                    <rect width="20" height="21" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <span>Basic Documention Support</span>
                    </li>
                    <li
                        className="flex items-center gap-2 text-base"
                    >
                        <svg width="18" height="18" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2151_6854)">
                                <path d="M18.1676 8.74907C18.5482 10.7102 18.2769 12.7491 17.3991 14.5256C16.5213 16.3022 15.09 17.7091 13.3438 18.5117C11.5977 19.3143 9.64227 19.4641 7.80367 18.9361C5.96506 18.4082 4.35441 17.2343 3.24031 15.6103C2.12622 13.9863 1.57602 12.0104 1.68147 10.012C1.78692 8.01367 2.54165 6.11365 3.81979 4.62885C5.09793 3.14405 6.82223 2.1642 8.70514 1.85272C10.588 1.54124 12.5157 1.91695 14.1667 2.9172" stroke="#00A63E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.5 9.625L10 12.25L18.3333 3.5" stroke="#00A63E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2151_6854">
                                    <rect width="20" height="21" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <span>4-6 Working Days Processing</span>
                    </li>
                    <li
                        className="flex items-center gap-2 text-base"
                    >
                        <svg width="18" height="18" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2151_6854)">
                                <path d="M18.1676 8.74907C18.5482 10.7102 18.2769 12.7491 17.3991 14.5256C16.5213 16.3022 15.09 17.7091 13.3438 18.5117C11.5977 19.3143 9.64227 19.4641 7.80367 18.9361C5.96506 18.4082 4.35441 17.2343 3.24031 15.6103C2.12622 13.9863 1.57602 12.0104 1.68147 10.012C1.78692 8.01367 2.54165 6.11365 3.81979 4.62885C5.09793 3.14405 6.82223 2.1642 8.70514 1.85272C10.588 1.54124 12.5157 1.91695 14.1667 2.9172" stroke="#00A63E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.5 9.625L10 12.25L18.3333 3.5" stroke="#00A63E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2151_6854">
                                    <rect width="20" height="21" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <span>Email Support</span>
                    </li>
                    <li
                        className="flex items-center gap-2 text-base"
                    >
                        <svg width="18" height="18" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2151_6854)">
                                <path d="M18.1676 8.74907C18.5482 10.7102 18.2769 12.7491 17.3991 14.5256C16.5213 16.3022 15.09 17.7091 13.3438 18.5117C11.5977 19.3143 9.64227 19.4641 7.80367 18.9361C5.96506 18.4082 4.35441 17.2343 3.24031 15.6103C2.12622 13.9863 1.57602 12.0104 1.68147 10.012C1.78692 8.01367 2.54165 6.11365 3.81979 4.62885C5.09793 3.14405 6.82223 2.1642 8.70514 1.85272C10.588 1.54124 12.5157 1.91695 14.1667 2.9172" stroke="#00A63E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.5 9.625L10 12.25L18.3333 3.5" stroke="#00A63E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2151_6854">
                                    <rect width="20" height="21" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <span>Government Fee Included</span>
                    </li>
                </ul>
            </div>
        </div>
    )
};

const PremiumPlan = () => {
    return (
        <div
            className="relative premium_package overflow-hidden rounded-2xl p-6 border-2 shadow-xl z-10 lg:-mt-4 lg:pb-10 transform transition-transform hover:scale-[1.02]"
        >
            <div className="ribbon-wrapper">
                <div className="ribbon bg-blue-700 shadow-md">Premium Package</div>
            </div>
            <div className="flex flex-col items-center">
                <div
                    className="w-16 h-16 mb-6 flex items-center justify-center text-blue-500"
                >
                    <img src={icon5} alt="" />
                </div>
                <h3
                    className="text-xl font-bold text-slate-900  uppercase tracking-tight"
                >
                    Basic Plan
                </h3>
                <div className="flex items-center gap-2 mt-4 text-sm">
                    <span className="text-slate-900 line-through">₹ 1999</span>
                    <span
                        className="bg-green-100 text-green-900 text-[10px] font-bold px-2 py-0 rounded-full"
                    >40% OFF SAVE BIG</span
                    >
                </div>
                <div className="mt-2 text-center">
                    <span
                        className="text-4xl font-bold text-slate-900 "
                    >₹ 999</span
                    >
                    <div className="text-xs text-gray-400">
                        per registration
                    </div>
                </div>
                <div
                    className="mt-4 border border-gray-950 text-black font-semibold rounded-full px-3 py-1 text-xs flex items-center gap-1"
                >
                    Offer ends in:
                    <span className="font-mono font-bold">24:27:56</span>
                </div>
                <div
                    className="mt-3 flex items-center gap-2 text-xs text-gray-400 transition-colors"
                >
                    Use Code:
                    <span className="font-bold text-green-700"
                    >GrabNavratriOffer</span
                    >
                    <svg
                        className="w-4 h-4 text-[#037B3B]"
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
                    className="mt-4 p-2 bg-[#F9E5CE]/9 border-l-0 border-r-0 border border-gray-200 rounded-lg flex items-start gap-3 w-full"
                >
                    <div
                        className="w-8 h-8 rounded bg-yellow-200 flex-shrink-0"
                    >
                        <img src={icon8} alt="" />
                    </div>
                    <div
                        className="text-[12px]  leading-tight"
                    >
                        <span
                            className="font-bold text-base text-slate-800  block mb-0.5"
                        >tincidunt urna</span
                        >
                        Ut in Nam at urna Lorem venenatis ipsum tincidunt non,
                        tincidunt sit Donec
                    </div>
                </div>
                <button
                    className="w-full !text-xl mt-6 bg-[#FF6F3B] text-white font-bold py-2 px-6 rounded-full shadow-lg shadow-orange-200 transform transition hover:-translate-y-0.5"
                >
                    Get Basic Plan
                </button>
            </div>
            <div className="mt-5">
                <h6
                    className="font-bold text-slate-700  mb-4"
                >
                    What You'll Get Here
                </h6>
                <ul className="space-y-5">
                    <li
                        className="flex items-center gap-2 text-base"
                    >
                        <svg width="18" height="18" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2151_6854)">
                                <path d="M18.1676 8.74907C18.5482 10.7102 18.2769 12.7491 17.3991 14.5256C16.5213 16.3022 15.09 17.7091 13.3438 18.5117C11.5977 19.3143 9.64227 19.4641 7.80367 18.9361C5.96506 18.4082 4.35441 17.2343 3.24031 15.6103C2.12622 13.9863 1.57602 12.0104 1.68147 10.012C1.78692 8.01367 2.54165 6.11365 3.81979 4.62885C5.09793 3.14405 6.82223 2.1642 8.70514 1.85272C10.588 1.54124 12.5157 1.91695 14.1667 2.9172" stroke="#00A63E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.5 9.625L10 12.25L18.3333 3.5" stroke="#00A63E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2151_6854">
                                    <rect width="20" height="21" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <span>Everything in Basic</span>
                    </li>
                    <li
                        className="flex items-center gap-2 text-base"
                    >
                        <svg width="18" height="18" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2151_6854)">
                                <path d="M18.1676 8.74907C18.5482 10.7102 18.2769 12.7491 17.3991 14.5256C16.5213 16.3022 15.09 17.7091 13.3438 18.5117C11.5977 19.3143 9.64227 19.4641 7.80367 18.9361C5.96506 18.4082 4.35441 17.2343 3.24031 15.6103C2.12622 13.9863 1.57602 12.0104 1.68147 10.012C1.78692 8.01367 2.54165 6.11365 3.81979 4.62885C5.09793 3.14405 6.82223 2.1642 8.70514 1.85272C10.588 1.54124 12.5157 1.91695 14.1667 2.9172" stroke="#00A63E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.5 9.625L10 12.25L18.3333 3.5" stroke="#00A63E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2151_6854">
                                    <rect width="20" height="21" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <span>Priority CA/CS Support</span>
                    </li>
                    <li
                        className="flex items-center gap-2 text-base"
                    >
                        <svg width="18" height="18" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2151_6854)">
                                <path d="M18.1676 8.74907C18.5482 10.7102 18.2769 12.7491 17.3991 14.5256C16.5213 16.3022 15.09 17.7091 13.3438 18.5117C11.5977 19.3143 9.64227 19.4641 7.80367 18.9361C5.96506 18.4082 4.35441 17.2343 3.24031 15.6103C2.12622 13.9863 1.57602 12.0104 1.68147 10.012C1.78692 8.01367 2.54165 6.11365 3.81979 4.62885C5.09793 3.14405 6.82223 2.1642 8.70514 1.85272C10.588 1.54124 12.5157 1.91695 14.1667 2.9172" stroke="#00A63E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.5 9.625L10 12.25L18.3333 3.5" stroke="#00A63E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2151_6854">
                                    <rect width="20" height="21" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <span>Basic Documention Support</span>
                    </li>
                    <li
                        className="flex items-center gap-2 text-base"
                    >
                        <svg width="18" height="18" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2151_6854)">
                                <path d="M18.1676 8.74907C18.5482 10.7102 18.2769 12.7491 17.3991 14.5256C16.5213 16.3022 15.09 17.7091 13.3438 18.5117C11.5977 19.3143 9.64227 19.4641 7.80367 18.9361C5.96506 18.4082 4.35441 17.2343 3.24031 15.6103C2.12622 13.9863 1.57602 12.0104 1.68147 10.012C1.78692 8.01367 2.54165 6.11365 3.81979 4.62885C5.09793 3.14405 6.82223 2.1642 8.70514 1.85272C10.588 1.54124 12.5157 1.91695 14.1667 2.9172" stroke="#00A63E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.5 9.625L10 12.25L18.3333 3.5" stroke="#00A63E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2151_6854">
                                    <rect width="20" height="21" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <span className="font-semibold text-slate-800 "
                        >4-6 Working Days</span
                        >Processing
                    </li>
                    <li
                        className="flex items-center gap-2 text-base"
                    >
                        <svg width="18" height="18" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2151_6854)">
                                <path d="M18.1676 8.74907C18.5482 10.7102 18.2769 12.7491 17.3991 14.5256C16.5213 16.3022 15.09 17.7091 13.3438 18.5117C11.5977 19.3143 9.64227 19.4641 7.80367 18.9361C5.96506 18.4082 4.35441 17.2343 3.24031 15.6103C2.12622 13.9863 1.57602 12.0104 1.68147 10.012C1.78692 8.01367 2.54165 6.11365 3.81979 4.62885C5.09793 3.14405 6.82223 2.1642 8.70514 1.85272C10.588 1.54124 12.5157 1.91695 14.1667 2.9172" stroke="#00A63E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.5 9.625L10 12.25L18.3333 3.5" stroke="#00A63E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2151_6854">
                                    <rect width="20" height="21" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <div className="flex-1 flex justify-between items-center">
                            <span>Email Support/Phone Support</span>
                            <span
                                className="ml-2 text-[10px] font-bold text-green-600 bg-green-50 px-1 py-0.5 rounded border border-green-200"
                            >FREE</span
                            >
                        </div>
                    </li>
                    <li
                        className="flex items-center gap-2 text-base"
                    >
                        <svg width="18" height="18" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2151_6854)">
                                <path d="M18.1676 8.74907C18.5482 10.7102 18.2769 12.7491 17.3991 14.5256C16.5213 16.3022 15.09 17.7091 13.3438 18.5117C11.5977 19.3143 9.64227 19.4641 7.80367 18.9361C5.96506 18.4082 4.35441 17.2343 3.24031 15.6103C2.12622 13.9863 1.57602 12.0104 1.68147 10.012C1.78692 8.01367 2.54165 6.11365 3.81979 4.62885C5.09793 3.14405 6.82223 2.1642 8.70514 1.85272C10.588 1.54124 12.5157 1.91695 14.1667 2.9172" stroke="#00A63E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.5 9.625L10 12.25L18.3333 3.5" stroke="#00A63E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2151_6854">
                                    <rect width="20" height="21" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <span>Government Fee Included</span>
                    </li>
                </ul>
            </div>
        </div>
    )
};

const ElitePlan = () => {
    return (
        <div
            className="group relative bg-white rounded-2xl p-6 border-2 border-blue-100  shadow-soft hover:shadow-lg transition-all duration-300 transform transition-transform hover:scale-[1.02]"
        >
            <div className="flex flex-col items-center">
                <div
                    className="w-16 h-16 mb-4 flex items-center justify-center text-blue-500"
                >
                    <img src={icon7} alt="" />
                </div>
                <h3
                    className="text-xl font-bold text-slate-900  uppercase tracking-tight"
                >
                    Elite Plan
                </h3>
                <div className="flex items-center gap-2 mt-2 text-sm">
                    <span className="text-slate-900 line-through">₹ 7000</span>
                    <span
                        className="bg-green-100 text-green-900 text-[10px] font-bold px-2 py-0 rounded-full"
                    >40% OFF SAVE BIG</span
                    >
                </div>
                <div className="mt-2 text-center">
                    <span
                        className="text-4xl font-bold text-slate-900"
                    >₹ 4999</span
                    >
                    <div className="text-xs text-gray-400">
                        per registration
                    </div>
                </div>
                <div className="mt-1 mb-2">
                    <span
                        className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full"
                    >+ FREE SERVICE WORTH 3000/-</span
                    >
                </div>
                <div
                    className="mt-4 border border-gray-950 text-black font-semibold rounded-full px-3 py-1 text-xs flex items-center gap-1"
                >
                    Offer ends in:
                    <span className="">24:27:56</span>
                </div>
                <div
                    className="mt-3 flex items-center gap-2 text-xs text-gray-400 transition-colors"
                >
                    Use Code:
                    <span className="font-bold text-slate-700 "
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
                    className="mt-4 p-2 bg-[#F9E5CE]/9 border-l-0 border-r-0 border border-gray-200 rounded-lg flex items-start gap-3 w-full"
                >
                    <div
                        className="w-8 h-8 rounded bg-yellow-200 flex-shrink-0"
                    >
                        <img src={icon8} alt="" />
                    </div>
                    <div
                        className="text-[12px]  leading-tight"
                    >
                        <span
                            className="font-bold text-base text-slate-800  block mb-0.5"
                        >tincidunt urna</span
                        >
                        Ut in Nam at urna Lorem venenatis ipsum tincidunt non,
                        tincidunt sit Donec
                    </div>
                </div>
                <button
                    className="w-full !text-xl mt-6 bg-[#FF6F3B] text-white font-bold py-2 px-6 rounded-full shadow-lg shadow-orange-200 transform transition hover:-translate-y-0.5"
                >
                    Get Basic Plan
                </button>
            </div>
            <div className="mt-4">
                <h6
                    className="font-bold text-slate-700  mb-4"
                >
                    What You'll Get Here
                </h6>
                <ul className="space-y-1">
                    <li
                        className="flex items-center gap-2 text-base"
                    >
                        <svg width="18" height="18" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2151_6854)">
                                <path d="M18.1676 8.74907C18.5482 10.7102 18.2769 12.7491 17.3991 14.5256C16.5213 16.3022 15.09 17.7091 13.3438 18.5117C11.5977 19.3143 9.64227 19.4641 7.80367 18.9361C5.96506 18.4082 4.35441 17.2343 3.24031 15.6103C2.12622 13.9863 1.57602 12.0104 1.68147 10.012C1.78692 8.01367 2.54165 6.11365 3.81979 4.62885C5.09793 3.14405 6.82223 2.1642 8.70514 1.85272C10.588 1.54124 12.5157 1.91695 14.1667 2.9172" stroke="#00A63E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.5 9.625L10 12.25L18.3333 3.5" stroke="#00A63E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2151_6854">
                                    <rect width="20" height="21" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <span>Everything in Premium</span>
                    </li>
                    <li
                        className="flex items-center gap-2 text-base"
                    >
                        <svg width="18" height="18" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2151_6854)">
                                <path d="M18.1676 8.74907C18.5482 10.7102 18.2769 12.7491 17.3991 14.5256C16.5213 16.3022 15.09 17.7091 13.3438 18.5117C11.5977 19.3143 9.64227 19.4641 7.80367 18.9361C5.96506 18.4082 4.35441 17.2343 3.24031 15.6103C2.12622 13.9863 1.57602 12.0104 1.68147 10.012C1.78692 8.01367 2.54165 6.11365 3.81979 4.62885C5.09793 3.14405 6.82223 2.1642 8.70514 1.85272C10.588 1.54124 12.5157 1.91695 14.1667 2.9172" stroke="#00A63E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.5 9.625L10 12.25L18.3333 3.5" stroke="#00A63E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2151_6854">
                                    <rect width="20" height="21" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <span
                        >Express
                            <span className="font-bold text-slate-900 "
                            >24-48 Hours</span
                            >
                            Processing</span
                        >
                    </li>
                    <li
                        className="flex items-center gap-2 text-base"
                    >
                        <svg width="18" height="18" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2151_6854)">
                                <path d="M18.1676 8.74907C18.5482 10.7102 18.2769 12.7491 17.3991 14.5256C16.5213 16.3022 15.09 17.7091 13.3438 18.5117C11.5977 19.3143 9.64227 19.4641 7.80367 18.9361C5.96506 18.4082 4.35441 17.2343 3.24031 15.6103C2.12622 13.9863 1.57602 12.0104 1.68147 10.012C1.78692 8.01367 2.54165 6.11365 3.81979 4.62885C5.09793 3.14405 6.82223 2.1642 8.70514 1.85272C10.588 1.54124 12.5157 1.91695 14.1667 2.9172" stroke="#00A63E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.5 9.625L10 12.25L18.3333 3.5" stroke="#00A63E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2151_6854">
                                    <rect width="20" height="21" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <span>Priority CA/CS Support</span>
                    </li>
                    <li
                        className="flex items-center gap-2 text-base"
                    >
                        <svg width="18" height="18" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2151_6854)">
                                <path d="M18.1676 8.74907C18.5482 10.7102 18.2769 12.7491 17.3991 14.5256C16.5213 16.3022 15.09 17.7091 13.3438 18.5117C11.5977 19.3143 9.64227 19.4641 7.80367 18.9361C5.96506 18.4082 4.35441 17.2343 3.24031 15.6103C2.12622 13.9863 1.57602 12.0104 1.68147 10.012C1.78692 8.01367 2.54165 6.11365 3.81979 4.62885C5.09793 3.14405 6.82223 2.1642 8.70514 1.85272C10.588 1.54124 12.5157 1.91695 14.1667 2.9172" stroke="#00A63E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.5 9.625L10 12.25L18.3333 3.5" stroke="#00A63E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2151_6854">
                                    <rect width="20" height="21" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <span>24/7 WhatsApp + Phone Support</span>
                    </li>
                    <li
                        className="flex items-center gap-2 text-base"
                    >
                        <svg width="18" height="18" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2151_6854)">
                                <path d="M18.1676 8.74907C18.5482 10.7102 18.2769 12.7491 17.3991 14.5256C16.5213 16.3022 15.09 17.7091 13.3438 18.5117C11.5977 19.3143 9.64227 19.4641 7.80367 18.9361C5.96506 18.4082 4.35441 17.2343 3.24031 15.6103C2.12622 13.9863 1.57602 12.0104 1.68147 10.012C1.78692 8.01367 2.54165 6.11365 3.81979 4.62885C5.09793 3.14405 6.82223 2.1642 8.70514 1.85272C10.588 1.54124 12.5157 1.91695 14.1667 2.9172" stroke="#00A63E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.5 9.625L10 12.25L18.3333 3.5" stroke="#00A63E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2151_6854">
                                    <rect width="20" height="21" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <div className="flex-1 flex justify-between items-center">
                            <span>Email Support/Phone Support</span>
                            <span
                                className="ml-2 text-[10px] font-bold text-green-600 bg-green-50 px-1 py-0.5 rounded border border-green-200"
                            >FREE</span
                            >
                        </div>
                    </li>
                    <li
                        className="flex items-center gap-2 text-base"
                    >
                        <svg width="18" height="18" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2151_6854)">
                                <path d="M18.1676 8.74907C18.5482 10.7102 18.2769 12.7491 17.3991 14.5256C16.5213 16.3022 15.09 17.7091 13.3438 18.5117C11.5977 19.3143 9.64227 19.4641 7.80367 18.9361C5.96506 18.4082 4.35441 17.2343 3.24031 15.6103C2.12622 13.9863 1.57602 12.0104 1.68147 10.012C1.78692 8.01367 2.54165 6.11365 3.81979 4.62885C5.09793 3.14405 6.82223 2.1642 8.70514 1.85272C10.588 1.54124 12.5157 1.91695 14.1667 2.9172" stroke="#00A63E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.5 9.625L10 12.25L18.3333 3.5" stroke="#00A63E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2151_6854">
                                    <rect width="20" height="21" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <span
                        >Government
                            <span className="font-bold text-slate-900 "
                            >Fee Included</span
                            ></span
                        >
                    </li>
                    <li
                        className="flex items-center gap-2 text-base"
                    >
                        <svg width="18" height="18" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2151_6854)">
                                <path d="M18.1676 8.74907C18.5482 10.7102 18.2769 12.7491 17.3991 14.5256C16.5213 16.3022 15.09 17.7091 13.3438 18.5117C11.5977 19.3143 9.64227 19.4641 7.80367 18.9361C5.96506 18.4082 4.35441 17.2343 3.24031 15.6103C2.12622 13.9863 1.57602 12.0104 1.68147 10.012C1.78692 8.01367 2.54165 6.11365 3.81979 4.62885C5.09793 3.14405 6.82223 2.1642 8.70514 1.85272C10.588 1.54124 12.5157 1.91695 14.1667 2.9172" stroke="#00A63E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.5 9.625L10 12.25L18.3333 3.5" stroke="#00A63E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2151_6854">
                                    <rect width="20" height="21" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <span>Everything in Premium</span>
                    </li>
                    <li
                        className="flex items-center gap-2 text-base"
                    >
                        <svg width="18" height="18" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2151_6854)">
                                <path d="M18.1676 8.74907C18.5482 10.7102 18.2769 12.7491 17.3991 14.5256C16.5213 16.3022 15.09 17.7091 13.3438 18.5117C11.5977 19.3143 9.64227 19.4641 7.80367 18.9361C5.96506 18.4082 4.35441 17.2343 3.24031 15.6103C2.12622 13.9863 1.57602 12.0104 1.68147 10.012C1.78692 8.01367 2.54165 6.11365 3.81979 4.62885C5.09793 3.14405 6.82223 2.1642 8.70514 1.85272C10.588 1.54124 12.5157 1.91695 14.1667 2.9172" stroke="#00A63E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.5 9.625L10 12.25L18.3333 3.5" stroke="#00A63E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2151_6854">
                                    <rect width="20" height="21" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <div className="flex-1 flex justify-between items-start">
                            <span>FREE Video Call Consultation (Worth ₹2,000)</span>
                            <span
                                className="ml-2 mt-0.5 text-[10px] font-bold text-green-600 bg-green-50 px-1 py-0.5 rounded border border-green-200"
                            >FREE</span
                            >
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
};






const Plans = () => {
    return (
        < div
            className="font-sans text-slate-800 antialiased transition-colors duration-300"
        >
            {/* Plans and Pricing end */}
            <div className="lg:py-16 py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="heading_short_long text-center mb-12 space-y-4">
                    <div className="short_title">
                        Plans and Pricing

                    </div>
                    <h2
                        className="long_title mt-4"
                    >
                        Choose The Right Plan To Grow Your Business
                    </h2>
                </div>
                <div className="plans-desktop grid grid-cols-3 gap-8 items-start">
                    <BasicPlan />
                    <PremiumPlan />
                    <ElitePlan />
                </div>

                {/* Mobile Swiper */}
                <div className="plans-mobile">
                    <Swiper
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        spaceBetween={20}
                        slidesPerView={1}
                        // className="pb-12"
                        style={{ paddingBottom: '60px' }}
                    >
                        <SwiperSlide><BasicPlan /></SwiperSlide>
                        <SwiperSlide><PremiumPlan /></SwiperSlide>
                        <SwiperSlide><ElitePlan /></SwiperSlide>
                    </Swiper>
                </div>

                <div
                    className="mt-16 bg-[#F5FAFF] rounded-xl shadow-md p-3 flex md:flex-row justify-evenly items-center gap-3 lg:gap-16 "
                >
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-2 text-blue-600">
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
                        <div className="text-2xl font-bold text-slate-900 ">
                            6,000+
                        </div>
                        <div className="text-sm text-gray-400 tracking-widest">
                            Happy Clients
                        </div>
                    </div>
                    <div
                        className="hidden md:block w-px h-12 bg-slate-200"
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
                        <div className="text-2xl font-bold text-slate-900 ">
                            4.8/5
                        </div>
                        <div className="text-sm text-gray-400 tracking-widest">
                            Customer Reviews
                        </div>
                    </div>
                    <div
                        className="hidden md:block w-px h-12 bg-slate-200"
                    ></div>
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-2 text-blue-600">
                            <img src={Award1} alt='' />
                        </div>
                        <div className="text-2xl font-bold text-slate-900 ">
                            100%
                        </div>
                        <div className="text-sm text-gray-400 tracking-widest">
                            Compliance Guarantee
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Plans