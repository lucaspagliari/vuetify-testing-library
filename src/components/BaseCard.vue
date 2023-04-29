<script lang="ts" setup></script>

<template>
  <v-card class="rounded-lg pa-4">
    <v-card-title class="d-flex justify-space-between mb-4">
      <span> <slot name="title" /> </span>
      <slot name="button" />
    </v-card-title>
    <slot name="default" />
  </v-card>
</template>
