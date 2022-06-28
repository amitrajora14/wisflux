const { curry } = require('lodash');
const _ = require('lodash')


const members = [
    {name: 'Rakesh Gupta', age: 20},
    {name: 'Yash Jangid', age: 40},
    {name: 'Firoz Khan', age: 41},
    {name: 'Amrit Srivastava', age: 17},
    {name: 'Chandraprakash Sharma'},
    {name: 'Swpril Ahuja', age: 45},
    {name: 'Yogesh Khatri', age: 51}
  ];


// Q 1

// var arr = [["amit","ravi"],['jangid','ankit'],["lokesh","kittu"]]
// var res = _.map(arr,0)

// var res = _.map(members)
var res2 = _.split(members,"-",1)
console.log(res2);
// Q 2

// var arr = [["amit","ravi"],['jangid','ankit'],["lokesh","kittu"]]
// var res = _.map(arr,1)
// var cap = _.upperCase(res);


// Q 3

// var res = _.filter(members,(memberAge)=>memberAge.age>40)


// Q 4 

// var res = _.meanBy(members,(p)=>p.age)


// Q 5 
// var res = _.maxBy(members,(maximum)=>maximum.age)


// Q 6
var young =[]
var old = []
var noage = []

var res = _.map(members,(memberAge)=>{
if(memberAge.age<35){
  young.push(memberAge)
}else if(memberAge.age>35){
  old.push(memberAge)
}else{
  noage.push(memberAge)
}});

// Q 7



// Q 14


var res = _.reduce(members,(acc,cur)=>{

  if(cur.age){
    return acc+cur .age
  }else{
   return  acc;
  }

}, 0)
















