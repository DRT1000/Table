import Table from "./models/Table";
import students from "./data";
import "./sass/table.scss"

const table = new Table(students, 4)
table.getTable()


const ageSort = document.querySelector('#sortByAge')
ageSort.addEventListener('click', () => {
    document.querySelector('#table').innerHTML = ''
    document.querySelector('#head').innerHTML = ''
    table.sortByAge().getTable()
})

const nameSort = document.querySelector('#sortByName')
nameSort.addEventListener('click', () => {
    document.querySelector('#table').innerHTML = ''
    document.querySelector('#head').innerHTML = ''
    table.sortByName().getTable()
})