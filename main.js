import getType from "./getType";

console.log(getType(123)); // [object Number]
console.log(getType(false)); // [object Boolean]
console.log(getType(null)); // [object Null]
console.log(getType({})); // [object Object]
console.log(getType([])); // [object Array]
