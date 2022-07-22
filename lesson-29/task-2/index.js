// рекурсия
// Проход по дереву с помощью рекурсии

const favorites = ['id-6', 'id-17'];

const tree = {
  id: 'id-1',
  name: 'Products',
  // isFavorite: true, // add this
  nodes: [
    {
      id: 'id-2',
      name: 'Food',
      nodes: [
        {
          id: 'id-6',
          name: 'Drinks',
          nodes: [],
        },
      ],
    },
    {
      id: 'id-17',
      name: 'Vehicles',
      nodes: [],
    },
  ],
};

// console.log(tree);

// markFavorites must add info isFavorite: true or false

const markFavorites = (tree, favorites) => {
  const isFavorite = favorites.includes(tree.id);

  return {
    ...tree,
    isFavorite,
    nodes: tree.nodes.map(childNode => markFavorites(childNode, favorites)),
  };
};

console.log(markFavorites(tree, favorites));

export { markFavorites };
