import React from 'react';
import { PiThermometerFill, PiGearFill, PiArrowsClockwiseFill, PiWindFill } from 'react-icons/pi';
import ServicePageLayout from '../../components/ServicePageLayout';

const ClothesDryerRepair = () => {
  const features = [
    {
      title: "Heating Repair",
      desc: "Fast restoration of heating elements to get your clothes dry quickly.",
      icon: <PiThermometerFill />
    },
    {
      title: "Belt & Motor",
      desc: "Expert replacement of dryer belts and repair of drum motors.",
      icon: <PiGearFill />
    },
    {
      title: "Drum Rotation",
      desc: "Fixing alignment and roller issues for smooth and quiet operation.",
      icon: <PiArrowsClockwiseFill />
    },
    {
      title: "Vent Cleaning",
      desc: "Thorough cleaning of ventilation paths to prevent fire hazards and improve efficiency.",
      icon: <PiWindFill />
    }
  ];

  return (
    <ServicePageLayout
      title="Clothes Dryer"
      titleAccent="Repair."
      metaTitle="Clothes Dryer Repair | Fast Service | Fix Appliancepro"
      metaDesc="Professional repair for residential clothes dryers. We fix heating issues, replace belts, and clean ventilation paths."
      heroDesc="Don't wait for sunny days. We provide expert repair for all types of clothes dryers to keep your laundry routine on track."
      image="/service-11.jpg"
      mainDesc="Our services address heating element failures, belt replacements, and drum rotation issues. We also provide professional ventilation path cleaning to ensure safety and optimal drying performance."
      highlights={[
        "Expert dryer technicians",
        "Prompt doorstep repair",
        "Original belts & heaters",
        "Fire safety vent checks"
      ]}
      features={features}
      ctaHeading="Dryer Not Heating?"
      ctaSubheading="Let Us Fix It Today."
    />
  );
};

export default ClothesDryerRepair;
