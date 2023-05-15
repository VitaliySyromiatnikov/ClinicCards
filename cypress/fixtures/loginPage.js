class LoginPage {
   
    getLoginPageButton() {
      return cy.get('[id="loginButton"]')
    }

    getPasswordField() {
        return cy.get('[id="password"]')
      }


      getEmailField() {
        return cy.get('[id="email"]')
      }


      getSubmitFormButton() {
        return cy.get('[type="submit"]')
      }

      getEmailErrorMessage() {
        return cy.get('[id="emailError"]')
      }

      getPasswordErrorMessage() {
        return cy.get('[class="help-block"]')
      }


}
export default LoginPage;
