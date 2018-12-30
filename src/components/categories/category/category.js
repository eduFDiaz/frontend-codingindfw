import React, {Component} from 'react';
import classes from './Category.css'
import { Card } from 'antd';

const { Meta } = Card;

export default class Category extends Component{
    render(){
        return(
            <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta
      title="Europe Street beat"
      description="www.instagram.com"
    />
  </Card>
        );
    }
}

/* 
<div className={desclasses} key={this.props.index}>
<img src={this.props.imageSrc} alt={this.props.title}/>
<h1 className={classes.title}>{this.props.title}</h1>
<p>{this.props.description}</p>
</div> */