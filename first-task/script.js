//Recapitulare JS
//Nume: Tache Mihnea Cristian

//site uri folosite pentru documentare
//https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/
//https://www.freecodecamp.org/news/copying-stuff-in-javascript-how-to-differentiate-between-deep-and-shallow-copies-b6d8c1ef09cd/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

//2. var,let,const
//In Javascript puteam declara pana sa apara ES6 numai cu ajutorul "var"
var variabila_var = ""; //aceasta poate sa ia orice fel continut (string , integer,object , undefined,null)
//variabilele declarate cu "var" trebuie initializate cu o valoare

//Odata cu aparitia ES6 ,avem posibiliatea de a folosi "let" si "const" pentru a declara variabile
let variabila_let = "let";
const variabila_const = "const";
//variabilele let pot fi schimbate , pe cand cele const nu pot
console.log(variabila_let);
console.log(variabila_const);
variabila_let = "variabila let schimbata";
console.log(variabila_let);
//variabila_const="variabila const schimbata" //vom avea eroare
//"var" esti declarata global , in timp ce "let" si "const" sunt declarate "block"

//3. Spread operator (...)
// Spread operator ne ajuta sa expandam o lista in locuri precum
//functie ,alta lista

let lista = [1, 2, 3];
let numar = 4;
console.log("\n%cSpread operator", "color:red;");
console.log("lista de numere inainte de spread operator " + lista);
lista = [...lista, numar];
console.log("lista de numere dupa spread operator " + lista);

//4. Objects
//exemplu de obiect:
const company = {
  name: "AQUASoft",
  year: 2002,
  type: "programming",
};
//pentru a itera un obiect trebuie sa folosim "for in loop"
console.log("\n%cIterarea unui obiect", "color:red;");
for (const key in company) {
  console.log(`${key}: ${company[key]}`);
}
//deep copy inseamna ca valorile unei variabile sunt copiate
//si nu mai au legatura cu variabila originala
const x = 10;
let y = x; //copia lui x
y = 100;
console.log("\n%cdespre deep copy", "color:red;");
console.log("x: " + x);
console.log("y: " + y);

//5. Array
//Array-urile sunt liste care contin diferite tipuri de continut
//string,integer,array,objects,bool
let array = [
  "first",
  "second",
  true,
  1,
  2,
  3,
  ["anotherOne", true],
  { name: "AQUASoft" },
];
//Array-ul dispune de mai multe metode precum:
//Unshift(), Shift(), Push(), Pop(), Reverse(), Sort()
console.log("\n%c Array ", "color:red");
let lista_test = [1, 2, 3];
console.log("metode Array");
console.log("lista initiala: " + lista_test);
//unshift() adauga valori la inceputul listei
lista_test.unshift(0);
console.log("lista unshift: " + lista_test);
//shift() elimina primul element din lista
lista_test.shift();
console.log("lista shift: " + lista_test);
//push() adauga elemente la sfarsitul listei
lista_test.push(4, 5, 6);
console.log("lista push: " + lista_test);
//pop() elimina valoarea de la sfarsitul listei
lista_test.pop();
console.log("lista pop: " + lista_test);
//reverse() "rastoarna" lista
let lista_test_reverse = lista_test.reverse();
console.log("lista reverse: " + lista_test_reverse);
//sort() sorteaza lista ascendent (default)

//Promise , Callback (min 17) , async,await(min 33:51)
console.log("\n%c Promise,callback", "color:red");

console.log("start");

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("now we have data");
      resolve({ userEmail: email });
    }, 1500);
  });
}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["video1", "video2", "video3"]);
    }, 1000);
  });
}

function videoDetails(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("title of the video");
    }, 2000);
  });
}
// const user = loginUser("mihnea@gmail.com", 12345, (user) => {
//   console.log(user);
//   getUserVideos(user.email,videos=>{
//       console.log(videos);
//       videoDetails(videos[0],title=>{
//           console.log(title);
//       })
//   })
// });
loginUser('mihnea',1234)
.then(user=>getUserVideos(user.email))
.then(videos=>videoDetails(videos[0]))
.then(detail=>{console.log(detail);})

console.log("end");

//date care vin in acelasi timp
const yt=new Promise(resolve=>{
    setTimeout(()=>{
        console.log("stuff from youtube");
        resolve({videos:[1,2,3,4]})
    },2000)
})
const fb=new Promise(resolve=>{
    setTimeout(()=>{
        console.log("stuff from FACEBOOK");
        resolve({users:['user1','user2','user3','user4']})
    },3000)
})
//fb primeste datele imediat ce yt primeste datele
Promise.all([yt,fb]).then(result=>{console.log(result);})

//async,await
//functia async transforma orice functie intr-o functie care returneaza un "promise"
//valoarea returnata este garantata sa fie convertita la un promise
let functie_test=async()=>{return "functia async"}
//pentru a "consuma" valoarea returnata , avem nevoie de ".then()"
functie_test().then((x)=>console.log(x))
//await poate fi pus in fata oricarei functii async
function displayUser(){
    const loggingUser=await loginUser('mihnea@gmail.com',12345);
    const videos=await getUserVideos(loginUser.userEmail);
    const detail=await videoDetails(videos[0]);
    console.log(detail);
}


//closure
//este o grupare de o functie sau mai multe intr-o functie
//un closure permite accesul unei functii din interior sa acceseze
//variabilele din exteriorul ei
const closure_func=()=>{
  const nume="Mihnea" //variabila in afara functiei "afisare"

  const afisare=()=>{  
    console.log("Nume: "+nume);  //functia foloseste variabila din exteriorul ei
  }
  return afisare;
}
let myFunc=closure_func();
myFunc();