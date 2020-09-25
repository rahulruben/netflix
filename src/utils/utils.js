export const shuffle = (_items) => _items.sort(() => Math.random() - 0.5);
export const getRandomNumber =(_length) => Math.floor(Math.random() * _length - 1);