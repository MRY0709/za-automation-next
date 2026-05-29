import Link from "next/link";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Piling & Foundation Machinery Automation Specialists
        </h1>

        <p className="hero-text">
          Expert solutions for ABI machines, Rotary Drilling Rigs, Vibro
          Hammers, Power Packs, PLC Systems, CANbus Diagnostics, Electrical
          Troubleshooting, and HMI Integration.
        </p>

        <div className="hero-buttons hero-btns">
          <Link href="/services" className="btn">
            Explore Services
          </Link>

          <Link href="/contact" className="btn btn-secondary">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
