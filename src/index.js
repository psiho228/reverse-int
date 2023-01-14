module.exports = function reverse (number) {
   let num = Math.abs(number);
   let arr = number.toString().split("");
   let reversed = arr.reverse().join("").replace(/[^0-9,.]/g, ' ');
   if(number<0){
    return reversed;
   }
return reversed;
}