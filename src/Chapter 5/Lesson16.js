// const myPromise = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("2");
//             //return
//             resolve("returned");
//         }, 2000);
//     });
// };

// console.log("1");
// myPromise().then((data) => {
//     console.log("data: ", data);
//     console.log("3");
// });

console.log("=============================");
const temp = fetch("http://localhost:8000/users");
temp.then((res) => res.json()).then((data) => console.log(data));
