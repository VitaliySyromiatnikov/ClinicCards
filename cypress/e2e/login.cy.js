
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
  it.only('Cannot login without filled data', () => {
     
    loginPage.getLoginPageButton().first().click()
    
    //Check that we are in login page
    cy.contains("Вхід")

    loginPage.getSubmitFormButton().click()

    //Check email error message
    loginPage.getEmailErrorMessage().contains("Введіть коректний Email")
    loginPage.getPasswordErrorMessage().contains("Введіть пароль")
  })
})
