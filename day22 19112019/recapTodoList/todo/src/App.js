import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodoText: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.newTodoText!='')
    {
      let newTodos = [
        ...this.state.todos,
        { text: this.state.newTodoText, isCompleted: false }
      ]
      this.setState({
        todos: newTodos,
        newTodoText: ''
      })
    }
  }

  handleChange = (e) => { 
    this.setState({newTodoText: e.target.value})
  }

  handleKeyPress = (e) => {
    // console.log(e.key)
    if(e.key=='Enter')
    {
      this.handleSubmit(e)
    }
  }

  handleCheck = (index) => {
    let {todos} = this.state
    let newList = todos.map((todo, idx) => {
      if (idx == index) {
        todo.isCompleted = !todo.isCompleted 
      }
      return todo
    })
    this.setState({
      todos: newList
    })
  }

  handleDelete = (index) => {
    console.log(index)
    let {todos} = this.state
    let newList = todos.filter((todo, idx) => {
      return idx==index ? false : true
    })
    this.setState({
      todos: newList
    })
  }
  
  render() {

    const todoList = this.state.todos.map((value, idx) => {
      return (
      <div key={idx} className="listTodo">
        <input type="checkbox" onClick={()=>this.handleCheck(idx)} checked={value.isCompleted}/> &nbsp;
        <span style={value.isCompleted ? {'textDecorationLine': 'line-through'} : {}}>{value.text}</span>
        <div className="cross" onClick={()=>this.handleDelete(idx)}>X</div>
      </div>
    )})
    
    return (
      <div className="allApp">

        <div className="inputAdd">
          <input
            id="new-todo"
            className="input"
            placeholder="add to do list"
            value={this.state.newTodoText}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
          <button onClick={this.handleSubmit} className="btnAdd">add</button>
        </div>

        <div>
          {/* <div className="listTodo">
            <input type="checkbox"/>&nbsp; eiei
            <div className="cross">X</div>
          </div> */}
          {todoList}
        </div>

      </div>
    )}
}

export default App;
