<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from './components/Nav/Nav'

export default {
  components: {
    Nav
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--primary-color);
}

#nav {
  padding: 30px;
  border-bottom: var(--light-border);
  box-shadow: var(--light-shadow);
}

#nav a {
  font-weight: bold;
  color: var(--primary-color);
}

#nav a.router-link-exact-active {
  color: var(--secundary-color);
}

h3 {
  margin: 40px 0;
}

a {
  color: var(--secundary-color);
}

button {
  margin: 12px auto;
  color: var(--light-color);
  padding: 16px;
  background-color:var(--secundary-color);
  border-radius: 8px;
  border: none;
}

button:hover {
  background-color: var(--dark-secundary-color);
}

.imgSVG {
  width: 20px;
}

:root {
  --primary-color: #2c3e50;
  --secundary-color: #42b983;
  --dark-secundary-color: #2b8059;
  --light-color: #f5f5f5;
  --light-border: 1px solid var(--secundary-color);
  --light-shadow: 1px 2px 14px var(--light-color);
}
</style>
