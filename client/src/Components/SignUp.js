import React, { useState } from 'react'
import { useHistory } from 'react-router'
import './SignUp.css'
// import img from '../Image4.svg'
import img2 from '../Image5.webp'
import axios from 'axios'

const Signup = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const submitform = (e) => {
        const data = { name, email, password };
        console.log("here");
        axios.post("register/", data).then((res) => {
            console.log("heredsf");
            localStorage.setItem("user", JSON.stringify(res.data));
            history.push("/workspace");
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            console.log("finalll");
        })
        e.preventDefault();

    }
    return (
        <div>
            <div className="d-flex">
                {/* <img src={img} alt="noimg"></img> */}
                <div className="container" id="signup">
                    <form className="form-group p-3" onSubmit={submitform}>

                        <h5 className="p-3">Sign up for your account</h5>
                        <input type="text" placeholder="Enter Email" name="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                        <input type="text" placeholder="Enter Name" name="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} /><br />
                        <input type="password" placeholder="Enter Password" name="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
                        <input type="password" placeholder="Enter Password Again" className="form-control" /><br />
                        <p className="">
                            <small>By signing up, you confirm that you've read and accepted our <small className="sm">Terms of Service</small> and <small className="sm">Privacy Policy.</small></small>
                        </p>
                        <button type="submit" className="btn btn-secondary w-100">Continue</button><br />
                        <hr />
                        <a href="#">Already have an account? Log In</a>

                    </form>
                </div>
                {/* <img src={img2} alt="noimg"></img> */}
            </div>
        </div>
    )
}


export default Signup