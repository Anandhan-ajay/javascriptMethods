// D/B Sort,Find,Filter,Map,Reduce

//Sort (It depends ASCII value)
// const a = [100, 200, 300, 500, 1000];
// const result = a.sort();
// console.log(result); o/p: 100,1000,200,300,500

//Find
// const a = [100, 200, 300, 400, 500];
// const res = a.find((val) => {
//   return val > 200;
// });
// console.log(res); o/p: 300

//Filter
// const a = [100, 200, 300, 400, 500];
// const res = a.filter((val) => {
//   return val > 200;
// });
// console.log(res); o/p:300,400,500

//Map
// const a = [100, 200, 300, 400, 500];
// const res = a.map((val) => {
//   return val > 200;
// });
// console.log(res); o/p:false,false,true,true,true

//Map
// const a = [100, 200, 300, 400, 500];
// const res = a.map((val) => {
//   return "#" + val;
// });
// console.log(res); o/p : #100,#200,#300,#400,#500

//Reduce method 1 (without Accumulator)
// const a = [100, 200, 300, 400, 500];
// const res = a.reduce((val) => {
//   return "#" + val;
// });
// console.log(res); o/p:####100

//Reduce method 1 (with Accumulator)
// const a = [100, 200, 300, 400, 500];
// const res = a.reduce((Acc, val) => {
//   return Acc + val;
// });
// console.log(res); o/p : 1500
// let functionExpression = function () {
//   console.log("functionExpression is working");
// };
// functionExpression();

// fnDeclaration();
// function fnDeclaration(){
//   console.log('Function declaration');
// }

// const dc = [3,8,1,5,20];
const ac = [34,4,65,12,78,4];
const res = ac.lastIndexOf(4);
console.log(res);

for(i=1;i<=10;i++){
  console.log("number is",i);
}



