



function reverseSentence(text){

          var blankString =  '';

          for (const element of text) {
                 
                    blankString = element +  blankString ;
                    
          }

          return blankString;


}

const greetings = "How are you";
 var string =reverseSentence(greetings);
 console.log(string,'stingchanf')