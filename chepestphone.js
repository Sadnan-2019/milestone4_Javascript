const phones = [
  { name: "samausng s5", price: 45000, color: "red", camera: 10, wait: 15 },
  { name: "nokian n95", price: 5000, color: "silver", camera: 5, wait: 30 },
  { name: "iphone s5", price: 55000, color: "white", camera: 20, wait: 10 },
  { name: "htc 5", price: 20000, color: "gray", camera: 11, wait: 25 },
  { name: "alcatle l5", price: 25000, color: "magenta", camera: 8, wait: 19 },
];

var chepset = phones[0];
for (const phone of phones) {
  if (phone.price < chepset.price) {
    chepset = phone;
  }
}
console.log(chepset, "got my pgone");

const products = [
  {
    name: "laptop",
    price: 45000,
    color: "red",
    camera: 10,
    wait: 15,
    quantity: 1,
  },
  {
    name: "shirt",
    price: 500,
    color: "silver",
    camera: 5,
    wait: 30,
    quantity: 5,
  },
  {
    name: "pent",
    price: 600,
    color: "white",
    camera: 20,
    wait: 10,
    quantity: 2,
  },
  {
    name: "watch",
    price: 200,
    color: "gray",
    camera: 11,
    wait: 25,
    quantity: 2,
  },
  {
    name: "underwear",
    price: 200,
    color: "magenta",
    camera: 8,
    wait: "19",
    quantity: 2,
  },
];

let totalPrice = 0;

for (const product of products) {
  if (typeof product.wait !== "number") {
    console.log("give me number");
  }
  var CostPriceQuentity = product.price * product.quantity;
  //console.log(typeof product.wait);

  totalPrice = totalPrice + CostPriceQuentity;
}
console.log(totalPrice);

let sum = 0;
for (let i = 0; i <= 3; i++) {
  sum = sum + i;
}
