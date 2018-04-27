const ContactCollection = require("./ContactCollection")
const ContactList = require("./ContactList.js")

const ContactForm = {
    addContact: (name, phoneNumber, address) => {
        ContactList.list = ContactCollection.load("Contact List")
        ContactList.list.push({
            "Name": name,
            "Phone Number": phoneNumber,
            "Address": address
        })
        ContactCollection.save("Contact List", ContactList.list)
    }
}

module.exports = ContactForm