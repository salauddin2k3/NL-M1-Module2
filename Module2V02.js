/*
*** Input, process & OutPut


*/

/**
** Process ==> 
 *TODO   01. Filter ==> Electronics Product
 *TODO   02. Sort by ==> Rating ==> a-b or b-a
 *TODO   03. Slice ==> first 3 (top 3) ==> (1, 3)
 *TODO   04. Map ==> transform obj shape to {name: "-------"}

*/

//* This is input

const rowApiData = [
  {
    "id": "p-001",
    "productName": "4K Smart TV",
    "category": "Electronics",
    "price": 850,
    "rating": 4.5,
    "stock": 15
  },
  {
    "id": "p-002",
    "productName": "Noise Cancelling Headphones",
    "category": "Audio",
    "price": 250,
    "rating": 4.8,
    "stock": 45
  },
  {
    "id": "p-003",
    "productName": "Ergonomic Office Chair",
    "category": "Furniture",
    "price": 320,
    "rating": 4.2,
    "stock": 10
  },
  {
    "id": "p-004",
    "productName": "Stainless Steel Blender",
    "category": "Appliances",
    "price": 75,
    "rating": 4.1,
    "stock": 60
  },
  {
    "id": "p-005",
    "productName": "Gaming Mouse",
    "category": "Peripherals",
    "price": 55,
    "rating": 4.7,
    "stock": 75
  },
  {
    "id": "p-006",
    "productName": "Portable Power Bank",
    "category": "Electronics",
    "price": 40,
    "rating": 4.3,
    "stock": 120
  },
  {
    "id": "p-007",
    "productName": "Digital Camera Kit",
    "category": "Photography",
    "price": 680,
    "rating": 4.9,
    "stock": 8
  },
  {
    "id": "p-008",
    "productName": "Yoga Mat Pro",
    "category": "Fitness",
    "price": 35,
    "rating": 4.6,
    "stock": 200
  },
  {
    "id": "p-009",
    "productName": "VR Headset",
    "category": "Electronics",
    "price": 400,
    "rating": 4.6,
    "stock": 30
  },
  {
    "id": "p-010",
    "productName": "Mechanical Keyboard",
    "category": "Peripherals",
    "price": 110,
    "rating": 4.4,
    "stock": 50
  },
  {
    "id": "p-011",
    "productName": "Air Fryer XL",
    "category": "Appliances",
    "price": 99,
    "rating": 4.5,
    "stock": 35
  },
  {
    "id": "p-012",
    "productName": "Wireless Router 6",
    "category": "Networking",
    "price": 150,
    "rating": 4.3,
    "stock": 25
  },
  {
    "id": "p-013",
    "productName": "Coffee Maker (12-Cup)",
    "category": "Appliances",
    "price": 45,
    "rating": 4.0,
    "stock": 80
  },
  {
    "id": "p-014",
    "productName": "Dumbbell Set (50lb)",
    "category": "Fitness",
    "price": 90,
    "rating": 4.7,
    "stock": 22
  },
  {
    "id": "p-015",
    "productName": "Smart Watch",
    "category": "Wearables",
    "price": 180,
    "rating": 4.5,
    "stock": 40
  },
  {
    "id": "p-016",
    "productName": "Portable Bluetooth Speaker",
    "category": "Audio",
    "price": 65,
    "rating": 4.2,
    "stock": 110
  },
  {
    "id": "p-017",
    "productName": "Memory Foam Mattress",
    "category": "Furniture",
    "price": 750,
    "rating": 4.9,
    "stock": 5
  },
  {
    "id": "p-018",
    "productName": "Electric Toothbrush",
    "category": "Health & Beauty",
    "price": 50,
    "rating": 4.4,
    "stock": 95
  },
  {
    "id": "p-019",
    "productName": "Laptop Sleeve (15 inch)",
    "category": "Accessories",
    "price": 25,
    "rating": 4.1,
    "stock": 150
  },
  {
    "id": "p-020",
    "productName": "External SSD (1TB)",
    "category": "Storage",
    "price": 130,
    "rating": 4.8,
    "stock": 55
  },
  {
    "id": "p-021",
    "productName": "Home Security Camera",
    "category": "Smart Home",
    "price": 85,
    "rating": 4.6,
    "stock": 70
  },
  {
    "id": "p-022",
    "productName": "Desktop Monitor (27 inch)",
    "category": "Electronics",
    "price": 299,
    "rating": 4.5,
    "stock": 20
  },
  {
    "id": "p-023",
    "productName": "Electric Kettle",
    "category": "Appliances",
    "price": 30,
    "rating": 4.0,
    "stock": 130
  },
  {
    "id": "p-024",
    "productName": "Hiking Backpack (50L)",
    "category": "Outdoors",
    "price": 120,
    "rating": 4.7,
    "stock": 18
  },
  {
    "id": "p-025",
    "productName": "Smartphone Tripod",
    "category": "Photography",
    "price": 20,
    "rating": 4.3,
    "stock": 160
  },
  {
    "id": "p-026",
    "productName": "Robot Vacuum Cleaner",
    "category": "Smart Home",
    "price": 350,
    "rating": 4.4,
    "stock": 12
  },
  {
    "id": "p-027",
    "productName": "Electric Scooter",
    "category": "Transportation",
    "price": 550,
    "rating": 4.6,
    "stock": 9
  },
  {
    "id": "p-028",
    "productName": "Wireless Charging Pad",
    "category": "Accessories",
    "price": 22,
    "rating": 4.1,
    "stock": 90
  },
  {
    "id": "p-029",
    "productName": "Board Game Collection",
    "category": "Entertainment",
    "price": 40,
    "rating": 4.9,
    "stock": 28
  },
  {
    "id": "p-030",
    "productName": "High-Speed HDMI Cable (6ft)",
    "category": "Cables",
    "price": 15,
    "rating": 4.5,
    "stock": 250
  }
];

//* OutPut ==> [{name: "Phone"}, {name: "Smart Watch"}]

const electronicProducts = rowApiData.filter((item)=> item.category === "Electronics");

// console.log(electronicProducts);

const sortProducts = electronicProducts.sort((a, b)=> b.rating - a.rating);

// console.log(sortProducts);

const sliceProducts = sortProducts.slice(0, 2);

// console.log(sliceProducts);

const mapProducts = sliceProducts.map((item)=> {
    return {"name": item.productName, "Price": item.price}
});

const mapProducts2 = sliceProducts.map((item)=>({"name": item.productName, "Price": item.price}));

// console.log(mapProducts2);

const electronicProductsInOneLine = rowApiData
.filter((item)=> item.category === "Electronics")
.sort((a, b)=> b.rating - a.rating)
.slice(0, 2)
.map((item)=> ({"ProductName": item.productName, "Price": item.price, "Stock": item.stock}));

console.log(electronicProductsInOneLine);