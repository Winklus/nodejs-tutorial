// this work becos the function is already in the 06-fM.js

// Question: what is the alternative way? 
// const addValue = require("./06-fM")


require('./06-fM')
const age = 14;

if(age < 18)
    console.log(`${age} is minor`)
else
  console.log(`${age} is major`)

console.log('wooo ohhh it beautiful learning here');


const greetMe = (name) => {
  if(name == 'Herbert')
    console.log(`Welcome Mr ${name}`)
  else
  console.log(`oh! we don't know you`)
}

greetMe('Herbert');
