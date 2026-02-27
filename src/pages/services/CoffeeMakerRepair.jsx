import React from 'react';
import { PiCoffeeFill, PiThermometerFill, PiGearFill, PiDropFill } from 'react-icons/pi';
import ServicePageLayout from '../../components/ServicePageLayout';

const CoffeeMakerRepair = () => {
  const features = [
    {
      title: "Heating Repair",
      desc: "Expert fix for boilers and heating elements to ensure the perfect temperature.",
      icon: <PiThermometerFill />
    },
    {
      title: "Pump Service",
      desc: "Repair and replacement of pressure pumps for consistent brewing.",
      icon: <PiGearFill />
    },
    {
      title: "Deep Descaling",
      desc: "Thorough internal cleaning to remove mineral buildup and improve taste.",
      icon: <PiCoffeeFill />
    },
    {
      title: "Leak Solutions",
      desc: "Fixing internal seals and tubes to stop water leakage during brewing.",
      icon: <PiDropFill />
    }
  ];

  return (
    <ServicePageLayout
      title="Coffee Maker"
      titleAccent="Service."
      metaTitle="Coffee Machine Repair | Home & Commercial | Fix Appliancepro"
      metaDesc="Professional coffee maker repair for all brands. We fix heating issues, pumps, and provide descaling services."
      heroDesc="Don't miss your morning cup. We provide expert repair and maintenance for home and commercial coffee brewing systems."
      image="/service-5.jpg"
      mainDesc="Addressing heating problems, pump failures, and internal blockages. We provide descaling services and component replacement for various brewing systems to ensure your coffee tastes perfect every time."
      highlights={[
        "Precision brewing expertise",
        "Home & commercial support",
        "Prompt local service",
        "Original replacement seals"
      ]}
      features={features}
      ctaHeading="Coffee Machine Broken?"
      ctaSubheading="Let Us Restore The Taste."
    />
  );
};

export default CoffeeMakerRepair;
