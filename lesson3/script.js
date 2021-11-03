// 1. შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;

//   მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
//   მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
//   გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//   წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
//   დაბეჭდეთ მასივისი ახალი ელემენტები.


// let items = [5, 25, 89, 120, 36];

// items.push('javascript', 'python')

// items.unshift('html', 'css')

// console.log(items.length);

// items.shift();

// items.pop();

// console.log(items);

// 2. შექმენით მასივი, შემდეგი ელემენტებით: ფორთოხალი, ბანანი, მსხალი;

//   გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
//   მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
//   მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
//   გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//   მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
//   წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
//   გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;

//   let fruit = ['ფორთხოხალი', 'ბანანი', 'მსხალი'];

// console.log(fruit.length);

// fruit.push('ვაშლი', 'ანანასი');


// fruit.unshift('საზამთრო');

// console.log(fruit.length);

// fruit.splice(2,0, 'მანგო');
// console.log(fruit);

// let newFruit = fruit.slice(1,6)
// console.log(newFruit);
// console.log(newFruit.length);

// 3. მოცემულია მასივი:

// let array = [12, 25, 3, 6, 8, 14, 7, 23];
// map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array მასივიდან თითოეული ელემენტი იქნება 3-ზე გაყოფილი

// let aRray = [12, 25, 3, 6, 8, 14, 7, 23].map(function (currEl) {
//     return currEl / 3;
//   });
//   console.log(aRray);

// 4.  მოცემულია მასივი:

// let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
// filter-ის გამოყენებით გაფილთრეთ და გამოიტანეთ მარტო ციფრები; 

// let filterarray = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
// let newfilter = filterarray.filter(function(x) {
//     return typeof x === "number"
// }
// )

// console.log(newfilter);