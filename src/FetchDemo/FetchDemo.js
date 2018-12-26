import React, {Component} from 'react';
import axios from 'axios';
import DateBeautified from '../DateBeautified/DateBeautified'
import MyLoader from '../MyLoader/MyLoader'

{/* https://daveceddia.com/ajax-requests-in-react/ */}

class FetchDemo extends Component {
  state = {
    categories: []
  }
  
  componentDidMount() {
    /* This component is invoked immediately after a component is mounted
     (inserted into the tree). Initialization that requires DOM nodes 
     should go here. If you need to load data from a remote endpoint, 
     this is a good place to instantiate the network request.
    */
    console.log(`${this.props.url}${this.props.path}`);
    axios.get(`${this.props.url}${this.props.path}`).then(res => {
      console.log(res.data);
      this.setState({
        categories: res.data.results
      });
      console.log('state cetegories: ',this.state.categories);
    });
  }
  
  render() {
    const { categories } = this.state;
    return (
      <div>
        <h1>{`${this.props.description}`}</h1>        
          {categories.length ? 
            categories.map(cat => (
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

export default FetchDemo;