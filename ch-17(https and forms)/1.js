fetch("https://eloquentjavascript.net/author", {headers: {accept: "text/plain"}}) .then(resp => resp.text())
.then(console.log);
// → the content