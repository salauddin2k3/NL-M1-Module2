//* Grouping and Aggregating Data

// Scenario: Count every survey and group by response

//? input
const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
];

// Process / TODO
//TODO initiate empty obj
//TODO Check the response already exist or not
//TODO if it's exist, increase it
//TODO if don't, then initialize with 1

const count = surveyResponses.reduce((table, response) => {

    console.log(table, ":", response);

    if(table[response]){
        table[response] = table[response] + 1;
    }
    else{
        table[response] = 1;
    };

    return table;

}, {});

console.log(count);

//? Output
// { A: 5, C: 3, B: 5, D: 1 }