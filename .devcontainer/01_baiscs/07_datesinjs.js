// dates 

let myDate = new Date()
//console.log(myDate);
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toISOString());
//console.log(myDate.toJSON());
//console.log(myDate.toLocaleDateString());
//console.log(myDate.toLocaleString());
//console.log(typeof myDate);


//let mycreatedDate = new Date(2023, 3, 23 )
//let mycreatedDate = new Date(2023, 3, 23 , 5, 2)
//let mycreatedDate = new Date("2023-02-15")
let mycreatedDate = new Date("02-15-2024")


//console.log(mycreatedDate.toDateString());
//console.log(mycreatedDate.toLocaleString()); 

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(mycreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
//console.log(newDate);
//console.log(newDate.getMonth());
console.log(newDate.getMonth() + 1);
//console.log(newDate.getDay());
//`${newDate.getDay()}and the time`

newDate.toLocaleString('default', {
    weekday:"long",
}) // to customise the date format


