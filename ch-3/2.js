function isEven(a){
    if(a < 0){
        return "negative number";
    }
    else if(a == 0){
        return true;
    }
    else if(a == 1){
        return false;
    }
    else{
        return isEven(a-2);
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(2));
console.log(isEven(-1));
