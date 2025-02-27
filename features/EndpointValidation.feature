Feature: EndpointValidation

@EndpointValidation
  Scenario Outline: Validar endpoints en la seccion Laboratorio
    Given I am logged in VRIM page with user "<userType>"
    When I navigate to Laboratorios Section 
    Then I validate the correct domain in "<case>" call
    Examples: 
  | Scenario  | userType    | case                 |
  | VRIMTC001 | vrimConnect | buscadorVrim         |
  | VRIMTC002 | vrimConnect | buscadorVrim         |
  | VRIMTC003 | vrimConnect | buscadorVrim         |
  | VRIMTC004 | vrimConnect | listaPalabra         |
  | VRIMTC005 | vrimConnect | listaPalabra         |
  | VRIMTC006 | vrimConnect | listaPalabra         |

        
        
        
@EndpointValidation
  Scenario Outline: Validar la invocación del endpoint al seleccionar un proveedor en la sección de Laboratorio
    Given I am logged in VRIM page with user "<userType>"
    When I navigate to Laboratorios Section 
    And I click on a provider card
    Then I validate the correct domain in "<case>" call
Examples:
  | Scenario  | userType    | case     |
  | VRIMTC008 | vrimConnect | cupones  |
  | VRIMTC009 | vrimConnect | cupones  |
  | VRIMTC010 | vrimConnect | cupones  |
  | VRIMTC0011 | vrimConnect | cupones  |
  | VRIMTC0012 | vrimConnect | cupones  |


@EndpointValidation
  Scenario Outline:  Validar la invocación de los endpoints al ingresar a Red de Establecimientos Comerciales
    Given I am logged in VRIM page with user "<userType>"
    When I navigate to Laboratorios Section 
    And I navigate back to Explorar Page
    And I navigate to Red de establecimientos comerciales page
    Then I validate the correct domain in "<case>" call
Examples:
  | Scenario  | userType    | case                |
  | VRIMTC014 | vrimConnect | especialidades      |
  | VRIMTC015 | vrimConnect | especialidades      |
  | VRIMTC016 | vrimConnect | especialidades      |
  | VRIMTC017 | vrimConnect | combos              |
  | VRIMTC018 | vrimConnect | combos              |
  | VRIMTC019 | vrimConnect | combos              |

@EndpointValidation
  Scenario Outline:  Validar la invocación de los endpoints al ingresar a Red de Establecimientos Comerciales y realizar una busqueda
    Given I am logged in VRIM page with user "<userType>"
    When I navigate to Red de establecimientos comerciales page
    And I filter a search by city, state and category
    Then I validate the correct domain in "<case>" call
Examples:
  | Scenario  | userType    | case                |
  | VRIMTC020 | vrimConnect | buscadorRed         |
  | VRIMTC021 | vrimConnect | buscadorRed         |
  | VRIMTC022 | vrimConnect | buscadorRed         |
  | VRIMTC023 | vrimConnect | buscadorRed         |
  | VRIMTC024 | vrimConnect | buscadorRed         |
  | VRIMTC025 | vrimConnect | buscadorRed         |

@EndpointValidation
  Scenario Outline: Validar el endpoint en Red Médica y TD Consentido Mapa
    Given I am logged in VRIM page with user "<userType>"
    When I navigate to Red medica y TDConsentido
    Then I validate the correct domain in "<case>" call
    Examples: 
  | Scenario  | userType    | case            |
  | VRIMTC26 | vrimConnect | mapa            |
  | VRIMTC027 | vrimConnect | mapa            |
  | VRIMTC028 | vrimConnect | mapa            |
  | VRIMTC029 | vrimConnect | mapa            |
  | VRIMTC030 | vrimConnect | mapa            |
  | VRIMTC031 | vrimConnect | mapa            |

