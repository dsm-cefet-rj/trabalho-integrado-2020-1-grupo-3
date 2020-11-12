Feature: Eventos


  Scenario: 2- Como USUÁRIO, eu quero selecionar uma data para buscar informações sobre eventos e seus horários para me manter informado.
    Given que tenha uma aba de pesquisa por data de eventos e seus horários
    When o usuário selecionar uma data desejada
    Then a aplicação irá mostrar uma lista de eventos e seus horários da data selecionada

  Scenario: 3- Como USUÁRIO, eu quero clicar em um evento e ver maiores detalhes dele para conhecer melhor ele
    Given que cada evento possui informações cadastradas que podem ser obtidas clicando nele
    When o usuário clicar no evento
    Then a aplicação irá mostrar uma lista de eventos e seus horários da data selecionada
