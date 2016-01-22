var Utils = {
    checkRow(cells, symbol, limit, lastMoved) {
        var i = Math.floor(lastMoved/3) * 3;
        var count = 0;
        for(var k = 0;k < 3;k++,i++) {
            if(cells[i]==symbol) {
                count++;
            }
        }
        if(count == limit){
            // Calc win cells
            if(count==3){
                return true;
            }
        }
        else {
            return false;
        }
    },
    checkCol(cells, symbol, limit, lastMoved) {
        // Get last moved and decide which column to be checked
        var j = lastMoved % 3;
        var count = 0;
        for(var k = 0;k < 3;k++, j+=3) {
            if(cells[j]==symbol) {
                count++;
            }
        }
        if(count==limit){
            if(count==3){
                // Calc win cells
            }
            return true;
        }
        else {
            return false;
        }
    },
    checkDiag(cells, symbol, limit, lastMoved) {
        var i = Math.floor(lastMoved / 3);
        var j = lastMoved % 3;
        var count=0;
        if(i==j) {
            for(var k=0;k<3;k++) {
                if(cells[k*3 + k] ==symbol) {
                    count++;
                }
            }
            if(count==limit) {
                if(count==3){
                    // Calc win cells
                }
                return true;
            }
        }
        else if(i+j==2) {
            count=0;
            for(var k=0;k<=3;k++) {
                if(cells[k*3 + 2 - k] ==symbol) {
                    count++;
                }
            }
            if(count==limit){
                if(count==3){
                  // Calc win cells
                }   
                return true;
            }
        }
        return false;
    }
}
export default Utils;
