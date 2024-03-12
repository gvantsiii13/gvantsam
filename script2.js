let a=87; b=65;
console.log(a+b);
let student = {
    firstname: "saba",
    lastname: "sabanaZe",
    age: 29,
    email: "sabanadze#gmail.com",
    marks: 1
}
console.log(student.firstname);
//გამოაცხადეთ ორი ცვლადი m და n მნიშვნელობებით 45 და 23,
// დაბეჭდეთ მათი ჯამი თუ m მეტია n ზე , თუ არადა დაბეჭდეთ n

let m=45; n=23;
if (m > n ) {
console.log(m+n)
}
else {
    console.log(n)
};
//გამოაცხადეთ ცვლადი studentName და მიანიჭეთ მნიშვნელობად თქვენი სახელი.
// დაბეჭდეთ “Rise and shine, “თქვენი სახელი” !” 
//( მაგ თუ სახელი არის Irakli  უნდა დაიბეჭდოს Rise and shine, Irakli ! )
let studentname = "gvanta";
console.log("Rise and shine,",studentname, "!");
//გამოაცხადეთ ცვლადი bonus და salary ცვლადები, 
//salary -ს მიანიჭეთ სასურველი რიცხვითი მნიშვნელობა, 
//დაწერეთ თუ ხელფასი არის 2000 ლარი ან მეტი მაშინ ბონუსი არის 0, 
//თუ ხელფასი 2000 ze ნაკლებია მაშინ ბონუსი არის ხელფასის 10%. 
//დაბეჭდეთ ბონუსი (ჯერ bonus ცვლადს უნდა მიანიჭოთ შესაბამისი მნიშვნელობა და შემდეგ დაბეჭდოთ bonus)
let bonus; salary = 1500;
if (salary >= 2000) {
    bonus = 0;
}
else if(salary <2000){
    bonus = salary*10/100
}

console.log (bonus);
//გამოაცხადეთ ცვლადი a, b და c. სადაც a = 23, b=a-ნახევარი, 
//c= a-ს და b-ს ჯამი. დაბეჭდეთ c.
a=23; b=a-a/2; c=a+b;
console.log(c);
//გამოაცხადეთ მასივი phones ელემენტებით : Iphone, Samsung, Pixel, 
//Huawei, Xiaomi და დაბეჭდეთ.
let phones = ["Iphone", "Samsung", "Pixel", "Huawei", "Xiaomi"];

console.log(phones);
phones.push("Motorola");
console.log(phones);
let g=1;
for(g=1;g<=12;g++){
console.log (g);}