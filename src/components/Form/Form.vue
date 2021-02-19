<template>
  <form>
    <label>
      <span>Nome</span>
      <input type="text" name="name" placeholder="Nome" />
    </label>
    <label>
      <span>Idade</span>
      <input type="number" name="age" />
    </label>
    <h3>Escolha companheiro</h3>
    <label>
      <input type="radio" name="pet" value="bunny" />
      <span>Coelho</span>
    </label>
    <label>
      <input type="radio" name="pet" value="dog" />
      <span>Cachorro</span>
    </label>
    <label>
      <input type="radio" name="pet" value="cat" />
      <span>Gato</span>
    </label>
    <label>
      <input type="checkbox" name="easy" />
      <span>Deseja iniciar no fácil?</span>
    </label>
    <button type="submit">Cadastre!</button>
  </form>
</template>

<style scoped>
form {
  display: inline-grid;
}
label {
  margin: 8px;
}
span {
  margin: 0 8px;
}
</style>