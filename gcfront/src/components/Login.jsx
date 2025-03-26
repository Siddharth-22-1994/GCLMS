import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    position: "",
    phone: "",
    country: "",
    city: "",
    password: "",
    confirmPassword: "",
    gender: "Female",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registered:", formData);
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-3xl">
        {/* Registration Title */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Registration
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          {/* Full Name */}
          <div className="col-span-2 md:col-span-1">
            <label className="block text-gray-600">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Please enter your name"
              onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-lg"
            />
          </div>

          {/* Position */}
          <div className="col-span-2 md:col-span-1">
            <label className="block text-gray-600">
              Position you are applying for
            </label>
            <select
              name="position"
              onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-lg"
            >
              <option value="">Select</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Manager">Manager</option>
            </select>
          </div>

          {/* Email */}
          <div className="col-span-2 md:col-span-1">
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-lg"
            />
          </div>

          {/* Phone Number */}
          <div className="col-span-2 md:col-span-1">
            <label className="block text-gray-600">Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter your phone number"
              onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-lg"
            />
          </div>

          {/* Country */}
          <div className="col-span-2 md:col-span-1">
            <label className="block text-gray-600">Country</label>
            <input
              type="text"
              name="country"
              placeholder="Enter your country"
              onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-lg"
            />
          </div>

          {/* City */}
          <div className="col-span-2 md:col-span-1">
            <label className="block text-gray-600">City</label>
            <input
              type="text"
              name="city"
              placeholder="Enter your city"
              onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-lg"
            />
          </div>

          {/* Password */}
          <div className="col-span-2 md:col-span-1">
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-lg"
            />
          </div>

          {/* Confirm Password */}
          <div className="col-span-2 md:col-span-1">
            <label className="block text-gray-600">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-lg"
            />
          </div>

          {/* Gender Selection */}
          <div className="col-span-2">
            <label className="block text-gray-600">Gender</label>
            <div className="flex items-center gap-4 mt-1">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Male
              </label>

              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Female
              </label>

              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={formData.gender === "Other"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Other
              </label>

              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Prefer not to say"
                  checked={formData.gender === "Prefer not to say"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Prefer not to say
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-span-2 mt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Next Step
            </button>
          </div>
        </form>

        {/* Login Redirect */}
        <p className="text-center mt-4">
          Already have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
