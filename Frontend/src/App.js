import { useState, useEffect } from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { MyAlert } from "./Components/AlertContext";
import { AuthContext } from "./Components/AuthContext";
function App() {
  const [auth, setAuth] = useState(false);
  // const [t,sett]=useState(1);
  // useEffect(() => {
  //   const timer=setTimeout(() => {
  //     sett(t+1)
  //   }, 1000);
  //   // Clear timeout if the component is unmounted
  //   return () => clearTimeout(timer);
  // });
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setAuth(true);
      console.log("auth is true");
    } else {
      console.log("Auth is false");
    }
  });
  return (
    <>
      <Router>
        <MyAlert>
          <AuthContext.Provider value={{ auth, setAuth }}>
            <Navbar />
            <Switch>
              <Route path="/" component={Home} exact></Route>
              <Route path="/Login" component={Login} exact></Route>
              <Route path="/Signup" component={Signup} exact></Route>
            </Switch>
          </AuthContext.Provider>
        </MyAlert>
      </Router>
    </>
  );
}

export default App;
