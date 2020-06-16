import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';
import Tree, {moveItemOnTree} from '@atlaskit/tree';

import {expand, collapse, move} from '../redux/actions';
import Row from './Row';

export default props => {
  const dispatch = useDispatch();
  const tree = useSelector(state => state.tree);

  const onExpand = itemId => dispatch(expand(itemId));

  const onCollapse = itemId => dispatch(collapse(itemId));

  const onDragEnd = (source, destination) => !!destination && dispatch(move(moveItemOnTree(tree, source, destination)));

  const renderItem = params => <Row {...params} dispatch={dispatch} />;

  return (
    <Container>
      <Tree
        tree={tree}
        renderItem={renderItem}
        onExpand={onExpand}
        onCollapse={onCollapse}
        onDragEnd={onDragEnd}
        offsetPerLevel={16}
        isDragEnabled
        isNestingEnabled
      />
    </Container>
  );
};

const Container = styled.div`
  height: 200;
  overflow: auto;
  height: 100vh;
`;
