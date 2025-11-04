/**
 *! Reduce ==> acc te subtotal thakbe...first a default value thakbe, and 2nd param a current value thakbe
 * 
 */


const cartItems = [
  { id: "p-001", name: "Daraz Laptop Bag", price: 1500, quantity: 1 },
  { id: "p-002", name: "Walton USB-C Cable", price: 350, quantity: 2 },
  { id: "p-003", name: "Aarong Kurta", price: 2200, quantity: 1 },
];

const subTotal = cartItems.reduce((total, product) => {
    // console.log(total, product);
    const totalAmount = total + (product.price * product.quantity);
    return totalAmount;
}, 0);

// console.log(subTotal);


const players = [
  { name: "Ronaldo", score: 96 },
  { name: "Shekh Morsalin", score: 81 },
  { name: "Rakib Hossain", score: 95 },
  { name: "Leo Messi", score: 97 },
  { name: "Topu Barman", score: 91 },
  { name: "Sohel Rana", score: 72 },
];

const bestScorer = players.reduce((bestPlayer, scorer) => {

    console.log(bestPlayer, scorer);

    if(bestPlayer.score > scorer.score){
        return bestPlayer;
    };

    return scorer;

}, players[0]);

console.log(bestScorer);



