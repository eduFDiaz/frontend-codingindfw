import React from "react";
import { Form, Input, Button, Upload, message, Icon } from "antd";
import axios from 'axios';

export default class CustomForm extends React.Component {
    state = {
        
    }
    handleFormSubmit = (event,requestType, id) => {
        event.preventDefault();
        const title = event.target.elements.title.value;
        const description = event.target.elements.description.value;
        const slug = 'slug-slug';
        switch ( requestType ) {
            case 'post': {
                return axios.post('http://localhost:8000/api/categories/', {
                    title: title,
                    description: description,
                    slug: slug
                }).then(response => {
                    console.log(response);
                    this.props.history.push('/');
                })
                    .catch(error => console.error(error));
            }
            case 'put': {
                return axios.put(`http://localhost:8000/api/categories/${id}/`, {
                    title: title,
                    description: description,
                    slug: slug
                }).then(response => {
                    console.log(response);
                    this.props.history.push('/');
                })
                    .catch(error => console.error(error));
            }
            default:{
                console.log('Inside default case in CustomForm')
                return;
            }
        }
    }
    render() {
        return (
            <div>
                <Form onSubmit={(event) => this.handleFormSubmit(
                    event,
                    this.props.requestType,
                    this.props.id
                )}>
                    <Form.Item label="Title">
                        <Input name='title' placeholder="write a tittle here" />
                    </Form.Item>
                    <Form.Item label="Description">
                        <Input name='description' placeholder="Write a description here" />
                    </Form.Item>
                    <Form.Item label="Slug">
                        <Input disabled name='slug' placeholder="The slug will be generated before saving the instance" />
                    </Form.Item>
                    <Form.Item>
                        <Button loading={this.state.BtnLoading} onClick={this.enterLoading}  type="primary" htmlType="submit">{this.props.btnText}</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
