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
            for(var k=0;k<3;k++) {
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
    },
    getRandom(cells, position) {
        var free = [];
        if(position) {
            for(var i=0;i<9;i++){
                if(!cells[i]){
                    if(i % 2 == 0){
                        if(position=='corner'){
                            free.push(i);
                        }
                    }
                    else if(position=='other'){
                        free.push(i);
                    }
                }
            }
            if(!free.length) {
                return -1;
            }
        }
        else {
            for(var i=0;i<9;i++) {
                if(!cells[i]) {
                    free.push(i);
                }
            }
        }
        var ran = Math.floor(Math.random() * free.length);
        return free[ran];
    },
    getLastMoved(moves, symbol) {
        var last = moves[moves.length - 1];
        if(!last[symbol]) {
            last = moves[moves.length - 2] || {};
        }
        return last[symbol] || null;
    }
    // ,
    // insert(moves, ind, symbol, cpuSymbol) {
    //   var ret=false;
    //   var fill=false;
    //   var x = getLastMoved(moves, symbol);
      
    //   int i=x/3; int j=x%3; 
    //   if(checkRow(ind,symbol,2)==true)
    //    {
    //     for(int k=0;k<3;k++)
    //     {
            
    //         if(a[i][k]>'0' && a[i][k]<='9') {
    //             a[i][k] = cpuSymbol;
    //             lastIndex[moves-1][1]=3*i+k;
    //             ret=true;
    //             fill=true;
    //             break;
    //         }
    //     }
    //    }
    //    if((checkCol(ind,symbol,2)==true) && ret==false)
    //     {
    //         for(int k=0;k<3;k++)
    //         {
    //             if(a[k][j]>'0' && a[k][j]<='9'){
    //                 a[k][j]=cpuSymbol;
    //                 lastIndex[moves-1][1]=3*k+j;
                    
    //                 ret=true;
    //                 fill=true;
    //                 break;
    //             }
    //         }
    //     }
    //      if((checkDiag(ind,symbol,2)==true) && ret==false)
    //         {
    //          if((i==j)&&ret==false)
    //          {
    //             for(int k=0;k<3;k++)
    //              {
    //                 if(a[k][k]>'0' && a[k][k]<='9') {
    //                     a[k][k]=cpuSymbol;
    //                     lastIndex[moves-1][1]=3*k+k;
    //                     fill=true;
    //                     ret=true;
    //                     break;
    //                 }

    //              }
    //          }
        
            
    //          if((i+j==2) && ret==false)
    //          {
            
    //             for(int k=0,l=2;k<=2;k++,l--)
    //             {    
    //              if(a[k][l]>'0' && a[k][l]<='9') {
    //                 a[k][l]=cpuSymbol;
    //                 lastIndex[moves-1][1]=3*k+l;
    //                 fill=true;
    //                 ret=true;
    //                 break;
    //              }
    //             }
    //          }
    //         }
            
    //   return fill;
    // }
}
export default Utils;
