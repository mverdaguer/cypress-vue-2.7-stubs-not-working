import HelloWorld from "../HelloWorld.vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    cy.mount(HelloWorld, { stubs: { ChildComponent: true } })
      .get("childcomponent-stub")
      .should("have.length", "3");
  });
});
