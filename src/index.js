import Table from "./models/Table";
import students from "./data";
import "./sass/table.scss"

let input = document.querySelector('input')

const table = new Table(students, input.value)
table.getTable()
input.addEventListener('change', () => {
    document.querySelector('#table').innerHTML = ''
    document.querySelector('#head').innerHTML = ''
    const table = new Table(students, input.value)
    table.getTable()
})

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


