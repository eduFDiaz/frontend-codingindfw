import React, { Component } from 'react';
import DateBeautified from '../../components/DateBeautified/DateBeautified'
import MyLoader from '../../components/MyLoader/MyLoader'
import Category from './Category/Category'

export default class Categories extends Component {
    render() {
        return this.props.categories.map((category, index) => {
            return <Category 
            title={category.title}
            url={category.url}
            slug={category.slug}
            description={category.description}
            imageSrc={category.image}
            key={index}/>
        });
    }
}
//{this.props.categories.map((category, index) => {}};