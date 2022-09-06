<template>
  <div class="icon-svg-wrapper" :class="class_name">
    <svg class="cc-icon" aria-hidden="true">
      <use :xlink:href="icon_name"></use>
    </svg>
  </div>
</template>
<script>
export default {
  name: 'iconSvg',
  props: { 
    icon_name: { type: String }, 
    class_name: { type: String } 
  }
}
</script>
<style lang="scss" scoped>
.icon-svg-wrapper{
  display: inline;
  }
</style>
