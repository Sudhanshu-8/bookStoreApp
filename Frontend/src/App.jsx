import React from "react";
import Home from "./Home/HOme";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./Courses/Courses";
import Signup from "./components/Signup";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUSer] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Course"
            element={authUser ? <Courses /> : <Navigate to="/Signup" />}
          />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
