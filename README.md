
## Hi Platform Desafio de Frontend

No nosso exercício de frontend, pedimos que você implemente o componente abaixo. 
O componente é uma simples árvore de itens, na qual cada item pode ter vários itens encadeados (itens filhos).

Veja abaixo como tal árvore deve ser renderizada:
### Vídeo:
![tree](https://user-images.githubusercontent.com/13091635/129045214-81f3f1c8-8c56-4b32-8200-7734a413da98.gif)

Junto com este repositório há um arquivo `data.json` contendo os dados para renderizar a árvore. A estrutura de um único item é esta:

```
 "1": {
    "id": "a853dddc-b639-41e6-a876-958b1e7f65d1",
    "name": "Harald Svante August",
    "children": {}
  }
```

##### [](https://github.com/HiPlatform/prova-frontend#behaviour)Comportamento:
- Para cada item, o usuário deve poder marcar o checkbox dessa linha. 
- Para cada item que tenha filhos (ou seja, um item pai), quando o usuário marcar ou desmarcar o checkbox, o estado deve ser cascateado a todos os seus descendentes. 
- Para cada item que tenha filhos (ou seja, um item pai), quando o usuário marcar apenas algum(ns) filho(s), o estado do checkbox pai deve ser alterado para `indeterminate`
- Para cada item que seja um item pai, o usuário deve ser capaz de mostrar ou esconder os itens internos.

##### [](https://github.com/HiPlatform/prova-frontend#freedom)Liberdade:
- Você pode usar qualquer tecnologia que melhor lhe servir. 
- Você é livre para estruturar o projeto da maneira que achar mais organizada. 
- Você é livre para implementar o código em qualquer padrão que achar mais adequado. 
- Você pode adicionar funcionalidades ao componente como desejar, mas não fuja da simplicidade.

##### [](https://github.com/HiPlatform/prova-frontend#nice-to-have)Nós valorizamos atenção para os seguintes pontos:
- Acoplamento e coesão
- Testes 
- Performance 
- Recuperação de estado (por exemplo: recuperar estado dos checkboxes após um page refresh) 
- Experiência do usuário (área de clique, scroll jump, etc.) 

**Dica de amigo**: Entendemos que no dia-a-dia podemos usar implementações prontas para os problemas que aparecem, porém, queremos avaliar sua tomada de decisão, raciocínio lógico e resolução de problemas. O _core_ deste teste é a árvore de elementos e os estados do checkbox, portanto, pedimos que não use componentes prontos que implementem essas funcionalidades.

Divirta-se!
