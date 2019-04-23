<template>
  <div class='col'>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.col {
  width: 50%;
  display: flex;
  background: grey;
  border: 1px solid red;

  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
}
</style>