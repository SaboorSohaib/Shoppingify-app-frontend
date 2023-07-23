import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategoriesThunk } from '../../redux/Category/categorySlice';

const Category = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const status = useSelector((state) => state.status);

  useEffect(() => {
    dispatch(getCategoriesThunk());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  if (status === 'failed') {
    return <div>Failed to load data</div>;
  }

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
