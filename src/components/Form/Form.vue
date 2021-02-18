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
    <h3>Escolha companheiros</h3>
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
      <span>Deseja iniciar ni fácil?</span>
    </label>
    <input type="submit" value="Cadastre" />
  </form>
</template>