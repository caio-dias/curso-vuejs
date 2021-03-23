import Vue from 'vue'
import Router from 'vue-router'

//componentes
//import Menu from './components/template/Menu'
import Inicio from './components/Inicio'

//registrando o router
Vue.use(Router)

//usando o componente via funcao callback, carregando o componente via lazyload, apenas quando clicar onde o comp deve ser usado
//webpackChunkName: "usuario" = ele criará um js unico para todos que tiverem esse comentario

const Usuario = () => import(/* webpackChunkName: "usuario" */'./components/usuario/Usuario')
const UsuarioLista = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioLista')
const UsuarioDetalhe  = () => import('./components/usuario/UsuarioDetalhe')
const UsuarioEditar = () => import('./components/usuario/UsuarioEditar')

//obj de config do router
const router = new Router({
    /*modo history ou hash, hash é o padrão, mas o history é mais perigoso, por precisar de configs no servidor
    caso a url nao exista, a pagina nao irá carregar*/
    mode: 'history',
    //rotas e respectivos componentes a serem carregados
    routes: [{
        path: '/',
        name: 'incio',
        //obj com componentes
        components: {
            default: Inicio,
            //passando o menu para o router view de nome menu
            //menu: Menu
        }
    }, {
        path: '/usuario',
        component: Usuario,
        //passando um parametro na url
        //o componente recebe uma props chamada id, sempre que a prop muda, o componente é avisado e muda tambem
        props: true,
        //rotas aninhadas de usuario
        children: [
            { path: '', component: UsuarioLista },
            { path: ':id', component: UsuarioDetalhe, props: true },
            { path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario' }
        ]
    }, 
    //redirects
    {
        path: '/redirecionar',
        redirect: '/usuario'
    }, {
        path: '*',
        redirect: '/'
    }]
})

//antes de navegar para cada rota
router.beforeEach((to, from, next) => {
    console.log('ante das rotas -> global')
    console.log(to)
    //se nao chamar o next ele vai interromper a navegacao
    next()
})

export default router