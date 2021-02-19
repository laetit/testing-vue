<template>
  <section>
    <HelloWorld v-if="view" />
    <SecondHome v-else />
    <button v-on:click="setView()">
      <img class="imgSVG" arial-label="button-home" alt="next" src="@/assets/play.svg" />
    </button>
  </section>
</template>
<script>
import HelloWorld from "@/components/HelloWorld/HelloWorld.vue";
import SecondHome from "@/components/SecondHome/SecondHome.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    SecondHome
  },
  data() {
    return {
      view: true,
    };
  },
  methods: {
    setView() {
      this.view = !this.view;
    },
  },
};
</script>

<style scoped>
section {
  display: inline-grid;
}
</style>
