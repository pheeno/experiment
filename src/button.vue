<template>
  <button
    class="g-button"
    :class='{[`icon-${iconPosition}`]:true}'
  >
    <g-icon
      name='loading'
      v-if="loading"
      class='loading icon'
    ></g-icon>
    <g-icon
      v-if="icon && !loading"
      class="icon"
      :name="icon"
    ></g-icon>
    <div class='g-button-content'>
      <slot></slot>
    </div>
  </button>
</template>
<script>
export default {
  name: "g-button",
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: "left",
      validator(v) {
        return v === "left" || v === "right";
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang='scss'>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  .icon {
    order: 1;
    margin-right: 0.1rem;
  }
  .g-button-content {
    order: 2;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-left: 0.1rem;
      margin-right: 0;
    }
    > .g-button-content {
      order: 1;
    }
  }
  .loading{
    animation: spin 1.5s infinite linear
  }
}
</style>