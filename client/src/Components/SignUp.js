import React,{useState} from 'react'
import './SignUp.css'
// import img from '../Image4.svg'
import img2 from '../Image5.webp'

const Signup=()=>{
    const [email,setEmail] =  useState("");
    const [password,setPassword] =  useState("");
    const [allEntry,setAllEntry]  = useState([]);
    const submitform=(e)=>{
        e.preventDefault();
        const newEntry = {email: email,password:password};
        setAllEntry([...allEntry, newEntry]);
        console.log(newEntry);
    }
    return(
        <div>
            <div className="d-flex">
                {/* <img src={img} alt="noimg"></img> */}
                <div className="container" id="signup">
                    <form className="form-group p-3">

                        <h5 className="p-3">Sign up for your account</h5>
                        <input type="text" placeholder="Enter Email" className="form-control" /><br />
                        <input type="text" placeholder="Enter Username" className="form-control" /> <br />
                        <input type="password" placeholder="Enter Password" className="form-control" /> <br />
                        <input type="password" placeholder="Enter Password Again" className="form-control" /><br />
                        <p className="">
                            <small>By signing up, you confirm that you've read and accepted our <small className="sm">Terms of Service</small> and <small className="sm">Privacy Policy.</small></small>
                        </p>
                        <button className="btn btn-secondary w-100">Continue</button><br />
                        <hr />
                        <a href="#">Already have an account? Log In</a>

                    </form>
                </div>
                <img src={img2} alt="noimg"></img>
            </div>
        </div>
    )
}


export default Signup