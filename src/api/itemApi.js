// src/api/itemApi.js
export const fetchItems = async () => {
  try {
    // Simulate an API call with a delay
    return new Promise((resolve) => {
      setTimeout(() => {
        const items = [
          { id: 1, name: 'T-shirt', price: '124.50', originalPrice: '249', discount: '50%', imageUrl: '/images/tshirt.png' }, 
          { id: 2, name: 'Jeans', price: '299.50', originalPrice: '599', discount: '50%', imageUrl: '/images/jeans.png' },
          { id: 3, name: 'Sneakers', price: '499.50', originalPrice: '999', discount: '50%', imageUrl: '/images/sneakers.png' },
          { id: 4, name: 'Watches', price: '199.50', originalPrice: '399', discount: '50%', imageUrl: '/images/watches.png' },
          { 
            id: 5, 
            name: 'Formal-shirt', 
            price: 'Rs. 999.00', 
            originalPrice: 'Rs. 1,999.00', 
            discount: '50%', 
            imageUrl: 'https://myraymond.com/cdn/shop/files/RMSX11674-B8_1.jpg?v=1729593432&width=1445' 
          }
        ];
        resolve(items);
      }, 1000); 
    });
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error; // Re-throw the error to be handled by the component
  }
};
