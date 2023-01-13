<script setup lang="ts">
import ChildComponent from './ChildComponent.vue'
</script>

<template>
  <div class="hello-world">
    <ChildComponent />
    <ChildComponent />
    <ChildComponent />
  </div>
</template>

<style scoped>
.hello-world {
  display: flex;
  justify-content: center;
  gap: 5px;
  background-color: aliceblue;
  padding: 60px;
}
</style>
