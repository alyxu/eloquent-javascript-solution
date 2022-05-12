let re = new RegExp(process.argv[2]);
let search = process.argv.slice(3);

console.log(re);
console.log(search);

const { readFile } = require("fs").promises;

async function read(filename) {
  //takes filename as argument and returns the content as string
  try {
    const controller = new AbortController();
    const { signal } = controller;
    const promise = readFile(filename, { signal, encoding:'utf-8' });

    // Abort the request before the promise settles.
    //controller.abort();
    let res = await promise;
    return res;
  } catch (err) {
    // When a request is aborted - err is an AbortError
    console.error(err);
  }
}

let content;

search.forEach((filename) => {
  content = read(filename);
  content.then((ele) => {
    if(re.test(ele)) {console.log(filename);}
  })
})
