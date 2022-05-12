//minimum

function min(a,b){
    if(a<b){
        return a;
    }
    else if(a==b){
        console.log(`${a} is equal to ${b}`);
        return a;
    }
    else{
        return b;
    }
}

console.log(min(5,2));
console.log(min(5,10));
console.log(min(1,2));
console.log(min(28,28));
        
