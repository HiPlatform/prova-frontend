/* eslint-disable @typescript-eslint/no-empty-function */
import { fireEvent, render } from '@testing-library/react';
import { Tree } from './index';

const dataFake = [
  {
    id: '001',
    name: 'Test 1',
    level: 0,
    childrens: [
      {
        id: '012',
        name: 'Test 2.1',
        level: 0,
        childrens: [],
      },
      {
        id: '011',
        name: 'Test 2.2',
        level: 1,
        childrens: [
          {
            id: '111',
            name: 'Test 3.1',
            level: 2,
            childrens: [],
          },
        ],
      },
    ],
  },
  {
    id: '002',
    name: 'Test 2',
    level: 0,
    childrens: [],
  },
];

const values = {};

describe('Test tree component', () => {
  const { getAllByTestId } = render(
    <Tree itens={dataFake} value={values} onChange={() => {}} />
  );

  it('Shoud must mount the component on the screen', () => {
    expect(getAllByTestId('treeItem:0:001')).not.toBeNull();
  });
  // TODO
  // deve poder marcar pelo checkbox e pela descrição
  // quando clicar no botao de expandir deve expandir a lista
  // deve exibir os itens filhos
  // marcar o item filho, deve marcar o pai, e os descendentes
  // desmarcar o pai, deve desmarcar todos os filhos
});
