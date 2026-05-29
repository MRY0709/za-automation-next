import Hero from "../components/Hero";
function Home() {
  return (
    <>
      <Hero />

      <section className="features">
        <h2 className="section-title">Industrial Services</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>PLC Programming</h3>

            <p>
              Professional PLC programming solutions for piling and foundation
              machinery.
            </p>
          </div>
          s
          <div className="feature-card">
            <h3>HMI Development</h3>

            <p>
              Advanced HMI systems for industrial machine monitoring and
              control.
            </p>
          </div>
          <div className="feature-card">
            <h3>CANbus Troubleshooting</h3>

            <p>
              Expert CANbus diagnostics and communication fault troubleshooting.
            </p>
          </div>
          <div className="feature-card">
            <h3>Electrical Fault Finding</h3>

            <p>
              Complete electrical diagnostics and industrial machinery
              troubleshooting.
            </p>
          </div>
          <div className="feature-card">
            <h3>Hydraulic Electrical Repair</h3>

            <p>
              Professional repair services for hydraulic electrical systems.
            </p>
          </div>
          <div className="feature-card">
            <h3>Sensor Calibration</h3>

            <p>
              Precision calibration and setup for industrial sensors and
              controls.
            </p>
          </div>
          <div className="feature-card">
            <h3>Load Moment Indicator (LMI)</h3>

            <p>LMI integration, calibration, and diagnostics services.</p>
          </div>
          <div className="feature-card">
            <h3>Joystick CANbus Integration</h3>

            <p>
              Smart joystick integration for heavy machinery control systems.
            </p>
          </div>
          <div className="feature-card">
            <h3>Safety System Integration</h3>

            <p>
              Industrial machinery safety systems and advanced protection
              solutions.
            </p>
          </div>
        </div>
      </section>
      <section className="machinery-section">
        <h2 className="section-title">Machinery We Work On</h2>

        <div className="machinery-grid">
          <div className="machinery-card">
            <img
              src="/assets/images/abi-machine.jpg"
              alt="Abi Sheet Pile Machine"
            />

            <h3>Abi Sheet Pile Machine</h3>
          </div>

          <div className="machinery-card">
            <img
              src="/assets/images/drilling-rig.jpeg"
              alt="Rotary Drilling Rigs"
            />

            <h3>Bauer RTG Vibro</h3>
          </div>

          <div className="machinery-card">
            <img src="/assets/images/vibro-hammer.jpeg" alt="Vibro Hammers" />

            <h3>Diaphragm Wall Construction</h3>
          </div>

          <div className="machinery-card">
            <img
              src="/assets/images/hydraulic-unit.jpeg"
              alt="Hydraulic Systems"
            />

            <h3>Hydraulic Rotary Drilling Rig</h3>
          </div>

          <div className="machinery-card">
            <img
              src="/assets/images/foundation-equipment.jpeg"
              alt="Foundation Equipment"
            />

            <h3>Liebherr Drilling Rig</h3>
          </div>

          <div className="machinery-card">
            <img src="/assets/images/crane.jpeg" alt="Crane Machinery" />

            <h3>Rotary Drilling Rig</h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
