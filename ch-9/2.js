let text = "'I'm the cook,' he said, 'it's my job.'";
// ' at begining of string or
// ' after non-word character or
// ' before non-word character or
// ' at and of string
console.log(text.replace(/^'|(\W)'|'(\W)|'$\b/g, "$1\"$2"));
// → "I'm the cook," he said, "it's my job."