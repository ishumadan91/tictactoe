import Reflux from 'reflux';
import actions from '../actions/actions';
import Utils from '../Utils';

var GameStore = Reflux.createStore({
    init() {
        this.cells = ['', '', '', '', '', '', '', '', ''];
        this.isPlayerTurn = true;
        this.lastMoved = {};
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
        this.cells[index] = symbol;
        this.lastMoved[symbol] = index;
        var isWon = this.checkIfWon();
        actions.updateCellInView(this.cells);
        if(isWon) {
            console.log('won');
        }
        else {
            if(this.isPlayerTurn) {
                this.makeCPUTurn();
            }
        }
    },
    processCPUTurn() {
        var pos = this.getRandom();
        // Logic for manipulation here
        if(typeof pos == 'undefined') {
            return;
        }
        this.setCellData(pos, this.getCPUSymbol());
        this.isPlayerTurn = true;
    },
    getRandom() {
        var x=0;
        var free = [];
        for(var i=0;i<9;i++) {
            if(!this.cells[i]) {
                free.push(i);
            }
        }
        var ran= Math.floor(Math.random() * free.length);
        return free[ran];
    },
    checkIfWon() {
        var symbol = this.isPlayerTurn?this.getPlayerSymbol():this.getCPUSymbol();
        var lastMoved = this.lastMoved[symbol];
        return Utils.checkRow(this.cells, symbol, 3, lastMoved) || Utils.checkCol(this.cells, symbol, 3, lastMoved) || Utils.checkDiag(this.cells, symbol, 3, lastMoved);
    }
});

export default GameStore;
