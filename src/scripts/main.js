// const DisplayContactList = require("./DisplayContacts")
// // const NewContact = require("./NewContact")
// const ContactCollection = require("./ContactCollection")

// const submitButton = document.getElementById("submitButton")
// const contactName = document.getElementById("nameInput")
// const contactPhone = document.getElementById("phoneInput")
// const contactAddress = document.getElementById("addressInput")

// if (ContactCollection.contactList.length > 0) {
//     ContactCollection.contactRetrieval("Contact List");
// }

// ContactCollection.newContact(submitButton,
//     "Contact List",
//     contactName, contactPhone, contactAddress);

// DisplayContactList(ContactCollection.contactList);

// const contactName = document.getElementById("nameInput")
// const contactPhone = document.getElementById("phoneInput")
// const contactAddress = document.getElementById("addressInput")


// const ContactCollection = {
//     contactList: [],
//     contactRetrieval: (existingContactIdentifier) => {
//         return JSON.parse(existingContactIdentifier)
//     },
//     saveContactList: (contactListString) => {
//         const storage = JSON.stringify(this.contactList);
//         localStorage.setItem(contactListString, storage)
//     },
//     createContact: (name, phoneNumber, address) => {
//         this.contactList.push({
//             "Name": name,
//             "Phone Number": phoneNumber,
//             "Address": address
//         })
//     }
// }
// console.log(ContactCollection)

// const DisplayContactList = (contactList) => {
//     contactList.forEach(
//         contact => {
//             contactArticle = document.createElement("article")
//             for (let thing in contact){
//                 const section = document.createElement("section")
//                 section.textContent = thing + ": " + contact[thing]
//                 contactArticle.appendChild(section)
//             }
//             contactListDiv.appendChild(contactArticle)
//         }
//     )
// }

// const NewContact = (button, contactList) => {
// submitButton.addEventListener("click", () => {
//     ContactCollection.createContact(
//         contactName.value,
//         contactPhone.value,
//         contactAddress.value);
//     ContactCollection.saveContactList("Contact List");
//     DisplayContactList(ContactCollection.contactList)
// })

// if (ContactCollection.contactList.length > 0) {
//     ContactCollection.contactRetrieval("Contact List");
//     DisplayContactList(ContactCollection.contactList);
// }

// NewContact(submitButton, "ContactList")

const ContactCollection = require("./ContactCollection")
const Contact = require("./Contact")
const ContactList = require("./ContactList.js")
const ContactForm = require("./ContactForm")

console.log(ContactCollection.load("Contact List"))

const contactDiv = document.getElementById("contacts")
const submitButton = document.getElementById("submitButton")
const contactName = document.getElementById("nameInput")
const contactPhone = document.getElementById("phoneInput")
const contactAddress = document.getElementById("addressInput")

submitButton.addEventListener("click", () => {
    ContactForm.addContact(
        contactName.value,
        contactPhone.value,
        contactAddress.value);
    ContactList.clear();
    ContactList.print();
})

ContactList.print()