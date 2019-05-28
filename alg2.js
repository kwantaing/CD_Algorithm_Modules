function printUpTo(x){
    // your code here
    if(x<1){
        return false;
    }else if(x>=1){
        for(var i = 1; i<=x;i++){
            console.log(i);
        }
    }
  }
  printUpTo(1000); // should print all the integers from 1 to 1000
  y = printUpTo(-10); // should return false
  console.log(y); // should print false



  function printSum(x){
    var sum = 0;
    //your code here
    for(var i = 0; i<=x; i++){
        console.log(i);
        sum+=i;
    }
    return sum
  }
  y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
  console.log(y) // should print 32640

  function printSumArray(x){
    var sum = 0;
    for(var i=0; i<x.length; i++) {
      //your code here
      sum+=x[i];
    }
    return sum;
  }
  console.log( printSumArray([1,2,3]) ); // should log 6

  //Bonus: Largest Element
  //[1,30,5,7] should return 30

  function largestinArr(arr){
      var largest = arr[0];
      for(var i = 0; i<arr.length; i++){
          if(arr[i] > largest){
              largest = arr[i];
          }
      }
      return largest;
  }
  arr = [1,30,5,7];
  console.log(largestinArr(arr));
