export default {
    data() {
        return {
            fruta: '',
            frutas : ['uva', 'maca', 'pera']
        }
    },
    methods: {
        add () {
            this.frutas.push(this.fruta)
            this.fruta = ''
        }
    }
}