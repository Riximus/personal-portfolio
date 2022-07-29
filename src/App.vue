<template>
  <SideMenu :style="`order: ${sideMenuPosition}`" :class-name="sideMenuClass" :menu-text=menuText v-on:click="toggle"/>
  <div class="outer-views">
    <KeepAlive>
      <component :is="component"/>
    </KeepAlive>
  </div>
  <!--<div class="testing" style="background-color: white; width: 200px; height: 200px"></div>-->
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
      component: 'about-view',
      menuText: 'projects',
      sideMenuClass: 'about-view',
      sideMenuPosition: '0'
    }
  },
  methods: {
    toggle() {
      if (this.component === 'about-view') {
        this.component = 'project-view'
        this.menuText = 'about me'
        this.sideMenuClass = 'project'
        this.sideMenuPosition = '1'
      } else {
        this.component = 'about-view'
        this.menuText = 'projects'
        this.sideMenuClass = 'about'
        this.sideMenuPosition = '0'
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
