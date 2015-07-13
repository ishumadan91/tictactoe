import Reflux from 'reflux';
import React from 'react';
import GameStore from '../stores/GameStore';
import actions from '../actions/actions';

class Cell extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <li>
                <a onClick={this.onClickCell.bind(this)}>{this.props.item}</a>
            </li>
        );
    }
    onClickCell() {
        if(!this.props.item && GameStore.isPlayerTurn) {
            actions.updateCell(this.props.index, GameStore.getPlayerSymbol())
        }
    }
}
class GameBoard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cells : ['', '', '', '', '', '', '', '', '']
        };
        // actions.listenTo('updateCell', this.updateCell.bind(this))
        actions.updateCell.listen(this.updateCell.bind(this));
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
    updateCell(index, symbol) {
        var cells = this.state.cells;
        cells[index] = symbol;
        this.setState({cells: cells});
    }
}
export default GameBoard;
