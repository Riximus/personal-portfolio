<template>
  <div id="profile-frame">
    <img id="profile-frame-image" src="../../assets/images/pictures/profilepic_.jpg" fetchpriority="high"
         srcset="
         ../../assets/images/pictures/profilepic_.jpg 1254w,
         ../../assets/images/pictures/profilepic_1003_.jpg 1003w,
         ../../assets/images/pictures/profilepic_752_.jpg 752w,
         ../../assets/images/pictures/profilepic_502_.jpg 502w,
         ../../assets/images/pictures/profilepic_251_.jpg 251w"
         sizes="(min-width:801px) 50vw, 70vw"
         alt="Profile picture of me"/>
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