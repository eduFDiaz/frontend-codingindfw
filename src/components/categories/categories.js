import React, { Component } from 'react';
import Category from './Category/Category'

import { List, Avatar, Icon, Divider } from 'antd';
import Highlight from 'react-highlight';
import { Card } from 'antd';

const { Meta } = Card;

const Categories = (props) => {
    return props.data.map((item, index) => {
        return <div><Card
            key={index}
            hoverable
            style={{ width: 240 }}
            cover={<img alt={item.title} src={item.image} />}
            >
            <Meta
                title={item.title}
                description={item.description}
            />
        </Card></div>
    });
}

export default Categories;