import React from 'react';
import { PiWrenchFill, PiGearFill, PiMagnifyingGlassFill, PiShieldCheckFill } from 'react-icons/pi';
import ServicePageLayout from '../../components/ServicePageLayout';

const OtherAppliances = () => {
  const features = [
    {
      title: "Expert Diagnostics",
      desc: "Thorough checking of any household appliance to find the exact issue.",
      icon: <PiMagnifyingGlassFill />
    },
    {
      title: "Component Fix",
      desc: "Repairing or replacing faulty parts to restore standard operation.",
      icon: <PiGearFill />
    },
    {
      title: "Safety Check",
      desc: "Complete electrical and operational safety inspection for your peace of mind.",
      icon: <PiShieldCheckFill />
    },
    {
      title: "General Service",
      desc: "Maintenance and troubleshooting for a wide variety of household devices.",
      icon: <PiWrenchFill />
    }
  ];

  return (
    <ServicePageLayout
      title="Other"
      titleAccent="Appliances."
      metaTitle="Other Appliance Repair | General Service | Fix Appliancepro"
      metaDesc="Professional repair for various household appliances. Expert diagnostics and parts replacement for your every need."
      heroDesc="We fix it all. From small kitchen gadgets to large household devices, our experts are ready to restore any appliance."
      image="/service-6.jpg"
      mainDesc="We provide diagnostic and repair solutions for a variety of small and large household appliances based on part availability. Our goal is to provide a one-stop solution for all your home repair needs."
      highlights={[
        "Versatile repair experts",
        "Honest diagnostic fees",
        "Prompt doorstep visits",
        "Quality service guaranteed"
      ]}
      features={features}
      ctaHeading="Something Else Broken?"
      ctaSubheading="We're Ready To Help."
    />
  );
};

export default OtherAppliances;
