import Reflux from 'reflux';
import actions from '../actions/actions';
import Utils from '../Utils';

var GameStore = Reflux.createStore({
    init() {
        this.cells = ['', '', '', '', '', '', '', '', ''];
        this.isPlayerTurn = true;
        this.moves = [{}];
        // this.listenTo(actions.loadItems, this.loadItems);
    },
    makeCPUTurn() {
        this.isPlayerTurn = false;
        this.processCPUTurn();
    },
    getPlayerSymbol() {
        return 'O';
    },
    getCPUSymbol() {
        return 'X';
    },
    getCells() {
        return this.cells;
    },
    setCellData(index, symbol) {
        index = parseInt(index);
        this.cells[index] = symbol;
        var last = this.moves[this.moves.length - 1] || {};
        if(last[symbol]) {
            var obj = {};
            obj[symbol] = index;
            this.moves.push(obj);
        }
        else {
            last[symbol] = index;
        }
        var isWon = this.checkIfWon();
        actions.updateCellInView(this.cells);
        if(isWon) {
            actions.showStatus({status: 'success', text: (this.isPlayerTurn?'Player':'CPU') + ' won' });
            console.log('won');
        }
        else {
            if(this.isPlayerTurn) {
                this.makeCPUTurn();
            }
        }
    },
    processCPUTurn() {
        var pos = Utils.getRandom(this.cells);
        // Logic for manipulation here
        if(typeof pos == 'undefined') {
            return;
        }
        this.setCellData(pos, this.getCPUSymbol());
        this.isPlayerTurn = true;
    },
    checkIfWon() {
        var symbol = this.isPlayerTurn?this.getPlayerSymbol():this.getCPUSymbol();
        var lastMoved = Utils.getLastMoved(this.moves, symbol);
        return Utils.checkRow(this.cells, symbol, 3, lastMoved) || Utils.checkCol(this.cells, symbol, 3, lastMoved) || Utils.checkDiag(this.cells, symbol, 3, lastMoved);
    }
});
export default GameStore;
