function arrayToList(arr){
    let list = {};
    for(let i = arr.length - 1; i != -1 ; i--){
        if(i == arr.length - 1){
            list = {};
            list.rest = null;
        }
        else{
            list = {rest:list};
        }
        list.value = arr[i];
    }
    return list;
}

function listToArray(list, arr=[]){
    arr.push(list.value);
    if(list.rest != null){
        return listToArray(list.rest,arr);
    }
    else{
        return arr;
    }
}

function prepend(ele,list){
    return {value:ele,rest:list};
}
    
function nth(list,n){
    if(n == 0){return list.value;}
    if(list.rest == null){return undefined;}
    return nth(list.rest,n-1);
}
    

//console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(JSON.stringify(arrayToList([6,5,4, 3, 2, 1])));
// → {value: 4, rest: {value: 3, rest: {value: 2, rest: {value: 1, rest: null}}}}
            
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

console.log(nth(arrayToList([10, 20, 30]), 2));
// → 20
