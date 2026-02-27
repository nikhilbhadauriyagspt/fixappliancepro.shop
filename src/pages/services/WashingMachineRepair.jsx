import React from 'react';
import { PiDropFill, PiGearFill, PiLightningFill, PiShieldCheckFill } from 'react-icons/pi';
import ServicePageLayout from '../../components/ServicePageLayout';

const WashingMachineRepair = () => {
  const features = [
    {
      title: "Motor Repair",
      desc: "Repairing or replacing motors to restore smooth spinning performance.",
      icon: <PiGearFill />
    },
    {
      title: "Leak Solutions",
      desc: "Comprehensive fix for water leakage and complex drainage issues.",
      icon: <PiDropFill />
    },
    {
      title: "PCB Services",
      desc: "Expert repair for digital displays and control board malfunctions.",
      icon: <PiLightningFill />
    },
    {
      title: "Drum Cleaning",
      desc: "Professional deep cleaning to eliminate odors and keep clothes fresh.",
      icon: <PiShieldCheckFill />
    }
  ];

  return (
    <ServicePageLayout
      title="Washing Machine"
      titleAccent="Repair."
      metaTitle="Washing Machine Repair | Fast & Expert Service | Fix Appliancepro"
      metaDesc="Get your washing machine fixed today. We repair all top-load and front-load brands with original parts and professional care."
      heroDesc="Don't let laundry pile up. We provide quick, honest, and professional repair for all types of washing machines at your doorstep."
      image="/service-1.jpg"
      mainDesc="Whether you have a front-load or top-load machine, our skilled team is equipped to fix it. We handle motor issues, water leaks, and digital errors with precision. We only use original factory parts to ensure your machine operates perfectly for years to come."
      highlights={[
        "Same-day visits for urgent repairs",
        "Original parts with 100% guarantee",
        "Fair and transparent pricing",
        "Friendly, certified technicians"
      ]}
      features={features}
      ctaHeading="Is Your Machine Leaking?"
      ctaSubheading="Let Us Fix It Fast."
    />
  );
};

export default WashingMachineRepair;
