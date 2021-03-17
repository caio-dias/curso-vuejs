import Vue from 'vue'
import axios from 'axios'

//url base para acessar o backend no firebase (em uma unica instancia)
//axios.defaults.baseURL = 'https://curso-vue-cd28a-default-rtdb.firebaseio.com/'

//setando headers manualmente
// axios.defaults.headers.common['Authorization'] = 'abc123'
// axios.defaults.headers.get['Accepts'] = 'application/json'

//setando o axios para ser acessado globalmente via $http
Vue.use({
    install(Vue) {
        //usando apenas umas instancia do axios
        //Vue.prototype.$http = axios

        //multiplas instancias do axios
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-cd28a-default-rtdb.firebaseio.com/',
            headers: {
                "Authorization": "abc123"
            }
        })

        //interceptando a requisicao
        Vue.prototype.$http.interceptors.request.use(req => {
            console.log(req.method)
            return req
        }, error => Promise.reject(error))

        //interceptando a response
        // Vue.prototype.$http.interceptors.response.use(res => {
        //     const array = []
        //     array.push({ id: HashChangeEvent, ...res.data[chave] })

        //     res.data = array
        //     return res
        // }, error => Promise.reject(error))
    }
})