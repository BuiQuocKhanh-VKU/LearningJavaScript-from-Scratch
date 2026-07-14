const pd1 = {
    name: "Book",
    price: 100,
    inStock: true,
};
const pd2 = {
    name: "T shirt",
    price: 200,
    inStock: true,
};
const pd3 = {
    name: "Jeans",
    price: 300,
    inStock: false,
};

const products = [pd1, pd2, pd3];
console.log(products);
console.log("================");

const firstPd = products[0]
console.log("1. In ra ten cua sp dau tien:", firstPd.name);

pd2.price = 150;
console.log("2. Thay doi gia san pham thu 2:", pd2.price);

products.push("hehe");
console.log("3. Them 1 san pham moi vao cuoi danh sach:", products);

products.pop();
console.log("4. Xoa san pham cuuoi cung ra khoi danh sach:", products);

console.log("================");
products.forEach((item, index) => {
    console.log("5. In tat ca san pham:", item, index);
});

console.log("================");
const products2 = products.map((item, index) => {
    return item.price;
});
console.log("6. Tao mang moi chi chua gia san pham:", products2);

const conHang = products.filter((item, index)=>{
      return item.inStock == true
})
console.log("7. Lay san pham con hang:", conHang);
