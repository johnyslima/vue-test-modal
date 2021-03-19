export const affixToItem = (val) => {
  if (val >= 5) {
    return `${val} товаров`;
  } else if (val === 1) {
    return `${val} товар`;
  }
  return `${val} товара`;
};

export const fromStorage = (type) => {
  if (localStorage.getItem(type) !== null) {
    return JSON.parse(localStorage[type]);
  }
  return []
}
