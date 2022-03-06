var numbers = [100, 80, 79, 70, 60, 69, 50, 59, 40, 49, 30, 39, ];

for (i = 0; i < numbers.length; i++) {
          var number = numbers[i];

          if (number >= 80 && number <= 100) {
                    console.log('A+');


          }

          else if (number >= 70 && number <= 79) {
                    console.log('A');


          }

          else if (number >= 60 && number <= 69) {

                    console.log('A-');
          }

          else if (number >= 50 && number <= 59) {

                    console.log('B+')
          }

          else if (number >= 40 && number <= 49) {
                    console.log("B")


          }

          else if (number >= 30 && number <= 39) {

                    console.log('B-')
          }



          else {
                    console.log('faile');
          }
}




var signal=["yellow","green","red"];


if(signal = "yellow"){

    console.log("wait")
}
else if(signal = "green"){

    console.log("green")
}
else if(signal = "red"){

    console.log("wait")
}

else{
          console.log('kkkkk')
}