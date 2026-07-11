const myClass = ["khanh", "hung", "nghia", "tu", "thuy"];

console.log(myClass, "with", myClass.length);

// for (let i = 0; i < myClass.length; i++) {
//     console.log("i = ", i, "and value =", myClass[i]);
// }

// console.log("====================")
// for (let i = 1; i <= myClass.length; i++) {
//     console.log("i = ", i, "and value =", myClass[i-1]);
// }

//for each
myClass.forEach((value, index) => {
    console.log(value, index);
});



console.log("====================");
const score = [10, 9, 7, 3, 5, 6];
console.log(score, "with", score.length);
// score.forEach((gtr, chiso)=>{
//     console.log(gtr, chiso);
// })
const scoreX2 = score.map((value, index) => {
    return value * 2
})
console.log(scoreX2)

