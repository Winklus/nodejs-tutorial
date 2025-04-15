const path = require('path')

// sep property show the delimiter that seperate one folder from another
console.log(path.sep)


// join method is use to join the path into one path
const filePath = path.join('/content', '/subfolder', 'test.txt')

console.log(filePath);


// the basename method give end files
const base = path.basename(filePath)
console.log(base)

// resolve method return absolute path

console.log(__dirname)
const absolute = path.resolve(__dirname, '/content', 'subfolder', 'abs.txt')

console.log(absolute)