# cypress-vue-2.7-stubs-not-working
Example project with stubs not working in Cypress 12.3.0, Vue 2.7.14 in script setup mode.

### Install
`yarn`

### Run tests
`yarn test:ct`

### Example 1: Working case (not using script setup)
#### Component: [HelloWorld](https://github.com/mverdaguer/cypress-vue-2.7-stubs-not-working/blob/main/src/components/HelloWorld.vue)
```
<script lang="ts">
import { defineComponent } from "vue";
import ChildComponent from "./ChildComponent.vue"

export default defineComponent({
  components: {
    ChildComponent,
  },
});
</script>
```

#### [Test]()
```
import HelloWorld from "../HelloWorld.vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    cy.mount(HelloWorld, { stubs: { ChildComponent: true } })
      .get("childcomponent-stub")
      .should("have.length", "3");
  });
});
```

### Example 2: Failing case (using script setup)
#### Component: [HelloWorldScriptSetup](https://github.com/mverdaguer/cypress-vue-2.7-stubs-not-working/blob/main/src/components/HelloWorldScriptSetup.vue)
```
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
```

#### Test
```
import HelloWorldScriptSetup from "../HelloWorldScriptSetup.vue";

describe("HelloWorldScriptSetup", () => {
  it("renders properly", () => {
    cy.mount(HelloWorldScriptSetup, { stubs: { ChildComponent: true } })
      .get("childcomponent-stub")
      .should("have.length", "3");
  });
});
```
