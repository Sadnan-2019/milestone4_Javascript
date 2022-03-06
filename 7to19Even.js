function EvenNumber(numbers) {
  var me = 7;
  let count = 0;

  while (me <= numbers) {
    // console.log(me);
    me = me + 2;

    count = count + 1;
  }

  return me, count;
}
var evemnumber = 19;
var EvenNumbers = EvenNumber(evemnumber);
console.log(EvenNumbers, " Total Count", me);
