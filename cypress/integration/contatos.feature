Feature: Contatos


  Scenario: 5- Como USUÁRIO, eu quero ter acesso a informações de redes sociais e contato da hotelaria para que eu possa me manter atualizado das novidades da hotelaria.
    Given que as informações das redes sociais e contatos estejam inseridas na menu da aplicação
    When o usuário clicar em “Contatos” ou algo similar
    Then irá aparecer na tela as informações de redes sociais, email e outras formas de contato
