import React, {Component} from 'react';
import axios from 'axios';

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
        <h1>{`${this.props.url}${this.props.path}`}</h1>
        <ul>
          {categories.length ? 
            categories.map(cat => (
              <li key={cat.id}>
                <div>{cat.url}</div>
                <div>{cat.title}</div>
                <div>{cat.description}</div>
                <div>{cat.text}</div>
              </li>
            ))
            : 
            (<li>Loading....</li>)}
        </ul>
      </div>
    );
  }
}

export default FetchDemo;