Feature: Explorar


  Scenario: Validar que el API de Home se active correctamente
    Given I am logged in VRIM page
    When I set up the API interception
    Then I navigate to Home Section