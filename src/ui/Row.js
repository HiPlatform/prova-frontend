import React from 'react';
import styled from 'styled-components';
import Up from '@material-ui/icons/KeyboardArrowUp';
import Down from '@material-ui/icons/KeyboardArrowDown';
import Checkbox from '@material-ui/core/Checkbox';

import {check} from '../redux/actions';

export default ({item, onExpand, onCollapse, provided, dispatch}) => {
  const onClick = () => (item.isExpanded ? onCollapse(item.id) : onExpand(item.id));
  const onCheck = () => dispatch(check(item.id, !item.isChecked));
  return (
    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
      <Container>
        <Checkbox checked={item.isChecked} onChange={onCheck} />
        <Expander onClick={onClick}>
          <Name>{item.name ?? ''}</Name>
          {item.isExpanded ? <Up /> : <Down />}
        </Expander>
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 20px 5px 10px;
  &:hover {
    background-color: #ddd;
  }
`;

const Expander = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  align-items: center;
`;

const Name = styled.p`
  margin-right: 20px;
  flex-grow: 1;
`;
