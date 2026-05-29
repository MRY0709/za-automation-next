import Link from "next/link";

function Footer() {
  return (
    <footer className="footer">
      <h2>ZA Automation Technical Services LLC</h2>

      <p>Complete Automation Solutions for Piling Machinery</p>

      <p>📍 Office F-201, Building No. 137, Al Barah, Dubai</p>

      <p>📞 +971 55 962 6398</p>

      <p>✉️ zaki@zaautomation.com</p>

      <div className="footer-links">
        <Link href="/">Home</Link>

        <Link href="/services">Services</Link>

        <Link href="/users">Clients</Link>

        <Link href="/about">About</Link>

        <Link href="/contact">Contact</Link>
      </div>

      <p className="copyright">© 2026 ZA Automation. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
