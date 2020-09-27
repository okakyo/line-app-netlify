<template>
  <button></button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

type ButtonProps = {
  large: boolean;
  small: boolean;
  block: boolean;
  rounded: boolean;
  outlined: boolean;
  text: boolean;
  color: string;
};

export default defineComponent({
  name: "BaseButton",
  props: {
    large: Boolean,
    small: Boolean,
    block: Boolean,
    rounded: Boolean,
    outlined: Boolean,
    text: Boolean,
    color: String
  },
  setup(props: any) {
    const classes = () => {
      return {
        large: props.large,
        small: props.small,
        block: props.block,
        rounded: props.rounded,
        outlined: props.outlined
      };
    };
  }
});
</script>
