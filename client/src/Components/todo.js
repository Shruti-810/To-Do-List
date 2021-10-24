import axios from 'axios'
import React, { Component } from 'react'
import { Consumer } from '../context'

export default class Todo extends Component {

    style=()=>{
        const {complete} = this.props.todo
        return {
            textDecoration :complete? "line-through":"none"
        }
    }
    
    toggle=(id,dispatch)=>{
        dispatch({type: "TOGGLE" , payload:id})
    }
    

    remove=(id,dispatch)=>{
        axios.delete("")
        dispatch({type: "REMOVE" , payload:id})
    }

    render(){
        const {title,id} = this.props.todo
    return (
        <Consumer>{value=>{
            const { dispatch } = value
            return  <h3 className="text-dark text-center p-1 bg-light border-bottom" style={this.style()}>
            <i className="bi bi-x float-left bi-sm m-1" onClick={this.remove.bind(this,id,dispatch)}></i>{title}
            <input type="checkbox" className="m-2 float-right" onChange={this.toggle.bind(this,id,dispatch)}></input>
        </h3>
        }}</Consumer>
       
    )
    }
}

