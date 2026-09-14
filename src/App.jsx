
import { useEffect, useState } from "react";
import "./App.css";

// ===============================
// CHANGE RELEASE DATE HERE
// Format: YYYY-MM-DDTHH:MM:SS
// ===============================
const RELEASE_DATE = "2026-10-05T00:00:00";

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
        <div className="logo">
          <img src="/logo.png" alt="Virtual Realty" className="logo-img" />
          <span className="logo-name">Virtual <em>Realty</em></span>
        </div>

        <div className="line"></div>

        <p className="tag">REAL ESTATE CONSULTANCY</p>

        <h1>
          Something Great
          <br />
          Is <span>Coming Soon</span>
        </h1>

        <p className="text">
          We are building a better real estate experience for you.
          <br />
          Our website will be launching soon.
        </p>

        <div className="countdown">
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

        <p className="release">
         Stay tuned for our official launch
        </p>

        <div className="bottom">
          <span>Property</span>
          <span>Consultancy</span>
          <span>Expert Guidance</span>
        </div>
      </div>
    </main>
  );
}

export default App;
