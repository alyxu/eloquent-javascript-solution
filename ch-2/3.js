let size = 8;

let str = "";
for(let i = 0;i < size;i++){
    if(i%2==0){
        str += " ";
    }
    else{
        str += "#";
    }
    for(let j=0; j< size - 1;j++){
        if(str.charAt(str.length - 1) == " "){
            str += '#';
        }
        else{
            str += ' ';
        }
    }
    str += "\n";
}

console.log(str);
        
//smarter soln
var gridSize = Number(prompt("Enter size of grid", "8"));
var totalSize = (gridSize * gridSize) + gridSize;
var grid = "";
for (i = 0; i < totalSize; i++) {
  if (i % (gridSize + 1) == 0)
    grid += "\n";
  else if (i % 2 == 0)
    grid += "#";
  else
    grid += " ";
}
console.log(grid);
                
