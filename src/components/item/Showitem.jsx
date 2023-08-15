import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import url from '../../redux/url';

const ShowItem = ({ categoryId, itemId }) => {
  const { categories } = useSelector((state) => state.categories);
  const [item, setItem] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const getItem = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${url}categories/${categoryId}/items/${itemId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        setItem(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getItem();
  }, [dispatch, categoryId, itemId]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container show__container">
      <div>
        <div key={item.id} className="single__item">
          <img className="item__image" src={item.image} alt={item.name} />
          <p>Name:</p>
          <h2 className="item__name">{item.name}</h2>
          <span>Category:</span>
          <p className="item__category">
            {categories.map((category) => (
              <span key={category.id}>
                {category.id === item.category_id && category.name}
              </span>
            ))}
          </p>
          <span>Note:</span>
          <p className="item__note">{item.note}</p>
        </div>
      </div>
    </div>
  );
};

ShowItem.propTypes = {
  categoryId: PropTypes.number.isRequired,
  itemId: PropTypes.number.isRequired,
};

export default ShowItem;
