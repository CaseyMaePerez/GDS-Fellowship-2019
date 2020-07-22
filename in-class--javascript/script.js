/* var firstName = 'Casey';
var age = 18;
var isAdult = true;
var major;

console.log(firstName + ' is ' + age + ' years old.');
console.log('Is Casey an adult? ' + isAdult);
console.log('What is Casey\'s major? ' + major);
console.log(typeof age); */

/* var wage = 7.25;
var hoursWorked = 10;
var totalCheckAmount = 0;

totalCheckAmount = wage * hoursWorked;

console.log('Your check amount for this week is $' + totalCheckAmount); */

/* var grade = 88;
var letter = ' ';

if (grade >= 90) {
    letter = 'A';
}
else if (grade >= 80 && grade < 90) {
    letter = 'B';
}
else if (grade >= 70 && grade < 80) {
    letter = 'C';
}
else if (grade >= 60 && grade < 70) {
    letter = 'D';
}
else {
    letter = 'F';
}

console.log('Numeric grade: ' + grade + '\nLetter grade: ' + letter); */

/* for (var x = 0; x <= 100; x++) {
    console.log(x);
} */

/* for (var x = 0; x < 100; x++) {
    console.log(x);
}

var x = 0;
while (x < 100) {
    console.log(x);
    x++;
} */

/* function greeting(firstName, lastName) {
    console.log("Welcome " + firstName + " " + lastName);
}

var first = "Casey";
var last = "Perez";

greeting(first, last); */

/* var newFriends = ['Casey', 'Marlene', 'Rosa', 'Flor'];
console.log(newFriends[0] + " has " + (newFriends.length - 1) + " new friends at her table."); */

/* var newFriends = ['Casey', 'Marlene', 'Rosa', 'Flor'];
newFriends.push("Kat");

if (newFriends.indexOf("Kat") >= 0) {
    console.log("GDS Alumni!");
}
else {
    console.log("GDS Fellows!");
} */

var person = {
    firstName: "Casey Mae",
    lastName: "Perez",
    fullName: function() {
        console.log(this.firstName + " " + this.lastName);
    }
}

person.fullName();