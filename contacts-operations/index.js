const getAll = require("./getAll");
const getOneContact = require('./getOneContact')
const removeContact = require("./removeContact")
const addContact = require('./addContact')

module.exports = {
    getAll,
    getOneContact,
    removeContact,
    addContact
}

// const newContact = {
//     name: 'Viktoriia',
//     email: 'khimichv95@gmail.com',
//     phone: '(093) 008-23-66'
// }

console.log(getAll());
