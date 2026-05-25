# Ciclo de trabalho na branch `front-end`

Este guia é para quem ainda não domina o ciclo completo. A ideia é sempre trabalhar em `front-end`, enviar os commits para o GitHub, abrir o pull request, fazer o merge e voltar para `front-end` para continuar a próxima etapa.

Não há comandos de apagar branch neste fluxo.

## Quando começar

Sempre que for iniciar uma nova etapa, comece atualizando a `main` local.

```powershell
git switch main
git pull origin main
```

Depois disso, entre na branch `front-end`.

Se ela já existir no seu computador:

```powershell
git switch front-end
```

Se ela ainda não existir localmente:

```powershell
git switch -c front-end
```

## Como trabalhar em cada etapa

Faça poucas mudanças por vez. Quando terminar uma parte do trabalho, siga este ciclo:

1. Verifique o que mudou.

```powershell
git status --short --branch
```

2. Adicione os arquivos que você quer salvar.

```powershell
git add .
```

3. Crie o commit com uma mensagem curta e clara.

```powershell
git commit -m "feat: descricao curta da etapa"
```

4. Envie a branch `front-end` para o GitHub.

```powershell
git push origin front-end
```

Repita esse ciclo toda vez que concluir uma parte nova do projeto.

## Como abrir o pull request

Depois de enviar os commits, abra o pull request da `front-end` para `main` no GitHub web.

Passo a passo no GitHub:

1. Abra o repositório no navegador.
2. Clique em `Pull requests`.
3. Clique em `New pull request`.
4. Em `base`, escolha `main`.
5. Em `compare`, escolha `front-end`.
6. Confira se os arquivos e commits mostrados são os corretos.
7. Se estiver tudo certo, clique em `Create pull request`.
8. Escreva um título claro e uma descrição curta explicando o que foi feito.
9. Clique em `Create pull request` novamente para confirmar.

Antes de abrir o PR, confira:

- A branch `front-end` já foi enviada para o remoto.
- O nome da branch está correto na tela do GitHub.
- O commit tem uma mensagem compreensível.
- Os arquivos esperados aparecem na comparação.
- Não há conflitos com `main`.

## Como fazer o merge

Quando o PR estiver revisado e aprovado, faça o merge na `main` pelo GitHub web.

Passo a passo no GitHub:

1. Abra o pull request já criado.
2. Leia a aba `Conversation` e a aba `Files changed`.
3. Confira se não há comentários pedindo alterações.
4. Verifique se o GitHub mostra a mensagem de que não há conflitos com a `main`.
5. Se estiver tudo certo, clique em `Merge pull request`.
6. Confirme em `Confirm merge`.
7. Aguarde a mensagem de sucesso do merge.
8. Se o GitHub perguntar sobre excluir a branch, mantenha a branch no nosso fluxo.

Se aparecer conflito, não faça o merge no web. Nesse caso, pare e resolva primeiro a branch localmente.

## O que fazer depois do merge

Depois que o merge terminar, atualize sua `main` local.

```powershell
git switch main
git pull origin main
```

Em seguida, volte para `front-end` para continuar a próxima etapa.

```powershell
git switch front-end
git merge main
```

Se preferir, você também pode trazer as mudanças mais recentes da origem:

```powershell
git fetch origin
git switch front-end
git merge origin/main
```

## Ciclo completo

O ciclo inteiro fica assim:

```powershell
git switch main
git pull origin main
git switch front-end
git add .
git commit -m "feat: etapa X"
git push origin front-end
```

Depois do PR e do merge:

```powershell
git switch main
git pull origin main
git switch front-end
git merge main
```

## Regra importante

A branch `front-end` deve ser mantida durante todo o projeto. A cada novo conjunto de arquivos, você repete o ciclo de commit, push, PR, merge e retorno para `front-end`.
