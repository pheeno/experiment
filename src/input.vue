<template>
  <div
    class='wrapper'
    :class='{error}'
  >
    <input
      type="text"
      :value='value'
      :disabled='disabled'
      :readonly='readonly'
      @change="$emit('change', $event)"
      @input="$emit('input',$event)"
      @focus="$emit('focus',$event)"
      @blur="$emit('blur',$event)"
    >
    <template v-if="error">
      <icon
        name='error'
        class='icon-error'
      ></icon>
      <span class='error-message'>{{error}}</span>
    </template>

  </div>
</template>

<script>
import icon from "./icon.vue";
export default {
  name: "GuluButton",
  components: { icon },
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
};
</script>

<style scoped lang='scss'>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 14px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #f1453d;
.wrapper {
  > :not(:last-child) {
    margin-right: 0.5em;
  }
  font-size: $font-size;
  &.error {
    display: inline-flex;
    align-items: center;
    > input {
      border-color: $red;
    }
    > .icon-error {
      fill: $red;
    }
    > .error-message {
      color: $red;
    }
  }
  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    font-size: inherit;
    padding: 0 8px;
    outline: none;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
    }
    &[disabled],
    [readonly] {
      color: #aaa;
      border-color: #aaa;
      cursor: not-allowed;
    }
  }
}
</style>