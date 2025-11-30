import React from 'react';
import Hero from '../components/Hero';
import ClientCount from '../components/ClientCount';
import SmartCompliance from '../components/SmartCompliance';
import Features from '../components/Features';
import TrustedPartner from '../components/TrustedPartner';
import Testimonials from '../components/Testimonials';
import Partnerships from '../components/Partnerships';
import Calculators from '../components/Calculators';
import AlertsDeadlines from '../components/AlertsDeadlines';
import Experts from '../components/Experts';
import FilingDates from '../components/FilingDates';
import Insights from '../components/Insights';
import Guidance from '../components/Guidance';
import FAQ from '../components/FAQ';
import Services from './Services';

const Home = () => {
  return (
    <>
      <Hero />
      <ClientCount />
      {/* <SmartCompliance /> */}
      <Services />
      <Features />
      <TrustedPartner />
      <Testimonials />
      <Partnerships />
      <Partnerships />
      <Calculators />
      <AlertsDeadlines />
      <Experts />
      <FilingDates />
      <Insights />
      <Guidance />
      <FAQ />
    </>
  );
};

export default Home;

