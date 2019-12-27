import React, { Component } from 'react'
import { Card, Row, Col, Avatar, Button, Comment } from 'antd'
import Text from "antd/lib/typography/Text"
import CommentList from '../comment/CommentList'

export default class Post extends Component {
    render() {
        const post = this.props

        return (
            <div>
                <Card style={{marginTop: "10px"}}>
                    <Row type='flex'>
                        <Col style={{width: 'min-content', paddingRight: '10px'}}>
                            <Row 
                                style={{height: '100%'}}
                                type="flex"
                                justify="center"
                                align="middle"
                            >
                                <Avatar size="large" src={post.author.profilePic}/>
                            </Row>
                        </Col>
                        <Col style={{width: 'min-content'}}>
                            <Row>
                                <Button type="link" style={{padding: '0'}}>
                                    <strong>{post.author.name}</strong>
                                </Button>
                            </Row>
                            <Row>
                                <Text type="secondary">{post.date}</Text>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        {post.message}
                    </Row>
                    <Row>
                        <img style={{width: '100%'}} src={post.imgSrc} alt=""/>
                    </Row>
                    <Row>
                        <CommentList commentList={post.commentList}/>
                    </Row>
                </Card>
            </div>
        )
    }
}
