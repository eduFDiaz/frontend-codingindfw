import React from "react";
import { Form, Input, Button, Upload, message, Icon } from "antd";
import axios from 'axios';

export default class CustomForm extends React.Component {
    handleFormSubmit = (event,requestType, id) => {
        const title = event.target.elements.title.value;
        const description = event.target.elements.description.value;
        const slug = event.target.elements.slug.value;
        switch ( requestType ) {
            case 'post': {
                return axios.post('http://localhost:8000/api/categories/', {
                    title: title,
                    description: description,
                    slug: slug,
                }).then(response => console.log(response))
                    .catch(error => console.err(error));
            }
            case 'put': {
                return axios.put(`http://localhost:8000/api/categories/${id}/`, {
                    title: title,
                    description: description,
                    slug: slug,
                }).then(response => console.log(response))
                    .catch(error => console.err(error));
            }
            default:{
                console.log('Inside default case in CustomForm')
                return;
            }
        }
        console.log(title,description,slug);
    }
    render() {
        const props = {
            name: 'file',
            action: '//jsonplaceholder.typicode.com/posts/',
            headers: {
                authorization: 'authorization-text',
            },
            onChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    message.success(`${info.file.name} file uploaded successfully`);
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
        };
        return (
            <div>
                <Form onSubmit={(event) => this.handleFormSubmit(
                    event, this.props.requestType, this.props.id )}>
                    <Form.Item label="Title">
                        <Input name='title' placeholder="Put a tittle here" />
                    </Form.Item>
                    <Form.Item label="Description">
                        <Input name='description' placeholder="Put a description here" />
                    </Form.Item>
                    <Form.Item label="Slug">
                        <Input name='slug' placeholder="enter the slug here" />
                    </Form.Item>
                    <Upload {...props}>
                        <Upload name='image'>
                            <Icon type="upload" /> Click to Upload
                        </Upload>
                    </Upload>
                    <Form.Item>
                        <button htmlType="submit" type="primary">{this.props.btnText}</button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
