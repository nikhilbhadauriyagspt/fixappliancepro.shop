import React from 'react';
import { PiDropFill, PiGearFill, PiThermometerFill, PiWavesFill } from 'react-icons/pi';
import ServicePageLayout from '../../components/ServicePageLayout';

const DishwasherRepair = () => {
  const features = [
    {
      title: "Drainage Fix",
      desc: "Clearing blockages and repairing pumps for perfect water drainage.",
      icon: <PiDropFill />
    },
    {
      title: "Pump Repair",
      desc: "Professional diagnostics and repair for wash pumps and motors.",
      icon: <PiGearFill />
    },
    {
      title: "Heating Elements",
      desc: "Expert replacement of heating elements for optimal drying performance.",
      icon: <PiThermometerFill />
    },
    {
      title: "Leak Prevention",
      desc: "Identifying and fixing leaks in door seals and internal plumbing.",
      icon: <PiWavesFill />
    }
  ];

  return (
    <ServicePageLayout
      title="Dishwasher"
      titleAccent="Repair."
      metaTitle="Dishwasher Repair | Fast & Reliable Service | Fix Appliancepro"
      metaDesc="Professional dishwasher repair for all brands. We fix drainage issues, leaks, and heating problems with original parts."
      heroDesc="Keep your kitchen running smoothly. We provide fast and reliable repair for all built-in and portable dishwasher units."
      image="/service-3.jpg"
      mainDesc="Services include addressing drainage problems, water leakage, and cleaning cycle inefficiencies. We provide component-level diagnostics for pumps, spray arms, and heating elements to ensure a long-lasting fix."
      highlights={[
        "Expert kitchen appliance team",
        "Original pump & heater parts",
        "Fast doorstep diagnostics",
        "45-day satisfaction guarantee"
      ]}
      features={features}
      ctaHeading="Dishwasher Leaking?"
      ctaSubheading="Get It Fixed Today."
    />
  );
};

export default DishwasherRepair;
