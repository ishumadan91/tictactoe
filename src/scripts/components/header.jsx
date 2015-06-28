import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component{

  constructor(props, context) {
   super(props);
  }

  render() {
    return (
      <header className="clearfix">
        <div className="container">
          Application Name
          <nav className="clearfix">
            <div className="nav-item">
            </div>
            <div className="nav-item">
            </div>
          </nav>
        </div>
      </header>
    );
  }

}

Header.contextTypes = {
  router: React.PropTypes.func.isRequired
}

export default Header;