import React from 'react'

import styles from './TodoList.module.css'

import NewTodo from './components/NewTodo'
import Todo from './components/Todo'

const API = 'http://localhost:3001'

class TodoList extends React.Component {
  state = {
    textValue: '',
    todos: [] // { id: String, ticked: Boolean, name: String }
  }

  componentDidMount = async() => {
    // const URL = API + '/todos' 
    const response = await fetch(`${API}/todos`)

    // const data =  await response.json()
    // console.log(data)
    // this.setState({
    //   todos: data
    // })
    const todos =  await response.json()
    this.setState({ todos })
  }

  handleChange = e => {
    this.setState({
      textValue: e.target.value
    })
  }

  handleAdd = async() => {
    if (!this.state.textValue) return
    
    // ส่งข้อมูลไป server
    const todo = { name: this.state.textValue, ticked: false }
    await fetch(`${API}/todos`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(todo)
    })

    const response = await fetch(`${API}/todos`)
    const todos =  await response.json()

    // todo + textValue same time
    this.setState({
      todos,
      textValue: ''
    })

    // todo -> textValue
    // this.setState(
    //   state => ({
    //     todos: state.todos.concat({ ticked: false, name: state.textValue })
    //   }),
    //   () => {
    //     this.setState({ textValue: '' })
    //   }
    // )
  }

  handleTick = id => async() => {
    const tickedTodo = this.state.todos.find(x => x.id==id)
    // console.log(tickedTodo)
    tickedTodo.ticked = !tickedTodo.ticked

    await fetch(`${API}/todos/${id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(tickedTodo)
    })

    const response = await fetch(`${API}/todos`)
    const todos =  await response.json()

    this.setState({ todos })

    // this.setState(state => ({
    //   todos: state.todos.map((todo, todoIdx) =>
    //     todoIdx === id ? { ...todo, ticked: !todo.ticked } : todo
    //   )
    // }))
  }

  handleDelete = id => async() => {
    await fetch(`${API}/todos/${id}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' }
    })

    const response = await fetch(`${API}/todos`)
    const todos =  await response.json()

    this.setState({ todos })

    // this.setState(state => ({
    //   todos: state.todos.filter((todo, todoIdx) => todoIdx !== id)
    // }))
  }

  render = () => {
    return (
      <div className={styles.Root}>
        <NewTodo
          textValue={this.state.textValue}
          onChange={this.handleChange}
          onAdd={this.handleAdd}
        />
        {this.state.todos.map(({ ticked, name, id }) => (
          <Todo
            key={id}
            ticked={ticked}
            name={name}
            onTick={this.handleTick(id)}
            onDelete={this.handleDelete(id)}
          />
        ))}
      </div>
    )
  }
}

export default TodoList