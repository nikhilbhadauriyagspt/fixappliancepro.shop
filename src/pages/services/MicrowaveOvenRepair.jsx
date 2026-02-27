import React from 'react';
import { PiLightningFill, PiWaveformFill, PiClockFill, PiShieldCheckFill } from 'react-icons/pi';
import ServicePageLayout from '../../components/ServicePageLayout';

const MicrowaveOvenRepair = () => {
  const features = [
    {
      title: "Magnetron Fix",
      desc: "Expert replacement of magnetrons to restore heating functionality safely.",
      icon: <PiWaveformFill />
    },
    {
      title: "Control Panel",
      desc: "Repairing touchpads, buttons, and display errors for all microwave models.",
      icon: <PiLightningFill />
    },
    {
      title: "High Voltage Fix",
      desc: "Safe diagnostics and repair for high-voltage diodes and capacitors.",
      icon: <PiShieldCheckFill />
    },
    {
      title: "Timer & Sensor",
      desc: "Accurate repair for timers and internal temperature sensors.",
      icon: <PiClockFill />
    }
  ];

  return (
    <ServicePageLayout
      title="Microwave Oven"
      titleAccent="Repair."
      metaTitle="Microwave Repair Service | Fast & Safe | Fix Appliancepro"
      metaDesc="Professional microwave repair for all brands. We fix heating issues, magnetrons, and control panels safely and quickly."
      heroDesc="Get back to quick meals. Our experts provide fast and safe repair for all types of microwave ovens at your doorstep."
      image="/service-8.jpg"
      mainDesc="Common repairs include magnetron replacement, touch panel restoration, and diode testing. We follow strict safety protocols for all high-voltage repairs, ensuring your appliance is safe to use."
      highlights={[
        "Certified electrical experts",
        "Safe high-voltage repairs",
        "Original magnetron parts",
        "Same-day local service"
      ]}
      features={features}
      ctaHeading="Microwave Not Heating?"
      ctaSubheading="Book A Professional Fix."
    />
  );
};

export default MicrowaveOvenRepair;
