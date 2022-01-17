new Vue({
    el:'#app',
    data: {
        todo: [
            {
                text: "Fare la spesa",
                done: false,
            },
            {
                text: "Andare a trovare Matteo",
                done: false,
            },
            {
                text: "Chiamare Antonio",
                done: true,
            },
            {
                text: "Andare a correre",
                done: false,
            },
            {
                text: "Buttare la spazzatura",
                done: true,
            },
            {
                text: "Cercare il libro di Gino",
                done: false,
            },
            
        ],
        temporaryItem:''
    },
    methods: {
        addItem: function (text) {
            this.todo.push({ text: this.temporaryItem})
            this.temporaryItem = ''
        },
        removeItem: function (index) {
            console.log("Rimuovo un index", index)
            this.todo.splice(index, 1)
        },
    },
});