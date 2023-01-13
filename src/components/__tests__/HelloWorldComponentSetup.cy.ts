import HelloWorldScriptSetup from "../HelloWorldScriptSetup.vue";

describe("HelloWorldScriptSetup", () => {
  it("renders properly", () => {
    cy.mount(HelloWorldScriptSetup, { stubs: { ChildComponent: true } })
      .get("childcomponent-stub")
      .should("have.length", "3");
  });
});
