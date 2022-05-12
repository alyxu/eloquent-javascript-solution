//flattening

function flatten(arrofarr){
    return arrofarr.reduce((acum, ele) => {
        console.log(acum);
        console.log(ele);
        return acum.concat(ele);},[]);
    //If no initialValue is supplied, the first element in the array will be used as the initial accumulator value and skipped as currentValue.
    //thus, by not supplying the initial value, we save one iteration

}

test = [[1,2,3],[4,5,5],[5]];
console.log(flatten(test));
