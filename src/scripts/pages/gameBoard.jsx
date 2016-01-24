import Reflux from 'reflux';
import React from 'react';
import GameStore from '../stores/GameStore';
import actions from '../actions/actions';

class Status extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            status : null,
            text : null
        };
        // actions.listenTo('updateCell', this.updateCell.bind(this))
        actions.showStatus.listen(this.showStatus.bind(this));
    }
    render() {
        if(!this.state.status || !this.state.text) {
            return false;
        }
        return (
            <div className={this.state.status}>
                <p>{this.state.text}</p>
            </div>
        );
    }
    showStatus(options) {
        options = options || { status: null, text: null};
        this.setState(options);
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
            actions.showStatus({status: 'error', text: 'Cell already filled'});
        }
        else if(!GameStore.isPlayerTurn) {
            actions.showStatus({status: 'error', text: 'CPU turn'});
        }
        else {
            actions.showStatus();
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
                <Status />
            </div>
        );
    }
    updateCellInView(cells) {
        this.setState({cells: cells});
    }
}
export default GameBoard;
