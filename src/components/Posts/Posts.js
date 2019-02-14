import React from 'react';
import { List, Avatar, Icon } from 'antd';
import Highlight from 'react-highlight';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const Posts = (props) => {
            return <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 3,
            }}
            dataSource={props.data}
            footer={<div><b>ant design</b> footer part</div>}
            renderItem={item => (
              <List.Item
                key={item.title}
                actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
              >
                <List.Item.Meta
                  avatar={<Avatar size={64} src="http://localhost:8000/media/me.JPG" />}
                  title={<a href={`/posts/${item.id}`}>{item.title}</a>}
                  description={<Highlight innerHTML={true}>{item.description}</Highlight>}
                />
              </List.Item>
            )}
          />
}
export default Posts;