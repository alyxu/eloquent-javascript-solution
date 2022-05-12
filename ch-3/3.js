//neam counting

function countBs(s){
    count = 0;
    for(let i = 0;i < s.length;i++){
        if(s[i] == 'B'){
            count += 1;
        }
    }
    return count;
}

function countChar(s,c){
    count = 0;
    for(let i = 0;i < s.length;i++){
        if(s.charAt(i) === c){
            // use charat method instead of bracket notation
            // also don't use double equality, use triple equality be default
            count += 1;
        }
    }
    return count;
}

    
console.log(countBs('bbbBBBBbbbbbkljdalsfjasdBBBBBkdEewbbb'));
console.log(countChar('bbbBBBBbbbbbkljdalsfjasdBBBBBkdEewbbb','e'));
console.log(countChar('bbbBBBBbbbbbkljdalsfjasdBBBBBkdEewbbb','E'));
console.log(countChar("kakkerlak", "k"));
