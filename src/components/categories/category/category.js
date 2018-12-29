import React, {Component} from 'react';
import classes from './Category.css'
import DateBeautified from '../../DateBeautified/DateBeautified';

export default class Category extends Component{
    render(){
        return(
            <div className={classes.Category} key={this.props.index}>
                <img src={this.props.imageSrc} alt={this.props.title}/>
                <h1 className={classes.title}>{this.props.title}</h1>
                <p>{this.props.description}</p>
            </div>
        );
    }
}