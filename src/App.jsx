
import { useEffect, useState } from "react";
import "./App.css";

// ===============================
// CHANGE RELEASE DATE HERE
// Format: YYYY-MM-DDTHH:MM:SS
// ===============================
const RELEASE_DATE = "2026-10-10T00:00:00";

function App() {
  const [time, setTime] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date().getTime();
    const release = new Date(RELEASE_DATE).getTime();
    const diff = release - now;

    if (diff <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="page">
      <div className="content">
        <header>
          <div className="logo">
            <img src="/logo.png" alt="Virtual Realty logo" className="logo-img" />
            <span className="logo-name">Virtual <em>Realty</em></span>
          </div>

          <div className="line"></div>

          <p className="tag">REAL ESTATE CONSULTANCY — KHARGHAR, NAVI MUMBAI</p>
        </header>

        <h1>
          Something Great
          <br />
          Is <span>Coming Soon</span>
        </h1>

        <p className="text">
          Your trusted property consultant in Kharghar, Navi Mumbai.
          <br />
          New launches, buy &amp; sell support — all at the best price.
          <br />
          <span className="under-dev">Our website is currently under development and launching soon.</span>
        </p>

        <div className="countdown" aria-label="Countdown to launch">
          <div className="box">
            <strong>{String(time.days).padStart(2, "0")}</strong>
            <span>Days</span>
          </div>
          <div className="box">
            <strong>{String(time.hours).padStart(2, "0")}</strong>
            <span>Hours</span>
          </div>
          <div className="box">
            <strong>{String(time.minutes).padStart(2, "0")}</strong>
            <span>Minutes</span>
          </div>
          <div className="box">
            <strong>{String(time.seconds).padStart(2, "0")}</strong>
            <span>Seconds</span>
          </div>
        </div>

        <p className="release">Stay tuned for our official launch</p>

        <footer className="site-footer">
          <div className="bottom">
            <span>Property</span>
            <span>Consultancy</span>
            <span>Expert Guidance</span>
          </div>

          <address className="contact">
            <a href="tel:+919167478723">+91 91674 78723</a>
            <span className="contact-sep">·</span>
            <a href="mailto:virtualrealty07@gmail.com">virtualrealty07@gmail.com</a>
            <span className="contact-sep">·</span>
            <span>Kharghar, Navi Mumbai</span>
          </address>
        </footer>
      </div>
    </main>
  );
}

export default App;
