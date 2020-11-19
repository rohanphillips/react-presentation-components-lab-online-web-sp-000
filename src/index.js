import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

clickResponse = (event) =>{
  event.target.value = "I was clicked"
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={this.clickResponse}/>
  </div>,
  document.getElementById('root')
);