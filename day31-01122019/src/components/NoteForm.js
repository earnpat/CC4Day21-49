import React from 'react'
import { connect } from 'react-redux'
import { addNote } from '../redux/actions/actions'
import { Input } from 'antd'
import { Button, Radio, Icon } from 'antd'
import { DatePicker } from 'antd'
import { Select } from 'antd'
import { Row, Col } from 'antd'

class NoteForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      content: '',
      dueDate: null,
      tag: ''
    }
  }

  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleContentChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  handleDueDateChange = (date, dateString) => {
    console.log(dateString) // use
    this.setState({
      dueDate: dateString
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // console.log(this.state.tag)

    this.props.addNote(this.state.title, this.state.content, this.state.dueDate, this.state.tag)
      this.setState({
        title: '',
        content: '',
        tag: '',
        dueDate: null
      })

    // if((this.state.title && this.state.content && this.state.tag !== '') && this.state.dueDate !== null)
    // {
    //   this.props.addNote(this.state.title, this.state.content, this.state.dueDate, this.state.tag)
    //   this.setState({
    //     title: '',
    //     content: '',
    //     tag: '',
    //     dueDate: null
    //   })
    // }
  }

  handleTagChange = (e) => {
    this.setState({
      tag: e.target.value
    })
  }


  render() {
    const { TextArea } = Input;
    const dateFormatList = ['DD/MM/YYYY'];
    const { Option } = Select;

    return (
      <form>
        <h3>Add a Note</h3>
        <Input
          type="text"
          name="title"
          placeholder="Title"
          onChange={this.handleTitleChange}
          value={this.state.title}
        />
        <br />
        <TextArea
          rows={4}
          name="content"
          placeholder="Content"
          cols="30"
          rows="5"
          onChange={this.handleContentChange}
          value={this.state.content}
        />
        <br />

          <Input
            type="text"
            name="title"
            placeholder="Add New Tag"
            onChange={this.handleTagChange}
            value={this.state.tag}
          />

        <DatePicker
        style={{width: '100%'}}
          format={dateFormatList}
          onChange={(date, dateString) => this.handleDueDateChange(date, dateString)}
        />
        <br />
        <Button // Add Note
          type="primary" 
          onClick={this.handleSubmit}
          style={{width: '100%'}}
        >Add Note</Button>
      </form>
    )
  }
}

const mapDispatchToProps = {
  addNote: addNote
}

export default connect(null, mapDispatchToProps)(NoteForm)