Feature: Login


  Scenario Outline: 1- Como USUÁRIO, eu quero inserir meu CPF e senha informada pela hotelaria para realizar o meu primeiro login na aplicação.
    Login
    Given que existe um usuário cadastrado na aplicação com o CPF (12345678900) e a senha (123456789)
    When o usuário inserir o CPF (12345678900) e a senha (123456789) dada pela hotelaria
    Then o login do usuário cujo o CPF é (12345678900) será realizado com sucesso

    Examples:
      | Acesso | ID | Login | Senha |
      | Usuário 1 | 1 | 12345678900 | 123456789 |

  Scenario: 4- Como USUÁRIO, eu quero ter a opção de alterar a senha informada pela hotelaria para poder ter mais segurança na minha conta.
    Given que a aplicação permite trocar a senha informada e tenha a opção de “alterar a minha senha” ou similar
    When o usuário inserir uma nova senha (987654321) e clicar em “alterar senha”
    Then a aplicação irá alterar no cadastro a senha do usuário
