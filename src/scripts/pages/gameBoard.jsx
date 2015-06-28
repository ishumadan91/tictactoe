import React from 'react';

class GameBoard extends React.Component {
  
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
      <div className="game-board-wrap">
      
      </div>
    );
  }
}

export default GameBoard;