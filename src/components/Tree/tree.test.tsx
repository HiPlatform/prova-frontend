/* eslint-disable @typescript-eslint/no-empty-function */
import { fireEvent, render, screen } from '@testing-library/react';
import { Tree } from './index';

const dataFake = [
  {
    id: 'A1',
    name: 'Test 1',
    level: 0,
    childrens: [
      {
        id: 'B1',
        name: 'Test 2.1',
        level: 1,
        childrens: [],
      },
      {
        id: 'B2',
        name: 'Test 2.2',
        level: 1,
        childrens: [
          {
            id: 'C1',
            name: 'Test 3.1',
            level: 2,
            childrens: [],
          },
        ],
      },
    ],
  },
  {
    id: 'A2',
    name: 'Test 2',
    level: 0,
    childrens: [],
  },
];

const values = {};

describe('Test tree component', () => {
  it('should expand and contract the menu', () => {
    render(<Tree itens={dataFake} value={values} onChange={() => {}} />);

    expect(screen.getByTestId('treeItem:0:A1')).toBeInTheDocument();
    expect(screen.getByTestId('treeItem:0:A2')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('treeItem:expand:0:A1'));
    expect(screen.getByTestId('treeItem:1:B1')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('treeItem:expand:1:B2'));
    expect(screen.getByTestId('treeItem:2:C1')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('treeItem:expand:0:A1'));
    expect(screen.queryByTestId('treeItem:1:B1')).not.toBeInTheDocument();
  });
  // TODO
  // deve poder marcar pelo checkbox e pela descrição
  // marcar o item filho, deve marcar o pai, e os descendentes
  // desmarcar o pai, deve desmarcar todos os filhos
});
