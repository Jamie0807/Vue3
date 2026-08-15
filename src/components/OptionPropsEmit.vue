<script lang="ts">
export default {
  props: {
    OptionsName: {
      type: String,
      required: true,
    },
    OptionsAge: {
      type: Number,
      required: true,
    },
  },
}
</script>
<template>
  <div>
    <h1>{{ OptionsName }}</h1>
    <h1>{{ OptionsAge }}</h1>
  </div>
</template>
