function ProductInfo({ product }) {
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          <h6> Description </h6>
        </li>
        <li className="list-group-item">
          <h6> Price </h6>
          <h6 className="text-secondary">{product.price}</h6>
        </li>
        <li className="list-group-item">
          <h6> Creator </h6>
          <h6 className="text-secondary">{product.creator}</h6>
        </li>
        <li className="list-group-item">
          <h6> Views </h6>
        </li>
      </ul>

      <br />
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className="btn btn-primary rounded-pill float-end">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductInfo;
