import React from 'react';
import { PiDropFill, PiGearFill, PiWavesFill, PiShieldCheckFill } from 'react-icons/pi';
import ServicePageLayout from '../../components/ServicePageLayout';

const WaterPurifierRepair = () => {
  const features = [
    {
      title: "Filter Change",
      desc: "Prompt replacement of sediment, carbon, and RO filters for pure water.",
      icon: <PiDropFill />
    },
    {
      title: "Pump Repair",
      desc: "Professional diagnostics and repair for RO pressure pumps and motors.",
      icon: <PiGearFill />
    },
    {
      title: "TDS Adjustment",
      desc: "Accurate monitoring and adjustment of TDS levels for healthy drinking water.",
      icon: <PiWavesFill />
    },
    {
      title: "UV Lamp Fix",
      desc: "Checking and replacing UV lamps to ensure complete disinfection.",
      icon: <PiShieldCheckFill />
    }
  ];

  return (
    <ServicePageLayout
      title="Water Purifier"
      titleAccent="Service."
      metaTitle="RO & Water Purifier Repair | Pure Water | Fix Appliancepro"
      metaDesc="Professional water purifier repair and maintenance. We fix RO systems, change filters, and adjust TDS levels."
      heroDesc="Ensure pure drinking water for your family. We provide expert maintenance and repair for all RO and UV water purification systems."
      image="/service-10.jpg"
      mainDesc="Support for water purification systems, including RO membrane checks, filter changes, and pump maintenance. We ensure your purifier delivers the highest quality output for your safety."
      highlights={[
        "Pure water quality experts",
        "Original membrane & filters",
        "Free TDS monitoring",
        "Same-day filter service"
      ]}
      features={features}
      ctaHeading="Purifier Not Working?"
      ctaSubheading="Drink Pure, Stay Healthy."
    />
  );
};

export default WaterPurifierRepair;
