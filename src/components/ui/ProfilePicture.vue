<template>
  <div id="profile-frame">
    <img id="profile-frame-image" src="../../assets/images/profilepic_.jpg"
         srcset="
         ../../assets/images/profilepic_.jpg 1254w,
         ../../assets/images/profilepic_755_.jpg 755w,
         ../../assets/images/profilepic_627_.jpg 627w,
         ../../assets/images/profilepic_320_.jpg 320w"
         sizes="50vw"
         alt="Profile picture of me" height="836" width="1254"/>
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