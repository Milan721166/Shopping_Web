import React, { useState, useEffect } from 'react';
import { fetchItems } from '../../api/itemApi'; 
function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    fetchItems().then((fetchedItems) => {
      setItems(fetchedItems);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="home-container">
        <h1>Trending Item</h1>
        <div className="items-grid">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="item-card loading-card">
                <div className="loading-image"></div>
                <div className="loading-text"></div>
                <div className="loading-text short"></div>
              </div>
            ))}
        </div>
      </div>
    );
  }


  return (
    <div className="home-container">
      <h1>Trending Item</h1>
      <div className="items-grid">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <img src={item.imageUrl} alt={item.name} className="item-image" />
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
