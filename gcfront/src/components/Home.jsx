import React, { useState } from "react";
import Register from "./Register";
import "./Home.css";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="home-container">
      <h1>Welcome to Our Website</h1>
      <button className="open-modal-btn" onClick={() => setShowModal(true)}>
        Register Now
      </button>

      {showModal && <Register onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Home;
