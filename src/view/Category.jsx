const Category = (props) => {
  const { categoryName, id } = props.match.params;

  return (
    <div className="container">
      <h1>{categoryName}</h1>
      <div>test</div>
    </div>
  );
}

export default Category;