import { makeAutoObservable } from "mobx"

class Todo {
    todos = [
        {id: 1, title: 'Go to shopping', completed: false},
        {id: 2, title: 'Clear the room', completed: false},
        {id: 3, title: 'Do homework', completed: false},
        {id: 4, title: 'Buy a iphone', completed: false}
    ]

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(todo) {
        this.todos.push(todo)
    }

    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    completeTodo(id) {
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    }

    fetchTodo() {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(todos => this.todos = [...this.todos, ...todos])
    }
}

export default new Todo()