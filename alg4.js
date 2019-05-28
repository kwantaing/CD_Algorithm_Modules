// given array and value Y, count and print number of array values greater than Y
function greaterthanY(arr,y){
    var count = 0;
    for(var i = 0; i<arr.length; i++){
        if(arr[i]>y){
            count++
        }
    }
    console.log(count);
}
//given an array print max, min and avg
function MaxMinAvg(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    
    for(var i = 0; i<arr.length;i++){
        if(max<arr[i]){
            max = arr[i];
        }
        if(min>arr[i]){
            min = arr[i];
        }
        sum+=arr[i];
    }
    var avg = sum/arr.length;
    console.log("Max: "+max);
    console.log("Min: "+min);
    console.log("Average: "+avg);
}
//given array return new array negative values replaced with 'Dojo'

function replaceNegatives(arr){
    for(var i = 0; i<arr.length; i++){
        if(arr[i]<0){
            arr[i]='Dojo';
        }
    }
    return arr;
}
//Given array, indexes start and end, remove values in that range, working in place

function removeVals(arr,index1,index2){
    arr.splice(index1,index2);
}