/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";



const DoctorLogin = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
  });
  const { username, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        ["http://localhost:5000/doctor/doctorLogin",
        "https://philly-production.up.railway.app/doctor/doctorLogin"],
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        console.log('sucessful');
        handleSuccess(message);
        setTimeout(() => {
          navigate("/doctorDash");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      username: "",
      password: "",
    });
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
          <h2 className="text-2xl mb-4 font-bold text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1 font-semibold">
                Name
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                className="w-full border rounded px-3 py-2"
                value={username}
                onChange={handleOnChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-1 font-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full border rounded px-3 py-2"
                value={password}
                onChange={handleOnChange}
              />
            </div>
            <div className="text-center flex flex-col">
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-800 transition duration-300"
              >
                Login
              </button>
              <span className="text-center mt-5">
                Already have an account? <Link to={"/doctorSignup"}>Signup</Link>
              </span>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default DoctorLogin;
