function primitiveMultiply(a, b) {
  if (Math.random() < 0.8) {
    throw new MultiplicatorUnitFailure();
  }
  else {
    return a*b;
  }
}

class MultiplicatorUnitFailure extends Error {}

function wrapper(a,b){
    try {
      return primitiveMultiply(a,b);
    } catch (e) {
      if (e instanceof MultiplicatorUnitFailure){
        console.log('catching');
        return wrapper(a,b);
      } else {
        throw e;
      }
    }
}


console.log()