import React, { Component } from 'react'
import { Col, Card, Row, Avatar, Divider, Upload, Button, Icon } from 'antd'
import TextArea from 'antd/lib/input/TextArea'

export default class CreatePost extends Component {
  render() {
    return (
      <Col>
        <Row>
          <Card title="Create Post">
            <Row type='flex'>
              <Col span={4}>
                <Avatar src={this.props.avatarSrc}/>
              </Col>
              <Col span={20}>
                <TextArea
                  autoSize={{minRows: 2, maxRows: 6}}
                  placeholder="Write Something"
                />
              </Col>
            </Row>
            <Divider style={{marginBottom: '15px'}} />
            <Row>
              <Upload>
                <Button>
                  <Icon type="picture" /> Picture
                </Button>
              </Upload>
            </Row>
          </Card>
        </Row>
      </Col>
    )
  }
}
