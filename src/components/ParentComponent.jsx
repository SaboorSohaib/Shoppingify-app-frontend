import React from 'react';
import { useParams } from 'react-router-dom';
import ShowItem from './item/showItem';

const ParentComponent = () => {
  const { categoryId, itemId } = useParams();
  const categoryIdNumber = parseInt(categoryId, 10);
  const itemIdNumber = parseInt(itemId, 10);

  return (
    <div>
      <ShowItem categoryId={categoryIdNumber} itemId={itemIdNumber} />
    </div>
  );
};

export default ParentComponent;
