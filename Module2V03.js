/**
 *? Sort ==> a.localCompare(b) 
 * * Sort korle new variable na nile o main variable sorted hoye jai
 * Nested array to flat > .flat() ====> but jodi 2/3 layer porjonto korte chai tahole flat(2/3/4/...)
 * ==> but koita layer ase na jante infinity use korte hobe
 * duplication sorate Set er sathe flat use korte pari
 * Set er value array te covert korte gele [] diye shurute ... dite hobe like [...then others]
 */


//! Sort-------

const friends = ["Rahim", "Karim", "Mahim", 'mahin', "Kawser", "nahin"];

// console.log(friends.sort());

const sortedFriends = friends.sort((a, b) => a.localeCompare(b));

// console.log(sortedFriends);
// console.log(sortedFriends);


//! Nested Array to Flat-------

const nestedArray = [1, 2, 3, [4, 5], [6, 7, 8, 9]];

// console.log(nestedArray.flat());

const multiNestedArray = [1, 2, 3, [4, 5, [6, 7, 8, [9]]]];

// console.log(multiNestedArray.flat(3));

const infinityNestedArray = [1, 2, 3, [4, 5, [6, 7, 8, [9, [11, 12, [10, 20, 30, [100, [1000]]]]]]]];

// console.log(infinityNestedArray.flat(Infinity));

const sortedInfinityNestedArray = infinityNestedArray.flat(Infinity).sort((a, b) => a-b);

// console.log(sortedInfinityNestedArray);

const tags = [["React", "Java", "Javascript", "Mongo"], ["Mongo", "Tailwind"], ["Java", "Tailwind", "React"]];

// console.log(tags.flat());

const setTags = new Set(tags.flat());

console.log(setTags);

const setTagsInArray = [...new Set(tags.flat())];

console.log(setTagsInArray);