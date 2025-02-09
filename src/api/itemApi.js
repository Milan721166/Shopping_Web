// src/api/itemApi.js
export const fetchItems = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'T-shirt', price: '249', imageUrl: '/images/tshirt.png' },
          { id: 2, name: 'Jeans', price: '599', imageUrl: '/images/jeans.png' },
          { id: 3, name: 'Sneakers', price: '999', imageUrl: '/images/sneakers.png' },
          { id: 4, name: 'Watches', price: '399', imageUrl: '/images/watches.png' },
          { id: 5, name: 'Formal-shirt', price: '1099', imageUrl: 'https://myraymond.com/cdn/shop/files/RMSX11674-B8_1.jpg?v=1729593432&width=1445' }
        ]);
      }, 1000);
    });
  };
  
