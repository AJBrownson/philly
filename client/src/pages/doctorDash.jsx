/* eslint-disable no-unused-vars */
import {useState} from "react";
import axios from 'axios'



const Login = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const loginUser = (e) => {
    e.preventDefault();
    axios.get('/')
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   axios
  //     .post("http://localhost:5000/patients/login", {
  //       name,
  //       password,
  //     })
  //     .then((res) => {
  //       console.log(res)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     });

  //   // This clears form input values after submission
  //   setName("");
  //   setPassword('');
  // };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
          <h2 className="text-2xl mb-4 font-bold text-center">
            Login
          </h2>
          <form onSubmit={loginUser}>
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
                value={data.name}
                onChange={(e) => setName({...data, name: e.target.value})}
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
                value={data.password}
                onChange={(e) => setName({...data, password: e.target.value})}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-800 transition duration-300"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
