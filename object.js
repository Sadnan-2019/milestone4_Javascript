var student1 = {


          id: 001,
          name: "HOSSAIN",
          adrees: "dhanmondi",
          phone: "01892409715",
          hobby: "playing"

};

// console.log(student1);
console.log(student1.adrees);

var studentphone = student1.phone;
console.log(studentphone);

student1.name = "sadnan";
console.log(student1);

student1['name'] = "rahman";
console.log(student1);

var namenew = "name";
student1[namenew] = "abalalallal";
console.log(student1);


const pizza = {

          toppings: ['cheese', 'sauce', 'pepperoni'],

          crust: 'deep dish',

          serves: 2

}

console.log(pizza.toppings[2]);
