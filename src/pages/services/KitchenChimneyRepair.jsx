import React from 'react';
import { PiFanFill, PiGearFill, PiDropFill, PiLightningFill } from 'react-icons/pi';
import ServicePageLayout from '../../components/ServicePageLayout';

const KitchenChimneyRepair = () => {
  const features = [
    {
      title: "Motor Service",
      desc: "Expert diagnostics and repair for chimney exhaust motors and blowers.",
      icon: <PiFanFill />
    },
    {
      title: "Deep Cleaning",
      desc: "Thorough cleaning of filters and blowers to restore suction power.",
      icon: <PiDropFill />
    },
    {
      title: "Switch Panel",
      desc: "Repairing touchpads and push-button panels for all chimney types.",
      icon: <PiLightningFill />
    },
    {
      title: "Suction Recovery",
      desc: "Identifying and fixing blockages to ensure efficient smoke extraction.",
      icon: <PiGearFill />
    }
  ];

  return (
    <ServicePageLayout
      title="Kitchen Chimney"
      titleAccent="Service."
      metaTitle="Kitchen Chimney Repair & Cleaning | Fix Appliancepro"
      metaDesc="Professional repair and cleaning for kitchen exhaust systems. We fix motors, switch panels, and perform deep cleaning."
      heroDesc="Keep your kitchen smoke-free. We provide expert cleaning and repair services for all types of kitchen chimneys and exhaust systems."
      image="/service-12.jpg"
      mainDesc="Deep cleaning services for filters and blowers, along with motor diagnostics and switch panel repairs. We ensure your kitchen remains fresh and clean by optimizing your chimney's performance."
      highlights={[
        "Expert chimney cleaning",
        "Prompt suction restoration",
        "Original switch & motors",
        "Affordable maintenance"
      ]}
      features={features}
      ctaHeading="Chimney Suction Weak?"
      ctaSubheading="Book A Deep Clean Now."
    />
  );
};

export default KitchenChimneyRepair;
