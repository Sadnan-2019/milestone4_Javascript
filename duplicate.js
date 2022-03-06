// const duplicatevalue =["sadnan","adnan","adnan","sadnan","rohim","korim" ];


// for( i=0; i<duplicatevalue.length; i++){

//           var onlyduplictae=duplicatevalue[i];
//           console.log(onlyduplictae)
// }

// var unique=[];
// for (const duplicate of duplicatevalue) {


//                     console.log(duplicate)

//                     if(unique.indexOf(duplicate) == -1){

//                               unique.push(duplicate);
//                     }




// }

// return unique;

// console.log(unique,'lllllll')


function duplicateCheck(names) {


          var newunique = [];

          for (const element of names) {
                    if (newunique.indexOf(element) == -1) {
                              newunique.push(element);
                    }

          }

          return newunique;


}

const duplicatevalue = ["sadnan", "adnan", "adnan", "sadnan", "rohim", "korim"];

const value = duplicateCheck(duplicatevalue)
console.log(value, "original mal")








/* function PopDuplicate(numbers) {


          var BlankPop = [0];

          for (const newElement of numbers) {

                    if (BlankPop.indexOf(newElement) == -1) {


                              BlankPop.pop(newElement);

                    }

          }

          return BlankPop;
}


const PopArray = [100, 200, 300, 400, 400, 200];

var newPop = PopDuplicate(PopArray);
console.log(newPop, 'pop') */

