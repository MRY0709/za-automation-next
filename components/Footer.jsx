import Link from "next/link";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>ZA Automation</h2>

          <p>
            Complete Automation Solutions for Piling & Foundation Machinery.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/users">Clients</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-section">
          <h3>Services</h3>

          <p>PLC Programming</p>
          <p>HMI Development</p>
          <p>CANbus Troubleshooting</p>
          <p>Sensor Calibration</p>
          <p>Electrical Fault Finding</p>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>

          <p>📍 Office F-201, Building No. 137, Al Barah, Dubai</p>

          <p>📞 +971 55 962 6398</p>

          <p>✉️ zaki@zaautomation.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Zaki Abbas Technical Services LLC. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
