<template>
  <SideMenu style="order: 0"/>
  <div class="outer-views">
    <AboutView/>
  </div>

</template>

<script>
import SideMenu from "@/components/SideMenu";
import AboutView from "@/components/AboutView";

export default {
  name: 'App',
  components: {
    SideMenu,
    AboutView
  }
}
</script>

<style lang="sass">
@use "assets/styles/_index.sass"

#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  background-color: index.$black
  height: 100vh
  display: flex
  align-items: center
  justify-content: center
</style>
