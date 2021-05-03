import { useState } from 'react';

import { CheckedValues } from '../index';

import { Checkbox } from '../../CheckBox';
import { ArrowIcon } from '../../Icons/ArrowIcon';

import { Container } from './styles';

export interface TreeItemProps {
  id: string;
  name: string;
  level: number;
  childrens: Array<TreeItemProps>;
}

interface TreeProps {
  rootId: Array<string>;
  item: TreeItemProps;
  value: CheckedValues;
  level: number;
  handleSelect: (rootIds: Array<string>, id: string) => void;
}

export const TreeItem: React.FC<TreeProps> = ({
  rootId,
  item,
  value,
  level,
  handleSelect,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Container
        data-testid={`treeItem:${level}:${item.id}`}
        level={level}
        expanded={open}
      >
        <div onClick={() => handleSelect(rootId, item.id)}>
          <Checkbox
            id={`treeItem:check:${level}:${item.id}`}
            checked={!!value[item.id]}
            onChange={() => handleSelect(rootId, item.id)}
          />
          <p>{item.name}</p>
        </div>

        <button
          data-testid={`treeItem:expand:${level}:${item.id}`}
          type="button"
          onClick={() => item.childrens.length && setOpen(!open)}
        >
          <ArrowIcon />
        </button>
      </Container>

      {!!item.childrens.length && (
        <ul>
          {open &&
            item.childrens.map((x) => (
              <TreeItem
                rootId={[...rootId, item.id]}
                item={x}
                value={value}
                level={x.level}
                handleSelect={handleSelect}
              />
            ))}
        </ul>
      )}
    </>
  );
};
