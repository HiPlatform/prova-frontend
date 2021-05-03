import { useMemo, useState, useCallback } from 'react';
import { Tree, CheckedValues, TreeData } from '../../components/Tree';

import { Container } from './styles';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import data from '../../assets/data/data.json';

interface DataItem {
  id: string;
  name: string;
  level: number;
  children: DataItem;
}

export const Main: React.FC = () => {
  const treeStorage = useLocalStorage('tree.value');
  const [values, setValues] = useState<CheckedValues>(
    treeStorage.get<CheckedValues>('tree.value', {})
  );

  const handleChange = useCallback(
    (newValues: CheckedValues): void => {
      treeStorage.set<CheckedValues>('tree.value', newValues);
      setValues(newValues);
    },
    [setValues, treeStorage]
  );

  const getItens = useCallback((itens: DataItem[]): TreeData[] => {
    if (!itens.length) return [];

    return itens.map((x) => {
      const childrens = Object.values(x.children) as DataItem[];

      return {
        id: x.id,
        level: x.level,
        name: x.name,
        childrens: getItens(childrens),
      };
    });
  }, []);

  const itens = useMemo((): TreeData[] => {
    const itens = Object.values(data) as DataItem[];
    return getItens(itens);
  }, [getItens]);

  return (
    <Container>
      <Tree itens={itens} value={values} onChange={handleChange} />;
    </Container>
  );
};
