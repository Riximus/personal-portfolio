<template>
  <KeepAlive>
    <Transition name="grow" appear mode="out-in">
      <SideMenu v-if="transitionSideMenu" :class-name="sideMenuClass" :menu-text=menuText @click="toggle"/>
      <SideMenu v-else :class-name="sideMenuClass" :menu-text=menuText @click="toggle"/>
    </Transition>
  </KeepAlive>
  <div class="outer-views">
    <Transition name="fade" appear mode="out-in">
      <component :is="component"/>
    </Transition>
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
        //this.sideMenuPosition = '1'
        this.transitionSideMenu = true
      } else {
        this.component = 'about-view'
        this.menuText = 'projects'
        this.sideMenuClass = 'about'
        //this.sideMenuPosition = '0'
        this.transitionSideMenu = false
      }
    }
  }
}
</script>

<style lang="sass">
@use "assets/styles/_index.sass"

//:style="`order: ${sideMenuPosition}`"

#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  background-color: index.$black
  height: 100vh
  display: flex
  align-items: center
  justify-content: center

// Content Enters
.fade-enter-active
  transition: all 0.5s ease-in

.fade-enter-from
  opacity: 0

.fade-enter-to
  opacity: 1

// Content Leaves
.fade-leave-active
  transition: all 0.5s ease-out

.fade-leave-from
  opacity: 1

.fade-leave-to
  opacity: 0

// Side Menu Enters
.grow-enter-active
  animation: grow-in 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both

// Side Menu Leaves
.grow-leave-active
  animation: grow-in 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both reverse

@keyframes grow-in
  0%
    transform: scaleX(-1)
    transform-origin: 0 100%

  100%
    transform: scaleX(1)
    transform-origin: 0 100%


</style>
