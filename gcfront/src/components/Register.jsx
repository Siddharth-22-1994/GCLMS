import React from "react";
import "./Register.css";

const Register = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {/* Left Side - Illustration */}
        <div className="modal-image">
          <img src="./Image/bird.jpg" alt="Illustration" />
        </div>

        {/* Right Side - Registration Form */}
        <div className="modal-content">
          <button className="close-btn" onClick={onClose}>
            Time
          </button>

          <h2>Registration</h2>
          <form>
            {/* Row 1 */}
            <div className="form-group">
              <input type="text" placeholder="Full Name" />
              <select>
                <option>Position you are applying for</option>
                <option>Software Engineer</option>
                <option>Data Scientist</option>
              </select>
            </div>

            {/* Row 2 */}
            <div className="form-group">
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Phone Number" />
            </div>

            {/* Row 3 */}
            <div className="form-group">
              <input type="text" placeholder="Country" />
              <input type="text" placeholder="City" />
            </div>

            {/* Row 4 */}
            <div className="form-group">
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />
            </div>

            {/* Gender Section */}
            <div className="gender-group">
              <label>Gender:</label>
              <input type="radio" name="gender" id="male" />
              <label htmlFor="male">Male</label>

              <input type="radio" name="gender" id="female" />
              <label htmlFor="female">Female</label>

              <input type="radio" name="gender" id="other" />
              <label htmlFor="other">Other</label>

              <input type="radio" name="gender" id="prefer-not" />
              <label htmlFor="prefer-not">Prefer not to say</label>
            </div>

            {/* Submit Button */}
            <button type="submit" className="next-step">
              Next Step
            </button>

            {/* Sign in Link */}
            <p className="signin-link">
              Already have an account? <a href="/login">Sign in</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

{
  /* <img src="./Image/bird.jpg" alt="Illustration" /> */
}
