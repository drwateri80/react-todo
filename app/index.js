import React from 'react';
import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';
// import { Router, Route, hashHistory, IndexRoute } from 'react-router';

// import Test2 from './components/Test2';
import Todo from './components/Todob';
// import AboutUs from './components/About';

import  './assets/css/main.css';
import  './assets/css/font-awesome.min.css';

// import JS//
import  './assets/js/jquery.min.js';
import  './assets/js/jquery.poptrox.min.js';
import  './assets/js/jquery.scrolly.min.js';
import  './assets/js/jquery.scrollex.min.js';
import  './assets/js/skel.min.js';
import  './assets/js/util.js';

// import  './assets/js/ie/respond.min.js';
// import  './assets/js/main.js';



class App extends React.Component {
  render() {
    return (
        <div>
          <Todo/>
        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
