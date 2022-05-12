for(let i = 0;i < 8;i++){
  str = "";
  for(let j = 0;j< i;j++){
    str += "#";
  }
  console.log(str);
}

//smarter soln
for (let line='#';line.length < 8;line+='#'){
    console.log(line);
}
