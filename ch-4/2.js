function reverseArray(arr){
    reversed_array = [];
    for(let i = arr.length - 1;i != -1;i--){
        reversed_array.push(arr[i]);
    }
    return reversed_array;
}

function reverseArrayInPlace(arr){
    for(let i = 0;i < Math.floor(arr.length / 2);i++){
        let swap = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = swap;
    }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
let arrayValue2 = [1, 2, 3, 4];
reverseArrayInPlace(arrayValue2);
console.log(arrayValue2);
// → [4, 3, 2, 1]
