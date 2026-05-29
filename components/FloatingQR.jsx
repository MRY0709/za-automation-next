import { useState } from "react";

function FloatingQR() {
  const [showQR, setShowQR] = useState(false);

  return (
    <>
      <button className="floating-btn" onClick={() => setShowQR(true)}>
        ⌘
      </button>

      {showQR && (
        <div className="qr-overlay">
          <div className="qr-modal">
            <button className="qr-close" onClick={() => setShowQR(false)}>
              ✕
            </button>

            <h2>Contact ZA Automation</h2>

            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=https://zaautomation.com"
              alt="QR Code"
            />

            <p>Scan QR to Contact Us</p>
          </div>
        </div>
      )}
    </>
  );
}

export default FloatingQR;
