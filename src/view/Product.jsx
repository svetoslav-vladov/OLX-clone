const Product = (props) => {
  console.log(props);
  const { id } = props.match.params;
  return (
    <div>
      <p>ID: {id}</p>
    </div>
  );
}

export default Product;