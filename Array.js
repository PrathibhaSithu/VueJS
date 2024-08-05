const app = Vue.createApp({
    data(){
        return{
            showBooks: true,
            books: [
                {title: 'Name of the Wind', author: 'Patrick Rothfuss'},
                {title: 'The way of kings', author: 'Brandon sanderson'},
                {title: 'The final empire', author: 'Brandon sanderson'},
                {title: 'Sourceres Stone', author: 'JK Rowling'},
                {title: 'Half blood prince', author: 'JK Rowling'},
            ],
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
    },
}
})

app.mount('#app')