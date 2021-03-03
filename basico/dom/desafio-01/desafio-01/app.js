new Vue({
  el: '#desafio',
  data: {
    nome: 'Caio',
    idade: 26,
    imagem: 'https://img2.gratispng.com/20180718/cbh/kisspng-vue-js-javascript-library-angularjs-react-vue-js-5b4ebe1bc45884.1915769815318871318042.jpg'
  },
  methods: {
    randomNumber() {
      const numero = Math.random() * 1
      return numero
    }
  }
})