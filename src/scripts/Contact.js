const Contact = (contact) => {
    contactArticle = document.createElement("article")
    for (let thing in contact){
        const section = document.createElement("section")
        section.textContent = thing + ": " + contact[thing]
        contactArticle.appendChild(section)
    }
    return contactArticle
}

module.exports = Contact