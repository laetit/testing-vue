<template>
  <section>
    <h1>Por que testar seus componentes?</h1>
    <p>
      Os testes unitários permitem mais <b>confiança</b> sobre o funcionamento
      dos componentes.
    </p>
    <p>Mas então, o que devemos testar no código?</p>
    <h3>
      Teste os componentes da forma que estão escritos para serem utilizados
      pelo usuário<br />
      e não a forma que o código foi escrito.
    </h3>
    <ul>
      <li>Validar se renderiza quando deve</li>
      <li>Se não renderiza quando não deve</li>
      <li>Se funciona como você espera</li>
      <li>Se funciona como usuário espera</li>
      <li>E se ocorrer modificação do código, continuará funcionando</li>
    </ul>
    
  </section>
</template>

<script>
export default {
  name: "HelloWorld"
};
</script>

<style scoped>
ul {
  list-style-type: none;
  display: inline-grid;
  margin: 0;
  padding: 0;
}
li {
  margin: 8px;
}
</style>
