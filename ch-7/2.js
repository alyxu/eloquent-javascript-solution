//pgroup

class PGroup{
    constructor(members){
        this.members = members;
    }

    add(value){
        if(this.has(value)){return this;}
        return new PGroup(this.members.concat([value]));
    }

    delete(value){
        if(!this.has(value)){return this;}
        return new PGroup(this.members.filter(ele => ele !== value));
    }
        
    has(value){
        return this.members.includes(value);
    }
}

PGroup.empty = new PGroup([]);

let a = PGroup.empty.add("a");
console.log(a);
let ab = a.add("b");
console.log(ab);
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false
