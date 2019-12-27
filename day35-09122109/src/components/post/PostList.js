import React, { Component } from 'react'
import { Col } from 'antd'
import Post from './Post'

export default class PostList extends Component {
  renderPostList() {
    return this.props.postList.map(post =>
      <Post
        author = {post.author}
        message = {post.message}
        imgSrc = {post.imgSrc}
        date = {post.date}
        owner = {post.owner}
        commentList = {post.commentList}
      />
      )
  }
  render() {
    return (
      <div>
        <Col>
          {this.renderPostList()}
        </Col>
      </div>
    )
  }
}
