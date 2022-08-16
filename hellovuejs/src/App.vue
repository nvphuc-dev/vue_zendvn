<template>
  <div id="app">
    <component-header></component-header>
    <component-list-user></component-list-user>
    <component-footer></component-footer>
  </div>
</template>

<script>
import ComponentHeader from './components/ComponentHeader.vue';
import ComponentFooter from './components/ComponentFooter.vue';
import ComponentListUser from './components/ComponentListUser.vue';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello Vue.js App'
    }
  },
  components: {
    ComponentHeader,
    ComponentFooter,
    ComponentListUser
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
