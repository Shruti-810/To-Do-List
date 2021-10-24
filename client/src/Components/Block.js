import React, { Component }  from "react";
import './Block.css';
import Todos from "./todos";
import { Provider } from '../context';
import Addtodo from './Addtodo'

export default class Block extends Component{
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
    render(){
        return(

        <Provider>
        <div className="">
        <Addtodo/>
        <Todos/>
        </div>
        </Provider>

    )
    }
}


