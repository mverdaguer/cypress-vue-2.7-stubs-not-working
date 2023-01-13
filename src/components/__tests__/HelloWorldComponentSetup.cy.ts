import HelloWorldComponentSetup from "../HelloWorldComponentSetup.vue";

describe("HelloWorldComponentSetup", () => {
  it("renders properly", () => {
    cy.mount(HelloWorldComponentSetup, { stubs: { ChildComponent: true } })
      .get("childcomponent-stub")
      .should("have.length", "3");
  });
});
