<template>
  <header-component></header-component>
  <router-view></router-view> 
  <footerComponent></footerComponent>
</template>

<script>
import footerComponent from './components/footer/footer.vue'
import headerComponent from "./components/Header/Header.vue";

export default {
  components: {
    headerComponent, footerComponent
  },
};
</script>

<style lang="sass" >
body
  margin: 0
  padding: 0
</style>
