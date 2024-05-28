let items = ["got"]

const itemDiv = document.getElementById("items")

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

render()

function save() {

}

function add() {

}

function remove(idx) {
    items.splice(idx, 1)
    render()
}