/*

==> Map Introduction
01. obj er kisu limitations ase, like obj te key string hishebe kaj kore
02. some Map > Map.clear, Map.size, Map.delete, Map.has
03. Map.forEach a mainly 3ta value pawa jai, but 2 ta use beshi hoy...value & key, 
04. Map.key > Map Iterator
05. Map.entries
06. 2d array or Matrix >> [[], []]

*/


// Matrix

const courses = [["P-Hero", "Level1"], ["N-L", "Level2"]]

// console.log(courses);

const student1 = {
    name: "Alice",
    userId: 101,
}
const student2 = {
    name: "Bob",
    userId: 102,
}

const courses2 = [[student1, "Level1"], [student2, "Level2"]]

// console.log(map);

const map = new Map();



map.set(student1, {userName: 'test'})
map.set(student2, {userName: 'test2'})

// console.log(map.size);
// console.log(map.clear);
// console.log(map.delete(student1));
// console.log(map.size);


// map.forEach((value, key)=>console.log("It's Value: ", value, "it's Key: ", key));

// map.forEach((value, key)=> (key.userId = 'please add this 007' + key.userId))
// console.log(map);

// console.log(...[map.keys()]);
// console.log(...[map.values()]);

// for(let key of map.keys()){
//     // console.log(key);
//     key.userId = 'please add this 007' + key.userId
// };

// console.log(map.entries());

const map2 = new Map(courses2);

console.log(map2);

