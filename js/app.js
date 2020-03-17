Vue.component('modal', {
    template: '#modal-template',
    methods: {
        closeModal() {
            this.$emit('close')
        }
    }
})

const vm = new Vue({
    el: '#app',
    data: {
        currentItem: {},
        currentItemPosition: 0,
        items: [
            {
                title: 'Proyecto moderno para sala 1',
                image: 'images/slide-1.jpg',
                status: true
            },
            {
                title: 'Proyecto moderno para sala 2',
                image: 'images/slide-2.jpg',
                status: false
            },
            {
                title: 'Mejora tu oficina',
                image: 'images/slide-3.jpg',
                status: false
            }
        ],
        showModal: false
    },
    mounted() {
        this.currentItem = this.items[this.currentItemPosition]
        this.changeImage()
    },
    methods: {
        changeImage() {
            setInterval(() => {
                if(this.currentItemPosition < (this.items.length - 1)) {

                    this.currentItemPosition++
                    this.currentItem = this.items[this.currentItemPosition]

                    this.resetStatus()
                    this.items[this.currentItemPosition].status = true

                } else if(this.currentItemPosition >= (this.items.length - 1)) {

                    // Regresamos el valor a 0
                    this.currentItemPosition = 0
                    this.currentItem = this.items[this.currentItemPosition]

                    this.resetStatus()
                    this.items[this.currentItemPosition].status = true
                }
            }, 4000)
        },
        changeWithControl(index) {
            this.resetStatus()
            this.items[index].status = true
            this.currentItem = this.items[index]
        },
        resetStatus() {
            // Cambia estado del item a false
            this.items.forEach(item => {
                item.status = false
            })
        }
    }
})