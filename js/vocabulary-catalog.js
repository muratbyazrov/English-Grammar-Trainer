window.Trainer = window.Trainer || {};

// Nodes aggregate existing word objects; navigation never duplicates cards or IDs.
window.Trainer.createVocabularyCatalog = function (topics) {
  const root = { value: 'all', title: 'Все слова', children: [], words: [], parent: null };
  const nodes = new Map([['all', root]]);
  function add(parent, value, title, collection) {
    if (nodes.has(value)) return nodes.get(value);
    const node = { value, title, collection, parent, children: [], words: [] };
    nodes.set(value, node);
    parent.children.push(node);
    return node;
  }
  topics.forEach(topic => {
    const collection = topic.collection || 'Английский для IT';
    const collectionKey = `collection:${collection}`;
    const group = add(root, collectionKey, collection, collection);
    const parent = topic.subtopic
      ? add(group, `${collectionKey}/topic:${topic.topic}`, topic.topic, collection)
      : group;
    const leaf = add(parent, topic.id || topic.topic, topic.subtopic || topic.topic, collection);
    leaf.words.push(...(topic.words || []));
  });
  root.children.sort((a, b) => Number(a.title === 'Oxford 3000') - Number(b.title === 'Oxford 3000'));
  function aggregate(node) {
    node.children.forEach(child => {
      aggregate(child);
      node.words.push(...child.words);
    });
  }
  aggregate(root);
  function path(node) {
    const parts = [];
    while (node && node !== root) {
      parts.unshift(node.title);
      node = node.parent;
    }
    return parts;
  }
  return { root, nodes, path };
};
