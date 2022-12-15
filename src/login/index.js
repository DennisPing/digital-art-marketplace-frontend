import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginThunk } from "../services/users/user-thunks";

const LoginComponent = () => {
  let loggedIn = false;

  const userInfo = { username: "", password: "" };

  const userInfoHandler = () => {
    userInfo.username = document.getElementById("usernameLoginField").value;
    userInfo.password = document.getElementById("passwordLoginField").value;

    document.getElementById("current user").innerHTML = "Welcome " + userInfo.username;

    loginHandler(userInfo);
  };

  const dispatch = useDispatch();

  const loginHandler = (user) => {
    dispatch(loginThunk(user));

    loggedIn = true;
  };

  return (
    <div>
      <h2>Login</h2>

      <h4 id={"current user"}>UserName</h4>

      <input id={"usernameLoginField"} className={"form-control"} placeholder={"username"} />

      <input id={"passwordLoginField"} className={"form-control"} placeholder={"password"} />

      <button className={"register-button"} onClick={userInfoHandler}>
        Login
      </button>

      <p></p>

      <h6>
        Don't have an account? <Link to={"/register"}>Register here</Link>{" "}
      </h6>
    </div>
  );
};

export default LoginComponent;
