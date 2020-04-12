function build_heap(tree, n){
  last_node = n -1;
  parent = (last_node -1) /2;
  i = '';
  for(i = parent; i>=0; i--){
    heapify(tree, n ,i)
  }
}

function heapify(tree, n, i) {
  c1 = 2 * i + 1;
  c2 = 2 * i + 2;

  function swap(arr ,i, j){
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }




  max = i;
  if (c1 < n && tree[c1] > tree[max]) {
    max = c1
  }

  if (c2 < n && tree[c2] > tree[max]) {
    max = c2
  }

  if(max !=i){
    swap(tree , max , i);
    heapify(tree, n,max)
  }
}

function main(){
  tree = [2,10, 4,5,1,3]
  n = 6;
  build_heap(tree, n, 0)


  for(i = 0; i< n;i++){
    console.log("arr", tree[i])
  }
  return 0
}
main()