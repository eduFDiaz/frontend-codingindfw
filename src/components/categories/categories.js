import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

const { Meta } = Card;
//{`/posts/${item.id}`}
const Categories = (props) => {
    return props.data.map((item, index) => {
        return <Link to={`/categories/${item.id}`} key={index}>
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
        </Link>
    });
}

export default Categories;