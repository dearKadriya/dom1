import goblinImage from '/src/img/goblin.png'


class App {

    getBoardCells() {
        let cells = document.getElementsByClassName('box')
        cells = Array.from(cells)
        let board = []
        for (let cell in cells) {
            board.push(cells[cell].dataset.id)
        }
        this.getRandomCell(board, cells)
    }
    getRandomCell(board, cells) {
        let randomCell = board[Math.floor(Math.random() * board.length)];
        while (randomCell === this.GoblinCell) {
            randomCell = board[Math.floor(Math.random() * board.length)];
        }
        this.GoblinCell = randomCell
        this.datasetId = ''
        cells.filter(elem => (elem.dataset.id === randomCell) ? this.datasetId = elem.dataset.id: 'some')
        this.addImage(this.datasetId)
    }
    addImage(datasetId) {
        const elemInDom = document.querySelector("[data-id='" + datasetId + "']")
        const imgEl = document.createElement('img')
        imgEl.className = 'goblin'
        imgEl.src = goblinImage
        elemInDom.appendChild(imgEl)
    }
    removeImage() {
        const elemInDom = document.querySelector('.goblin')
        elemInDom.remove()
    }
    startInterval() {
        setInterval(() => {
            this.removeImage()
            this.getBoardCells()
        }, 2000)
    }

}

const nApp = new App()
nApp.getBoardCells()
nApp.startInterval()
