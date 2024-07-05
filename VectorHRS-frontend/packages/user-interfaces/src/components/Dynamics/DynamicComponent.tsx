import React, { useEffect } from 'react';
import { ResourceObject } from '@vhrs/resources';
import { Display } from '@vhrs/resources';
import { useRItem } from '../hooks/useRItem';

interface DynamicComponentProps {
  resource: ResourceObject;
  id?: any;  
  props?: any; // Props to pass to the dynamically rendered component
}

const DynamicComponent = ({ resource, id,  props }: DynamicComponentProps) => {
  const displayType: Display | undefined = resource.display;
  const display = displayType?.components?.asComponent;
  const { data, isLoading, error, fetchItem } = useRItem(resource);

  useEffect(() => {
    if (id) {
      fetchItem(false, id);
    }
  }, [id, fetchItem]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (display) {
    return display(data);
  }

  return null; // Or some fallback UI if the component is not found
};

export default DynamicComponent;
