import Table from "./models/Table";
import students from "./data";
import "./sass/table.scss"

let input = document.querySelector('input')

const table = new Table(students, input.value)
table.getTable()
input.addEventListener('change', () => {
    document.querySelector('#info').innerHTML = ''
    document.querySelector('#pagesContainer').innerHTML = ''
    document.querySelector('#head').innerHTML = ""
    const newTable = new Table(students, input.value)
    newTable.getTable()
})



