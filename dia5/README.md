# Desafio do dia 05

Nesse desafio, você irá tentar aplicar tudo o que aprendeu sobre TypeScript na
aula passada.

Crie um diretório `app`, e inicie um novo projeto com o `vite`, mas dessa vez,
você irá selecionar `vanilla` na primeira opção e `vanilla-ts` na segunda.

Crie o arquivo `.editorconfig` no mesmo padrão das aulas anteriores e adicione 
o `"private": true` no `package.json`.

Adicione também um novo `script` na entrada `"scripts"` do `package.json`, chamado
`type-check`, com o comando `tsc --pretty --noEmit` que vai servir para rodar 
o compilador do TypeScript no terminal, para facilitar a análise de erros do TS 
de forma geral.

Logo abaixo do script `"serve"`, adicione esse script. Seu `package.json` 
deve ficar assim:

```diff
- "serve": "vite preview"
+ "serve": "vite preview",
+ "type-check": "tsc --pretty --noEmit"
```

Após isso feito, instale as dependências e inicie o servidor de desenvolvimento,
para ver se a aplicação irá subir corretamente.

Quando você se certificar que está tudo ok com o projeto, copie os arquivos do projeto
da aula anterior: 

- formulário e tabela da `index.html`, 
- todo o contéudo do arquivo `main.js` para o arquivo `src/main.ts` desse projeto, 
- e crie um novo arquivo `src/http.ts` e copie todo o conteúdo do `http.js`para esse novo arquivo. 

O objetivo é tentar tipar corretamente esses arquivos, ajustando os erros que 
o TypeScript apontar.

**Comece pelo mais simples, depois vá tentando resolver os mais complicados.**

Os arquivos com a correção da aula anterior estão nesse repositório, no diretório
`dia5/conteudo-dia4` (arquivos `index.html`, `main.js` e `http.js`).

A ideia é que você tente aplicar o máximo de conhecimento que você viu nas aulas
sobre TypeScript. Fique à vontade para pedir ajuda das pessoas que estão no 
nosso Discord para conseguir resolver esse desafio. 

Não se preocupe se não conseguir tipar tudo, mas tente fazer o máximo que conseguir:
tente, pesquise se não entender algo, procure uma solução.

Lembre-se que o importante não é **fazer tudo correto ou perfeito** e sim que você
se sinta provocada ou provocado **a aprender mais**, e **buscar um conhecimento que 
talvez você ainda não tenha**, ok?
