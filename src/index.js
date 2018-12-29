import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import serviceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker();
