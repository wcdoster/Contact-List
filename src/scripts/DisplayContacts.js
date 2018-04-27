const contactListDiv = document.getElementById("contacts")

const DisplayContactList = (contactList) => {
    contactList.forEach(
        contact => {
            contactArticle = document.createElement("article")
            for (let thing in contact){
                const section = document.createElement("section")
                section.textContent = thing + ": " + contact[thing]
                contactArticle.appendChild(section)
            }
            contactListDiv.appendChild(contactArticle)
        }
    )
}

module.exports = DisplayContactList