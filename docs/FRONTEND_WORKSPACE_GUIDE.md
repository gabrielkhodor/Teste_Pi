# Guia rápido da branch `front-end`

Para evitar confusão com o `back-end`, o ideal é abrir o VS Code diretamente na pasta do projeto `front-end`.

## Como abrir

```powershell
cd C:\caminho\da\pasta\front-end
code .
```

Ou abra a pasta `front-end` pelo Explorador do Windows com o VS Code.

## O que isso ajuda

- o VS Code mostra só os arquivos da `front-end`
- o Git fica focado nessa pasta
- o colega não vê a pasta `back-end`
- diminui a chance de usar `git add .` no lugar errado

## Fluxo de trabalho

1. Abra somente a pasta `front-end` no VS Code.
2. Faça as alterações necessárias.
3. Confira o que mudou.

```powershell
git status --short
```

4. Adicione apenas os arquivos do `front-end`.

```powershell
git add .
```

5. Faça o commit.

```powershell
git commit -m "feat: etapa do front-end"
```

6. Envie para o GitHub.

```powershell
git push origin front-end
```

## Regra principal

Se a pasta `back-end` aparecer no mesmo workspace, isso pode confundir o colega. Para a branch `front-end`, o mais seguro é trabalhar em uma janela separada do VS Code aberta só na pasta `front-end`.
