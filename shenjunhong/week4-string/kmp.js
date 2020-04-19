// prefix table  建立

var prefix_table  = function(pattern, prefix, n){
  var patternArr = pattern[0].split("");
  console.log('patternArr: ', patternArr);
  prefix[0] = 0;
  console.log('pattern, prefix, n: ', pattern,prefix , n);
    var len = 0;
    var i = 1;
    while(i<n){
      if(patternArr[i] == patternArr[len]){
        console.log('pattern[i]: ', patternArr[i]);
        len ++;
        prefix[i] = len;
        i++
      } else {
        if(len > 0){
          len = prefix[len -1];
        } else {
          prefix[i] = len;
          i++;
        }
      }
    }
}

var move_prefix_table = function(prefix, n){
  
  for(var i= n-1; i> 0; i--){
    prefix[i] = prefix[i-1];
  }
  prefix[0] = -1;
}


pattern = ['ABABCABAA'];
prefix = new Array(9)
n = 9
var val = prefix_table( pattern, prefix, n)
move_prefix_table(prefix, n)
for(i = 0; i< n; i++){
  console.log('ss', prefix[i])
}
var text = "ABABABCABAABBABA";
var pattern = 'ABABCABAA'
var kmp_search = function(text, pattern){
  n = pattern.length;
  m = text.length;
  prefix = new Array(n);
  prefix_table(pattern, prefix, n);
  move_prefix_table(prefix, n);

  // text , len(text) = m;
  //  pattern[j] , len(pattern) = n;

  i = 0;
  j = 0;
  while(i < m){
    if(j==n -1 && text[i] == pattern[j]){
      console.log('found pattern at ', i-j);
      j = prefix[j];
    }
    if(text[i] == pattern[j]){
      i++; j++
    } else {
      j = prefix[j];
      if(j == -1){
        i++; j++
      };
    }

  }
};

kmp_search(pattern, text);
/* console.log('val', val) */