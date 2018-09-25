Feature: logging
  I should login

  Scenario: Login to los estudiantes web site
    Given I go to website "https://losestudiantes.co"
    And I get element with class "botonCerrar"
    And I click
    And I pause 3000
    And I get element with class "botonIngresar"
    And I click
    And I pause 3000
    And I get element with name "correo" inside "cajaLogIn"
    And I click
    And I keys "ha.torres11@uniandes.edu.co"
    And I pause 3000
    And I get element with name "password" inside "cajaLogIn"
    And I click
    And I keys "123456789"
    And I pause 3000
    And I get element with class "logInButton" inside "cajaLogIn"
    And I click
    And I pause 3000
