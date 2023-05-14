class LoginPage {
   
    getLoginPageButton() {
      return cy.get('[id="loginButton"]')
    }

    getPasswordField() {
        return cy.get('[id="password"]')
      }

      getSubmitFormButton() {
        return cy.get('[type="submit"]')
      }

      getEmailErrorButton() {
        return cy.get('[id="emailError"]')
      }

}
export default LoginPage;
