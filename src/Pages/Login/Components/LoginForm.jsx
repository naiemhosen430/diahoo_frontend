import { useState } from "react";

import api from "../../../api/api";
import LoginFormData from "./LoginFormData";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
  const [FormData, setFormData] = useState(LoginFormData);
  const [err, setErr] = useState();
  const navigate = useNavigate();

  const hundleOnchange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    await api
      .post("/api/v1/user/login", FormData)
      .then(function (response) {
        localStorage.setItem("accessToken", response.data.data);
        navigate("/");
      })
      .catch(function (error) {
        if (error) {
          setErr(error.response.data.message);
          navigate("/login");
        }
      });
  };

  return (
    <>
      <div className="lg:w-6/12 lg:p-20 lg:py-0 p-5">
        <p className="text-center text-white m-4">{err}</p>
        <form className="bg-slate-900 rounded-lg p-10 m-auto">
          <h1 className="text-3xl py-10 pt-0 text-slate-400 p-4 font-bold text-center">
            Login here
          </h1>
          <label className="block mx-2 text-xl text-slate-200" htmlFor="email">
            Write your email
          </label>
          <input
            className="text-sm text-slate-400 block rounded-xl my-5 py-2 px-4 w-full bg-slate-950 border-slate-700"
            type="email"
            placeholder="Write your email"
            value={FormData.email}
            name="email"
            id="email"
            onChange={hundleOnchange}
          />

          <label
            className="block mx-2 text-xl text-slate-200"
            htmlFor="password"
          >
            Write your password
          </label>
          <input
            className="text-sm text-slate-400 block rounded-xl my-5 py-2 px-4 w-full bg-slate-950 border-slate-700"
            type="password"
            placeholder="Write your password"
            value={FormData.password}
            name="password"
            id="password"
            onChange={hundleOnchange}
          />
          <div className="flex items-center">
            <input
              className="text-xl px-5 py-2 bg-slate-800 rounded-lg cursor-pointer text-white font-bold"
              onClick={handleSubmit}
              type="button"
              value="Login"
            />
            <h1 className="px-5">
              <Link
                className="text-slate-500 hover:text-white hover:underline"
                to={"/resetpassword"}
              >
                Forgotten password?
              </Link>
            </h1>
          </div>

          <div className="flex items-center p-10 text-white font-bold">
            <div className="h-1 w-5/12 bg-slate-800"></div>
            <h1 className="px-5">Or</h1>
            <div className="h-1 w-5/12 bg-slate-800"></div>
          </div>

          <div className="text-center">
            <h1 className="px-5">
              <Link
                className="text-white bg-slate-800 shadow-2xl p-2 px-4 rounded-2xl hover:text-white hover:underline"
                to={"/resetpassword"}
              >
                Create an account now?
              </Link>
            </h1>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
