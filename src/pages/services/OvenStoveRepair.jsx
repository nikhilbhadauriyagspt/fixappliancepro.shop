import React from 'react';
import { PiFireFill, PiLightningFill, PiThermometerFill, PiGearFill } from 'react-icons/pi';
import ServicePageLayout from '../../components/ServicePageLayout';

const OvenStoveRepair = () => {
  const features = [
    {
      title: "Burner Cleaning",
      desc: "Restoring gas burner efficiency and flame quality for even cooking.",
      icon: <PiFireFill />
    },
    {
      title: "Ignition Fix",
      desc: "Expert repair for electric igniters and manual gas stove starters.",
      icon: <PiLightningFill />
    },
    {
      title: "Oven Heating",
      desc: "Precise calibration and repair of oven heating elements and thermostats.",
      icon: <PiThermometerFill />
    },
    {
      title: "Safety Check",
      desc: "Comprehensive gas leak testing and electrical grounding verification.",
      icon: <PiGearFill />
    }
  ];

  return (
    <ServicePageLayout
      title="Oven & Stove"
      titleAccent="Repair."
      metaTitle="Oven & Gas Stove Repair | Professional Fix | Fix Appliancepro"
      metaDesc="Expert repair for gas stoves, hobs, and electric ovens. We fix burners, ignition issues, and thermostats safely."
      heroDesc="Get back to cooking. We provide professional repair and safety checks for all gas burners, hobs, and electric ovens."
      image="/service-9.jpg"
      mainDesc="Focusing on burner efficiency, ignition reliability, and thermostat accuracy. We perform thorough safety checks for gas leaks and electrical grounding to ensure your kitchen is safe and functional."
      highlights={[
        "Gas safety certified team",
        "Expert burner maintenance",
        "Original ignition parts",
        "Prompt doorstep repair"
      ]}
      features={features}
      ctaHeading="Cooking Range Issues?"
      ctaSubheading="Book A Professional Today."
    />
  );
};

export default OvenStoveRepair;
