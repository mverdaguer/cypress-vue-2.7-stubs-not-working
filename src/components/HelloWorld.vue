<script setup lang="ts">
import ChildComponent from './ChildComponent.vue'
</script>

<!-- <script lang="ts">
import { defineComponent } from "vue";
import ChildComponent from "./ChildComponent.vue"

export default defineComponent({
  components: {
    ChildComponent,
  },
});
</script> -->

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
