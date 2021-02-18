<template>
  <div id="nav">
    <h2>Sisteminha da Laet pra testes em VueJs</h2>
    <router-link :to="path.home">Home</router-link> |
    <router-link :to="path.text">Texto</router-link> |
    <router-link :to="path.signIn">Cadastro</router-link>
  </div>
</template>

<script>
import PATH from '@/constants/path'

export default {
  name: "Nav",
  data() {
    return {
      path: PATH
    }
  }
}
</script>