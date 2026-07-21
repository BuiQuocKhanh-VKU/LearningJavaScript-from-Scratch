const hamTinh = () => {
    ((a = 10), (b = 0));

    if (b === 0) {
        throw new Error("Loi chia khong dc");
    }
    return a / b;
};

// console.log(hamTinh());
console.log("HI!");
try {
    hamTinh();
} catch (e) {
    console.log(e);
} finally {
    console.log("run finally");
}
