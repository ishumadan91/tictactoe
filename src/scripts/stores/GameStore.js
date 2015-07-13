import Reflux from 'reflux';
import actions from '../actions/actions';

var GameStore = Reflux.createStore({
    init() {
        this.items = [];
        this.isPlayerTurn = true;
        // this.listenTo(actions.loadItems, this.loadItems);
    },
    isPlayerTurn() {
        return this.isPlayerTurn;
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
    processCPUTurn() {
        
    }
});

export default GameStore;
