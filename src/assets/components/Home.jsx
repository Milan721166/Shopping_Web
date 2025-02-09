import React, { useState, useEffect } from 'react';
import { fetchItems } from '../../api/itemApi';

function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedItems = await fetchItems();
        setItems(fetchedItems);
      } catch (error) {
        setError('Error fetching items.'); 
        console.error('Error fetching items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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

  if (error) {
    return (
      <div className="home-container">
        <h1>Error</h1>
        <p>{error}</p>
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
            <p>
              {item.originalPrice && (
                <>
                  <span style={{ textDecoration: 'line-through' }}>{item.originalPrice}</span>{' '}
                </>
              )}
              {item.price}
            </p>
            {item.discount && <p> {item.discount}% OFF</p>}
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
