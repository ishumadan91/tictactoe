import Reflux from 'reflux';
import React from 'react';
import GameStore from '../stores/GameStore';
import actions from '../actions/actions';

class Error extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error : null
        };
        // actions.listenTo('updateCell', this.updateCell.bind(this))
        actions.showError.listen(this.showError.bind(this));
    }
    render() {
        if(!this.state.error) {
            return false;
        }
        return (
            <div className="error">
                <p>{this.state.error}</p>
            </div>
        );
    }
    showError(error) {
        this.setState({error: error});
    }
}
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
        if(this.props.item) {
            actions.showError('Cell already filled');
        }
        else if(!GameStore.isPlayerTurn) {
            actions.showError('CPU turn');
        }
        else {
            GameStore.setCellData(this.props.index, GameStore.getPlayerSymbol());
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
        actions.updateCellInView.listen(this.updateCellInView.bind(this));
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
                <Error />
            </div>
        );
    }
    updateCellInView(cells) {
        this.setState({cells: cells});
    }
}
export default GameBoard;
