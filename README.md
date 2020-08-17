[![Build Status](https://travis-ci.org/victorandradelima/opr-react-hr-portal_new.svg?branch=master)](https://travis-ci.org/victorandradelima/opr-react-hr-portal_new)

# opr-react-hr-portal_new

Este projeto possui o package git-commit-msg-linter, que irá forçar os commit usando o padrão do Conventional Commits https://www.conventionalcommits.org/

Este projeto utiliza a biblioteca Linter para fazer o lint do código, e o padrão utilizado é o Standart

Caso utilize o VS Code como seu editor de código, lembre de instalar a extensão ESLint para aproveitar visualmente as configurações definidas para o eslint

Caso tenha problema no Auto-fix do ESLint no VSCode, vou deixar aqui uma solução que funcionou para mim:

Vá na aba de extensões do VSCode, no ícone do ESLint, clique em configurações.
Procure a configuração  Eslint > Code Action OnSave e então clique no Edit in settings.json e adicione a seguinte configuração:
"editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
}
Salve o arquivo, e pronto, agora deve funcionar!

O arquivo bundle.js gerado no build, vem com uma diferença. Optei por não adicionar as bibliotecas do React nele, por 2 motivos: o primeiro, é pelo tamanho desses arquivos, ele fazem com que o arquivo minificado final fique muito mais pesado que o necessário. E segundo como estamos importando um CDN do React muito utilizado no index.html, é muito provável que os usuários já terão estes carregados nos cachês dos seus navegadores, assim, tornando a experiência muito mais ágil.
