// 有效的数独
// 时间复杂度：n
// 空间复杂度：n*n
// 解题思路：把行，列，3*3分别看作一个数组，如果该数组中有重复元素，则返回false
var isValidSudoku = function(board) {
    let a = new Array(9).fill(0);  // 行
    let b = new Array(9).fill(0);  // 列
    let c = new Array(9).fill(0);  // 3*3
    for(let i in board){
        for(let j in board){
            if(board[i][j] > 0){	// 行
                if(a[board[i][j]-1] == 0){
                    a[board[i][j]-1]++;
                } else{
                    return false;
                }
            }
            if(board[j][i] > 0){	// 列
                if(b[board[j][i]-1] == 0){
                    b[board[j][i]-1]++;
                } else{
                    return false;
                }
            }
            // 3*3
            if(board[parseInt(i/3)*3 + parseInt(j/3)][i%3*3 + j%3] > 0){
                if(c[board[parseInt(i/3)*3 + parseInt(j/3)][i%3*3 + j%3]-1] == 0){
                    c[board[parseInt(i/3)*3 + parseInt(j/3)][i%3*3 + j%3]-1]++;
                } else{
                    return false;
                }
            }
        }
        a = new Array(9).fill(0);	// 行
        b = new Array(9).fill(0);	// 列
        c = new Array(9).fill(0);	// 3*3
    }
    return true;
};