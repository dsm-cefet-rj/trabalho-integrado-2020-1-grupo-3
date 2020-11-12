Feature: Pedidos e Cardápio


  Scenario: 6- Como USUÁRIO, eu quero poder filtrar qual tipo de refeição eu quero que a aplicação liste para que eu possa ver apenas aquilo que me interessa no momento.
    Given que exista um banco de dados para armazenar as refeições
    When o usuário clicar em “Exibir Refeições”
    Then será exibido uma lista com todas as refeições e os campos para que o usuário filtre sua busca

  Scenario: 7- Como USUÁRIO, eu quero poder selecionar minha refeição desejada para poder, em breve, realizar o pedido.
    Given que existe a página onde todas as refeições podem ser listadas
    When o usuário seleciona uma refeição
    Then a refeição é enviada para a lista de pedidos

  Scenario: 8- Como USUÁRIO, eu quero poder adicionar mais de uma refeição, para que, quando for necessário, eu possa solicitar mais de uma refeição.
    Given que é possível que o usuário selecione mais de uma refeição na lista de refeições
    When o usuário seleciona uma refeição
    Then a refeição é adicionada e o usuário se mantém na página para selecionar mais refeições

  Scenario: 9- Como USUÁRIO, eu quero poder selecionar qual(s) bebidas eu quero na refeição, para poder, em breve, realizar o pedido.
    Given que existe um registro de todas as bebidas
    When o usuário finaliza a escolha de refeições
    Then são exibidas as opções de bebidas a serem selecionadas

  Scenario: 10- Como USUÁRIO, eu quero poder realizar a solicitação da refeição para que eu possa receber em meu quarto a refeição solicitada.
    Given que existe a opção de receber a refeição no quarto
    When o usuário finalizar a escolha de refeição + acompanhamento
    Then ele deverá escolher a forma de recebimento e retirada da refeição

  Scenario: 11 - Como USUÁRIO, eu quero poder cancelar um pedido de refeição para que eu possa ter a opção de desistir da solicitação.
    Given que o usuário está na tela de solicitação de pedido
    And E existe um botão com opção de cancelar pedido
    When o usuário escolher por clicar nesse botão
    Then a solicitação de pedido do usuário deverá ser cancelada

  Scenario: 12 - Como USUÁRIO, eu quero poder editar um pedido de refeição para que eu possa adicionar/retirar itens na refeição.
    Given que o usuário está na tela de pedidos
    And E existe um botão com a opção editar pedido para cada pedido desse usuário
    When o usuário clicar no botão de editar um pedido
    Then o usuário sera direcionado para uma tela onde ele possa editar o pedido, adicionando e removendo itens

  Scenario: 14 - Como ADMINISTRADOR, eu quero poder ver os pedidos de refeição para que eu possa informar a cozinha.
    Given que existe um usuário administrador e uma tela com o botão com a opção de visualizar lista de pedidos de refeição
    When esse usuário escolher por clicar nesse botão
    Then deverá ser exibido para ele todos os pedidos de refeição já realizados

  Scenario: 15 - Como ADMINISTRADOR, eu quero poder ver os dados do solicitando do pedido para que eu possa realizar a entrega em seu quarto e/ou ligar para o quarto a fim de tirar alguma dúvida.
    Given que existe um usuário administrador e uma tela com o botão de opção de visualizar dados do solicitando
    When esse usuário escolher por clicar nessa opção e escolher um solicitando para visualização
    Then deverá ser exibido para ele uma tela com os dados do solicitando escolhido

  Scenario: 13 -  Como USUÁRIO, eu quero poder ver meus pedidos de solicitação para que eu possa ter controle do que estou pedindo.
    Given que existe uma tela com o botão de exibir pedidos
    When o usuário optar por clicar nesse botão
    Then deverá ser exibido para esse usuário uma lista com os pedidos já realizados por ele
