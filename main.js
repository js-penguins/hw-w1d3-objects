/* ### A. Make a user object

1. Create an object called `user`.
2. Write in to the object the key-value pairs for `name`, `email`, `age`, and `purchased`. Set the value of `purchased` to an empty array `[]`. Set the other values to whatever you would like.
 */

// ~~~~~ your solution here: ~~~~~~~~~~~



var user ={
 
  name: 'Mohammed Almobid',
  email : 'mo842002sa@yahoo.com',
  age: 34,
  purchased: []

}
console.log(user);

/*/ B. Update the user

1. Our user has changed his or her email address. Without changing the original `user` object, update the `email` value to a new email address.
2. Our user has had a birthday! Without changing the original `user` object, increment the `age` value using the postfix operator. Hint: `age++`
*/

// ~~~~~ your solution here: ~~~~~~~~~~~

//

const updatedUser = Object.assign({}, user, {
email: 'hhh@hhh.com'
});
console.log(updatedUser);

function updateUser(age){
for(var i = 0; i< user.age.length; i++){
    if (user[i].age == upDate.age){
        return;                         
    }
}
people.push(upDate); 
console.log(upDate);
               

}


console.log(updateUser);

/* ### C. Adding keys and values

You have decided to add your user's location to the data that you want to collect.

1. Without changing the original `user` object, add a new key `location` to the object, and give it a value or some-or-other location (a string).
*/

// ~~~~~~~ your solution here: ~~~~~~~~~~~~~


user.location= 'Riyadh';



console.log(user.location);

/* 
### D. Shopaholic!

1. Our user has purchased an item! They have purchased some "carbohydrates". Using `.push()`, add the string "carbohydrates" to the `purchased` array.
2. Our user has purchased an item! They have purchased some "peace of mind". Using `.push()`, add the string "peace of mind" to the `purchased` array.
3. Our user has purchased an item! They have purchased some "Merino jodhpurs". Using `.push()`, add the string "Merino jodhpurs" to the `purchased` array.
4. Console.log just the "Merino jodhpurs" from the `purchased` array.
*/
// ~~~~~~~ your solution here: ~~~~~~~~~~~~~


user.purchased.push("carbohydrates");

user.purchased.push("peace of mind");
user.purchased.push("Merino jodhpurs");
console.log(user.purchased[2]);




/* 
### E. Object-within-object

Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.

If we want to give our user a `friend` with a `name` and `age`, we could write:

```javascript
user.friend = {
  name: "Grace Hopper",
  age: 85
}
``` 

When we console.log `user`, we would see the `friend` object added to our user object.
*/


/* 1. Write a `friend` object into your `user` object and give the friend a name, age, location, and purchased array (empty for now) */
// ~~~~~~~ your solution here: ~~~~~~~~~~~~~

var user ={

name: 'Mohammed Almobid',
email : 'mo842002sa@yahoo.com',
age: 34,
purchased: [],

name: ' jo',
email : 'jo@123.com',
age: 30,
location: 'New York',
purchased: []

}
console.log(user);

/* 2. Console.log just the friend's name */
// ~~~~~~~ your solution here: ~~~~~~~~~~~~~

console.log(user.name);

/* 3. Console.log just the friend's location */
// ~~~~~~~ your solution here: ~~~~~~~~~~~~~

console.log(user.location);

/* 4. CHANGE the friend's age to 55 */
// ~~~~~~~ your solution here: ~~~~~~~~~~~~~
user.age.push(age=55);

/* 5. The `friend` has purchased "The One Ring". Use `.push()` to add "The One Ring" to the friend's `purchased` array. */
// ~~~~~~~ your solution here: ~~~~~~~~~~~~~

user.purchased.push("The One Ring");

/* 6. The `friend` has purchased "A latte". Use `.push()` to add "A latte" to the friend's `purchased` array. */
// ~~~~~~~ your solution here: ~~~~~~~~~~~~~

user.purchased.push("A latte");
/* 7. Console.log just "A latte" from the friend's `purchased` array. */
// ~~~~~~~ your solution here: ~~~~~~~~~~~~~



console.log(user.purchased[1]);

/* ### F. Loops */

/* 1. Write a _for loop_ that iterates over the User's `purchased` array (NOT the friend's purchased array), and prints each element to the console. */

// ~~~~~~~ your solution here: ~~~~~~~~~~~~~



/* 2. Write a _for loop_ that iterates over the Friend's `purchased` array, and prints each element to the console. */

// ~~~~~~~ your solution here: ~~~~~~~~~~~~~





/* ### G. Functions can operate on objects */
/* 1. Write a single function `updateUser` that takes no parameters. When the function is run, it should:

- it should increment the user's age by 1
- make the user's name uppercase


The function does not need a `return` statement, it will merely modify the user object. */

// ~~~~~~~ your solution here: ~~~~~~~~~~~~~

var user ={

name: 'Mohammed Almobid'.nametoUpperCase(),
email : 'mo842002sa@yahoo.com',
age: 34,
purchased: [],

name: ' jo'.nametoUpperCase(),
email : 'jo@123.com',
age: 30,
location: 'New York',
purchased: []

}
console.log(user);

/* 2. Write a function `oldAndLoud` that performs the exact same tasks as `updateUser`, but instead of hard-coding it to only work on our `user` object, 
make it take a parameter `person`, and have it modify the object that is passed in as an argument when the function is called. Call your `oldAndLoud` 
function with `user` as the argument. */

// ~~~~~~~ your solution here: ~~~~~~~~~~~~~



