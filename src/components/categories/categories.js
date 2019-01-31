import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'antd';

import classes from './Categories.css';

const { Meta } = Card;
//{`/posts/${item.id}`}

const Categories = (props) => {
    return <Row gutter={10}> {props.data.map((item, index) => {
        return <Col className={classes.box} xm={{ span: 6 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
            <Link to={`/categories/${item.id}`} key={index}>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt={item.title} src={item.image} />}
                >
                    <Meta
                        title={item.title}
                        description={item.description}
                    />
                </Card>
            </Link></Col>
    })}</Row>;
}

export default Categories;