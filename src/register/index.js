import {Link} from "react-router-dom";
import "./index.css"

const RegisterComponent = () => {
    return (

        <div>

            <h2>Register</h2>

            <input
                className={"form-control"}
                placeholder={"username"}
            />

            <input
                className={"form-control"}
                placeholder={"password"}
            />

            <button className={"register-button"}>Register</button>

            <p></p>

            <h7>Already have an account? <Link to={"/login"}>Login here</Link></h7>






        </div>
    );
};

export default RegisterComponent;