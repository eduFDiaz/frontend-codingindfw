import React, {Component} from 'react';
import DateBeautified from '../../components/DateBeautified/DateBeautified'
import MyLoader from '../../components/MyLoader/MyLoader'

export default class Categories extends Component{
    render(){
        return(
            <div>
            {this.props.categories.map(cat => (
              <div className="post">
                <h1><a href={cat.url}>{cat.title}</a></h1>
                <div className="date">
					          <p><DateBeautified dateToFormat={cat.published_date}/></p>
				        </div>
                <p dangerouslySetInnerHTML = {{__html: cat.description }} />
                <div dangerouslySetInnerHTML = {{__html: cat.text }} />
              </div>
            )) : (<MyLoader/>)}
            </div>
        );
    }
}