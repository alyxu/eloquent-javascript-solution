function evalAndReturnX(code) {
  return eval(code);
}


let but = document.querySelector('button');
let pre = document.querySelector('pre');

but.addEventListener('click', () => {
  try{
    let result = evalAndReturnX(document.querySelector('textarea').value);
    pre.innerText = result;
  } catch(e){
    pre.innerText = String(e);
  }
});