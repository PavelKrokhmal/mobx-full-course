import { makeAutoObservable } from "mobx"

class Counter {
    timer = 0
    count = 0
    constructor() {
        makeAutoObservable(this)
    }

    inc() {
        this.count++
    }

    dec() {
        this.count--
    }

    get total() {
        return this.timer + this.count
    }
}

export default new Counter()