<template>
  <div id="profile-frame">
    <img id="profile-frame-image" src="../../assets/images/profilepic.jpg" alt="Profile picture of a man"/>
  </div>
</template>

<script>
export default {
  name: 'ProfilePicture'
}
</script>

<style scoped lang="sass">
@use "@/assets/styles/_index.sass"

#profile-frame
  @include index.remove-highlight
  @include index.responsive-square
  align-self: center

  &-image
    @include index.responsive-square-content
    border-radius: 50%
    object-fit: cover

</style>