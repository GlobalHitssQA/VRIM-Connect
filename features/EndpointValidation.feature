Feature: EndpointValidation

@EndpointValidation
  Scenario Outline: Validar el endpoint de Home Care Page
    Given I am logged in VRIM page
    When I navigate to Home Care Section 
    Then I validate the correct domain in "<case>" with "<domain>" and "<endpoint>"
    Examples: 
            | case          | domain                            | endpoint                      |
            | Buscador Vrim | https://medicavrim-si.inbursa.com | /Api/VrimConnect/Buscador     |
            | Lista Palabra | https://medicavrim-si.inbursa.com | /Wapy_Pymes/api/ListaPalabra  |

        
        
        
@EndpointValidation
  Scenario Outline: Validar el endpoint en Tarjeta de proveedores
    Given I am logged in VRIM page
    When I navigate to Home Care Section 
    And I select a provider's card
    Then I validate the correct domain in "<case>" with "<domain>" and "<endpoint>"
    Examples: 
            | case          | domain                                       | endpoint                      |
            | Cupones       | https://1pruapisuperapp.salud-interactiva.mx | /APIMovilesSI/Api/Cupones     |


@EndpointValidation
  Scenario Outline: Validar el endpoint en Red de establecimientos comerciales
    Given I am logged in VRIM page
    When I navigate to Home Care Section 
    And I navigate back to Explorar Page
    And I navigate to Red de establecimientos comerciales page
    Then I validate the correct domain in "<case>" with "<domain>" and "<endpoint>"
    Examples: 
            | case            | domain                            | endpoint                                        |
            | Especialidades  | https://medicavrim-si.inbursa.com | /APIMovilesSI/Api/VrimConnect/Especialidades    |
            | Lista Palabra   | https://medicavrim-si.inbursa.com | /APIMovilesSI/Api/VrimConnect/ListaPalabra      |
            | Combos          | https://medicavrim-si.inbursa.com | /APIMovilesSI/Api/Combos                        |


@EndpointValidation
  Scenario Outline: Validar el endpoint en Red medica y TD Concentido Mapa
    Given I am logged in VRIM page
    Then I validate the correct domain in "<case>" with "<domain>" and "<endpoint>"
    Examples: 
            | case          | domain                            | endpoint                                        |
            | Mapa          | https://medicavrim-si.inbursa.com | /Api/VrimConnect/Mapa                           |