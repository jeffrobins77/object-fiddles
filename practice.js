//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

  //Code here
var me = {
  name: "Jeff",
  age: "26",
};
alert(me.name);


//NEXT PROBLEM




//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

  //Code here
var favoriteThings = {
  band: "Daughtry",
  food: "Pizza",
  person: "Gintoki Sakata",
  book: "Way of Kings",
  movie: "Teenage Mutant Ninja Turtles",
  holiday: "Thanksgiving"
};

//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

  //Code here
favoriteThings.car = "Camry";
favoriteThings.brand = "Toyota";

//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.

  //Code here
favoriteThings.food = "Lettuce";
favoriteThings.book = "50 Shades of Gray";


//NEXT PROBLEM



/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */
var backPack = {

};
var item = 'firstPocket';
backPack['firstPocket'] = 'chapstick';
backPack.color = "green";
  //Code here

//After you do the above, alert your entire backPack object.
// alert(backPack);
  //Code here

/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

  //Code here
console.log(backPack);



//NEXT PROBLEM




//Create an 'alsoMe' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

  //Code Here
var alsoMe = {
  name: 'Jeff',
  age: '26',
  height: '6 ft',
  gender: 'm',
  married: 'no',
  eyeColor: 'brown',
  hairColor: 'black'
}
//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

  //Code Here
// for (var key in alsoMe){
//   alert(key + ': ' + alsoMe[key]);
// }



//NEXT PROBLEM




//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.

  //Code Here
var album = {
  Opposites: '3:33',
  Yes: '3:33',
  No: '3:33',
  Maybe: '3:33',
  Hello: '3:33'
}
//Now, loop through your album object alerting every song title individually.

  //Code Here

// for (var key in album){
//   alert (key + ": " + album[key]);
// }


//NEXT PROBLEM




//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

  //Code Here

  var states = {
    alabama: 10000,
    alaska: 20000,
    arizona: 30000,
    arkansas: 40000,
    california: 50000
  }

//Now, loop through your states object and if the states population is greater than 30K, alert that state.

  //Code Here

// for (var key in states){
//   if (states[key] > 30000){
//     alert(key);
//   }
// }



//NEXT PROBLEM




var user1 = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */

  //Code Here

for (var key in user1){
  if (!user1[key]){
    delete user1[key];
  }
}
//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

  //Code Here

 user1.name = 'Jeff Robins';
 user1.pwHash = 'GuessAgain';
 user1.username = 'Primemuffin';

console.log(user1);

//NEXT PROBLEM




var user2 = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayEmail: function(){
            alert('Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

  //Code Here

  user2.name = 'Tyler S. McGinnis';
  user2.email = 'tyler.mcginnis@devmounta.in'

  console.log(user2);
  user2.sayEmail();
//Now call the sayEmail method that's on the user object which will alert the users email

  //Code Here




//NEXT PROBLEM




//Create an empty object called methodCollection.

  //Code Here
var methodCollection = {
  alertHello: function (){
    alert('hello')
  },
  logHello: function (){
    console.log('hello');
  }
}
/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

  //Code Here

//Now call your alertHello and logHello methods.

  //Code Here
methodCollection.alertHello();
methodCollection.logHello();

//NEXT PROBLEM



// Create a function called makePerson which takes in name, birthday, ssn as its
// parameters and returns a new object with all of the information that you passed in.

  //Code Here
function makePerson(name, birthday, ssn){
  var newObj = {};
  newObj['name'] = name;
  newObj['birthday'] = birthday;
  newObj['ssn'] = ssn;
  return newObj;
}


//NEXT PROBLEM



// Create a function called makeCard which takes in cardNumber, expirationDate, and securityCode to make a Credit Card object and returns that object so that whenever you invoke makeCard, you get a brand new credit card.

  //Code Here
function makeCard(cardNumber, expirationDate, securityCode){
  var newObj = {};
  newObj['cardNumber'] = cardNumber;
  newObj['expirationDate'] = expirationDate;
  newObj['securityCode'] = securityCode;
  return newObj;
}


//NEXT PROBLEM



/* As of this point you should have a makePerson and a makeCard function which returns you either a person or a credit card object.
   Now, create a bindCard function that takes in a person object as its first parameter and a creditcard object as its second parameter.
   Have bindCard merge the two parameters together into a new object which contains all the properties from the person as well as the creditcard. While Object.assign would give you the answer, specRunner requires an answer without using it.
*/
function bindCard(person, creditcard) {
  var bind = {};
  for (var key in person){bind[key] = person[key];}
  for (var key in creditcard){bind[key] = creditcard[key];}
  return bind;
}
  //Code Here
