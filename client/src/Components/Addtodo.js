import React, { Component }  from "react";
import './Block.css';
import { Consumer } from "../context";
import axios from "axios";

export default class Addtodo extends Component{
    state={
        id:4,
        title:"",
        complete:false
    }
    Update=(e)=>{
        this.setState(
           {title:e.target.value}
        )
    }

    add=(dispatch ,e)=>{
     e.preventDefault()
     const newtodo=this.state
    //  return axios.post("/todos", newtodo)
    //  .then(res=>dispatch({type:"ADD", payload:res.data}))
     dispatch({type:"ADD", payload: newtodo})
     this.setState({title:""})
    }
    render(){
        return(
            <Consumer>{
                value=>{

                    const {dispatch}=value
                    return   <div>
                    <h2 className="header">ToDoList</h2>
                   <form className="p-2" onSubmit={this.add.bind(this,dispatch)}>
                       <input type="text" onChange={this.Update} placeholder="Write your todo here.." value={this.state.title} className="form-control rounded-0"/>
                       <button className="btn form-control rounded-0 btn-secondary" type="submit">Add todo</button>
                   </form> 
                   
                   </div>
                }}
          
        </Consumer>
    )
    }
}


