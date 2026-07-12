const sv1 = {
    user: "Khanh",
    score: 9,
};
const sv2 = {
    user: "Dat",
    sco3e: 5,
};
const sv3 = {
    user: "Tam",
    score: 7,
};

const student = [sv1, sv2, sv3];
console.log("Student list: ", student);

// student.forEach((item, index) => {
//     console.log(">> index = ", index, ",name = ", item.user);
// });

const person = {
    email: "khanhbui@gmail.com",
    age: 21,
    address: "Da Nang",
};

// use in table
for (let item in person) {
    console.log(item, person[item]);
}

for (let value of Object.entries(person)) {
    console.log(value);
}
