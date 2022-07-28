<template>
  <SideMenu style="order: 0" menu-text="about me" @click="toggle"/>
  <div class="outer-views">
    <KeepAlive>
      <component :is="component"/>
    </KeepAlive>
  </div>

</template>

<script>
import SideMenu from "@/components/SideMenu";
import AboutView from "@/components/AboutView";
import ProjectView from "@/components/ProjectView";

export default {
  name: 'App',
  components: {
    SideMenu,
    'about-view': AboutView,
    'project-view': ProjectView
  },
  data() {
    return {
      component: 'about-view'
    }
  },
  methods: {
    toggle() {
      if (this.component === 'about-view') {
        this.component = 'project-view'
      } else {
        this.component = 'about-view'
      }
    }
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
