import React, { Component } from 'react';
import Component1 from  './component1'
import './app.css'

class app extends Component {
  render() {
    return (
      <div className='app'>
        <component1 />
      </div>
    );
  }
}


export default app;