const products = [
  { name: "apple watch", price: 70000 },
  { name: "samsung watch", price: 20000 },
  { name: "hp watch", price: 90000 },
  { name: "dell laptop", price: 60000 },
  { name: "sony laptop", price: 40000 },
  { name: "apple laptop", price: 30000 },
  { name: "apple phone", price: 50000 },
  { name: "nokia phone", price: 10000 },
];

function findProduct(products, findText ) {

          console.log(products);
          var result =[];
  for (const product of products) {
    // console.log(product.name);
    if (product.name.includes(findText )) {

          result.push(product);
//       console.log(product.name);
    }
  }

  return result;
}

var Products = findProduct(products,"laptop" );
// console.log(Products)
// function compare(a, b) {
//           if (a.toString() === b) {
//            return true;
//           } else {
//            return false;
//           }
//          }
         
//          const result = compare(25, 25);
//          console.log(result);

         


function compare(a, b) {
          if (a == b) {
            return true;
          } else {
            return false;
          }
        }
        const result = compare(15, "125");
        console.log(result);


        console.log("123" + 123);
        let a="hi"
let b="there"
console.log(a+b)  

for(j=5;j<=100;j++){
          console.log(j);
}





const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
 if (i == 5) {
  continue;
 }
 console.log(array[i]);
}