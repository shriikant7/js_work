import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
<h1>Javascript Basic</h1>
<div id = 'ulelem'> click </div>
`;
const myInformTion = ["sarang jain", 9405034908, "frontend trainer"];
const myInformTionRef = myInformTion;
console.log(myInformTion);
console.log(myInformTionRef);
myInformTion.push("married");
myInformTionRef.push("yes it is me");
const shri = Array("hi", "there", "noway");
const kailas = new Array("yes", "bro ");
console.log(shri);
console.log(kailas);
const orabba = [
  "names",
  23,
  ["dssd", "dsds", "sfsfs"],
  false,
  null,
  {},
  () => {
    console.log("aisehi");
  },
];
console.log(orabba);
const jkdsds = [
  ["ddf", "fdas", "vhg"],
  ["hyj", "fafs", "fafeg"],
];
let jscollection = jkdsds[0];
console.log(jscollection[1]);
const newName = [
  ["shrikant", "kailas", "mahesh", "saiua"],
  ["rima", "roma"],
  ["sanam", " yetona"],
  ["haina", "hot"],
];
let courses = ["angular", "react", "javascript", "typescript"];

console.log(courses.includes("javascript"));
/*function createElement({ name, type }) {
  const newele = document.createElement("label");
  const newele2 = document.createElement("input");
  newele.innerText = name;
  newele2.type = type;
  newele.append(newele2);
  return newele;
}
const ghu = createElement({ name: "shrikant ", type: 23 });
app.append(ghu);
function neew({ label, type }) {
  const huu = document.createElement("label");
  const huuu = document.createElement("input");
  huu.innerText = label;
  huuu.type = type;
  huu.append(huuu);
  return huu;
}
const haaa = neew({ label: "skkkk", type: "password" });
app.append(haaa);
const k = "hello";
const abc = document.createElement("h2");
const def = document.createElement("p");
const g = document.createElement("span");
const h = document.createElement("p");
abc.append(def);
abc.prepend(g);
g.append(h);
h.innerText = k;
console.log(abc);
app.append(abc);
const hai = ["shrikant", "kailas", "mahesh", "rushi", "akshay"];
const jklm = document.getElementById("ulelem");
console.log(jklm);
hai.forEach((p) => {
  const afsos = document.createElement("li");
  afsos.innerText = p;
  console.log(afsos);
  jklm.append(afsos);
});
console.log(jklm);

const abcdef = ["saniya", "sima", "rima", "roma"];
abcdef.forEach((name) => {
  const doc = document.createElement("h2");
  doc.innerHTML = name;
  console.log(doc);
  jklm.append(doc);
});*/

/*

1 Procedural Programming
=========================
Prcesural programming means no structure , no immutability maintain , no encapsulation no pattern , just whatever your need write accordingly.


02 Object Literals and Encapsulation
=======================================
we can make state , and behaviour wrap one place , which is too easy to understand rather than procedure programming.

03 Object Literals and Factory Functions (abstraction , and reusability)
==========================================
A factory function is a pattern which allow us to construct and return a newly created object. it deoes not use new keyword like  class or function constructor , but still this gives us every time brand new object.

// problem of muatbality , in this factory  we are getting reusablity ,
//and abstraction but the problem is our state can be mutated outside
// that is the big problem there. our state should not be changed from outside


04  Frozen State and Immutable Patterns
======================================
Here we have solved the problem, where anyonce can not mutate out state , yes here any one can assign any new item , but can not cange existing state means can not be mutated.

*/

/*
// procedural programming

// const cart = [];

// const addToCart = (item) => {
//   cart.push(item);
// };

// const removeFromCart = (id) => {
//   const index = cart.findIndex((item) => {
//     return item.id === id;
//   });

//   cart.splice(index, 1);
// };

// let hotDog = { id: "🌭", name: "hot dog", price: 399 };

// addToCart(hotDog);

// setTimeout(() => {
//   removeFromCart("🌭");
//   console.log(cart);
// }, 5000);

// console.log(cart);
*/

/*
//2) object literal and ecncapsilation with OOPs
const cart = {
  items: [],

  add(item) {
    this.items.push(item);
  },

  remove(id) {
    const index = this.items.findIndex((item) => {
      return item.id === id;
    });

    this.items.splice(index, 1);
  },
};

let hotDog = { id: "🌭", name: "hot dog", price: 399 };
let pizza = { id: "🍕", name: "cheese pizza", price: 999 };

cart.add(hotDog);
cart.add(pizza);
console.log(cart);

setTimeout(() => {
  cart.remove("🍕");
  console.log(cart);
}, 3000);

*/

/*
// 3) object literal and factory functions for the abstraction , and reusability

// const cart = {
//   items: [],

//   add(item) {
//     this.items.push(item);
//   },

//   remove(id) {
//     const index = this.items.findIndex((item) => {
//       return item.id === id;
//     });

//     this.items.splice(index, 1);
//   },
// };

// let hotDog = { id: "🌭", name: "hot dog", price: 399 };

// let shooes = { id: "👞", name: "bata", price: 30 - 00 };

// let tshirt = { id: "👕", name: "t shirt", price: 4000 };

// cart.add(hotDog);
// console.log(cart);

const createCart = (items = []) => {
  return {
    items, // items:items

    add(item) {
      this.items.push(item);
    },

    remove(id) {
      const index = this.items.findIndex((item) => {
        return item.id === id;
      });

      this.items.splice(index, 1);
    },
  };
};

let minicart = createCart([
  { id: "🌭", name: "hot dog", price: 399 },
  { id: "🍕", name: "cheese pizaa", price: 1000 },
]);

minicart.items = [];
console.log(minicart);

*/

/*

6) frozen state and immutable patterns

const createCart = (items = []) => {
  return {
    items: Object.freeze(items),
    //items,

    add(item) {
      //this.items.push(item);
      const state = [...items, item];
      this.items = Object.freeze(state);
    },

    remove(id) {
      // const index = this.items.findIndex((item) => {
      //   return item.id === id;
      // });

      // this.items.splice(index, 1);

      const state = this.items.filter((item) => item.id !== id);
      this.items = Object.freeze(state);
    },
  };
};

let minicart = createCart([{ id: "🌭", name: "hot dog", price: 399 }]);

//minicart.items.push("rishikesh");

minicart.add({ id: "🍕", name: "cheese pizaa", price: 1000 });

minicart.remove("🌭");

*/

/*const square = function (number) {
  return number * number;
};
console.log(square(4));
var userName = "Steve";

function display(name) {
  alert("MyScript2.js: " + name);
}

display(userName);
console.log("======");
function my() {
  let a = 4;
  return a * a;
}
let result = my();
console.log(result);
//var username = "kailas"

function abc(a, b) {
  return function def(c, d) {
    return function ghi(e, f) {
      console.log(a + b + c + d + e + f);
    };
  };
}
let result = abc(1, 2);

let results = result(3, 4);
results(8, 9);
function kailas(a) {
  console.log("hello");
  a();
}
function mahesh() {
  console.log("hello brother");
}
kailas(mahesh);
console.log("-------------------------");
let abc = {
  prop: "hello",
};
let def = {
  prop: "hi",
};
let ghi = {
  prop: "kya",
};
let monky = {};
let shri = function () {};
console.log(shri);
console.dir(shri);
console.log(monky);
console.dir(monky);
function Familly(firstname, lastname, age) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
}
Familly.prototype.getname = function () {
  console.log(this.firstname + " " + this.lastname);
};
Familly.prototype.getage = function () {
  console.log(this.age);
};

let shrikant = new Familly("shrikant", "mule", 23);
let chetan = new Familly("chetan", "mule", 18);
console.dir(Familly);
console.dir(shrikant);
let abcdrf = [];
console.log(abcdrf);
function Employee(fn, ln, age) {
  this.firstname = fn;
  this.lastname = ln;
  this.age = age;
}
Employee.prototype.getname = function () {
  console.log(this.firstname);
};
Employee.prototype.getage = function () {
  console.log(this.age);
};
let emp1 = new Employee("shri", "mule", 23);
console.log(emp1);
console.dir(Employee);
emp1.getname();
class Employee {
  constructor(fn, ln, age) {
    this.firstname = fn;
    this.lastname = ln;
    this.age = age;
  }
  getname() {
    return console.log(this.firstname);
  }
  getage() {
    console.log(this.age);
  }
}
let emp1 = new Employee("chetan", "mule", 18);
console.log(emp1);
emp1.getage();
function Myfamily(n, ln, age, fn, mn, ffn, fmn, mfn, mmn) {
  this.name = n;
  this.lastname = ln;
  this.age = age;
  this.fathername = fn;
  this.mothername = mn;
  this.fatherinfo = {
    fatherfname: ffn,
    fathermname: fmn,
  };
  this.motherinfo = {
    motherfname: mfn,
    mothermname: mmn,
  };
}
Myfamily.prototype.getname = function () {
  console.log(this.name);
};
let shri = new Myfamily(
  "shrikant",
  "mule",
  23,
  "bhausaheb",
  "sunita",
  "eknath",
  "bhima",
  "shankar",
  "vachalabai"
);
console.log(shri);
shri.getname();
console.log(document);
console.dir(document);
console.log(document.documentElement);
console.dir(document.head);
console.log(document.body instanceof HTMLBodyElement);
console.log(document.body instanceof HTMLElement);
console.log(document.body instanceof Element);
console.log(document.body instanceof Node);
console.log(document.body.nodeType);
console.log(document.nodeType);
const myDive = document.createElement("hello");
console.log(myDive);
const text = document.createTextNode("my name is shri");
console.log(text);
myDive.append(text);
console.log(myDive);
console.log(app);
app.append(myDive);*/
