import React, { useEffect, useState } from 'react';
import getCategories from '../../controller/getCategories';
import CategoryItem from './CategoryItem.jsx';

const Categories = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getCategories();
      console.log(res);
      setData(res);
    })();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1 className="txtCenter">Главни Категории</h1>
      <ul>
        {data.map((category) => (
          <CategoryItem key={`cat-${category}`} title={category} />
        ))}
      </ul>
    </div>
  );
};

// [
//   "electronics",
//   "jewelery",
//   "men's clothing",
//   "women's clothing"
// ]

export default Categories;