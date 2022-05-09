
# HiPlatform Desafio de Frontend

No nosso exercício de frontend, pedimos que você implemente uma simples árvore de itens, na qual cada item pode ter vários itens encadeados (itens filhos), conforme o exemplo abaixo:

![tree](https://user-images.githubusercontent.com/13091635/129045214-81f3f1c8-8c56-4b32-8200-7734a413da98.gif)

> ‼️ Você não precisa seguir fielmente a interface do gif acima, é apenas um exemplo. Aproveite para nos mostrar o quanto você pode melhorar a usabilidade do componente!

Junto com este repositório há um arquivo `data.json` contendo os dados para renderizar a árvore. A estrutura de um único item é esta:

```
 "1": {
    "id": "a853dddc-b639-41e6-a876-958b1e7f65d1",
    "name": "Harald Svante August",
    "children": {}
  }
```

#### [](https://github.com/HiPlatform/prova-frontend#behaviour)Comportamento:
- Cada item deve ter um checkbox que pode ser marcado/desmarcado.
- Quando o usuário marcar/desmarcar o checkbox de um item que tenha filhos, o estado deve ser cascateado a todos os seus descendentes. 
- Quando o usuário marcar um ou mais filhos, e até que marque todos, o estado do checkbox pai deve ser alterado para `indeterminate`.
- Quando o usuário marcar/desmarcar todos os filhos, o estado do checkbox pai deve replicar o dos filhos.
- O usuário deve ser capaz de mostrar e esconder os itens internos de um item pai.

#### [](https://github.com/HiPlatform/prova-frontend#freedom)Liberdade:
- Você pode usar qualquer tecnologia que melhor lhe servir. 
  > Na Hi usamos majoritariamente React. Isso não significa que vamos priorizar testes em React em detrimento de outros frameworks/vanilla, mas se estiver na dúvida de qual escolher, sugerimos React 🙂 
- Você é livre para estruturar o projeto da maneira que achar mais organizada. 
- Você é livre para implementar o código em qualquer padrão que achar mais adequado. 
- Você pode adicionar funcionalidades ao componente como desejar, mas não fuja da simplicidade.

#### [](https://github.com/HiPlatform/prova-frontend#nice-to-have)Nós valorizamos atenção para os seguintes pontos:
- Acoplamento e coesão
- Testes 
- Performance 
- Recuperação de estado (por exemplo: recuperar estado dos checkboxes após um page refresh) 
- Experiência do usuário (área de clique, scroll jump, etc.) 

## Dica de amigo
Entendemos que no dia-a-dia podemos usar implementações prontas para os problemas que aparecem, porém, queremos avaliar sua tomada de decisão, raciocínio lógico e resolução de problemas. O _core_ deste teste é a árvore de elementos e os estados do checkbox, portanto, pedimos que não use componentes prontos que implementem essas funcionalidades.

Atente-se aos requisitos funcionais (comportamento) e aos diferenciais que serão valorizados.

Nem sempre a gente consegue fazer tudo no prazo combinado, se você precisar de mais tempo converse com a pessoa responsável pela vaga e evite entregar o teste inacabado!

## Divirta-se!

![office](https://media.giphy.com/media/bcfTZ4rtZrOhiAvh4v/giphy.gif)
