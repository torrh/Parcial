Feature: Search teacher
  I search teacher

  Scenario: Search teacher in los estudiantes web site
    Given I go to website "https://losestudiantes.co"
    And I get element with class "botonCerrar"
    And I click
    And I pause 2000
    And I get element with class "Select-placeholder"
    And I click
    And I keys "Mario Linares"
    And I pause 2000
    And I get element with class "Select-menu-outer"
    And I click
    And I pause 2000
