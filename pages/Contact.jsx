import { FaWhatsapp, FaPaperPlane } from "react-icons/fa";
function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-container">
        <h1 className="animated-heading">Contact Us</h1>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Your Email" />

          <textarea rows="6" placeholder="Your Message"></textarea>

          <button type="submit">
            <FaPaperPlane />
            Send Message
          </button>
        </form>

        <div className="contact-info">
          <p className="or-text">OR</p>

          <a
            href="https://wa.me/971559626398"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <FaWhatsapp />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
