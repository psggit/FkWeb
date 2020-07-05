describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });
});

describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/");
  });
});
