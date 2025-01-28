// src/api/itemApi.js
export const fetchItems = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'T-shirt', price: '$20', imageUrl: '/images/tshirt.png' },
          { id: 2, name: 'Jeans', price: '$40', imageUrl: '/images/jeans.png' },
          { id: 3, name: 'Sneakers', price: '$60', imageUrl: '/images/sneakers.png' },
          { id: 4, name: 'Watches', price: '$80', imageUrl: '/images/watches.png' },
        ]);
      }, 1000);
    });
  };
  