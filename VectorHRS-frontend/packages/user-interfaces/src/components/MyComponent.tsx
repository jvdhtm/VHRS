import type { ResourceObject, ResourceOptions } from '@vhrs/resources';
import React from 'react';
import { useRItem } from '../context/RItemContext';


const MyComponent: React.FC<{ resource: ResourceObject, options?: ResourceOptions }> = ({ resource, options }) => {
  const { fetchItem, fetchItems, saveItem, deleteItem, error, isLoading } = useRItem(resource, options);

  const handleFetchItem = async () => {
    const item = await fetchItem(false, '1');
    console.log(item);
  };

  const handleFetchItems = async () => {
    const items = await fetchItems(false);
    console.log(items);
  };

  const handleSaveItem = async () => {
    const newData = { name: 'Updated Name' };
    const savedItem = await saveItem('1', newData);
    console.log(savedItem);
  };

  const handleDeleteItem = async () => {
    const success = await deleteItem('1');
    console.log(success);
  };

  return (
    <div>
      <button onClick={handleFetchItem}>Fetch Item</button>
      <button onClick={handleFetchItems}>Fetch Items</button>
      <button onClick={handleSaveItem}>Save Item</button>
      <button onClick={handleDeleteItem}>Delete Item</button>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default MyComponent;
