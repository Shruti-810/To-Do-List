import React from 'react'
import img from '../Image3.jpg'
import './Static.css'

const Body=()=>{
    return(
        <div>
        <div className="">
            <div className="d-flex" id="flex">
                <div className="text">
                    <h1>
                        We help teams move work forward
                    </h1>
                    <p className="p-1">
                    Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique - accomplish it all with us.
                    </p> 
                </div>
                <img src={img} className="p-5" alt="noimage" id="image"></img>
            </div>
        </div>
        <div className="">
            <h2 id="text2">It’s more than work. It’s a way of working together.</h2>
              <a href="/workspace" className="btn btn-white p-2" id="btn">Start doing<i className="bi bi-arrow-right p-2"></i></a>
        </div>
        </div>
    )
}

export default Body