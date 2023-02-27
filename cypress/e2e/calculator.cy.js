describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should have working number buttons", () => {
    cy.get("#number2").click();
    cy.get(".display").should("contain", "2");
  });

  it("should update the display with the running total", () => {
    cy.get("#number2").click();
    cy.get("#number3").click();
    cy.get("#running-total").click();
    cy.get(".display").should("contain", "23");
  });

  it("should update the display after add", () => {
    cy.get("#number2").click();
    cy.get("#operator-add").click();
    cy.get("#number3").click();
    cy.get("#running-total").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "5");
  });

  it("should update the display after subtract", () => {
    cy.get("#number3").click();
    cy.get("#operator-subtract").click();
    cy.get("#number2").click();
    cy.get("#running-total").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "1");
  });

  it("should update the display after multiply", () => {
    cy.get("#number2").click();
    cy.get("#operator-multiply").click();
    cy.get("#number3").click();
    cy.get("#running-total").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "6");
  });

  it("should update the display after divide", () => {
    cy.get("#number4").click();
    cy.get("#operator-divide").click();
    cy.get("#number2").click();
    cy.get("#running-total").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "2");
  });

  it("should display chained operations", () => {
    cy.get("#number2").click();
    cy.get("#operator-add").click();
    cy.get("#number3").click();
    cy.get("#operator-subtract").click();
    cy.get("#number1").click();
    cy.get("#running-total").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "4");
  });

  it("should display a positive number", () => {
    cy.get("#number2").click();
    cy.get("#operator-add").click();
    cy.get("#number3").click();
    cy.get("#operator-subtract").click();
    cy.get("#number1").click();
    cy.get("#running-total").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "4");
  });

  it("should display a negative number", () => {
    cy.get("#number2").click();
    cy.get("#operator-add").click();
    cy.get("#number3").click();
    cy.get("#operator-subtract").click();
    cy.get("#number6").click();
    cy.get("#running-total").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "-1");
  });

  it("should display decimal number", () => {
    cy.get("#number4").click();
    cy.get("#operator-divide").click();
    cy.get("#number8").click();
    cy.get("#running-total").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "0.5");
  });

  it("should display a large number", () => {
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#operator-multiply").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#running-total").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "99980001");
  });

  it("should show zero when dividing a number by zero", () => {
    cy.get("#number1").click();
    cy.get("#operator-divide").click();
    cy.get("#number0").click();
    cy.get("#running-total").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "0");
  });
});
