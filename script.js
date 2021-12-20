//console.log("Hello");

//////////////////////////////////////////////////////////////////////////////
//     indexOf()
//////////////////////////////////////////////////////////////////////////////

// function countElement(arr, element){
//     let count = 0;
//     let select = arr.indexOf(element);
    
//     while(select !== -1){
//         count++;
//         select = arr.indexOf(element, select + 1);  // second parameter is fromindex
//     }
    
//     return count;
// }

// const arr = [1,2,3,2,3,4,1,5,6];
// const element = 6;

// let count = countElement(arr, element)
// console.log(count);   // return number of selected element in array
//////////////////////////////////////////////////////////////////////////////
//     includes()
//////////////////////////////////////////////////////////////////////////////

// const arr = [1,2,3,2,3,4,1,5,6];
// console.log(arr.includes(1));   //true
//////////////////////////////////////////////////////////////////////////////
//     find()
//////////////////////////////////////////////////////////////////////////////

// const arr = [1,2,3,2,3,4,1,5,6];
// console.log(arr.find(element => element < 6)); //1
//find() method to search for the first occurrence of an element that satisfies a test


// let customers = [{
//     name: 'ABC Inc',
//     credit: 100
// }, {
//     name: 'ACME Corp',
//     credit: 200
// }, {
//     name: 'IoT AG',
//     credit: 300
// }];

// console.log(customers.find(obj => obj.credit >= 300));
//////////////////////////////////////////////////////////////////////////////
//     splice()
//////////////////////////////////////////////////////////////////////////////

// const arr = [1,2,3,2,3,4,1,5,6];                       // original array

// // let removedElements = arr.splice(1,8);              // eight element removed from the array starting from "1" index
// // console.log("removedElements",removedElements);     // [ 2, 3, 2, 3, 4, 1, 5, 6 ]
// // console.log("original array",arr);                  // [ 1 ]

// // arr.splice(1,0,10,11,12);                           // three element are added to array starting from "1" index
// // console.log("array with added elements",arr);       //[ 1, 10, 11, 12, 2, 3, 2, 3, 4, 1, 5, 6 ]

// let languages = ['C', 'C++', 'Java', 'JavaScript'];    // remove first element from array and added "c#" to array
// languages.splice(0,1,'c#');                            // [ "c#", "C++", "Java", "JavaScript" ]
// console.log("replace first element",languages);

//////////////////////////////////////////////////////////////////////////////
//     slice()
//////////////////////////////////////////////////////////////////////////////

// const arr = [1,2,3,2,3,4,1,5,6];
// let copiedElements = arr.slice(1, arr.length - 1);         // copy element from array starting from index "1" to total_length-1
// let clone = arr.slice();
// console.log(copiedElements); // 2,3,2,3,4,1,5
// console.log(clone);          // [1,2,3,2,3,4,1,5,6]

//////////////////////////////////////////////////////////////////////////////
//     spread operator
//////////////////////////////////////////////////////////////////////////////

// const arr = [1,2,3,2,3,4,1,5,6,'a','b','c'];

// function filterArray(...arr){
//     return arr.filter(e => typeof e !== 'number');
// }

// console.log(filterArray(...arr)); // ['a','b','c']

//////////////////////////////////////////////////////////////////////////////
//      rest operator
//////////////////////////////////////////////////////////////////////////////

// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// const arr3 = [7,8,9];

// const arr4 = [...arr1,...arr2,...arr3];
// console.log("concate array with spread operator",arr4);

// const arr5 = [];
//       arr5.push(...arr1,...arr2,...arr3);
// console.log("push array with spread operator",arr5);

//////////////////////////////////////////////////////////////////////////////
//     forEach()
//////////////////////////////////////////////////////////////////////////////

// const arr = [1,2,3,2,3,4,1,5,6,'a','b','c',8,6,4];
// const arrInt = []
// let count = 0;
// arr.forEach((e) => {
//     if(typeof e === 'number'){
//         count++;
//         arrInt.push(e);
//     }
// });

// console.log("number of int", count, arrInt);

//////////////////////////////////////////////////////////////////////////////
//    split() and join()
//////////////////////////////////////////////////////////////////////////////

// let paragraph = 'Good Morning! How are you?';
// let arr = paragraph.split(' ');

// console.log("array of string",arr); //[ "Good", "Morning!", "How", "are", "you?" ]

// let joinArr = arr.join(' ');

// console.log(joinArr); //Good Morning! How are you?

//////////////////////////////////////////////////////////////////////////////
//    sort()
//////////////////////////////////////////////////////////////////////////////

// const arr = [1,2,3,2,3,4,1,5,6];

// arr.sort((a,b) => {
//     if(a > b) return 1;
//     if(a < b) return -1;
//     return 0;
// });

// console.log("ascending order",arr);

// arr.sort((a,b) => {
//     if(a > b) return -1;
//     if(a < b) return 1;
//     return 0;
// });

// console.log("descending order",arr)

//////////////////////////////////////////////////////////////////////////////
//    sort()
//////////////////////////////////////////////////////////////////////////////

// let employees = [
//     {name: 'John', salary: 90000, hireDate: "July 1, 2010"},
//     {name: 'David', salary: 75000, hireDate: "August 15, 2009"},
//     {name: 'Ana', salary: 80000, hireDate: "December 12, 2011"}
// ];

// employees.sort((a,b) => {
//     let x = a.salary;
//     let y = b.salary;

//     return x - y;
// });

// console.table(employees) // sort in ascending order by employee salary

//////////////////////////////////////////////////////////////////////////////
//    reverse()
//////////////////////////////////////////////////////////////////////////////

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.reverse();
// console.log(fruits);  //[ "Mango", "Apple", "Orange", "Banana" ]

//////////////////////////////////////////////////////////////////////////////
//    every()
//////////////////////////////////////////////////////////////////////////////

// let numbers = [1, 3, 5];
// let range = {
//     min: 0,
//     max: 10
// };

// let inRange = numbers.every((e) => {
//     return e >= range.min && e <= range.max;
// });

// console.log("array in range",inRange);

//////////////////////////////////////////////////////////////////////////////
//  some()
//////////////////////////////////////////////////////////////////////////////

// const arr = [1,2,3,2,3,4,1,5,6,'a','b','c',8,6,4];
// function elementExist(arr, element){
//     return arr.some((e) => {
//         return e === element;
//     });

// }

// console.log(elementExist(arr, 2)); //true

//////////////////////////////////////////////////////////////////////////////
//    filter() and sort()
//////////////////////////////////////////////////////////////////////////////

// let cities = [
//     {name: 'Los Angeles', population: 3792621},
//     {name: 'New York', population: 8175133},
//     {name: 'Chicago', population: 2695598},
//     {name: 'Houston', population: 2099451},
//     {name: 'Philadelphia', population: 1526006}
// ];

// let maxPopulation = cities.filter((e) => {
//     return e.population >= 3000000;
// }).sort((x, y) => {
//     return y.population - x.population;
// })

// console.table(maxPopulation);

//////////////////////////////////////////////////////////////////////////////
//    map()
//////////////////////////////////////////////////////////////////////////////

// let numbers = [4, 9, 25, 36, 49];
// let results = numbers.map(Math.sqrt);

// console.log("square roots",results);

//////////////////////////////////////////////////////////////////////////////
//    reduce()
//////////////////////////////////////////////////////////////////////////////

// let num = [1,1,1,1];
// let results = num.reduce((a,c) => {
//     return a + c;
// });

// console.log(results); //4

//////////////////////////////////////////////////////////////////////////////
//    reduce()
//////////////////////////////////////////////////////////////////////////////

// let shoppingCart = [{
//         product: 'phone',
//         qty: 2,
//         price: 600
//     },
//     {
//         product: 'Screen Protector',
//         qty: 1,
//         price: 10
//     },
//     {
//         product: 'Memory Card',
//         qty: 2,
//         price: 50
//     }
// ];

// let totalQty = shoppingCart.reduce((a,c) => {
//     return a + c.qty;
// },0); //initial value set to 0

// let totalPrice = shoppingCart.reduce((a,c) => {
//     return a + (c.qty * c.price);
// },0)
// console.log("Total qty",totalQty, "Total price",totalPrice); //5 ,1310

//////////////////////////////////////////////////////////////////////////////
//    reduce()
//////////////////////////////////////////////////////////////////////////////

// let num = [1,2,3,4];
// let res = num.reduce((a, c) => {
//     console.log("acc",a ,"cur",c);
//     return a + c;
// },0); //initial value set to 0

// console.log(res); //10  

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

