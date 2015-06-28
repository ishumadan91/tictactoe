import React from 'react';
import { RouteHandler } from 'react-router';
import Header from '../components/header.jsx'

class App extends React.Component {
  
  render() {
    return (
      <div>
        <Header />
        <div className="content">
          <div className="container">
            <RouteHandler/>
         </div>
        </div>
      </div>
    );
  }
  
}

export default App;