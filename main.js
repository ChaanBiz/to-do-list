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
        text.textContent = item

        const button = document.createElement("button")
        button.textContent = "x"
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

}