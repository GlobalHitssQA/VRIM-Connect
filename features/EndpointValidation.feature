Feature: EndpointValidation

@EndpointValidation
@probando
  Scenario Outline: Validar endpoints en la seccion Laboratorio
    Given I am logged in VRIM page with user "<userType>"
    When I navigate to Laboratorios Section 
    Then I validate the correct domain in "<case>" call
    Examples: 
  | userType    | case                 |
  | vrimConnect | buscadorVrim         |
  | vrimConnect | wapyListaPalabra     |

        
        
        
@EndpointValidation
  Scenario Outline: Validar la invocación del endpoint al seleccionar un proveedor en la sección de Laboratorio
    Given I am logged in VRIM page with user "<userType>"
    When I navigate to Laboratorios Section 
    And I click on a provider card
    Then I validate the correct domain in "<case>" call
Examples:
  | userType    | case     |
  | vrimConnect | Cupones  |


@EndpointValidation
  Scenario Outline:  Validar la invocación de los endpoints al ingresar a Red de Establecimientos Comerciales
    Given I am logged in VRIM page with user "<userType>"
    When I navigate to Laboratorios Section 
    And I navigate back to Explorar Page
    And I navigate to Red de establecimientos comerciales page
    Then I validate the correct domain in "<case>" call
Examples:
  | userType    | case                |
  | vrimConnect | Especialidades      |
  | vrimConnect | vrimListaPalabra    | 
  | vrimConnect | Combos              |


@EndpointValidation
  Scenario Outline: Validar el endpoint en Red Médica y TD Consentido Mapa
    Given I am logged in VRIM page with user "<userType>"
    #PASOS COMENTADOS PORQUE AUN NO TENEMOS COMO ACCEDER
    #When I navigate to the Red Medica y TD Consentido section
    #And I access to the map view
    Then I validate the correct domain in "<case>" call
    Examples: 
  | userType    | case            |
  | vrimConnect | Mapa            |

