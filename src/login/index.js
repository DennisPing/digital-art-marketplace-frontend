import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginThunk } from "../services/users/user-thunks";

const LoginComponent = () => {
  let userInfo = {
    username: "",
    password: "",
  };
  const [user, setUser] = useState(userInfo); // hook

  const dispatch = useDispatch();
  const loginHandler = async () => {
    if (!user.username || !user.password) {
      alert("Please fill out all fields.");
      return;
    }
    try {
      await dispatch(loginThunk(user)).unwrap();
      setSuccess(true);
      // Wait 3 seconds before redirecting to /home
      setTimeout(() => {
        window.location.href = "/home";
      }, 3000);
    } catch {
      setSuccess(false);
    }
  };

  // Show password toggler
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  // Success message
  const [success, setSuccess] = useState(null);

  return (
    <>
      <h1 className="fw-bold text-center py-3">Log In</h1>
      <div className="list-group-item w-25 m-auto">
        {success === true && (
          <div className="alert alert-success text-center">
            {" "}
            <p className="m-0">
              Succesfully logged in
              <br />
              Redirecting to home page...
            </p>
          </div>
        )}
        {success === false && <div className="alert alert-danger text-center">Unable to log in</div>}
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="usernameField"
            placeholder="Username"
            maxLength={64}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <label htmlFor="usernameField">Username</label>
        </div>
        <div className="form-floating mt-3">
          <input
            type={showPassword ? "text" : "password"}
            className="form-control position-relative"
            id="passwordField"
            placeholder="Password"
            maxLength={64}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <label htmlFor="passwordField">Password</label>
          <i
            type="button"
            className={`${
              showPassword ? "bx bxs-show" : "bx bxs-hide"
            } text-secondary bx-sm position-absolute wd-visibility`}
            onClick={handlePasswordToggle}
          />
        </div>
        <div className="wd-register-btn py-4">
          <button className="btn btn-primary btn-lg rounded-pill" onClick={loginHandler}>
            Log In
          </button>
        </div>
      </div>

      <h6 className="text-center">
        Don't have an account? <Link to={"/register"}>Register here</Link>{" "}
      </h6>
    </>
  );
};
// let loggedIn = false;

//   const userInfo = { username: "", password: "" };

//   const userInfoHandler = () => {
//     userInfo.username = document.getElementById("usernameLoginField").value;
//     userInfo.password = document.getElementById("passwordLoginField").value;

//     document.getElementById("current user").innerHTML = "Welcome " + userInfo.username;

//     loginHandler(userInfo);
//   };

//   const dispatch = useDispatch();

//   const loginHandler = (user) => {
//     dispatch(loginThunk(user));

//     // loggedIn = true;
//   };

//   return (
//     <div>
//       <h2>Login</h2>

//       <h4 id={"current user"}>UserName</h4>

//       <input id={"usernameLoginField"} className={"form-control"} placeholder={"username"} />

//       <input id={"passwordLoginField"} className={"form-control"} placeholder={"password"} />

//       <button className={"register-button"} onClick={userInfoHandler}>
//         Login
//       </button>

//       <p></p>

//       <h6>
//         Don't have an account? <Link to={"/register"}>Register here</Link>{" "}
//       </h6>
//     </div>
//   );
// };

export default LoginComponent;
