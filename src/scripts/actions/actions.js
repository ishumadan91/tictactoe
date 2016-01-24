import Reflux from 'reflux';

var actions = Reflux.createActions([
  'updateCellInView',
  'showStatus'
]);

// actions.updateCell.preEmit = function(data1, data2){
//   debugger;
//   // make your api call/ async stuff here
//   // we use setTimeout for faking async behaviour here
// };
export default actions;
