export default class Table {
    constructor(arr, maxPageSize) {
        this.students = arr
        this.sortedArr = this.students.map(s => s)
        this.currentPageNumber = 1
        this.maxPageSize = maxPageSize
        this.pagesQuantity = Math.ceil(arr.length / maxPageSize)
        this.firstPage = this.students.slice(0, maxPageSize)
        this.keys = Object.keys(arr[0])
    }

    getTable() {

        document.querySelector('#head').innerHTML = ""
        document.querySelector('#head').innerHTML += this.keys.map(k =>
            `<div class="btn">${k}</div>`
        ).join('')

        let headButtons = document.getElementsByClassName('btn')
        for (let btn of headButtons) {
            btn.addEventListener('click', () => {
                this.sort(btn.textContent).getTable()
            })
        }

        for (let i = 0; i < this.pagesQuantity; i++) {
            document.querySelector('#info').innerHTML = ""
            document.querySelector('#pagesContainer').innerHTML +=
                ` <ul class="pagination">
                <li class="pages " id="pages">${i + 1}</li>
            </ul> `
        }

        let items = document.querySelectorAll('li')
        for (let item of items) {
            item.addEventListener('click', () => {
                    this.currentPageNumber = +item.textContent
                    document.querySelector('#pagesContainer').innerHTML = ""
                    document.querySelector('#head').innerHTML = ""
                    this.getTable()
                }
            )
        }

        for (let i = 1; i < this.pagesQuantity + 1; i++) {
            if (this.currentPageNumber === i) {
                let page = this.sortedArr.slice(this.firstPage.length * (i - 1), this.maxPageSize * i)
                document.querySelector('#info').innerHTML += page.map(s => {
                    let res = `<div class="info">`
                    for (let j = 0; j < this.keys.length; j++) {
                        res += `<div>${s[this.keys[j]]}</div>`
                    }
                    res += '</div>'
                    return res
                }).join('')
                break
            }
        }
    }

    sort(btn) {
        document.querySelector('#pagesContainer').innerHTML = ""
        this.sortedArr = this.students.sort((a, b) => {
            return a[btn] < b[btn] ? -1 : 1
        })
        return this
    }
}




