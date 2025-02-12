Feature: EndpointValidation

@EndpointValidation
@probando
  Scenario Outline: Validar el endpoint de Home Care Page
    Given I am logged in VRIM page with user "<userType>"
    When I navigate to Home Care Section 
    Then I validate the correct domain in "<case>" with "<domain>" and "<endpoint>"
    Examples: 
  | userType    |  case           | domain                                     | endpoint                      |
  | vrimConnect | Buscador Vrim   | https://medicavrim-si.inbursa.com         | /Api/VrimConnect/Buscador     |
  | vrimConnect | Lista Palabra   | https://medicavrim-si.inbursa.com         | /Wapy_Pymes/api/ListaPalabra  |
  | basic       | Buscador Vrim   | https://medicavrim-si.inbursa.com         | /Api/VrimConnect/Buscador     |
  | basic       | Lista Palabra   | https://medicavrim-si.inbursa.com         | /Wapy_Pymes/api/ListaPalabra  |

        
        
        
@EndpointValidation
  Scenario Outline: Validar el endpoint en Tarjeta de proveedores
    Given I am logged in VRIM page with user "<userType>"
    When I navigate to Home Care Section 
    And I select a provider's card
    Then I validate the correct domain in "<case>" with "<domain>" and "<endpoint>"
Examples:
  | userType    | case     | domain                                       | endpoint                      |
  | vrimConnect | Cupones  | https://1pruapisuperapp.salud-interactiva.mx | /APIMovilesSI/Api/Cupones     |
  | basic       | Cupones  | https://1pruapisuperapp.salud-interactiva.mx | /APIMovilesSI/Api/Cupones     |


@EndpointValidation
  Scenario Outline: Validar el endpoint en Red de establecimientos comerciales
    Given I am logged in VRIM page with user "<userType>"
    When I navigate to Home Care Section 
    And I navigate back to Explorar Page
    And I navigate to Red de establecimientos comerciales page
    Then I validate the correct domain in "<case>" with "<domain>" and "<endpoint>"
Examples:
  | userType    | case            | domain                            | endpoint                                        |
  | vrimConnect | Especialidades  | https://medicavrim-si.inbursa.com | /APIMovilesSI/Api/VrimConnect/Especialidades    |
  | vrimConnect | Lista Palabra   | https://medicavrim-si.inbursa.com | /APIMovilesSI/Api/VrimConnect/ListaPalabra      |
  | vrimConnect | Combos          | https://medicavrim-si.inbursa.com | /APIMovilesSI/Api/Combos                        |
  | basic       | Especialidades  | https://medicavrim-si.inbursa.com | /APIMovilesSI/Api/VrimConnect/Especialidades    |
  | basic       | Lista Palabra   | https://medicavrim-si.inbursa.com | /APIMovilesSI/Api/VrimConnect/ListaPalabra      |
  | basic       | Combos          | https://medicavrim-si.inbursa.com | /APIMovilesSI/Api/Combos                        |


@EndpointValidation
  Scenario Outline: Validar el endpoint en Red medica y TD Concentido Mapa
    Given I am logged in VRIM page with user "<userType>"
    Then I validate the correct domain in "<case>" with "<domain>" and "<endpoint>"
    Examples: 
  | userType    | case            | domain                            | endpoint                                        |
  | vrimConnect | Mapa            | https://medicavrim-si.inbursa.com | /Api/VrimConnect/Mapa                           |
  | basic       | Mapa            | https://medicavrim-si.inbursa.com | /Api/VrimConnect/Mapa                           |

