import immer from 'immer';

import init from './init';

function reducer(state = init, action) {
  const {data} = action;
  return immer(state, draft => {
    let replaceState;

    switch (action.type) {
      case 'expand':
        draft.tree.items[data.id].isExpanded = true;
        break;

      case 'collapse':
        draft.tree.items[data.id].isExpanded = false;
        break;

      case 'move':
        draft.tree = data.tree;
        break;

      case 'check':
        draft.tree.items[data.id].isChecked = data.isChecked;
        Object.values(draft.tree.items).forEach(item => {
          if (item.id.startsWith(data.id)) {
            draft.tree.items[item.id].isChecked = data.isChecked;
          }
        });
        break;

      default:
        break;
    }

    if (!!replaceState) return replaceState;
  });
}

export default reducer;
