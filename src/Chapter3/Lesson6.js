const mang = ["khanh", "bui", "quoc"];

//Access
console.log("1:", mang[1]);

//Edit
mang[2] = "QUOC";
console.log("before:", mang);

//Add, Delete
mang.push("hehe");
console.log("after:", mang);

mang.unshift("hoho");
console.log( mang);

mang.pop()
mang.shift()
console.log("after:", mang);
