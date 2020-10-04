<template>
  <button :class="classes()" :style="style">
    <slot />
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { ColorType, colorPicker } from "@/components/utils/color";

type ButtonProps = {
  large?: boolean;
  small?: boolean;
  block?: boolean;
  rounded?: boolean;
  outlined?: boolean;
  text?: boolean;
  color?: ColorType;
  style?: string;
};

export default defineComponent({
  name: "BaseButton",
  props:{
    large: {
      type:Boolean,
      require: false 
    },

    small:{
      type:Boolean,
      require: false 
    },
    block:{
      type:Boolean,
      require: false 
    },
    rounded:{
      type:Boolean,
      require: false 
    },
    outlined:{
      type:Boolean,
      require: false 
    },
    text:{
      type:Boolean,
      require: false 
    },
    color:{
      type: String,
      require: false 
    },
    style:{
      type:Boolean,
      require: false 
    },
  },
  setup(props) {
    const classes = () => {
      return [
        "ma-2",
        "py-2",
        "px-4",
        "font-semibold",
        "rounded",
        props.large ? "" : "",
        props.small ? "" : "",
        props.block ? "" : "",
        props.rounded ? "" : "",
        colorPicker(props.color, props.outlined)
      ].join(" ");
    };
    return {
      classes
    };
  }
});
</script>
