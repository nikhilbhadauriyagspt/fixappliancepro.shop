import React from 'react';
import { PiSnowflakeFill, PiThermometerFill, PiGearFill, PiShieldCheckFill } from 'react-icons/pi';
import ServicePageLayout from '../../components/ServicePageLayout';

const RefrigeratorRepair = () => {
  const features = [
    {
      title: "Cooling Issues",
      desc: "Fast diagnostics and repair for refrigerators that aren't cooling properly.",
      icon: <PiSnowflakeFill />
    },
    {
      title: "Compressor Fix",
      desc: "Professional repair and replacement of faulty refrigerator compressors.",
      icon: <PiGearFill />
    },
    {
      title: "Thermostat Care",
      desc: "Accurate calibration and replacement of temperature control sensors.",
      icon: <PiThermometerFill />
    },
    {
      title: "Gas Refilling",
      desc: "Safe and efficient refrigerant gas top-up for optimal performance.",
      icon: <PiShieldCheckFill />
    }
  ];

  return (
    <ServicePageLayout
      title="Refrigerator"
      titleAccent="Repair."
      metaTitle="Refrigerator Repair | Fast & Expert Service | Fix Appliancepro"
      metaDesc="Professional repair for all refrigerator brands. We fix cooling issues, compressors, and more with original parts."
      heroDesc="Keep your food fresh. We provide same-day repair services for all major refrigerator and freezer brands at your doorstep."
      image="/service-2.jpg"
      mainDesc="We offer comprehensive support for cooling issues, compressor malfunctions, and thermostat calibration. Our services cover all major household brands and aim to restore standard operating temperatures quickly and efficiently."
      highlights={[
        "Emergency same-day repair",
        "Expert compressor diagnostics",
        "Genuine spare parts only",
        "Affordable & honest pricing"
      ]}
      features={features}
      ctaHeading="Fridge Not Cooling?"
      ctaSubheading="We'll Fix It Today."
    />
  );
};

export default RefrigeratorRepair;
