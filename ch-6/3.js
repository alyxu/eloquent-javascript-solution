class Group{
    constructor(){
        this.group = [];
    }

    add(item){
        if(!this.group.includes(item)){this.group.push(item);}
    }

    delete(item){
        if(this.group.indexOf(item) !== -1){
            this.group.splice(this.group.indexOf(item),1);
            return 0;
        }
        else{return -1;}
    }

    has(item){
        return this.group.includes(item);
    }

    static from(a){
        let g = new Group();
        for(let e of a){
            g.add(e);
        }
        return g;
    }

    [Symbol.iterator](){
        return new GroupIterator(this);
    }
}

class GroupIterator{
    constructor(group){
        this.index = 0;
        this.group = group;
    }
    next(){
        if(this.index === this.group.group.length){return {done:true};}

        let value = this.group.group[this.index];

        this.index++;

        return{value,done:false};
    }
}


        
        
for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
