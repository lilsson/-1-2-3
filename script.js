// task 1 
// let  user = {
//      firstname: "giorgi",
//      lastname: "smith",
//      age: 25,
//      studentstatus: "active",
// };

// console.log (user.studentstatus);

// task 2
// 2. შექმენით მასივი, და დაბეჭდეთ სათითაოდ თითოეული ელემენტი; (for, while ციკლების საშუალებით);

// let names = ["ani", "levani", "goga", "lile"];
// for (let i = 0; i < names.length; i++) {
//     console.log (names[i]);
// }

// let names = ["ani", "levani", "goga", "lile"];
// let i = 0;
// while (i < names.length){
//     i++;
//     console.log(names[i]);
// }

// task 3
// 3.  შექმენით მასივი, და ამოიღეთ ყველა რიცხვი რომელიც მეტია 5ზე, for ციკლის გამოყენებით.

// let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

// for ( let i = 0; i < numbers.length; i++  ){
//     if (numbers[i] > 5) {
//         console.log (numbers[i]);
//     }
// }

//  task 4 

// let users =  [
//     {username:'test1', status: false},
//     {username:'test2', status: false},
//     {username:'test3', status: true}
// ];

// for (let i = 0; i < users.length; i ++){
//     if (users[i].status === true){
//         console.log(users[i]);
//     }
// }

// task 5

// მოცემული მასივიდან for ციკლის საშუალებით კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:

let arr = [[2, -3, 5, 11], [1, -30, -11, 100], [-1, -3, -4]];

for (let i = 0; i < arr.length; i++) {
    const numbers = arr[i];
  for (let x = 0; x < numbers.length; x++) {
    const positive = numbers[x];
    if (positive > 0) {
      console.log (positive);
    }
    
  }
}
// task 6


//რას დააუბრუნებს 6 === “6”? (true ან false) ახსენით რატო?
// დააბრუნებს false რადგან კონვერტაციას არ გააკეთებს. სტრინგი და ნამბეერი.

// task 7 
// მოცემულია მასივი:
// ამოიღეთ მარტო ის სიტყვები რომლების სიმბოლოების რაოდენობა 5-ზე მეტია და მოიცავენ ‘ava’-ს;

// let array = ["html", "css", "bootstrap", "javascript","python"];

// for (let i = 0; i < array.length; i ++){
//     if (array[i].length > 5 && array[i].includes ("ava")) {
//         console.log(array[i]);
//     }
// }

// task 8 



// let user = {
// 	name: "giorgi",
// 	age:  20,
// 	studentstatus: "active",
// };



//   if (user.age > 18 && user.studentstatus === "active") {
//     console.log("Hello");
//   }
//   if (user.name === "giorgi") {
//     console.log("Hello Giorgi");
//   }
//   if (user.status === "active" || user.age < 25) {
//     console.log("Hello  world");
//   } else {
//     console.log("Error");
//   }
// ერორი რატო არ იბეჭდება? 


// task 9 

// let array = [ "watermelon", "pear", 10, 45, 50, "apple", "ananas" ] ;
 

//   for( let i = 0; i < array.length; i ++){
//       if (typeof array[i] === "string") {
//           console.log(array[i]);
//     }
//   }

