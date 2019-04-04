var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function(a,b) {
  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  } else if (a.name === b.name) {
    return b.age - a.age;
    }
  return 0;
})
console.log(students);

// const sortingNames = function() {
//   // console.log(students.length);
//   var names = [];
//   for (var i = 0 ; i < students.length; i++) {
//     names.push(students[i].name);
//   }
//   var list = names.sort();
//   console.log(list);
//   return list;
// }

// console.log(sortingNames());