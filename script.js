alert("say hi from a different file");
let status = "new";
let scared = true; 
if (status === "new") { 
    console.log("Welcome to JavaScript!"); 
    if (scared) { 
        console.log("Don't worry you will be fine!"); 
    }
     else { 
        console.log("You're brave! You are going to do great!");
     } } 
     else { 
        console.log("Welcome back, I knew you'd like it!"); }
        
let pmp=        prompt("Hi how are you");
console.log(pmp)
//to geneerate random number
        Math.random();
        console.log(Math.random())

        //another example random number with mutiplyer:
        console.log(Math.random()*100);
        
//another example to generate a random number without decimal
        console.log(Math.floor(Math.random() * 100));

        // use of other sign instead of "" or ''
        let language = "JavaScript";
let message = `Let's learn ${language}`;
console.log(message);

 // use of other sign instead of "" or '' another example
let person ="shariq";
let city = "karachi";

let sentence = `${person} live's in ${city}`;
console.log(sentence);

// example 
let strn = "Hello, what's your name? Is it \"Mike\"?";
console.log(strn);
let str2 = 'Hello, what\'s your name? Is it "Mike"?';
console.log(str2);

//type of variables
let str = "Hello";
let nr = 7;
let bigNr = 12345678901234n;
let bool = true;
let sym = Symbol("unique");
let undef = undefined;
let unknown = null;
console.log("str", typeof str);
console.log("nr", typeof nr);
console.log("bigNr", typeof bigNr);
console.log("bool", typeof bool);
console.log("sym", typeof sym);
console.log("undef", typeof undef);
console.log("unkown", typeof unknown);
