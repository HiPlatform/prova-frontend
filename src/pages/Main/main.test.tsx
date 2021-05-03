import { render } from '@testing-library/react';
import { Main } from './index';

describe('Test Main component', () => {
  const { getAllByTestId } = render(<Main />);

  it('Shoud must mount the component on the screen', () => {
    expect(
      getAllByTestId('treeItem:0:2469bdab-23b5-4cb8-90c9-c609a49410b0')
    ).not.toBeNull();
  });
});
