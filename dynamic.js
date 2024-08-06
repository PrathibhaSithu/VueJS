const app = Vue.createApp({
    data(){
        return{
            showBooks: true,
            books: [
                { title: 'Name of the Wind', author: 'Patrick Rothfuss', img: 'assets/1.jpg', isFav: true },
                { title: 'The Way of Kings', author: 'Brandon sanderson' , img: 'assets/2.jpg', isFav: false},
                { title: 'The Final Empire', author: 'Brandon sanderson', img: 'assets/3.jpg', isFav: false },
                { title: 'Sorcerers Stone', author: 'JK Rowling', img: 'assets/4.jpg', isFav: false},
                { title: 'Half Blood Prince', author: 'JK Rowling', img: 'assets/5.jpg', isFav: true},
            ],
        }
    },

    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        toggleFav(book){
            book.isFav = !book.isFav
        },
    },
})

app.mount('#app')