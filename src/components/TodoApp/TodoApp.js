import React, { Component } from "react";
import "./TodoApp.css";

class TodoApp extends Component {
  state = {
    input: "",
    items: [],
  };

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  
  };

  storeItems =(event)=>{
    event.preventDefault();
     const {input} = this.state;
     
     this.setState({
        items:[...this.state.items, input],
        input:""

     });
  }

  deleteItem =key=>{
    
    this.setState({
        items: this.state.items.filter((data, index)=>index !== key)
    });

  }

  editItems =key=>{
    this.setState({
        items:this.state.items
    })
  }
  render() {
    const { input,items } = this.state;
    console.log(items);


    return ( 
      <div className="todo-container">
        <form className="input-section" onSubmit={this.storeItems}>
          <h1>Todo App</h1>
          <input
            type="text"
            value={input}
            onChange={this.handleChange}
            placeholder="Enter Items..."
          />
        </form>

        <ul>
            {items.map((data, index) =>(
                <li key={index}>
                  <p>{data}</p>  <span> <i className="fas fa-edit" onClick={()=>this.editItems(index)}></i> <i className="fa-solid fa-trash-can" onClick={()=>this.deleteItem(index)}></i></span>

                </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default TodoApp;
