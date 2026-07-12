console.log("Object");

const score = [10, 3, 5, 6, 9, 8];

const sv1 = {
    score: 10,
    name: "Khanh",
    age: 20,
    address: {
        city: "Da Nang",
        motherLand: "Hue",
    },
};

const sv2 = {
    score: 8,
    name: "Thuy",
    age: 19,
    address: {
        city: "Lam Dong",
        motherLand: "Ha Tinh",
    },
};

const student = [sv1, sv2];
console.log(">> score:", score);
console.log(">> Student:", student);

// CRUD
console.log("====================");
const person = {
    name1: "Dat",
    age1: 25,
};

console.log("person name before:", person.name1);

person.diachi = "Hoi An";
console.log("person diachi after:", person.diachi);
console.log("person add: ", person);

person.language = "viet";
delete person.language
console.log("person delete", person);
