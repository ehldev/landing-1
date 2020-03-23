// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAPYgacyxTa6K4BV-NMnsGQ9jlLjMy68vU",
    authDomain: "estudio-z.firebaseapp.com",
    databaseURL: "https://estudio-z.firebaseio.com",
    projectId: "estudio-z",
    storageBucket: "estudio-z.appspot.com",
    messagingSenderId: "181316240568",
    appId: "1:181316240568:web:65846fe8c4926d9d6ca04d",
    measurementId: "G-V4BR0JS41J"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

Vue.component('modal', {
    data() {
        return {
            loading: false,
            success: false
        }
    },
    mounted() {
        this.loading = false
        this.success = false
    },
    template: '#modal-template',
    methods: {
        closeModal() {
            this.$emit('close')
        },
        submit() {
            this.loading = true

            setTimeout(() => {
                this.loading = false
                this.success = true
            }, 3000)
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
                title: 'Proyecto moderno 1',
                image: 'images/slide-1.jpg',
                status: true
            },
            {
                title: 'Proyecto moderno 2',
                image: 'images/slide-2.jpg',
                status: false
            },
            {
                title: 'Proyecto moderno 3',
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