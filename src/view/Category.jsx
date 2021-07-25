const Category = (props) => {
  console.log(props);
  const { categoryName } = props.match.params;
  return (
    <div>Category: {categoryName}</div>
  );
}

export default Category;