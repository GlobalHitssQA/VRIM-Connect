Feature: EndpointValidation

@EndpointValidation
  Scenario Outline: Validar endpoints en la seccion Laboratorio
    Given I am logged in VRIM page with user "<userType>"
    When I navigate to Laboratorios Section 
    Then I validate the correct domain in "<case>" call for "<domain>"
    Examples: 
  | Scenario  | userType    | case                |  domain           | 
  | VRIMTC001 | vrimConnect | buscadorVrim        |  inbursa          |
  | VRIMTC002 | vrimConnect | listaPalabra        |  saludInteractiva |

        
@EndpointValidation
  Scenario Outline: Validar la invocación del endpoint al seleccionar un proveedor en la sección de Laboratorio
    Given I am logged in VRIM page with user "<userType>"
    When I navigate to Laboratorios Section 
    And I click on a provider card
    Then I validate the correct domain in "<case>" call for "<domain>"
Examples:
  | Scenario  | userType    | case     |  domain           | 
  | VRIMTC003 | vrimConnect | cupones  |  inbursa          |


@EndpointValidation
  Scenario Outline:  Validar la invocación de los endpoints al ingresar a Red de Establecimientos Comerciales
    Given I am logged in VRIM page with user "<userType>"
    When I navigate to Red de establecimientos comerciales page
    Then I validate the correct domain in "<case>" call for "<domain>"
Examples:
  | Scenario  | userType    | case                |  domain           | 
  | VRIMTC004 | vrimConnect | combos              |  inbursa          |

  @EndpointValidation
  Scenario Outline:  Validar la invocación de los endpoints al ingresar a Red de Establecimientos Comerciales
    Given I am logged in VRIM page with user "<userType>"
    When I navigate to Red de establecimientos comerciales page
    And I filter a search by city and state
    Then I validate the correct domain in "<case>" call for "<domain>"
Examples:
  | Scenario  | userType    | case                |  domain           | 
  | VRIMTC005 | vrimConnect | especialidades      |  saludInteractiva |

@EndpointValidation
  Scenario Outline:  Validar la invocación de los endpoints al ingresar a Red de Establecimientos Comerciales y realizar una busqueda
    Given I am logged in VRIM page with user "<userType>"
    When I navigate to Red de establecimientos comerciales page
    And I filter a search by city, state and category
    Then I validate the correct domain in "<case>" call for "<domain>"
Examples:
  | Scenario  | userType    | case                |  domain           | 
  | VRIMTC006 | vrimConnect | buscadorRed         |  saludInteractiva |

@EndpointValidation
  Scenario Outline: Validar el endpoint en Red Médica y TD Consentido Mapa
    Given I am logged in VRIM page with user "<userType>"
    When I navigate to Red medica y TDConsentido
    Then I validate the correct domain in "<case>" call for "<domain>"
    Examples: 
  | Scenario   | userType     | case             |  domain           | 
  | VRIMTC007  | vrimConnect  | mapa             |  inbursa          |

