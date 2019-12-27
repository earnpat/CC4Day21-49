import React from 'react'
import './App.css'
import NoteForm from './components/NoteForm'
import NotesList from './components/NotesList'
import { Row, Col } from 'antd'

function App() {
  return (
    <div>
      <div>
        <h1 style={{textAlign: "center"}}>React-Redux Notes app</h1>
        <Row>
          <Col span={5}></Col>
          <Col span={14}>
            <NoteForm />
          </Col>
          <Col span={5}></Col>
        </Row>
        <hr />
        <NotesList />
      </div>
    </div>
  )
}

export default App