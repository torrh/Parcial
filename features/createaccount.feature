Feature: Create account
  I should create an account

  Scenario: create an account fail in los estudiantes web site
    Given I go to website "https://losestudiantes.co"
    And I get element with class "botonCerrar"
    And I click
    And I pause 1000
    And I get element with class "botonIngresar"
    And I click
    And I pause 1000
    And I get element with name "nombre" inside "cajaSignUp"
    And I click
    And I keys "Pepito"
    And I get element with name "apellido" inside "cajaSignUp"
    And I click
    And I keys "Perez"
    And I pause 1000
    And I get element with name "correo" inside "cajaSignUp"
    And I click
    And I keys "moe@hotmail.com"
    And I pause 1000
    And I get basic element with name "idUniversidad" inside "cajaSignUp"
    And I click
    And I pause 1000
    And I get basic element with name "idPrograma" inside "cajaSignUp"
    And I click
    And I select "Ingeniería de Sistemas y Computación"
    And I pause 1000
    And I get element with name "password" inside "cajaSignUp"
    And I click
    And I keys "123456789"
    And I pause 1000
    And I get element with class "logInButton" inside "cajaSignUp"
    And I click
    And I pause 3000
    And I get element with class "aviso.alert.alert-danger"
    Then I expect alert with title "Debes aceptar los términos y condiciones"

  Scenario: create an account in los estudiantes web site
    And I get element with name "acepta" inside "cajaSignUp"
    And I click
    And I pause 1000
    And I get element with name "password" inside "cajaSignUp"
    And I click
    And I keys "123456789"
    And I pause 1000
    And I get element with class "logInButton" inside "cajaSignUp"
    And I click
    And I pause 3000
