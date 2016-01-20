import Reflux from 'reflux';
import actions from '../actions/actions';

var GameStore = Reflux.createStore({
    init() {
        this.items = [];
        this.isPlayerTurn = true;
        // this.listenTo(actions.loadItems, this.loadItems);
    },
    makeCPUTurn(cells) {
        this.isPlayerTurn = false;
        this.processCPUTurn(cells);
    },
    getPlayerSymbol() {
        return 'O';
    },
    getCPUSymbol() {
        return 'X';
    },
    processCPUTurn(cells) {
        var pos = this.getRandom(cells);
        // Logic for manipulation here
        if(typeof pos == 'undefined') {
            return;
        }
        this.isPlayerTurn = true;
        actions.updateCell(pos, this.getCPUSymbol(), true);
    },
    getRandom(cells) {
        var x=0;
        var free = [];
        for(var i=0;i<9;i++) {
            if(!cells[i]) {
                free.push(i);
            }
        }
        var ran= Math.floor(Math.random() * free.length);
        return free[ran];
    }
});

export default GameStore;
