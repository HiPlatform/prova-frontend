import { useCallback } from 'react';
import { TreeItem, TreeItemProps } from './TreeItem';

export type TreeData = TreeItemProps;
interface TreeProps {
  itens: Array<TreeItemProps>;
  value: CheckedValues;
  onChange: (values: CheckedValues) => void;
}

export interface CheckedValues {
  [key: string]: boolean;
}

export const Tree: React.FC<TreeProps> = ({ itens, value, onChange }) => {
  const findNode = useCallback((itens: Array<TreeItemProps>, id: string):
    | TreeItemProps
    | undefined => {
    let node = itens.find((x) => x.id === id);
    if (!node) {
      itens.forEach((x) => {
        if (node) return;
        node = findNode(x.childrens, id);
      });
    }
    return node;
  }, []);

  const handleChangeValues = useCallback(
    (rootIds: Array<string>, id: string) => {
      const checkeds = { ...value };

      if (checkeds[id]) {
        delete checkeds[id];
      } else {
        rootIds.forEach((x) => {
          checkeds[x] = true;
        });
        checkeds[id] = true;
      }

      const rootId = rootIds.find((x) => x === id) ?? id;
      const rootNode = findNode(itens, rootId);

      if (rootNode) {
        const rootIsChecked = checkeds[rootId] ?? false;
        const setChildrens = (itens: Array<TreeItemProps>): void => {
          itens.forEach((x) => {
            if (rootIsChecked) checkeds[x.id] = true;
            else delete checkeds[x.id];
            setChildrens(x.childrens);
          });
        };
        setChildrens(rootNode.childrens);
      }

      onChange(checkeds);
    },
    [value, itens, onChange, findNode]
  );

  return (
    <ul>
      {itens.map((x) => (
        <TreeItem
          rootId={[]}
          key={x.id}
          item={x}
          value={value}
          level={x.level}
          handleSelect={handleChangeValues}
        />
      ))}
    </ul>
  );
};
