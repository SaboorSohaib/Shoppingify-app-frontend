import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import url from '../../redux/url';
import './item.css';

const AddItem = () => {
  const { categories } = useSelector((state) => state.categories);
  const [name, setName] = useState('');
  const [note, setNote] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('0');

  const resetValues = () => {
    setName('');
    setNote('');
    setImage('');
    setCategory('0');
  };

  const token = localStorage.getItem('token');
  const createItem = async () => {
    if (category === '0' && name === '') {
      throw new Error('Enter a name and category');
    }
    const item = {
      name,
      note,
      image,
      category,
    };

    const response = await fetch(`${url}categories/${category}/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(item),
    });
    let returnResponse = '';
    if (response.ok) {
      returnResponse = response.json();
    } else {
      throw new Error('Failed to create item');
    }
    return returnResponse;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createItem();
      resetValues();
      toast.success('Item created successfully');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="container AddItem__container">
      <h2>Add a new item</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            placeholder="Enter a name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="note">Note (optional)</label>
          <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Enter a note" />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image (optional)</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="form-control"
            placeholder="Enter a URL"
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-control custom__select"
          >
            <option value="0" className="option">Enter a Category</option>
            {categories.map((category) => (
              <option className="option" key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </form>
      <div className="button">
        <button className="cancel__btn" type="button" onClick={resetValues}>Cancel</button>
        <button className="submit__btn" type="submit" onClick={handleSubmit}>Save</button>
      </div>
    </div>
  );
};

export default AddItem;
