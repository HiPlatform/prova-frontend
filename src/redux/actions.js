export const check = (id, isChecked) => ({type: 'check', data: {id, isChecked}});

export const expand = id => ({type: 'expand', data: {id}});

export const collapse = id => ({type: 'collapse', data: {id}});

export const move = tree => ({type: 'move', data: {tree}});
