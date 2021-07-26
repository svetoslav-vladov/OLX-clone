import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = ({ title }) => {
  const link = `/category/${title}`;
  return (
    <li>
      <Link to={link}>{title}</Link>
    </li>
  );
};

export default CategoryItem;