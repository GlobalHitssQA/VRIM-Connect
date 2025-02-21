Feature: EndpointValidation

@EndpointValidation
  Scenario Outline: Validar endpoints en la seccion Laboratorio
    Given I am logged in VRIM page with user "<userType>"
    When I navigate to Laboratorios Section 
    Then I validate the correct domain in "<case>" call
    Examples: 
  | Scenario  | userType    | case                 |
  | VRIMTC001 | vrimConnect | buscadorVrim         |
  | VRIMTC002 | vrimConnect | wapyListaPalabra     |

        
        
        
@EndpointValidation
  Scenario Outline: Validar la invocación del endpoint al seleccionar un proveedor en la sección de Laboratorio
    Given I am logged in VRIM page with user "<userType>"
    When I navigate to Laboratorios Section 
    And I click on a provider card
    Then I validate the correct domain in "<case>" call
Examples:
  | Scenario  | userType    | case     |
  | VRIMTC003 | vrimConnect | cupones  |


@EndpointValidation
  Scenario Outline:  Validar la invocación de los endpoints al ingresar a Red de Establecimientos Comerciales
    Given I am logged in VRIM page with user "<userType>"
    When I navigate to Laboratorios Section 
    And I navigate back to Explorar Page
    And I navigate to Red de establecimientos comerciales page
    Then I validate the correct domain in "<case>" call
Examples:
  | Scenario  | userType    | case                |
  | VRIMTC004 | vrimConnect | especialidades      |
  | VRIMTC005 | vrimConnect | vrimListaPalabra    | 
  | VRIMTC006 | vrimConnect | combos              |
  | VRIMTC008 | vrimConnect | token               |

@EndpointValidation
  Scenario Outline:  Validar la invocación de los endpoints al ingresar a Red de Establecimientos Comerciales y realizar una busqueda
    Given I am logged in VRIM page with user "<userType>"
    When I navigate to Red de establecimientos comerciales page
    And I filter a search by city, state and category
    Then I validate the correct domain in "<case>" call
Examples:
  | Scenario  | userType    | case                |
  | VRIMTC007 | vrimConnect | buscadorRed         |

@EndpointValidation
  Scenario Outline: Validar el endpoint en Red Médica y TD Consentido Mapa
    Given I am logged in VRIM page with user "<userType>"
    When I navigate to Red medica y TDConsentido
    Then I validate the correct domain in "<case>" call
    Examples: 
  | Scenario  | userType    | case            |
  | VRIMTC009 | vrimConnect | mapa            |

