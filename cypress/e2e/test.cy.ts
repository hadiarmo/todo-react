describe("Testing to-do app", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://localhost:3000/");
  });

  it("displays two todo items by default", () => {
    // which are the three default items.
    cy.get(":nth-child(2) > .mui-pszy9p > .MuiTypography-root").should(
      "have.text",
      "this is a test todo"
    );
    cy.get(":nth-child(3) > .mui-pszy9p > .MuiTypography-root").should(
      "have.text",
      "this is a test todo"
    );
    cy.get(":nth-child(4) > .mui-pszy9p > .MuiTypography-root").should(
      "have.text",
      "this is a test todo"
    );
  });

  it("can add new todo items", () => {
    const newItem = "Feed the cat";

    cy.get("#outlined-basic").type(`${newItem}`);
    cy.get(".mui-1embff6 > .MuiButtonBase-root").click();

    cy.get(":nth-child(2) > :nth-child(2) > .MuiTypography-root").should(
      "have.text",
      "Feed the cat"
    );
  });

  it("can check edit tasks", () => {
    cy.get(
      ":nth-child(2) > .mui-pszy9p > .MuiBox-root > :nth-child(1)"
    ).click();

    cy.get(".MuiFormGroup-root > :nth-child(3)").click();
    cy.get(".MuiButton-textSecondary").click();
    cy.get(":nth-child(4) > :nth-child(2) > .MuiTypography-root").should(
      "have.text",
      "this is a test todo"
    );
    cy.get(":nth-child(4) > :nth-child(3) > .MuiTypography-root").should(
      "have.text",
      "this is a test todo"
    );

    cy.get(
      ":nth-child(4) > :nth-child(2) > .MuiBox-root > :nth-child(1)"
    ).click();
    cy.get(
      ".MuiDialogContent-root > .MuiBox-root > .MuiTextField-root > .MuiInputBase-root > #outlined-basic"
    ).clear().type("edit task");

    cy.get('.MuiButton-textSecondary').click();

    cy.get(":nth-child(4) > :nth-child(2) > .MuiTypography-root").should(
      "have.text",
      "edit task"
    );
    cy.get(":nth-child(4) > :nth-child(3) > .MuiTypography-root").should(
      "have.text",
      "this is a test todo"
    );

    cy.get(':nth-child(3) > .mui-pszy9p > .MuiBox-root > :nth-child(1)').click()
    cy.get(".MuiFormGroup-root > :nth-child(1)").click();
    cy.get('.MuiButton-textSecondary').click();
    cy.get(':nth-child(2) > .mui-pszy9p > .MuiTypography-root').should(
      "have.text",
      "this is a test todo"
    )

    cy.get(':nth-child(3) > .MuiBox-root > :nth-child(1)').click()
    cy.get(".MuiFormGroup-root > :nth-child(2)").click();
    cy.get('.MuiButton-textSecondary').click();

    cy.get(':nth-child(3) > .mui-pszy9p > .MuiTypography-root').should(
      "have.text",
      "this is a test todo"
    )


  });

  it('can delete task', () => {
    cy.get(':nth-child(2) > .mui-pszy9p > .MuiBox-root > :nth-child(2)').click()
    cy.get('.MuiContainer-root > :nth-child(2) > .MuiTypography-root').should(
      "have.text",
      "Tasks to do - 0"
    )
    cy.contains('nth-child(2) > .mui-pszy9p').should('not.exist')
  })

  it('can save tasks after reload', () => {
    const newItem = "Feed the cat";

    cy.get("#outlined-basic").type(`${newItem}`);
    cy.get(".mui-1embff6 > .MuiButtonBase-root").click();

    cy.reload()
    cy.get(':nth-child(2) > :nth-child(2) > .MuiTypography-root').should(
      "have.text",
      "Feed the cat"
    )
  })
});
