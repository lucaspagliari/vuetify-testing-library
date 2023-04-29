<template>
  <div>
    <v-text-field
      v-model="text"
      placeholder="field"
      label="field"
      aria-describedby="field"
      data-testid="field"
    ></v-text-field>
    <div data-testid="text">my text: {{ text }}</div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const text = ref('')

    return { text }
  },
}
</script>

<style lang="scss" scoped></style>
