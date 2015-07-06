import React from 'react';

class Cell extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <li>
                <a onClick={this.onClick}>{this.props.item}</a>
            </li>
        );
    }
    onClick() {

    }
}
class GameBoard extends React.Component {
  
    constructor(props){
        super(props);
        this.state = {
            cells : ['', '', '', '', '', '', '', '', '']
        };
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        var items = [];
        for(var i in this.state.cells) {
            items.push(<Cell key={i} item={this.state.cells[i]} index={i} />)
        }
        return (
            <div className="game-board-wrap">
                <ul className="cells-list clearfix">
                    {items}
                </ul>
            </div>
        );
    }
}

export default GameBoard;