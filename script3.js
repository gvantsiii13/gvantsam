/*დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (a,b) და დააბრუნებს შესაბამისს ტექსტს 
თუ ტიცხვები ტოლია : a  და b ტოლია
თუ a მეტია b ze : a  მეტია b -ზე
თუ a ნაკლებია  b ze : a  ნაკლებია  b -ზე */

function shedareba  (a,b){
    if (a==b)
    {    return "a  და b ტოლია";
}
else if (a>b){
    return "a  მეტია b -ზე";
}
else {

    return "a  ნაკლებია  b -ზე";
}
};
console.log(shedareba (5,10));


//დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ true თუ მათი ჯამი მეტია 100 ზე , false , თუ არ არის მეტი 100 ზე
function buliani(a,b){
      if (a+b>100){
         return "true";
    }
else {
    return "false";
}
};
console.log(buliani(10, 20));
/*დაწერეთ ფუნქცია, რომელიც დაითვლის და დააბრუნებს კალათბურთის თამაშისას აღებულ ქულას ( ქულების ჯამს). ფუნქციას აქვს სამი პარამეტრი
პირველი პარამეტრი - 1 ქულიანების რაოდენობა
მეორე პარამეტრი -  2 ქულიანების რაოდენობა
მესამე - 3 ქულიანების რაოდენობა */
function kalaTburTis_qulebi(qulianebis_raodenoba1, qulianebis_raodenoba2, qulianebis_raodenoba3){
   return qulianebis_raodenoba1 + qulianebis_raodenoba2 * 2 + qulianebis_raodenoba3 * 3;

}
console.log(kalaTburTis_qulebi(2, 4, 2));

/*დაწერეთ ფუნქცია ორი პარამეტრით start და end , ფუნქციას გადაეცემა ორი რიცხვი, უნდა შექმნათ  start დან end-ჩათვლით 
 რიცხვების მასივი(მაგალითად თუ start არის 3 და end არის 6 მასივის ელემენტები
 უნდა იყოს [3,4,5,6] ) ( arr.push()- მასივში ელემენტის დამატება) */
 function masivi (start, end){        
    let cifrebi = [];
    if (start > end){
    return "პარამეტრები  არასწორია";
    }
     else{
        
     for (let i = start; i <= end; i++) {
     cifrebi.push(i);
    }}
        return cifrebi;
    }
    
    console.log(masivi(3, 8)); 
    console.log(masivi(8, 5));

    /*ობიექტ person - ს აქვს შემდეგი properties: firstname, lastname, age, დაწერეთ ფუნქცია რომელიც პერსონის ასაკის მიხედვით დაბეჭდავს 
    თუ 18  წელზე პატარაა - “პერსონის სახელი” არასრულწლოვანია
    თუ 18 და მეტია “პერსონის სახელი” - სრულწლოვანია */
    
     const person = {
        firstname: "gvantsa",
        lastname: "mamuchashvili",
        age: 30
    };
    
    function asaki() {
        if (person.age < 18) {
            console.log(person.firstname + "_არასრულწლოვანია");
        } else {
            console.log(person.firstname + "_სრულწლოვანია");
        }
    }
    
    asaki(person);
    /*გამოაცხადეთ მასივი phones ელემენტებით : Iphone, Samsung, Pixel, Huawei, Xiaomi და დაბეჭდეთ. 
    Დაბეჭდეთ ელემენტები სათითაოდ ( გამოიყენეთ for ციკლი)*/
let phones = ["Iphone", "Samsung", "Pixel", "Huawei", "Xiaomi"];
    console.log(phones);
    for (let i = 0; i < phones.length; i++){
    console.log(phones[i]);
    };

    /*Გამოაცხადეთ ცვლადი num სასურველი მნიშვნელობით ( მაგ. 23), დაბეჭდეთ რიცხვები 1 დან num ის ჩათვლით ( გამოიყენეთ while ციკლი).*/
let num = 23;
let i = 1;
while (i <= num) {
    console.log(i);
    i++;
};

/*Გამოიყენეთ სასურველი ციკლი და დაბეჭდეთ ლუწი რიცხვები 2-დან 13 - ის ჩათვლით , გამოიყენეთ სასურველი ციკლი ( for, while)*/

for (let a =2; a < 13; a+=2){
    console.log(a);
};
 {console.log("smile")}



