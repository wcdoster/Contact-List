// A ContactCollection component that loads existing
// contacts from storage, and saves new ones. Each new
// contact should have an auto-generated identifier.
// const displayFunction = require("./DisplayContacts")

const ContactCollection = {
    save: (string, list) => {
        localStorage.setItem(string, JSON.stringify(list))
    },
    load: (string) => {
        return JSON.parse(localStorage.getItem(string))
    }
}
module.exports = ContactCollection

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
//     },
//     newContact: (button, contactList, name, phone, address) => {
//         button.addEventListener("click", () => {
//             this.createContact(name, phone, address);
//             this.saveContactList("Contact List");
//             displayFunction()
//         })
//     }

// }

module.exports = ContactCollection
