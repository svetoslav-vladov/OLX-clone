const Category = (props) => {
  const { categoryName, id } = props.match.params;

  return (
    <div>
      <p>Category: {categoryName}</p>
      <p>ID: {id}</p>
    </div>
  );
}

export default Category;