// singleton
// object.create 

// object literals 

const mysym = Symbol("key1")

const jsuser = {
    name: "Rutuja",
    "full name" : "Rutuja mirkale",
     [mysym] : "mykey1",
    age : "23",
    location : "pune",
    email : "rutujamirkale11@gmail.com",
    isloggedin : "false",
    lastlogindays : ["monday","saturday"]
}
//console.log(jsuser.email);
//console.log(jsuser["email"]);
//console.log(jsuser["full name"]);
//console.log(jsuser[mysym]);

jsuser.email = "rutuja@chatgpet.com"
//Object.freeze(jsuser)
jsuser.email = "rutuja@microsoft.com"
//console.log(jsuser);

jsuser.greeting = function(){
    console.log("Hello js user");
    
}
jsuser.greetingtwo = function(){
    console.log(`Hello js user,${this.name}`);
    
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());
