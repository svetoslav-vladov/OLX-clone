const Category = () => {

  return (
    <div className="container">
      <h1>Добави обява</h1>
      <div className="container-section">
        <h2>Какво предлагаш?</h2>
        <p>Заглавие*</p>
        <input type="text" name="title" id="title" />
        <p>Категория*</p>
        <input type="text" name="title" id="title" />
      </div>
      <div className="container-section">
        <h2>Снимки</h2>
        <p>Първата снимка ще бъде основната в обявата ти. Можеш да промениш реда на снимките чрез влачене.</p>
        <input type="file" name="uploadImg" id="uploadImg" />
      </div>
    </div>
  );
}

export default Category;