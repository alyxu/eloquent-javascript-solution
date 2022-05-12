async locateScalpel(nest){
  let current = nest.name;

  for(;;){
    let next = await anyStorage(nest,current,'scalpel');
    if(next == current){
      return next;
    }
    current = next;
  }

}

async locateScalpel2(nest){
  function loop(current){
    return anyStorage(nest,current,'scalpel').then((next) => {
      if(current == next){
        return current;
      } else {
        return loop(next);
      }
    }

  }

  loop(nest.name);
}

function fn(arr){
  return new Promise((resolve, reject) => {
    let results;
    for(let i=0; i < arr.length(); i++){
      let last = (i === arr.length() - 1);
      arr[i].then((value) => {
        results[i] = value;
      if(last){
        resolve(results);
      }
      })
    }
  })
}