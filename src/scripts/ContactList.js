const ContactCollection = require("./ContactCollection")
const Contact = require("./Contact.js")
const contactListDiv = document.getElementById("contacts")

const ContactList = {
    list: ContactCollection.load("Contact List"),
    print: () => {
        // ContactList.list = ContactCollection.load("Contact List")
        ContactList.list.forEach(
            contact => {
                const contactArticle = Contact(contact)
                contactListDiv.appendChild(contactArticle)
            }
        )
    },
    clear: () => {
        contactListDiv.innerHTML = ""
    }
}

module.exports = ContactList