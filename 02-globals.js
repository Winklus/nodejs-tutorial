// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname)
console.log(__filename);

setTimeout(() => {
  var n = 1
  while(n < 20){
    console.log('hello world')
    n = n + 1 
  }
}, 500)
