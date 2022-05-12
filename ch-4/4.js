function deepEqual(a,b){
    if(a === b){return true;}
    //if either, a not object, b not object, a is null or b is null return false
    if(typeof a != "object" || typeof b != "object" || a == null || b == null){
        return false;
    }
    let akeys = Object.keys(a);
    let bkeys = Object.keys(b);

    if(akeys.length != bkeys.length){return false;}
    for(let akey of akeys){
        // if bkeys does not include one of the akeys, or 
        // if value of akey in a and value of akey in b do not deep equal
        // return false
        if(!bkeys.includes(akey) || !deepEqual(a[akey], b[akey])){return false;}
    }
    return true;
}


let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
