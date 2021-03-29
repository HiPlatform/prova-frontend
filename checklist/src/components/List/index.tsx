import React from "react";

import { ListItem, Container } from "../";

const List = ({ node, checked }: any) => {
  const create = (item: any, index: number) => {
    const children = Object.values(item.children);

    return (
      <ListItem
        item={item}
        children={children}
        checked={checked}
        key={item.id}
      />
    );
  };

  return <Container>{node.map(create)}</Container>;
};

export default List;
