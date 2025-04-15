// local
const secret = 'SUPER SECRET'
// share
const firstName = 'john'
const lastName = 'peter'
console.log(`${firstName} ${lastName}`)

const welcomePerson = () => console.log(`Welcome Mr ${firstName} ${lastName}`)

export default { firstName, lastName, welcomePerson }