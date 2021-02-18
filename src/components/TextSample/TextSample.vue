<template>
  <div>
    <h1 v-if="name === undefined">Seu nome não foi encontrado!</h1>
    <h1 v-else>Seu nome é {{name}}</h1>
    <p v-if="age === undefined">Sua idade não foi encontrada!</p>
    <p v-else>Sua idade é {{age}}</p>
  </div>
</template>

<script>
export default {
  name: "TextSample",
  props: {
    name: String,
    age: String,
  }
}
</script>