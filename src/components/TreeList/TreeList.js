import React from 'react';

import TreeItem from '../TreeItem/TreeItem';

const List = ({ children }) => {
  return (
    <div className='list-container'>
      {children}
    </div>
  )
}

const TreeList = ({ data, checked }) => {

  const renderList = (item, i) => {
    const children = Object.values(item.children)

    return (
      <TreeItem 
        key={item.id}
        item={item} 
        children={children}
        isChecked={checked}
      />
    )
  }
  
  return (
    <List>
      { data.map(renderList) }
    </List>
  )
}

export default TreeList;
