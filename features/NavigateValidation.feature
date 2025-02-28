Feature: NavigateValidation

@NavigateValidation
  Scenario Outline: Validar el endpoint en Red Médica y TD Consentido Mapa
    Given I am logged in VRIM page with user "<userType>"
    When I navigate to Red medica y TDConsentido
    Then I validate that the map loads correctly with location markers
    Examples: 
  | Scenario  | userType    |
  | VRIMTC009 | vrimConnect | 

