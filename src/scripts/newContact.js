const contactName = document.getElementById("nameInput")
const contactPhone = document.getElementById("phoneInput")
const contactAddress = document.getElementById("addressInput")

const NewContact = (button, contactList, saveF) => {
    button.addEventListener("click", () => {
        ContactCollection.createContact(
            contactName.value,
            contactPhone.value,
            contactAddress.value);
        ContactCollection.saveContactList(contactList);
        DisplayContactList()
    })
}

module.exports = NewContact