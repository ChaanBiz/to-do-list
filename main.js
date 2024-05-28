let items = []

const itemDiv = document.getElementById("items"),
input = document.getElementById("itemInput"),
btnAdd = document.getElementById("add")

function load() {

}

function render() {
    itemDiv.innerHTML = null

    for (const [idx, item] of Object.entries(items)) {
        const container = document.createElement("div")
        container.style.marginBottom = "10px"

        const text = document.createElement("p")
        text.style.display = "inline"
        text.style.marginRight = "10px"
        text.style.fontSize = "18px"
        text.textContent = item

        const button = document.createElement("button")
        button.textContent = "Delete"
        button.style.padding = "5px 20px"
        button.style.border = "none"
        button.style.borderRadius = "20px"
        button.style.backgroundColor = "rgb(172, 153, 129)"
        button.style.color = "rgb(252, 246, 237)"
        button.style.fontSize = "18px"
        button.style.cursor = "pointer"
        button.onclick = () => remove(idx)

        container.appendChild(text)
        container.appendChild(button)


        itemDiv.appendChild(container)
    }
}

function save() {

}

function remove(idx) {
    items.splice(idx, 1)
    render()
}

btnAdd.addEventListener("click", () => {
    const value = input.value
    if (!value) {
        alert("Fill the input to add an item.")
        return
    }
    items.push(value)
    render()
    input.value = ""
})