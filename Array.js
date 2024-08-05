const app = Vue.createApp({
    data(){
        return{
            showBooks: true,
            books: [
                { title: 'Name of the Wind', author: 'Patrick Rothfuss', img: 'assets/1.jpg' },
                { title: 'The Way of Kings', author: 'Brandon sanderson' , img: 'assets/2.jpg'},
                { title: 'The Final Empire', author: 'Brandon sanderson', img: 'assets/3.jpg' },
                { title: 'Sorcerers Stone', author: 'JK Rowling', img: 'assets/4.jpg'},
                { title: 'Half Blood Prince', author: 'JK Rowling', img: 'assets/5.jpg'},
            ],
            url: 'https://github.com/',
        }
    },

    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
    }
})

app.mount('#app')