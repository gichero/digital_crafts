function product(arr) {
  return arr.reduce(function(a,b) {
    return a * b;
  }, 1);
}

console.log(product([1,2,3,4,5,6,7,8,9,10]));
