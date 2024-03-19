/*დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n) და დააბრუნებს 
რომელიც მეტია იმ რიცხვს , თუ რიცხვები ტოლია დააბრუნებს 0 -ს */

function shedareba (m,n){
    if (m === n) {
        return 0;
    } else {
       
       return  Math.max(m,n);
   } 
};
console.log(shedareba (19, 17));

/*დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს),
 დააბრუნეთ რიცხვების ჯამი
*/
function dabruneba (a,b){
    return sum = a+b;
}
console.log(dabruneba(4,6));

/*დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს
 ( ფუნქციას არ აქვს პარამეტრი)*/
function verifikacia(){
    console.log( "გვანცა მამუჩაშვილი");
}
verifikacia();

/*დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname დააბრუნეთ
სრული სახელი და დაბეჭდეთ ( ფუნქცია აბრუნებს სრულ
სახელს და ფუნქციის გარეთ ბეჭდავთ)
*/
function saxeligvari(fristname, lastname){
    return fristname+' '+lastname;
}
console.log(saxeligvari("gvantsa", "mamuchashvili"));


/*Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n) და
 ფუნქციამ უნდა დააბრუნოს 1 დან ამ რიცხვამდე  (n-მდე) რიცხვების 
 ნამრავლი ( ანუ თუ რიცხვი არის 3 ფუნქციამ უნდა დააბრუნოს 1*2*3 -ის
მნიშვნელობა, დაგჭირდებათ ახალი ცვლადის გამოცხადება ფუნქციის შიგნით
რომელსაც მიანიჭებთ ნამრავლის მნიშვნელობას. Პ.ს. Უნდა გამოიყენოთ 
თქვენთვის სასურველი ციკლი)
*/ 
function namravli(n){
    let m=1;
    for (let i=1;  i<=n;  i++){
      m *= i;
    }
    return m;
};
  console.log(namravli(4));

  /*Შემდეგი დავალებებისთვის გამოიყენეთ :ობიექტი student - რომელსაც აქვს შემდეგი properties: firstname, 
  lastname, age, marks (scores არის შემდეგი რიცხვების მასივი: 4,7,5,3,2) და მეთოდი რომელიც აბრუნებს სტუდენტის სრულ სახელს
   ( ობიექტი შეიცავს მეთოდს, ცალკე ფუნქციად არ უნდა დაწეროთ ) 

6. დაბეჭდეთ  სტუდენტის სრული სახელი ( გამოიყენეთ student ობიექტის მეთოდი)
 */
let student = {
    firstName: "gvantsa",
    lastName: "mamuchashvili",
    age: 30,
    marks: [4, 7, 5, 3, 2]    
}

   student.fullName= student.firstName.concat(" ", student.lastName)

   console.log(student.fullName); 

   //Დაწერეთ ფუნქცია რომელსაც გადასცემთ სტუდენტის ქულება ( scores) და ფუნქცია დააბრუნებს  ქულების ჯამს

    function qulebisjami(qulebi){
        let sum = 0;
        qulebi.forEach(function(m){
            sum += m;
        });   
        return sum;}
        console.log(qulebisjami(student.marks));
        
        //დაბეჭდეთ სტუდენტის სახელი და ასაკი


    student.info = student.firstName.concat(" ", student.age + " წლის")

    console.log(student.info);