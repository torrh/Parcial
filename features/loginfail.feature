Feature: logging
  I should login fail

  Scenario: Login fail to los estudiantes web site
    Given I go to website "https://losestudiantes.co"
    And I get element with class "botonCerrar"
    And I click
    And I pause 1000
    And I get element with class "botonIngresar"
    And I click
    And I pause 1000
    And I get element with name "correo" inside "cajaLogIn"
    And I click
    And I keys "ha.torres@uniandes.edu.co"
    And I pause 1000
    And I get element with name "password" inside "cajaLogIn"
    And I click
    And I keys "1234456789"
    And I pause 1000
    And I get element with class "logInButton" inside "cajaLogIn"
    And I click
    And I pause 1000
    And I get element with class "aviso.alert.alert-danger"
    Then I expect alert with title "Upss! El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor."
