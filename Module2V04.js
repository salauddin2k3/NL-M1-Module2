/**
 *! Some ==> some use kore kono value ase kina check korte parbo
 *! Some ===> Length bole dite hobe & [Array.from({length: 5}).fill("ekhane ja dibe sheta fill hobe")]
 *! Array.from
 */


//* Some

const numbers = [1, 2, 3, 4, 5, 6, 7];

// console.log(numbers.some((num)=> num % 2 === 0));

const currentUserRole = ["Editor", "User"];

const managementRole = ["Admin", "Manager"];

const canAccess = currentUserRole.some((role)=> managementRole.includes(role));

// console.log(canAccess);


//* Array.from

// const arr = Array.from({length: 5}).fill(""); 
// const arr = Array.from({length: 5}, (_, i) => i); 
// const arr = Array.from([1, 2, 3], (value, i) => value + 2); 
const arr = Array.from([1, 2, 3], (value, i) => value + 2); 

// console.log(arr);


const range = (start, stop, step) => Array.from({length: (stop-start)/step}, (_, i)=> start+i * step)

console.log(range(0, 5, 2));