//Return the given array, after setting any negative values to zero.

function negativeZero(arr){
    for(var i = 0; i<arr.length;i++){
        if(arr[i]<0){
            arr[i] = 0;
        }
    }
    return arr;
}

/*Given an array, move all values forward by one index, 
dropping the first and leaving a ‘0’ value at the end */

function moveArr(arr){
    for(var i = 0; i<arr.length;i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length-1]=0;
    return arr;
}

// Given an array, return an array with values in a reversed order.

function reverseArray(arr){
    var start = 0;
    var end = arr.length-1;
    while(start<end){
        var temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}

/*Create a function that changes a given array to list each original 
element twice, retaining original order.  Have the function return the new array. */

//With push();
function times2(arr){
    var newarr =[];
    for(var i = 0; i<arr.length;i++){
        newarr.push(arr[i]);
        newarr.push(arr[i]);
    }
    return newarr;
}

//without push();
function repeatTwice(arr){
    var newarr = [];
    for(var i =0, j = 0; i<arr.length; i++, j++){
        newarr[j] = arr[i];
        j++;
        newarr[j] = arr[i];
    }
    return newarr;
}