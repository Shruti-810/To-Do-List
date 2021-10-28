import React, { useState } from 'react'
import { useHistory } from 'react-router'
import './SignUp.css'
// import img from '../Image4.svg'
import img2 from '../Image5.webp'
import axios from 'axios'

const Login = () => {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submitform = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/login", { email, password }).then((res) => {
            localStorage.setItem("user", JSON.stringify(res.data));
            history.push("/workspace");
        }).catch((err) => {

        })
    }
    return (
        <div>
            <div className="d-flex">
                {/* <img src={img} alt="noimg"></img> */}
                <div className="container" id="signup">
                    <form className="form-group p-3" onSubmit={submitform}>

                        <h5 className="p-3">Login to your account</h5>
                        <input type="text" placeholder="Enter Email" name="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                        <input type="password" placeholder="Enter Password" name="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
                        <button className="btn btn-secondary w-100" type="submit">Continue</button><br />
                        <hr />
                        <a href="/signup">Do not have an account? Sign Up</a>

                    </form>
                </div>
                <img src={img2} alt="noimg"></img>
            </div>
        </div>
    );
}



export default Login;