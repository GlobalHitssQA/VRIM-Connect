Feature: EndpointValidation

@EndpointValidation
  Scenario Outline: Validar el endpoint de Home Care Page
    Given I am logged in VRIM page with user "<userName>" and password "<password>"
    When I navigate to Home Care Section 
    Then I validate the correct domain in "<case>" with "<domain>" and "<endpoint>"
    Examples: 
  | userName    | password     | case          | domain                                     | endpoint                      |
  | 5524326782  | Prueba$2025  | Buscador Vrim | https://medicavrim-si.inbursa.com         | /Api/VrimConnect/Buscador     |
  | 5524326782  | Prueba$2025  | Lista Palabra | https://medicavrim-si.inbursa.com         | /Wapy_Pymes/api/ListaPalabra  |
  | 8333006407  | Prueba123.   | Buscador Vrim | https://medicavrim-si.inbursa.com         | /Api/VrimConnect/Buscador     |
  | 8333006407  | Prueba123.   | Lista Palabra | https://medicavrim-si.inbursa.com         | /Wapy_Pymes/api/ListaPalabra  |

        
        
        
@EndpointValidation
  Scenario Outline: Validar el endpoint en Tarjeta de proveedores
    Given I am logged in VRIM page with user "<userName>" and password "<password>"
    When I navigate to Home Care Section 
    And I select a provider's card
    Then I validate the correct domain in "<case>" with "<domain>" and "<endpoint>"
Examples:
  | userName    | password     | case     | domain                                       | endpoint                      |
  | 5524326782  | Prueba$2025  | Cupones  | https://1pruapisuperapp.salud-interactiva.mx | /APIMovilesSI/Api/Cupones     |
  | 8333006407  | Prueba123.   | Cupones  | https://1pruapisuperapp.salud-interactiva.mx | /APIMovilesSI/Api/Cupones     |


@EndpointValidation
  Scenario Outline: Validar el endpoint en Red de establecimientos comerciales
    Given I am logged in VRIM page with user "<userName>" and password "<password>"
    When I navigate to Home Care Section 
    And I navigate back to Explorar Page
    And I navigate to Red de establecimientos comerciales page
    Then I validate the correct domain in "<case>" with "<domain>" and "<endpoint>"
Examples:
  | userName    | password     | case            | domain                            | endpoint                                        |
  | 5524326782  | Prueba$2025  | Especialidades  | https://medicavrim-si.inbursa.com | /APIMovilesSI/Api/VrimConnect/Especialidades    |
  | 5524326782  | Prueba$2025  | Lista Palabra   | https://medicavrim-si.inbursa.com | /APIMovilesSI/Api/VrimConnect/ListaPalabra      |
  | 5524326782  | Prueba$2025  | Combos          | https://medicavrim-si.inbursa.com | /APIMovilesSI/Api/Combos                        |
  | 8333006407  | Prueba123.   | Especialidades  | https://medicavrim-si.inbursa.com | /APIMovilesSI/Api/VrimConnect/Especialidades    |
  | 8333006407  | Prueba123.   | Lista Palabra   | https://medicavrim-si.inbursa.com | /APIMovilesSI/Api/VrimConnect/ListaPalabra      |
  | 8333006407  | Prueba123.   | Combos          | https://medicavrim-si.inbursa.com | /APIMovilesSI/Api/Combos                        |


@EndpointValidation
  Scenario Outline: Validar el endpoint en Red medica y TD Concentido Mapa
    Given I am logged in VRIM page with user "<userName>" and password "<password>"
    Then I validate the correct domain in "<case>" with "<domain>" and "<endpoint>"
    Examples: 
  | userName    | password     | case            | domain                            | endpoint                                        |
| 8333006407  | Prueba123.   | Mapa            | https://medicavrim-si.inbursa.com | /Api/VrimConnect/Mapa                           |