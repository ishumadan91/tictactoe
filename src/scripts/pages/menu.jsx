import React from 'react';
import { Link } from 'react-router';

class Menu extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      items : [],
      loading: false
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className="menu-content">
        <Link to="start">Start</Link>
      </div>
    );
  }
}

export default Menu;