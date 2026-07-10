const name = "Bui Quoc Khanh"
let birthYear = 2005
const isStudent = true

const today = new Date()
const currentYear = today.getFullYear();
const Tuoi = currentYear - birthYear

console.log(`
    Ten: ${name}
    Tuoi: ${Tuoi}
    Sinh vien: ${isStudent}`)
