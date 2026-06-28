# Serviço de Pagamento - Pipeline de Integração Contínua

## Descrição

Este projeto implementa uma pipeline de Integração Contínua (Continuous Integration - CI) utilizando **GitHub Actions** para um projeto Node.js com testes automatizados.

O objetivo é automatizar a execução dos testes, gerar um relatório de execução e disponibilizá-lo como artefato da pipeline.

---

## Tecnologias Utilizadas

* Node.js
* Mocha
* Mochawesome
* GitHub Actions

---

## Funcionalidades da Pipeline

A pipeline foi configurada para executar em três situações:

### 1. Execução por Push

A pipeline é executada automaticamente sempre que um novo commit é enviado para a branch `main`.

```yaml
on:
  push:
    branches:
      - main
```

### 2. Execução Manual

Também é possível executar a pipeline manualmente pela aba **Actions** do GitHub utilizando o evento `workflow_dispatch`.

```yaml
workflow_dispatch:
```

### 3. Execução Agendada

Foi configurada uma execução automática semanal utilizando o recurso `schedule`.

```yaml
schedule:
  - cron: '0 12 * * 1'
```

---

## Etapas da Pipeline

Durante a execução são realizadas as seguintes etapas:

1. Checkout do código-fonte;
2. Configuração do ambiente Node.js;
3. Instalação das dependências do projeto;
4. Execução dos testes automatizados com Mocha;
5. Geração do relatório de testes em HTML utilizando Mochawesome;
6. Publicação do relatório como Artifact da execução.

---

## Estrutura do Projeto

```text
.
├── .github
│   └── workflows
│       └── ci.yml
├── test
├── package.json
├── package-lock.json
└── README.md
```

---

## Como executar localmente

### Instalar as dependências

```bash
npm install
```

### Executar os testes

```bash
npm test
```

Após a execução será gerado um relatório HTML na pasta:

```text
mochawesome-report/
```

---

## Relatório de Testes

O relatório é gerado automaticamente em formato HTML utilizando o Mochawesome.

Durante a execução da pipeline, esse relatório é publicado como **Artifact**, permitindo sua consulta diretamente pelo GitHub Actions.

---

## GitHub Actions

O workflow está localizado em:

```text
.github/workflows/ci.yml
```

O workflow realiza automaticamente:

* Checkout do projeto;
* Configuração do Node.js;
* Instalação das dependências;
* Execução dos testes;
* Geração do relatório;
* Publicação do relatório como Artifact.

---

## Evidências

A execução da pipeline pode ser visualizada na aba **Actions** do repositório GitHub.

O relatório dos testes encontra-se disponível na seção **Artifacts** da execução da pipeline.
