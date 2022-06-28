const members = [
  { name: "Rakesh Gupta", age: 20 },
  { name: "Yash Jangid", age: 40 },
  { name: "Firoz Khan", age: 41 },
  { name: "Amrit Srivastava", age: 17 },
  { name: "Chandraprakash Sharma" },
  { name: "Swpril Ahuja", age: 45 },
  { name: "Yogesh Khatri", age: 51 },
];

//   Q.1

// var newArr = members.map((member)=>{
//     return member.name.split(' ')[0]
// }
// );
// console.log(newArr);

// // Q 2

// var newArr = members.map((member)=>{
//     return member.name.split(' ')[1].toUpperCase()
// }
// )

// Q.3

// var  newMember = members.filter((Element)=>{
//     return Element.age>40
// })

// // Q.4

// let sum = members.reduce((acc,cur)=>{
//   if(cur.age){
//     return (acc+cur.age)
//   }else{
//     return acc;
//   }
// },0)
// const avg = sum/members.length;
// console.log(avg);

// // Q .5
// const result = Object.keys(members). reduce((acc, curr) =>
//    acc.age ? (members[curr].age > acc.age ? members[curr] : acc) : members[curr], {});
//    console.log(result);

//  Q 6

var young = [];
var old = [];
var noage = [];

var res = members.map((memberAge) => {
  if (memberAge.age < 35) {
    young.push(memberAge);
  } else if (memberAge.age >= 35) {
    old.push(memberAge);
  } else {
    noage.push(memberAge);
  }
});
console.log(old);

// // Q 7

// members.splice(2,0,{name:'Amit Jangid',age:23 })
// console.log(members);

// Q 8

// // Q 9

// members.splice(0,0,{name:'Ankit Jangid',age:23 })

// Q.10

// employe = {name: "amit", age: "19"}
// let {name,age}= employe;

// // Q.11
// employe = {name: "amit jangid", age: "19"}

// const {name:fullName,age}=employe;

// Q 12

// let obj = [

//     {
//         name:'amit', age:12,
//     },
//     {
//         name:'keshav', age:23
//     }
// ]

// let newObj = [
//     ...obj,
//            {name:'kittu',age:15} ,
//           {name:"ankit", age:20}
// ]

// console.log(newObj);

// Q 13

// let obj = [

//     {
//         name:'amit', age:12,
//     },
//     {
//         name:'keshav', age:23
//     }
// ]

// let newObj = [
//     ...obj,
//            {name:'kittu',age:15}
//
// ]

// console.log(newObj);

// // Q 14

// let sum = members.reduce(function (acc, cur) {
//   if (cur.age) {
//     return acc + cur.age;
//   }else
//   return acc;
// }, 0);

// var arr = [{name:"amit",age:23},
//            {name:"kittu",age:16},
//           {name:"nikki",age:20},
//         ]
// var age = null
//         var newArr = arr.reduce((acc,cur)=>{
//           if(age !== null){
//             return acc+cur.age
//           }else{
//             return acc+cur.age
//           }
//         },0)
//         console.log(newArr);
