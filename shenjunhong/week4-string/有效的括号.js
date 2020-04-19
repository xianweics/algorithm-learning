/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  //创建一个Map
  const Map = {
    '(':')',
    '{':'}',
    '[':']',
  }
  //对传经来的s 进行数组化  方便后面处理

  var rightSymbols = [];
  //进行 for 循环
  for(var i =0; i<s.length;i++){
    if(s[i] == "("){
        rightSymbols.push(")");
    }else if(s[i] == "{"){
        rightSymbols.push("}");
    }else if(s[i] == "["){
        rightSymbols.push("]");
    }else if(rightSymbols.pop() != s[i] ){
        return false;
    }
  }
  return !rightSymbols.length;
}
function Stack () {
  var items = [];     //用来保存栈里的元素
  this.push = function(element){
    items.push(element);
  };   //添加新元素到栈顶
  this.pop = function () {
    return items.pop();
  }     //移除栈顶的元素，同时返回被移除的元素
  this.peek = function () {
    return items[items.length-1];
  }      //返回栈顶的元素，不对栈做任何修改
  this.isEmpty = function () {
    return items.length == 0;
  }        //如果栈里没有任何元素就返回true，否则false
  this.clear = function () {
    items = [];
  }     //移除栈里的所有元素
  this.size = function () {
    return items.length;
  }    //返回栈里的元素个数,类似于数组的length属性
  this.print = function () {
    console.log(items.toString());
  }
}
var val = "()";

console.log('isValid', isValid(val))


//时间复杂度O(n)