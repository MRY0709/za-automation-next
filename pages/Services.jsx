function Services() {
  const services = [
    {
      title: "PLC Programming",
      desc: "Professional PLC programming solutions for industrial and foundation machinery systems.",
    },

    {
      title: "HMI Development",
      desc: "Custom Human Machine Interface systems for machinery monitoring and control.",
    },

    {
      title: "CANbus Troubleshooting",
      desc: "Advanced CANbus diagnostics and communication fault troubleshooting.",
    },

    {
      title: "Sensor Calibration",
      desc: "Precision sensor setup and calibration for industrial machinery systems.",
    },

    {
      title: "Electrical Fault Finding",
      desc: "Complete electrical troubleshooting and fault diagnostics services.",
    },

    {
      title: "Hydraulic Electrical Repair",
      desc: "Repair and maintenance of hydraulic electrical systems and controls.",
    },

    {
      title: "Boom Angle Sensor Repair",
      desc: "Specialized boom angle sensor diagnostics and repair services.",
    },

    {
      title: "Load Moment Indicator (LMI)",
      desc: "LMI system integration, troubleshooting, and calibration solutions.",
    },

    {
      title: "Joystick CANbus Integration",
      desc: "CANbus joystick control integration for heavy machinery systems.",
    },

    {
      title: "Wiring Harness Repair",
      desc: "Professional industrial wiring harness repair and replacement.",
    },

    {
      title: "Control Panel Design",
      desc: "Custom electrical and automation control panel solutions.",
    },

    {
      title: "Safety System Integration",
      desc: "Industrial machinery safety system integration and diagnostics.",
    },
  ];

  return (
    <section className="services-page">
      <h1 className="section-title">OUR SERVICES</h1>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h2>{service.title}</h2>

            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
