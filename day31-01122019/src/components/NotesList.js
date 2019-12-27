import React from 'react'
import { connect } from 'react-redux'
import { removeNote, showActive, showInactive } from '../redux/actions/actions'
import { Button, Icon } from 'antd'
import { Row, Col } from 'antd'
import { Select } from 'antd'


class NotesList extends React.Component {
  constructor(props) {
    super(props)
  }

  // filterTag = (tag) => {
  //   this.props.notes.filter(note => note.tag === tag.tag)
  // }
  
  render() {
    const ButtonGroup = Button.Group
    const { Option } = Select
    let visibility = this.props.visibility
    let notes = this.props.notes.filter(note => note.status === visibility)

    const list = notes.map(note => (
      <Row key={note.id}>
          <Col span={1}></Col>
          <Col span={2}>{note.title}</Col>
          <Col span={1}></Col>
          <Col span={3}>{note.content}</Col>
          <Col span={1}></Col>
          <Col span={3}>{note.tag}</Col>
          <Col span={1}></Col>
          <Col span={4} style={{textAlign: 'center'}}>{note.date}</Col>
          <Col span={1}></Col>
          <Col span={3} style={{textAlign: 'center'}}>{note.dueDate}</Col>
          <Col span={1}></Col>
          <Col span={2} style={{textAlign: 'center'}}>
            <Button
              type="danger"
              onClick={() => this.props.removeNote(note.id)}
            ><Icon style={{fontSize: '20px'}} type="delete" /></Button>
          </Col>
          <Col span={1}></Col>
      </Row>
    ))

    return (
      <>
        <h3 style={{textAlign: 'center'}}>Notes</h3>
        <div style={{textAlign: 'center'}}>
          <ButtonGroup>
            <Button onClick={() => this.props.showActive()} style={{width: '100px'}}>Active</Button>
            <Button onClick={() => this.props.showInactive()} style={{width: '100px'}}>Inactive</Button>
          </ButtonGroup>
          <Select
            style={{width: '200px'}}
            placeholder="Select Tag"
            // onChange={this.handleTag}
          >
            {/* <Option value="Very Important">Very Important</Option>
            <Option value="Important">Important</Option>
            <Option value="General">General</Option> */}
          </Select>
        </div>

        <Row style={{textAlign: 'center'}}>
          <Col span={1}></Col>
          <Col span={2}>Title</Col>
          <Col span={1}></Col>
          <Col span={3}>Content</Col>
          <Col span={1}></Col>
          <Col span={3}>Tag</Col>
          <Col span={1}></Col>
          <Col span={4}>Date &#38; Time</Col>
          <Col span={1}></Col>
          <Col span={3}>Due Date</Col>
          <Col span={1}></Col>
          <Col span={2}></Col>
          <Col span={1}></Col>
        </Row>

          {list}
      </>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    notes: state.notes,
    visibility: state.visibility
  }
}

const mapDispatchToProps = {
  removeNote: removeNote,
  showActive: showActive,
  showInactive: showInactive
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesList)