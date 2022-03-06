const products = [
  { name: "apple watch", price: 90000 },
  { name: "samsung watch", price: 20000 },
  { name: "hp watch", price: 10000 },
  { name: "dell laptop", price: 60000 },
  { name: "sony laptop", price: 40000 },
  { name: "apple laptop", price: 30000 },
  { name: "apple phone", price: 50000 },
  { name: "nokia phone", price: 10000 },
];

function BreakProducts(products) {
  for (const product of products) {
    if (product.price < 50000) {
      continue;
      
    }

    console.log(product);
   
  }
  
}

const productBreking = BreakProducts(products);
