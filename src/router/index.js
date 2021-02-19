import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/Home.vue'
import Text from '@/views/Text/Text.vue'
import SignIn from '@/views/SignIn/SignIn.vue'
import Credits from '@/views/Credits/Credits.vue'
import PATH from '@/constants/path'

Vue.use(VueRouter)

const routes = [
  {
    path: PATH.home,
    name: 'Inicio',
    component: Home
  },
  {
    path: PATH.text,
    name: 'Texto',
    component: Text
  },
  {
    path: PATH.signIn,
    name: 'Cadastro',
    component: SignIn
  },
  {
    path: PATH.refer,
    name: 'Referências',
    component: Credits
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
