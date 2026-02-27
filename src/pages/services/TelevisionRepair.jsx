import React from 'react';
import { PiTelevisionFill, PiSpeakerHighFill, PiLightningFill, PiGearFill } from 'react-icons/pi';
import ServicePageLayout from '../../components/ServicePageLayout';

const TelevisionRepair = () => {
  const features = [
    {
      title: "Display Fix",
      desc: "Expert repair for backlight failure, screen flickering, and display errors.",
      icon: <PiTelevisionFill />
    },
    {
      title: "Power Supply",
      desc: "Resolving power-on issues and motherboard electrical malfunctions.",
      icon: <PiLightningFill />
    },
    {
      title: "Audio Repair",
      desc: "Fixing distorted sound, speaker issues, and audio output failures.",
      icon: <PiSpeakerHighFill />
    },
    {
      title: "Connectivity",
      desc: "Repairing HDMI, USB ports, and Wi-Fi connectivity problems for Smart TVs.",
      icon: <PiGearFill />
    }
  ];

  return (
    <ServicePageLayout
      title="Television"
      titleAccent="Repair."
      metaTitle="Smart TV & LED Repair | Professional Service | Fix Appliancepro"
      metaDesc="Professional repair for LED, LCD, and Smart TVs. We fix display issues, power supply, and audio problems for all brands."
      heroDesc="Restore your home entertainment. We provide expert diagnostics and repair for all major TV brands, ensuring a crystal-clear experience."
      image="/service-4.jpg"
      mainDesc="Our specialists handle common television issues including backlight failure, power supply problems, and connectivity errors. We use precision tools and quality components to bring your TV back to life."
      highlights={[
        "Certified Smart TV experts",
        "Prompt on-site diagnostics",
        "Quality component replacement",
        "Service for all major brands"
      ]}
      features={features}
      ctaHeading="TV Screen Issues?"
      ctaSubheading="Let Us Fix It Now."
    />
  );
};

export default TelevisionRepair;
