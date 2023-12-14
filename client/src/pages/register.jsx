/* eslint-disable no-unused-vars */
import {useState} from "react";
import axios from 'axios'
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";



const Register = () => {
  const [name, setName] = useState('')
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')



  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/patients/register", {
        name,
        user,
        email,
        password,
      })
      .then((res) => {
        console.log("Registered successfully!");
        // Redirect to login page
        Navigate("/login");
      })
      .catch((err) => {
        console.log(err)
      });

    // This clears form input values after submission
    setName("");
    setUser("");
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
          <h2 className="text-2xl mb-4 font-bold text-center">
            Register Here
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1 font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full border rounded px-3 py-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
			<div className="mb-4">
              <label htmlFor="user" className="block mb-1 font-semibold">
                User
              </label>
              <input
                type="text"
                id="user"
                name="user"
                placeholder="Enter your designation"
                className="w-full border rounded px-3 py-2"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full border rounded px-3 py-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-center">
              <Link to='/login'>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-800 transition duration-300"
              >
                Sign Up
              </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
