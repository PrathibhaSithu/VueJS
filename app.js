const app = Vue.createApp({
    data(){
        return{
            title: 'The Final Empire',
            name: 'Prathibha Sithumini',
            age: 24,
            // count: 0,
            showDete: true
        }
    },
    methods:{
        changeTitle(){
            this.title = 'Lord of the Rings'
        },
        increment(){
            this.count++
        },
        decrement(){
            this.count--
        },
        handleEvent(){
            console.log('Event Handled')
        },
        handleLeaveEvent(){
            console.log('I am Leaving')
        },
    }
})

app.mount('#app')