import React from 'react';
import work1 from "../assets/work.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";
const FilingDates = () => {
  const timelineSteps = [
    { 
      number: '01',
      title: 'Submit Your Details', 
      desc: 'Choose your service—company registration, GST, compliance, or trademark—and fill a quick form.',
      side: 'right',
      cardType: 'form'
    },
    { 
      number: '02',
      title: 'Expert Consultation', 
      desc: 'Our compliance expert connects with you to understand your business, explain the process',
      side: 'left',
      cardType: 'consultation'
    },
    { 
      number: '03',
      title: 'Expert Consultation', 
      desc: 'Our compliance expert connects with you to understand your business, explain the process',
      side: 'right',
      cardType: 'consultation-blue'
    },
    { 
      number: '04',
      title: 'Expert Consultation', 
      desc: 'Our compliance expert connects with you to understand your business, explain the process',
      side: 'left',
      cardType: 'consultation'
    },
    { 
      number: '05',
      title: 'Expert Consultation', 
      desc: 'Our compliance expert connects with you to understand your business, explain the process',
      side: 'right',
      cardType: 'consultation'
    },
  ];

  const renderCard = (cardType) => {
    switch(cardType) {
      case 'form':
        return (
          <div className="timeline-card work1">
           <img src={work1} alt='' />
          </div>
        );
      case 'consultation':
        return (
          <div className="timeline-card work2">
            <img src={work2} alt='' />
          </div>
        );
      case 'consultation-blue':
        return (
          <div className="timeline-card work1">
            <img src={work3} alt='' />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="filing-dates">
      <div className="container">
        <div className="heading_short_long">
          
            <div className="short_title">HOW EBIZ WORKS</div>
           
          <h2 className="long_title">All Your Filing Dates, Simplified</h2>
        </div>
      


<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div class="relative">
<div class="absolute left-1/2 top-0 transform -translate-x-1/2 w-0.5 h-full timeline-line hidden md:!block"></div>
<div class="space-y-6 md:!space-y-6">
<div class="relative flex flex-col md:!flex-row items-center justify-between group">
<div class="absolute left-1/2 top-0 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-3 border-white dark:border-background-dark hidden md:!block z-10"></div>
<div class="w-full md:!w-5/12 flex justify-center md:!justify-end md:pr-12 mb-8 md:mb-0 order-2 md:!order-1">
<div class="bg-card-light bg-card-dark p-6 rounded-xl shadow-card dark:shadow-card-dark w-48 h-56 flex flex-col items-center justify-between border border-gray-100 dark:border-gray-700 transform transition-transform hover:scale-105 duration-300">
<div class="w-full space-y-3">
<div class="h-4 bg-gray-200 dark:bg-gray-600 rounded w-full"></div>
<div class="h-4 bg-gray-200 dark:bg-gray-600 rounded w-3/4"></div>
</div>
<button class="bg-primary text-white text-xs font-semibold py-1.5 px-4 rounded-full w-full flex items-center justify-center gap-1 shadow-md hover:shadow-lg transition-shadow">
                                Submit <span class="material-symbols-outlined text-[10px]">arrow_forward</span>
</button>
</div>
</div>
<div class="w-full md:!w-5/12 md:pl-12 text-center md:!text-left order-1 md:!order-2">
<span class="text-primary font-bold text-xl block mb-2">01</span>
<h3 class="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Submit Your Details</h3>
<p class="text-secondary-text-light dark:text-secondary-text-dark text-lg leading-relaxed">
                            Choose your service—company registration, GST, compliance, or trademark—and fill a quick form.
                        </p>
</div>
</div>
<div class="relative flex flex-col md:!flex-row items-center justify-between group">
<div class="absolute left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gray-300 border-3 border-white border-background-dark hidden md:!block z-10"></div>
<div class="w-full md:!w-5/12 md:pr-12 text-center md:!text-right order-1">
<span class="text-primary font-bold text-xl block mb-2">02</span>
<h3 class="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Expert Consultation</h3>
<p class="text-secondary-text-light dark:text-secondary-text-dark text-lg leading-relaxed">
                            Our compliance expert connects with you to understand your business, explain the process
                        </p>
</div>
<div class="w-full md:!w-5/12 flex justify-center md:j!ustify-start md:pl-12 mt-8 md:mt-0 order-2">
<div class="bg-card-light dark:bg-card-dark p-6 rounded-xl shadow-card dark:shadow-card-dark w-48 h-56 flex flex-col items-center justify-center border border-gray-100 dark:border-gray-700 transform transition-transform hover:scale-105 duration-300 relative">
<div class="text-blue-600 dark:text-blue-400 mb-6">
<span class="material-symbols-outlined text-6xl">support_agent</span>
</div>
<div class="absolute bottom-6 w-3/4">
<button class="bg-primary text-white text-xs font-semibold py-1.5 px-4 rounded-full w-full flex items-center justify-center gap-1 shadow-md hover:shadow-lg transition-shadow">
                                    Call Expert <span class="material-symbols-outlined text-[10px]">call</span>
</button>
</div>
</div>
</div>
</div>
<div class="relative flex flex-col md:!flex-row items-center justify-between group">
<div class="absolute left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gray-300 border-3 border-white border-background-dark hidden md:!block z-10"></div>
<div class="w-full md:!w-5/12 flex justify-center md:!justify-end md:pr-12 mb-8 md:mb-0 order-2 md:!order-1">
<div class="bg-card-light dark:bg-card-dark p-6 rounded-xl shadow-card dark:shadow-card-dark w-48 h-56 flex flex-col items-center justify-center border border-gray-100 dark:border-gray-700 transform transition-transform hover:scale-105 duration-300 relative">
<div class="text-gray-400 dark:text-gray-500 mb-6">
<span class="material-symbols-outlined text-6xl">support_agent</span>
</div>
<div class="absolute bottom-6 w-3/4">
<button class="bg-gray-400 dark:bg-gray-600 text-white text-xs font-semibold py-1.5 px-4 rounded-full w-full flex items-center justify-center gap-1 shadow-inner">
                                   Call Expert <span class="material-symbols-outlined text-[10px]">call</span>
</button>
</div>
</div>
</div>
<div class="w-full md:!w-5/12 md:pl-12 text-center md:!text-left order-1 md:!order-2">
<span class="text-primary font-bold text-xl block mb-2">03</span>
<h3 class="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Expert Consultation</h3>
<p class="text-secondary-text-light dark:text-secondary-text-dark text-lg leading-relaxed">
                            Our compliance expert connects with you to understand your business, explain the process
                        </p>
</div>
</div>
<div class="relative flex flex-col md:!flex-row items-center justify-between group">
<div class="absolute left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gray-300 border-3 border-white border-background-dark hidden md:!block z-10"></div>
<div class="w-full md:!w-5/12 md:pr-12 text-center md:!text-right order-1">
<span class="text-primary font-bold text-xl block mb-2">04</span>
<h3 class="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Expert Consultation</h3>
<p class="text-secondary-text-light dark:text-secondary-text-dark text-lg leading-relaxed">
                            Our compliance expert connects with you to understand your business, explain the process
                        </p>
</div>
<div class="w-full md:!w-5/12 flex justify-center md:j!ustify-start md:pl-12 mt-8 md:mt-0 order-2">
<div class="bg-card-light dark:bg-card-dark p-6 rounded-xl shadow-card dark:shadow-card-dark w-48 h-56 flex flex-col items-center justify-center border border-gray-100 dark:border-gray-700 transform transition-transform hover:scale-105 duration-300 relative">
<div class="text-gray-400 dark:text-gray-500 mb-6">
<span class="material-symbols-outlined text-6xl">support_agent</span>
</div>
<div class="absolute bottom-6 w-3/4">
<button class="bg-gray-400 dark:bg-gray-600 text-white text-xs font-semibold py-1.5 px-4 rounded-full w-full flex items-center justify-center gap-1 shadow-inner">
                                   Call Expert <span class="material-symbols-outlined text-[10px]">call</span>
</button>
</div>
</div>
</div>
</div>
<div class="relative flex flex-col md:!flex-row items-center justify-between group">
<div class="absolute left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gray-300 border-3 border-white border-background-dark hidden md:!block z-10"></div>
<div class="w-full md:!w-5/12 flex justify-center md:!justify-end md:pr-12 mb-8 md:mb-0 order-2 md:!order-1">
<div class="bg-card-light dark:bg-card-dark p-6 rounded-xl shadow-card dark:shadow-card-dark w-48 h-56 flex flex-col items-center justify-center border border-gray-100 dark:border-gray-700 transform transition-transform hover:scale-105 duration-300 relative">
<div class="text-gray-400 dark:text-gray-500 mb-6">
<span class="material-symbols-outlined text-6xl">support_agent</span>
</div>
<div class="absolute bottom-6 w-3/4">
<button class="bg-gray-400 dark:bg-gray-600 text-white text-xs font-semibold py-1.5 px-4 rounded-full w-full flex items-center justify-center gap-1 shadow-inner">
                                  Call Expert <span class="material-symbols-outlined text-[10px]">call</span>
</button>
</div>
</div>
</div>
<div class="w-full md:!w-5/12 md:pl-12 text-center md:!text-left order-1 md:!order-2">
<span class="text-primary font-bold text-xl block mb-2">05</span>
<h3 class="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Expert Consultation</h3>
<p class="text-secondary-text-light dark:text-secondary-text-dark text-lg leading-relaxed">
                           Our compliance expert connects with you to understand your business, explain the process
                       </p>
</div>
</div>
</div>
</div>
</div>

        <div className="filing-dates-cta">
          <button className="btn-primary filing-dates-btn">Start the Process</button>
        </div>
      </div>
    </section>
  );
};

export default FilingDates;

