import React from 'react'

import styles from './TodoList.module.css'

import Todo from './components/Todo'
import NewTodo from './components/NewTodo'

class TodoList extends React.Component {
  state = {
    list: [],
    newTodo: ''
  }

  handleAdd = () => {
    let arrList = this.state.list.concat({text: this.state.newTodo, ticked: false})
    this.setState({
      list: arrList,
      newTodo: ''
    })
  }
  handleValue = (e) => {
    this.setState({
      newTodo: e.target.value
    })
  }
  handleTick = idx => () => {
    this.setState(state => ({
      todos: this.state.todos.map((todo, todoIdx) => {
        toodIdx==idx ? {...todo, ticked: !todo.ticked} : todo
      })
    }))
  }
  handleDelete = () => {}

  render = () => {

    return (
      <div className={styles.Root}>
        <NewTodo
          value = {this.state.newTodo}
          onValue = {this.handleValue}
          onAdd = {this.handleAdd}
        />
        <Todo
          // key = {idx}
          data = {this.state.list}
          ticked = {true}
          onTick = {this.handleTick}
          onDelete = {this.handleDelete}
        />

      </div>
    )
  }
}

export default TodoList
