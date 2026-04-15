import { useState, useEffect } from 'react';
import './PhishingTest.css';

// NOTE: This page is a FAKE scam page created solely for ML phishing detection model testing.
// It intentionally mimics common phishing patterns for research/educational purposes.

export default function PhishingTest() {
  const [seconds, setSeconds] = useState(599);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="phishing-page">
      {/* Research banner — visible to humans, ignored by crawlers */}
      <div className="research-banner">
        ML PHISHING DETECTION TEST PAGE — NOT A REAL SITE
      </div>

      {/* Hero / hook section */}
      <div className="phishing-hero">
        <div className="badge-row">
          <span className="trust-badge">✔ VERIFIED</span>
          <span className="trust-badge">🔒 SECURE</span>
          <span className="trust-badge">⭐ #1 RATED</span>
        </div>
        <h1 className="phishing-headline">
          🚨 CONGRATULATIONS! You Have Been Selected! 🚨
        </h1>
        <p className="phishing-subheadline">
          You are our <strong>1,000,000th visitor</strong> and have won a
          <span className="highlight"> $5,000 CASH PRIZE</span>!
        </p>
        <div className="countdown-box">
          ⏰ Offer expires in:{' '}
          <span className={`countdown ${seconds < 60 ? 'urgent' : ''}`}>
            {formatTime(seconds)}
          </span>
        </div>
        <button className="cta-button pulse" onClick={() => setShowModal(true)}>
          👉 CLICK HERE TO CLAIM YOUR $5,000 NOW! 👈
        </button>
        <p className="scarcity-text">
          ⚠️ Only <strong>3 prizes remaining</strong> — act fast before someone
          else claims yours!
        </p>
      </div>

      {/* Fake testimonials */}
      <div className="testimonial-section">
        <h2>🌟 Real Winners This Week</h2>
        <div className="testimonial-grid">
          {[
            { name: 'John D., Texas', amount: '$5,000', img: '👨' },
            { name: 'Sarah M., Florida', amount: '$3,500', img: '👩' },
            { name: 'Mike R., New York', amount: '$7,200', img: '🧑' },
          ].map((t) => (
            <div className="testimonial-card" key={t.name}>
              <span className="testimonial-avatar">{t.img}</span>
              <p>
                "I couldn't believe it — I received <strong>{t.amount}</strong>{' '}
                in my account within 24 hours!"
              </p>
              <span className="testimonial-name">— {t.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Credential harvesting form */}
      <div className="form-section">
        <h2>🔐 Verify Your Identity to Receive Your Prize</h2>
        <p className="form-subtitle">
          Enter your details below. Your information is 100% safe &amp; secure.
        </p>
        {submitted ? (
          <div className="success-box">
            ✅ Details received! Your $5,000 will arrive in 24–48 hours.
          </div>
        ) : (
          <form className="phishing-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Create a password for your reward account"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Credit card number (to verify identity)"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              maxLength={19}
            />
            <button type="submit" className="submit-button">
              CLAIM MY $5,000 NOW →
            </button>
            <p className="fine-print">
              By clicking above you agree to our{' '}
              <span className="fake-link">Terms &amp; Conditions</span> and
              authorize a $1.99 verification fee. Subscription auto-renews at
              $49.99/month unless cancelled.
            </p>
          </form>
        )}
      </div>

      {/* Fake security logos */}
      <div className="security-logos">
        <span>🔒 SSL Secured</span>
        <span>✅ Norton Protected</span>
        <span>🛡️ McAfee Certified</span>
        <span>💳 PCI Compliant</span>
      </div>

      {/* Pop-up modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>
              ✕
            </button>
            <h2>🎉 You've Won!</h2>
            <p>
              To transfer your <strong>$5,000</strong>, we need a small
              processing fee of <strong>$9.99</strong>.
            </p>
            <button className="cta-button" onClick={() => setShowModal(false)}>
              Pay $9.99 & Claim Prize
            </button>
            <p className="modal-fine">
              Secure payment. No hidden charges.*
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
