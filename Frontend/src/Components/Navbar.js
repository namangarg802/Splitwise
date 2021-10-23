import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { AuthContext } from "./AuthContext";
import AlertContext from "./AlertContext";
import Alert from "./Alert";
import "../index.css";
// import '../../public/logos/logo2.png'
function Navbar() {
  const history = useHistory();
  const { isalert, showAlert } = useContext(AlertContext);
  const { auth, setAuth } = useContext(AuthContext);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setAuth(true);
      console.log("auth is true");
    } else {
      console.log("Auth is false");
    }
  });
  return (
    <nav className=" mx-auto pt-4  h-10 d-flex align-items-center justify-content-between  ">
      <img
        src="/logos/logo2.png"
        className="ml-4"
        style={{ height: "50px" }}
        alt=""
      />
      {!auth ? (
        <div className="d-flex mr-5  align-items-center">
          <button
            className="mr-5 font-bold navbtn1   "
            onClick={() => {
              history.push("/Login");
            }}
          >
            Log in
          </button>
          <button
            className="px-6 py-2  shadow rounded-full text-white font-bold  clk navbtn2
                  "
            onClick={() => {
              history.push("/Signup");
            }}
          >
            Sign Up
          </button>
        </div>
      ) : (
        <div className="d-flex mr-5  align-items-center">
          {" "}
          <button
            className="px-6 py-2  shadow rounded-full text-white font-bold   navbtn2
            "
            onClick={() => {
              localStorage.removeItem("token");
              setAuth(false);

              showAlert("Logged Out Susscessfuly", "success");
              history.push("/");
            }}
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
