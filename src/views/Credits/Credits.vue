<template>
  <section>
    <h1>Referências</h1>
    <h3>Documentações (não podem faltar)</h3>
    <ul>
      <li>
        <img src="@/assets/vue.png" />
        <a href="https://vuejs.org/v2/guide/">VueJs</a>
      </li>
      <li>
        <img src="@/assets/octopus.png" />
        <a href="https://testing-library.com/docs/">Testing Library</a>
      </li>
      <li>
        <img src="@/assets/lizard.png" />
        <a href="https://github.com/testing-library/vue-testing-library"
          >Testing Library</a
        >
      </li>
    </ul>
    <h3>Artigos e outros!</h3>
    <ul>
      <li>
        <a href="https://www.maxpou.fr/vue-js-testing-library"
          >Vue.js Testing Made it Easy</a
        >
      </li>
      |
      <li>
        <a
          href="https://blog.logrocket.com/testing-vue-components-with-vue-testing-library/"
          >Testing Vue components with Vue Testing Library</a
        >
      </li>
      |
      <li>
        <a href="https://github.com/maxpou/vue-testing-library-sample"
          >Samples</a
        >
      </li>
    </ul>
  </section>
</template>

<style scoped>
section {
  display: inline-grid;
}
.card-doc {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 8px auto;
}
img {
  width: 50px;
  margin: 8px;
}
ul {
  margin: auto;
  list-style: none;
  display: inline-flex;
}
li {
  margin: 0 8px;
  align-items: center;
  display: flex;
}
</style>