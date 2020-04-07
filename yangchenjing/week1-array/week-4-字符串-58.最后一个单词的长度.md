58.最后一个单词的长度

题目描述：给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。

如果不存在最后一个单词，请返回 0 。

说明：一个单词是指由字母组成，但不包含任何空格的字符串。

示例:

```
输入: "Hello World"
输出: 5
```

题解：根据题意求最后一个单词，把他反转去掉开头结尾空格，求第一个单词的长度就可以了，在判断一下边界值，上代码

```
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let newS = s.split('').reverse().join('').trim()
    let len=newS.length;
    if(newS==''){
        return 0
    }else if(len==1){
        return 1
    }
    let str='';
    for(let i=0;i<len;i++){
        if(newS[i]==' '){
           return newS.slice(0,i).length
        }else if(i==len-1){
            return newS.length
        }
    }
};
```

