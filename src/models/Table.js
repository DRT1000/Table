export default class Table {
    constructor(arr, maxPageSize) {
        this.students = arr
        this.sortedArr = this.students.map(s => s)
        this.currentPageNumber = 1
        this.maxPageSize = maxPageSize
        this.pagesQuantity = Math.ceil(arr.length / maxPageSize)
        this.firstPage = this.students.slice(0, maxPageSize)
    }

    getTable() {
        for (let i = 0; i < this.pagesQuantity; i++) {
            document.querySelector('#table').innerHTML = ""
            document.querySelector('#head').innerHTML +=
                ` <ul class="pagination">
                <li class="pages " id="pages">${i + 1}</li>
            </ul> `
        }

        let items = document.querySelectorAll('li')
        for (let item of items) {
            item.addEventListener('click', () => {
                    this.currentPageNumber = +item.textContent
                    document.querySelector('#head').innerHTML = ""
                    this.getTable()
                }
            )
        }

        for (let i = 1; i < this.pagesQuantity + 1; i++) {
            if (this.currentPageNumber === i) {
                let page = this.sortedArr.slice(this.firstPage.length * (i - 1), this.maxPageSize * i)
                document.querySelector('#table').innerHTML += page.map(s => `
                <div class="info" id="info">
                    <div>${s.name}</div>
                    <div>${s.age}</div>
                </div>
            `).join('');
                break
            }
        }
    }

    sortByName() {
        this.sortedArr = this.students.sort((a, b) => {
            return a.name < b.name ? -1 : 1
        })
        return this
    }

    sortByAge() {
        this.sortedArr = this.students.sort((a, b) => a.age - b.age)
        return this
    }
}




