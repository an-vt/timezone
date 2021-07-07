const headingElement = document.getElementById('div')
const button = document.getElementById('button')

button.onclick = function() {
    const h2 = `<h2>Aha</h2>`

    headingElement.append(h2)
}