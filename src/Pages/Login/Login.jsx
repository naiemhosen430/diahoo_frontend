import React from "react";
import NavNotLogin from "./Components/Nav";
import LoginForm from "./Components/LoginForm";

function Login() {
  return (
    <div>
      <NavNotLogin />
      <div className="lg:flex justify-center">
        <div className="lg:w-6/12 lg:block lg:m-20 lg:p-10 p-5 lg:mr-0 bg-slate-950">
          <h1 className="text-slate-500 lg:text-3xl text-2xs font-bold text-center">
            Welcome back to Diahoo
          </h1>
          <p className="text-slate-600 lg:block hidden p-5">
            Welcome back to diahoo of your digital life! 🌐 Log in to reconnect
            with friends, share your latest adventures, and stay in the loop
            with the moments that matter most. Your community awaits—let's dive
            back into the conversation! #StayConnected 📱💬
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
