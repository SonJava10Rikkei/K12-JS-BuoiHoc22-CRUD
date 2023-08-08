// var arr = [1, 2, 3, 4, 5];

// dung for de dao nguoc lai cac phan tu va in ra man hinh nhu sau: [5,4,3,2,1]
// i = length -1

// function reVerse(arr) {
//   var newArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     // lap tu 5 -> 1
//     newArr[i] = arr[arr.length - 1 - i];
//     // gan dao nguoc
//   }
//   return newArr;
// }

// console.log(reVerse(arr));

// -----------------------------------------------

// var newArr = arr.reverse();
// console.log("newArr", newArr);

// -----------------------------------------------

// var string = "Nguyễn Xuân Chiến";

// // viet function dao nguoc string tren va in ra man hinh - reverse

// function reverseStringName(str) {

//   // tach chuoi thanh mang cac tu
//   var newArr = str.split("");

//   // Dao nguoc cac phan tu trong mang cac tu
//   var reverseArr = newArr.reverse();

//   // Ghep cac tu trong mang thanh mot chuoi moi
//   var resultStr = reverseArr.join("");

//   // Tra ve chuoi da dao nguoc cac tu
//   return resultStr;
// }

// // Su dung ham reverse voi mot chuoi dau vao
// var reverseString = reverseStringName(string);
// console.log("Chuoi sau khi dao nguoc : ", reverseString);

//////////////////////// Cach 2 ////////////////////////

// function reverseString(string) {
//   return string.split(" ").reverse().join(" ");

//   // Tach thanh arr --> dao nguoc phan tu trong arr --> gom arr thanh string
// }
// console.log(`Reverse String: ${reverseString(string)}`);
// console.log(typeof string);

// -------------------------------------------------------------------------------------

// var arr = [1343, 2545, 0, 4, 5];

// Sap xep cac phan tu tu be den lon
// hai vong for

// function sort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     // 1,2,3,4,5
//     for (let j = i + 1; j < arr.length; j++) {
//       // 1 - 2/3/4/5
//       // 2 - 3/4/5
//       // ....
//       // Dung de so sanh cac phan tu voi nhau va doi cho cho nhau
//       if (arr[j] < arr[i]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }
// console.log("Ket qua: ", sort(arr));

//////////////////////////// cach 2 /////////////////////////////
// Method sap xep

// var newArr = arr.sort(function (before, after) {
//   return after - before;
// });
// console.log("New Arr", newArr);

// var newArr = arr.sort(function (after, before) {
//   return after - before;
// });
// console.log("New Arr", newArr);

//////////////////// Tim so lon nhat va be nhat //////////////////

// function min(arr) {
//   arr.sort(function (before, after) {
//     return after - before;
//   });
//   console.log("Gia tri nho nhat la: " + arr[arr.length - 1]);
//   console.log("Gia tri lon nhat la: " + arr[0]);
// }
// min(arr);

// -------------------------------------------------------------------------------------

// for each

// arr.forEach(function (value, index) {
//   console.log(value, index);
// });

// map

// var newArr = arr.map(function (value, index) {
//   console.log(value, index);
//   return "chien";
// });

// console.log(newArr);

// var arr2 = [
//   { id: "123123", name: "chien", class: "k12" },
//   { id: "456456", name: "Son", class: "k12" },
//   { id: "789789", name: "Minh", class: "k12" },
// ];

// Dung map tra ra moi array nhu sau

// var newArr2 = [
//   { name: "chien", class: "k12" },
//   { name: "Son", class: "k12" },
//   { name: "Minh", class: "k12" },
// ];

// var newArr2 = arr2.map(function (value, index) {
//   return {
//     name: value.name,
//     class: value.class,
//   };
// });

// console.log(newArr2);

// var A = [23, 32, 43, 234, 234, 23, 42, 5555];

// var B = A.filter(function (value) {
//   return value !== 5555;
// });

// console.log(B);

// var arr = [
//   { name: "chien", class: "k12", listNumber: [234, 234, 23, 234, 25, 25] },
//   { name: "Son", class: "k12" },
//   { name: "Minh", class: "k12" },
// ];

// function search(arr) {
//   var result = arr.filter(function (value) {
//     return value.name === "chien";
//   });

//   result[0].listNumber.forEach(element => {
//     console.log(element);
//   });
// }

// search(arr);

var A = [2323, 3, 23, 423, 4243, 234234, 62, "Chien"];
var B = ["Nguyen", "Xuan"]

// A.push(999)
// A.push({ id: 123, name: "son", class: "k12" });
// A.unshift("aaaa")
// A.pop();
// A.shift();
// console.log(A);

var C = A.pop();
console.log(C);

B.push(C)
var D = B.join(" ")
console.log(D);

