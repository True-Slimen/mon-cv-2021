<template>
    <kinesis-container :class="iconWrapperClass">
      <kinesis-element :strength="15" type="depth">
        <img class="h-10" :src="createIconPath()" :alt="createIconAlt()" />
      </kinesis-element>
      <kinesis-element :strength="10" type="depth">
        <p class="m-0">{{ iconName.displayName }}</p>
      </kinesis-element>
    </kinesis-container>
</template>

<style scoped>
</style>

<script>

export default {
  components: {

  },
  props: {
    iconWrapperClass: {
      type: String,
      required: false
    },
    iconName: {
      type : Object,
      required: true
    },
    height: {
      type : Number,
      required: false
    }
  },
  data() {
    return {};
  },
  methods: {
    createIconPath() {
      return 'image/icon/skills/' + this.iconName.name + '.png'
    },

    createIconAlt() {
      return 'Logo ' + this.iconName.alt
    }
  },
};
</script>
