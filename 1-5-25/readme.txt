'Hello bro i am jaydev as a web developer'



// // // // //     // //  let n = 'emplyeeName';
// // // // //     // //  let a = 'EmployeeNo';
// // // // //     // // let obj ={
// // // // //     // //     [n] :'jaydev',
// // // // //     // //     [a] : 10,
// // // // //     // //     desgination : 'employee',
// // // // //     // //     detail(){
// // // // //     // //         return `fullname`
// // // // //     // //     }
// // // // //     // // }
// // // // //     // //    console.log(obj.detail());

// // // // //     // // let name = 'jaydev'
// // // // //     // // let desgination = 'emplyoee'

// // // // //     // // function ram(name ,desgination) {
// // // // //     // //     let fullname ='jaydev solanki'
// // // // //     // //     return {name , desgination ,fullname}
// // // // //     // // }
// // // // //     // // // console.log(ram(name,desgination ));

// // // // //     // // let s = ram(name, desgination);
// // // // //     // // console.log(s.desgination);

// // // // //     // let employee = 'jaydev'
// // // // //     // let desgination = 'employee'

// // // // //     // function kol (employee,desgination){
// // // // //     //     let cool = 'i am not cool'
// // // // //     //     return{employee,desgination,cool};
// // // // //     // }
// // // // //     // console.log(kol(employee,desgination));

// // // // //     // let m = kol(employee,desgination);
// // // // //     // console.log(m.desgination);

// // // // //     // let user = ['jaydev','client','male',20];

// // // // //     // let  [name='user', desgination = 'manager',gender,rollno] = user;

// // // // //     // console.log(name);
// // // // //     // console.log(desgination);
// // // // //     // console.log(gender);
// // // // //     // console.log(rollno);

// // // // // // function hello () {
// // // // // //     return  ['jak','emp',20]
// // // // // // }
// // // // // // let [name,desgination,rollno] = hello();
// // // // // // console.log(desgination);

// // // // // //  first is use multiple variable use
// // // // // // second is use muliple array with funciton

// // // // // let obj = {
// // // // //     nameo :'jaydev',
// // // // //     gender :'male',
// // // // // }

// // // // // let {nameo : n ,gender : g} = obj;

// // // // // console.log(n);
// // // // // console.log(g);

// // // // class kol {
// // // //     constructor(name){
// // // //         console.log('construtor methods');
// // // //     }
// // // //     hello(){

// // // //         let name ;
// // // //         console.log('prototype methods');
// // // //         console.log( this.name);
// // // //     }

// // // // }

// // // // let a = new kol();
// // // // a.name='jaydev';
// // // // a.hello()

// // // // class cl {
// // // //     constructor (name,age){
// // // //         this.name0 = name;
// // // //         this.age = age;
// // // //         console.log('construtor methods');
// // // //     }
// // // //     home(){
// // // //         console.log('hello ' + this.name0);
// // // //         console.log('age  ' + this.age);
// // // //     }

// // // //     static staticMethod(){

// // // //         console.log('static methods');
// // // //     }

// // // // }

// // // // let b = new cl('ramlal',23);
// // // // let c = new cl('kalulal',51);
// // // // b.home()
// // // // c.home()
// // // // cl.staticMethod();

// // // // class m {
// // // //   constructor(gender, age) {
// // // //     this.g = gender;
// // // //     this.a = age;
// // // //     console.log(`construtor`);
// // // //   }
// // // //   prto() {
// // // //     console.log(`prtotype`);
// // // //     console.log(`gender is ${this.g}`);
// // // //     console.log(`age is ${this.a}`);
// // // //   }
// // // //   static stat(desgination) {
// // // //     let d = desgination;
// // // //     console.log(`static`);
// // // //     console.log(`desgination is ${d}`);
// // // //   }
// // // // }
// // // // let om = new m("male", 33);
// // // // om.prto();
// // // // m.stat("emp");

// // // // class ankhe {
// // // //   kalo(sum) {
// // // //     this.s = sum;
// // // //   }
// // // //   nayan() {
// // // //     console.log("mind is not");
// // // //     console.log(this.s);
// // // //   }
// // // // }
// // // // let dj = new ankhe();
// // // // dj.kalo(898);
// // // // dj.nayan();

// // // // class car {
// // // //   constructor(name) {
// // // //     console.log(`car name is ${name}`);
// // // //   }
// // // // }
// // // // class bike extends car {
// // // //   constructor(name) {
// // // //     super();
// // // //     console.log(`bike name is ${name}`);
// // // //   }
// // // // }

// // // // // let a = new car('BMW');
// // // // let a = new bike("BMW");
// // // // // let b = new bike('HONDA');

// // // // class my {
// // // //   constructor(name) {
// // // //     this.empname = name;
// // // //     console.log(`hello my name is ${name}`);
// // // // }
// // // //     info(age){
// // // //         console.log(`Age is ${age}`);

// // // //     }
// // // // }
// // // // class you extends my {
// // // //     constructor(name){
// // // //         super('kalu')
// // // //             console.log(`hello my name is ${name}`);
// // // //         }
// // // //         info(){
// // // //             super.info(78);
// // // //                 console.log(`emp name is ${this.empname}`);

// // // //         }

// // // //          so(age){
// // // //             console.log(`hello my age is ${age}`);

// // // //          }
// // // // }
// // // // let n = new my('jaydev');
// // // // n.info(21);
// // // // let d = new you ('mohonlal')
// // // // d.info()
// // // // d.so(78)

// // // // class employee {
// // // //     constructor(ename){
// // // //         this.en = ename;
// // // //         document.write(`The Ishushi`);
// // // //     }
// // // //     info(){
// // // //         console.log(`employee : ${this.en}`);
// // // //     }
// // // // }

// // // // class manager extends employee{
// // // //     constructor(){

// // // //     }
// // // //     in(){

// // // //         super.info();
// // // //         console.log(`manager : `);
// // // //     }
// // // // }

// // // // let emp = new employee();
// // // // emp.info('jaydev');

// // // // let mang = new manager();
// // // // // mang.in()

// // // // document.write(`<h1>Employee & Manager Details</h1><hr>`);

// // // // // Employee class
// // // // class employee {
// // // //     constructor(ename, age, gender, salary){
// // // //         this.en = ename;
// // // //         this.ag = age;
// // // //         this.ge = gender;
// // // //         this.sa = salary;
// // // //     }

// // // //     display() {
// // // //         document.write(`<b>Employee Info:</b><br>`);
// // // //         document.write(`Emp name : ${this.en} <br> Emp age : ${this.ag} <br> Emp gender : ${this.ge}<br> Emp salary : ${this.sa}<hr>`);
// // // //     }
// // // // }

// // // // // Manager class extending employee
// // // // class manager extends employee {
// // // //     constructor(ename, age, gender, salary) {
// // // //         super(ename, age, gender, salary); // Call parent constructor
// // // //     }

// // // //     display() {
// // // //         let pa = 1000;
// // // //         let ta = 5000;
// // // //         let total = this.sa + pa + ta;

// // // //         document.write(`<b>Manager Info:</b><br>`);
// // // //         document.write(`Mang name : ${this.en} <br> Mang age : ${this.ag} <br> Mang gender : ${this.ge}<br> Mang salary (with PA+TA): ${total}<hr>`);
// // // //     }
// // // // }

// // // // // Creating employee objects
// // // // let Firstemp = new employee('Jaydev', 21, 'Male', 25000);
// // // // Firstemp.display()
// // // // let Secondemp = new employee('Ramesh', 41, 'Male', 30000);
// // // // Secondemp.display()
// // // // let firstmang = new manager('rom', 31, 'Male', 30000);
// // // // firstmang.display();

// // // // document.write(`<h1>Instagram User</h1><hr>`)
// // // // class instagramer {
// // // //     constructor(username,gender,followers){
// // // //         this.u = username;
// // // //         this.g = gender;
// // // //         this.f = followers;
// // // //     }
// // // //     info(){
// // // //         document.write(`Username : ${this.u}<br> Gender : ${this.g} <br> Followers : ${this.f} <hr>`);

// // // //     }
// // // // }
// // // // class creator extends instagramer {
// // // //     constructor(username,gender,followers){
// // // //        super(username,gender,followers)
// // // //     }
// // // //     info(){
// // // //         document.write(`Creatorname : ${this.u}<br> Gender : ${this.g} <br> Followers : ${this.f} <hr>`);

// // // //     }
// // // // }
// // // // let firstuser = new instagramer('jaydevsolanki','male',300);
// // // // firstuser.info();
// // // // let firstcreator = new creator('grishm','female','10.5k');
// // // // firstcreator .info();

// // // export let hello= ()=>{
// // //     console.log(`this normal function`);

// // // }

// //  let hello = 'message'

// //  let home = (age)=>{
// //     return `Age : ${age}`;

// // }

// // class test {
// //     constructor(){
// //         console.log(`construtor method`);

// //     }
// // }
// // export{hello,home,test}
// // export default old;

// // function  old() {
// //     // return 'normal text '
// //     console.log('normal text');

// // }

// // //export & one easy to write export
// /// //import & one easy to write import

// // let complete =true;
// // let prom = new Promise(function(resolve, reject)  {
// // if(complete){

// //     resolve('this is wining')
// // }else{

// //     reject('this is fali')
// // }

// //     prom.then((message)=>{
// //         console.log(message);

// //     })
// //     prom.catch((error)=>{
// //         console.log(error);

// //     })
// // });

// // console.log(prom);

// // let onfulfiled =(result)=>{
// //     console.log(result);

// // }
// // let onrejeaction =(error)=>{
// //     console.log(error);
// // }

// // console.log(prom);
// // prom(true).then(onfulfiled);
// // prom(true).catch(onrejeaction);

// // let prom = function(resolve,reject){
// //     let complete = 0;
// //     if (complete) {
// //         resolve(`resolve condition`)
// //     }
// //     else{
// //         reject(`reject condition`)
// //     }
// // }
// // console.log(prom);
// //  function checkCompletion() {
// //     return new Promise(function(resolve, reject) {
// //         let complete = 0;
// //         if (complete) {
// //             resolve('resolve condition');
// //         } else {
// //             reject('reject condition');
// //         }
// //     });
// // }

// // checkCompletion()
// //     .then((msg) => console.log('Success:', msg))
// //     .catch((err) => console.log('Error:', err));
// //     export default  checkCompletion;

// // function checkCompletion() {
// //     return new Promise(function(resolve, reject) {
// //         let complete = 0;
// //         if (complete) {
// //             resolve('resolve condition');
// //         } else {
// //             reject('reject condition');
// //         }
// //     });
// // // }

// // export default checkCompletion;

// // let prom = new Promise((resolve, reject) => {
// // let complete =true;
// //     if (complete) {
// //       resolve("resolve");
// //     } else {
// //       reject("reject");
// //     }
// // })

// // // console.log(prom);

// // function pom(a, b) {
// //   const c = a / b;
// //   return new Promise((resolve, reject) => {
// //     console.log(`feacthig data please wait...`);

// //     setTimeout(() => {
// //       if ((a, b)) {
// //         //    resolve(`code is abosulately right & `)
// //         resolve(`answer is ${c}`);
// //       } else {
// //         //   reject('your code is not run..')
// //         reject("your calculations is wrong");
// //       }
// //     }, 3000);
// //   });
// // }
// // // console.log(pom(true));

// // let promis = pom(5, 3);
// // promis.then((result) => {
// //   console.log(result);
// // });
// // promis.catch((error) => {
// //   console.log(error);
// // });

// // let a = document.querySelector('#txt');

// // a.addEventListener('click',()=>{
// //  let xhttp = new XMLHttpRequest();
// //     xhttp.onreadystatechange= function(){
// //         if (this.readyState == 4 && this.status == 200) {
// //             console.log(this.responseText);
// //         }
// //     };
// //         xhttp.open('GET','readme.txt',true)
// //         xhttp.send();
// // });

// // let a = document.querySelector("#text");

// // a.addEventListener("click", () => {
// //   let xhttp = new XMLHttpRequest();
// //   xhttp.onreadystatechange = function () {
// //     if (this.readyState == 4 && this.status == 200) {
// //       document.querySelector("#hello").innerHTML = this.responseText;
// //       console.log(this.responseText);
// //     } else if (this.readyState == 4 && this.status == 404) {
// //       document.querySelector("#hello").innerHTML = `File not found`;
// //     }
// //   };
// //   xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
// //   xhttp.open("GET", "readme.txt", true);
// //   xhttp.send();
// // });

// // let b = document.querySelector("#text");

// // b.addEventListener("click", () => {
// //   let server = new XMLHttpRequest();
// //   server.onreadystatechange = function () {
// //     if (this.readyState == 4 && this.status == 200) {
// //       console.log(this.responseText);
// //     } else if (this.readyState == 4 && this.status == 404) {
// //       console.log(`File is not found`);
// //     }
// //   };
// //   server.open('GET','redme.txt',true)
// //   server.send()
// // });

// let pro = new Promise((resolve, reject) => {
//   const complete = true;
//   if (complete) {
//     resolve(`succesful man`);
//   } else {
//     reject(`faiuler`);
//   }
//   // console.log(prom);
// });

// let onfulfiled = (result) => {
//   console.log(result);
// };
// let onrejeaction = (error) => {
//   console.log(error);
// };

// pro.then(onfulfiled);
// pro.catch(onrejeaction);

// let prom = new Promise((resolve, reject) => {
//   const complete = true;
//   if (complete) {
//     resolve(`successful man`);
//   } else {
//     reject(`failure`);
//   }
// });

// let onfulfilled = (result) => {
//   console.log(result);
// };

// let onrejection = (error) => {
//   console.log(error);
// };

// prom.then(onfulfilled);
// prom.catch(onrejection);

// let pr = (com) => {
//   return new Promise((resolve, reject) => {
//     if (com) {
//       resolve(`Are you looking to succesman`);
//     }
//     reject(`Are you looking to failuar`);
//   });
// };

// let p = pr(false);
// p.then((message) => {
//   console.log(message);
// })
// p.catch((error) => {console.log(error)});

// let mo = document.querySelector('#text');

// mo.addEventListener('click',()=>{
//   let xm =new XMLHttpRequest();
// xm.onreadystatechange = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     console.log(`normal coding`);

//   }else if(this.readyState == 4 && this.status ==404){

//     console.log(`error code`);
//   }
// };
//   xm.open('GET','readme.txt',true)
//   xm.send()
// });

// let mo = document.querySelector('#text');

// function handleClick() {
//   let xm = new XMLHttpRequest();
//   xm.onreadystatechange = function hello() {
//     if (this.readyState == 4 && this.status == 200) {
//       console.log(`normal coding`);
//     } else if (this.readyState == 4 && this.status == 404) {
//       console.log(`error code`);
//     }
//   };
//   xm.open('GET', 'readme.txt', true);
//   xm.send();
// }

// console.log('fetching data...')
// let mo = document.querySelector("#text");
// mo.addEventListener('click',
//   ()=>{

//     let xm = new XMLHttpRequest();
//     xm.onreadystatechange = function hello() {
//       if (this.readyState == 4 && this.status == 200) {
//         console.log(this.responseText);
//       } else if (this.readyState == 4 && this.status == 404) {
//         console.log(`File is not found`);
//       }
//     };
//     xm.open("GET", "readme.txt", true);
//     xm.send();
//   }
//   )

// let  p1 = (a,b) =>{
// console.log(`feaching data ...`);
// let c =a+b
//   return new Promise((resolve, reject) => {
//     if (a,b) {
//       resolve(`succesful man & total is ${c}`)
//     }else{
//       reject(`failuar`)

//     }
//   })
// }
// // console.log(prom(2,3));

// let p1p =p1(2,3)
// p1p.then((message)=>{console.log(message);
// })
// p1p.catch((error)=>{console.log(error);
// })

// // --------------------------------------
// let  p2 = (a,b) =>{
// let d =a+b
//   return new Promise((resolve, reject) => {
//     if (a,b) {
//       resolve(`Brillant man & total is ${d}`)
//     }else{
//       reject(`failuar`)

//     }
//   })
// }
// // console.log(p2(2,3));

// let p2p =p2(20,30)
// p2p.then((message)=>{console.log(message);
// })
// p2p.catch((error)=>{console.log(error);
// })

// Promise.all([p1,p2].then((message)=>{console.log(message);
// }).catch((error)=>{console.log(error);
// }))

// let promcall =()=>{

//   setTimeout(() => {
//     return function (returndata,message) {
//       function ((resolve, reject) => {

//       if () {
//         resolve(`resolve`)
//       } else {
//         reject(`reject`)

//       }
//      })

//   }, );
//  }


// let promcall = (data, message) => {
//   return (resolve, reject) => {
//     setTimeout(() => {
//       console.log(`The ${message} promis has resolved`);
//       resolve(data);
//       // reject(`Your code is in error`)
//     }, data * 100);
//   };
// };

// // console.log(promcall());

// let pop1 = new Promise(promcall(10, "first"));
// let pop2 = new Promise(promcall(20, "second"));
// let pop3 = new Promise(function (resolve,reject) {
//   setTimeout(() => {
//     reject(`Error bro `)
    
//   }, 3000);
// });

// let total = 0;
// Promise.all([pop1, pop2,pop3])
//   .then((result) => {
//     for (const i in result) {
//       total += result[i];
//     }
//     setTimeout(() => {
//       console.log(`result is ${result}`);
//     }, 1000);
//     setTimeout(() => {
//       console.log(`total is ${total}`);
//     }, 2000);
//   })
//   .catch((error) => {
//     console.log(`error is ${error}`);
//   });



// let promiscall = (data,message)=>{
//   return function (resolve,reject) {
//     setTimeout(() => {
//       console.log(` ${message} message`);
      
//       resolve(data)
//     }, data*100);
//   }
// }

// let p1 = new Promise(
//   promiscall(10,'this is first')
// )
// let p2 = new Promise( 
//   promiscall(20,'this is second')
// )
// let p3 = new Promise(
//   promiscall(30,'this is third')
// )


// Promise.all([p1,p2,p3]).then((result)=>{
//   let total = 0;
//   console.log(result); 
// for (const i in result) {
//     total += result[i];
//   }
//   console.log(`total is ${total}`);
//   }).catch((error)=>{console.log(error);
// })



// let h = document.querySelector('#text');
// h.addEventListener('click',()=>{
  
//   let req = new XMLHttpRequest();
//   req.onreadystatechange =function(){
//     if (this.readyState == 4 && this.status ==200) {
//       console.log(`this is ${this.responseText}`);
      
//     } else if(this.readyState == 4 && this.status ==404){
//       console.log(`Page Not Found`);
      
//     }
  
  
  
//   }
//   req.open('GET','readme.txt',true)
//   req.send()
// })
