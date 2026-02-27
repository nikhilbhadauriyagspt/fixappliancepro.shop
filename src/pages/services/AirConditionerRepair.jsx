import React from 'react';
import { PiWindFill, PiGearFill, PiThermometerFill, PiDropFill } from 'react-icons/pi';
import ServicePageLayout from '../../components/ServicePageLayout';

const AirConditionerRepair = () => {
  const features = [
    {
      title: "Cooling Recovery",
      desc: "Fast restoration of cooling efficiency for all split and window AC units.",
      icon: <PiWindFill />
    },
    {
      title: "Gas Refilling",
      desc: "Safe and accurate refrigerant gas top-up for optimal AC performance.",
      icon: <PiThermometerFill />
    },
    {
      title: "PCB Diagnostics",
      desc: "Expert repair for complex circuit board and electronic malfunctions.",
      icon: <PiGearFill />
    },
    {
      title: "Deep Cleaning",
      desc: "Thorough filter and coil maintenance to improve air quality and flow.",
      icon: <PiDropFill />
    }
  ];

  return (
    <ServicePageLayout
      title="Air Conditioner"
      titleAccent="Service."
      metaTitle="AC Repair & Service | Same Day Support | Fix Appliancepro"
      metaDesc="Professional AC repair and maintenance for all brands. We handle gas refilling, PCB repair, and deep cleaning."
      heroDesc="Stay cool all year round. We provide expert repair, maintenance, and gas filling services for split and window AC units."
      image="/service-7.jpg"
      mainDesc="Our services include deep filter cleaning, gas pressure checks, and advanced circuit board diagnostics. We aim to optimize cooling efficiency and address common operational noises, ensuring your comfort during the hottest days."
      highlights={[
        "Certified AC specialists",
        "Prompt doorstep service",
        "Transparent service charges",
        "45-day service warranty"
      ]}
      features={features}
      ctaHeading="AC Not Cooling?"
      ctaSubheading="Get Fast Relief Today."
    />
  );
};

export default AirConditionerRepair;
