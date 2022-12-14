import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {loginThunk} from "../services/users/user-thunks";


//function LoginUser(){

   // const username = document.getElementById("usernameLoginField").value
   // const password = document.getElementById("passwordLoginField").value
   // console.log(username)
  //  console.log(password)
   // console.log("loginUser() reached")

    // log the user in
   // const dispatch = useDispatch()
   // const loginUser = (username, password)
    //dispatch(loginThunk(loginUser))


//}

const user = {

    username: "",
    password: "",


}

const LoginComponent = () => {

   user.username = document.getElementById("usernameLoginField").value
    user.password = document.getElementById("passwordLoginField").value



    const dispatch = useDispatch()

    const loginHandler = (user) =>{

        dispatch(loginThunk(user))
    }

    return (

        <div>

            <h2>Login</h2>

            <input id={"usernameLoginField"}
                className={"form-control"}
                placeholder={"username"}
            />

            <input id={"passwordLoginField"}
                className={"form-control"}
                placeholder={"password"}
            />

            <button className={"register-button"} onClick={loginHandler}>Login</button>

            <p></p>

            <h7>Don't have an account? <Link to={"/register"}>Register here</Link> </h7>






        </div>
    );
};

export default LoginComponent;