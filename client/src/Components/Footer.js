import './Footer.css'
import React from 'react'


const Footer=()=>{
    return(
        <div id="footer">
            <hr/>
                <h5 className="p-3">Contact Us</h5>
                <h6 className="p-1">+91 88666 85974</h6>
                <hr className="text-dark" />
                <div className="">
                    <h6>Copyright &copy; 2021 ToDoList</h6>
                    <div className="p-3">
                        <i className="bi bi-facebook mx-3"></i>
                        <i className="bi bi-instagram mx-3"></i>
                        <i className="bi bi-twitter mx-3"></i>
                        <i className="bi bi-linkedin mx-3"></i>
                        <i className="bi bi-youtube mx-3"></i>
                    </div>
                </div>
        </div>
    );
}


export default Footer