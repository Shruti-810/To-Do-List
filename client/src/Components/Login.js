import React,{useState} from 'react'
import './SignUp.css'
// import img from '../Image4.svg'
import img2 from '../Image5.webp'


const Login=()=>{
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
                    <form className="form-group p-3" onSubmit={submitform}>

                        <h5 className="p-3">Login to your account</h5>
                        <input type="text" placeholder="Enter Email" name="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
                        <input type="password" placeholder="Enter Password" name="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}/> <br />
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



export default Login