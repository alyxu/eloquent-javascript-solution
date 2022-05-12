//the sum of ranges

function range(start,end, step=1){
    arr = [];
    if(step <= 0){
        //this is the negative case
        //
        for(let i = start; i > end - 1; i = i + step){
            // use ternary instead : let i = start; step >= 0 ? i <= end : i >= end; i+=step
            arr.push(i)
        }
    } 
    else{
        for(let i = start; i < end + 1; i = i + step){
            arr.push(i)
        }
    } 
    return arr;
}

function sum(arr){
    sum = 0;
    for(let i = 0; i < arr.length;i++){
        sum += arr[i];
    }
    return sum;
}

console.log(range(1,10));
console.log(range(0,100));
console.log(sum(range(1,10)));

console.log(range(1,10,2));
console.log(range(5,2,-1));

