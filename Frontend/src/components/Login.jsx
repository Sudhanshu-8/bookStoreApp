import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [authUser, setAuthUser] = useAuth();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4002/user/login", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Logined in Successfully");
          localStorage.setItem("Users", JSON.stringify(res.data.user));
          setAuthUser(res.data.user);
          document.getElementById("my_modal_3").close();
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error("error: " + err.response.data.message);
        }
      }); // You can handle form data here
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          {/* Form starts here */}
          <form onSubmit={handleSubmit(onSubmit)} className="dialog">
            {/* Close button */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
            {/* Title */}
            <h3 className="font-bold text-lg">Login</h3>
            {/* Email */}
            <div>
              <label className="block">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: "Email is required" })}
              />
              <br />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
            {/* Password */}
            <div>
              <label className="block">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: "Password is required" })}
              />
              <br />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>
            {/* Buttons */}
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
              >
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/Signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
