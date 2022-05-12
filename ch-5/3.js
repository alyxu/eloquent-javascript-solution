function every(arr, pred){
    for(let a of arr){
        if(pred(a) === false){
            console.log('false');
            return false;
        }
        console.log(a);
    }
    return true;
}

function every2(arr, pred){
    //demorgan law
    return !arr.some(ele => !pred(ele));
}
console.log(every2([1, 3, 5], n => n < 10));
// → true
console.log(every2([2, 4, 16], n => n < 10));
// → false
console.log(every2([], n => n < 10));
// → true
