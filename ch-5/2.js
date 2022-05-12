function hiloop(value, test, update, body){
    for(i=value;test(i);i = update(i)){
        body(i);
    }
}

hiloop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
