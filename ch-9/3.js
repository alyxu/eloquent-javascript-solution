// regular expression:
// at the beginning of the number, optionally have '+' or '-'
// followed by a decimal or integer number:
//     one or more digits optionally followed by a decimal point followed by zero or more digits, or
//     a decimal point followed by one or more digits
// followed by (optionally) at the end of the number:
//     'e' followed by 
//     '+' or '-' (optional), followed by
//     one or more digits
// everything is case-insensitive (i) so 'e' or 'E' are both acceptable
let number = /^[-+]?(\d+\.?\d*|\.\d+)(e[-+]?\d+)?$/i;

// Tests:
for (let str of ["1", "-1", "+15", "1.55", ".5", "5.",
                 "1.3e2", "1E-4", "1e+12"]) {
  if (!number.test(str)) {
    console.log(`Failed to match '${str}'`);
  }
}
for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5",
                 ".5.", "1f5", "."]) {
  if (number.test(str)) {
    console.log(`Incorrectly accepted '${str}'`);
  }
}