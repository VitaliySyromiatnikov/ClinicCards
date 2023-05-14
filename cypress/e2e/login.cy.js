
import LoginPage from "../fixtures/loginPage.js";

describe('Login page', () => {
  beforeEach(function () {
    // Here we login
    cy.fixture("main").then(function (data) {
      this.data = data;
      cy.visit(this.data.loginPageUrl);
    
    })
})
  
  const loginPage = new LoginPage();
  it.only('passes', () => {
     
    loginPage.getLoginPageButton().first().click()

    //Check that we are in login page
    cy.contains("Вхід")

    loginPage.getPasswordField().type("dsadas")
 
    loginPage.getSubmitFormButton().click()

    loginPage.getEmailErrorButton().contains("Введіть коректний Email")
  
  })
})
