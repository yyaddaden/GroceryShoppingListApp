export const ItemsReducer = (items = [], action) => {
  switch (action.type) {
    case 'GET_ITEMS':
      return action.payload;
    default:
      return items;
  }
};
