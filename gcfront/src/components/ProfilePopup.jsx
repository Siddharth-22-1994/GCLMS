import React, { useState } from "react";
import "./ProfilePopup.css"; // Separate CSS file for styling

const ProfilePopup = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("personal-info");

  const sections = [
    { id: "personal-info", label: "Personal Information" },
    { id: "academic-details", label: "Academic Details" },
    { id: "course-lms", label: "Course & LMS Details" },
    { id: "fee-details", label: "Fee Details" },
    { id: "work-exp", label: "Work Experience" },
    { id: "skills", label: "Skills & Preferences" },
    { id: "profiles", label: "External Profiles" },
    { id: "certifications", label: "Achievements & Certifications" },
    { id: "resume", label: "Resume Upload" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "personal-info":
        return (
          <div>
            <h3>Personal Information</h3>
            <label>Full Name *</label>
            <input type="text" placeholder="Enter full name" required />

            <label>Profile Picture</label>
            <input type="file" />

            <label>Gender</label>
            <input type="text" placeholder="Enter gender" />

            <label>Date of Birth</label>
            <input type="date" />

            <label>Mobile Number *</label>
            <input type="text" placeholder="Enter mobile number" required />

            <label>Alternate Contact Number</label>
            <input type="text" placeholder="Enter alternate number" />

            <label>Email Address *</label>
            <input type="email" placeholder="Enter email" required />
          </div>
        );
      case "academic-details":
        return (
          <div>
            <h3>Academic Details</h3>
            <label>Highest Qualification *</label>
            <input type="text" placeholder="Enter qualification" required />

            <label>University/College Name *</label>
            <input type="text" placeholder="Enter university name" required />

            <label>Year of Passing *</label>
            <input type="number" placeholder="Enter year" required />

            <label>Specialization</label>
            <input type="text" placeholder="Enter specialization" />

            <label>Academic Percentage/CGPA *</label>
            <input type="text" placeholder="Enter percentage/CGPA" required />
          </div>
        );
      case "course-lms":
        return (
          <div>
            <h3>Course & LMS Details</h3>
            <label>Enrolled Course *</label>
            <select required>
              <option>Java Full Stack</option>
              <option>Python Full Stack</option>
              <option>AWS DevOps with Linux</option>
              <option>Python with Data Science</option>
              <option>Data Analytics</option>
              <option>Full Stack with Cloud Combo</option>
            </select>

            <label>Batch Details (Start & End Date) *</label>
            <input type="date" />
            <input type="date" />
          </div>
        );
      case "fee-details":
        return (
          <div>
            <h3>Fee Details 💰</h3>
            <label>Total Course Fee *</label>
            <input type="text" placeholder="Enter total fee" required />

            <label>Payment Mode *</label>
            <select>
              <option>UPI</option>
              <option>Card</option>
              <option>Net Banking</option>
              <option>Cash</option>
            </select>
          </div>
        );
      case "work-exp":
        return (
          <div>
            <h3>Work Experience (If Any)</h3>
            <label>Company Name</label>
            <input type="text" placeholder="Enter company name" />

            <label>Total Years of Experience</label>
            <input type="number" placeholder="Enter years" />
          </div>
        );
      case "skills":
        return (
          <div>
            <h3>Skills & Preferences</h3>
            <label>Technical Skills *</label>
            <input type="text" placeholder="Enter skills" />
          </div>
        );
      case "profiles":
        return (
          <div>
            <h3>External Profiles</h3>
            <label>LinkedIn Profile</label>
            <input type="url" placeholder="Enter LinkedIn URL" />

            <label>GitHub Profile</label>
            <input type="url" placeholder="Enter GitHub URL" />
          </div>
        );
      case "certifications":
        return (
          <div>
            <h3>Achievements & Certifications</h3>
            <label>Upload Certificates</label>
            <input type="file" />
          </div>
        );
      case "resume":
        return (
          <div>
            <h3>Resume Upload</h3>
            <label>Upload Resume *</label>
            <input type="file" required />
          </div>
        );
      default:
        return <p>Content for {activeTab} will be displayed here.</p>;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <span className="close-btn" onClick={onClose}>
          ✖
        </span>

        <div className="popup-container">
          {/* Sidebar */}
          <div className="popup-sidebar">
            <h2>Student Registration</h2>
            <ul>
              {sections.map((section) => (
                <li
                  key={section.id}
                  className={activeTab === section.id ? "active" : ""}
                  onClick={() => setActiveTab(section.id)}
                >
                  {section.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Content Area */}
          <div className="popup-content">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePopup;
