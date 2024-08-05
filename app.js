const app = Vue.createApp({
    data(){
        return{
            title: 'The Final Empire',
            name: 'Prathibha Sithumini',
            age: 24,
            // count: 0,
            showDete: true,
            x: 0,
            y: 0,
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
        handleEvent(e, data){
            console.log(e, e.type)
            if(data){
                console.log(data)
            }
        },
        handleLeaveEvent(){
            console.log('I am Leaving')
        },
        handleClickEvent(){
            console.log('I am Clicked')
        },
        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },
    }
})

app.mount('#app')