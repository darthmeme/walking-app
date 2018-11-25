<template>
  <Button
    class="component"
    :style="{
      color: this.isPrimary ? '#FFF' : this.color,
      borderWidth: this.isPrimary ? '' : '2 2 2 2',
      borderColor: this.isPrimary ? '' : `${this.color} `.repeat(4).trim(),
      backgroundColor: this.isPrimary ? this.color : '#FFF',
      width: this.isPrimary ? '80%' : '40%'
    }"
    :text="text"
    @tap="$emit('pressed')" />
</template>

<script>
export default {
  name: 'ActionButton',
  props: {
    text: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: String
    },
    type: {
      type: String,
      required: false,
    },
    size: {
      type: String,
      required: true
    }
  },
  computed: {
    isPrimary () {
      return this.type === 'primary'
    }
  }
}
</script>

<style scoped>
.component {
  text-transform: uppercase;
  border-radius: 50%;
  font-weight: 700;
  height: 60;
}
</style>
