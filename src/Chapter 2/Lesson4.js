const score = 10;

switch (true) {
    case score > 8 && score <= 10:
        console.log(`Your score ${score} is Very Good`);
        break;
    case score <= 8 && score > 6:
        console.log(`Your score ${score} is Good`);
        break;
    case score > 4 && score <= 6:
        console.log(`Your score ${score} is Kha`);
        break;

    default:
        console.log("Ngu");
        break;
}

console.log("=====================");
for (let score1 = 1; score1 < 5; score1++) {
    console.log(score1);
}

console.log("=====================");

for (i = 0; i < 7; i++) {
    if (i === 5) {
        continue
    }
    console.log(i);
}
