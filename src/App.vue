<template>
  <Transition name="grow" appear mode="out-in">
    <SideMenu v-if="transitionSideMenu" :class-name="sideMenuClass" :menu-text=menuText @click="toggle"/>
    <SideMenu v-else :class-name="sideMenuClass" :menu-text=menuText @click="toggle"/>
  </Transition>
  <div class="outer-views">
    <Transition name="fade" appear mode="out-in">
      <component :is="component"/>
    </Transition>
  </div>
</template>

<script>
import SideMenu from "@/components/layout/SideMenu";
import AboutView from "@/components/pages/AboutView";
import ProjectView from "@/components/pages/ProjectView";

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
      sideMenuPosition: '0',
      transitionSideMenu: true,
    }
  },
  methods: {
    toggle() {
      if (this.component === 'about-view') {
        this.component = 'project-view'
        this.menuText = 'about me'
        this.sideMenuClass = 'project'
        this.transitionSideMenu = true
      } else {
        this.component = 'about-view'
        this.menuText = 'projects'
        this.sideMenuClass = 'about'
        this.transitionSideMenu = false
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
