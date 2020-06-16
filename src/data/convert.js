import flat from 'flat';

export default input => {
  const output = {
    rootId: '0',
    items: {
      '0': {
        id: '0',
        children: [],
        name: 'root',
      },
    },
  };

  Object.entries(flat(input)).forEach(([k, v]) => {
    const parts = k.split('.');

    let key = '0';
    for (let i = 0; i < parts.length; i += 2) key += `-${parts[i]}`;

    if (!output.items[key]) output.items[key] = {id: key, children: [], name: '', isExpanded: false, isChecked: false};

    const property = parts[parts.length - 1];
    if (property === 'name') {
      output.items[key][property] = v;

      let parent = key.split('-');
      parent = parent.slice(0, parent.length - 1).join('-');
      output.items[parent].children.push(key);
    }
  });

  return output;
};

// const sampleInput = {
// '0': {
// id: '49569f0a-5292-4476-94b2-68df51acebe2',
// name: 'Tim Roger Y.',
// children: {
// '0': {
// id: 'c86a3b47-5369-4c75-ac5a-ed286d7faf9e',
// name: 'Andre Alfred Hermann',
// children: {},
// level: 1,
// },
// },
// level: 0,
// },
// };

// const sampleOutput = {
// rootId: '0',
// items: {
// '0': {
// id: '0',
// children: ['0-0'],
// name: 'root',
// },
// '0-0': {
// id: '0-0',
// children: ['0-0-0'],
// name: 'Tim Roger Y.',
// },
// '0-0-0': {
// id: '0-0-0',
// children: [],
// name: 'Andre Alfred Hermann',
// },
// },
// };
