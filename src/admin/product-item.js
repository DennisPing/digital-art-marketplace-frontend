// List group item of each product.
const ProductItem = ({ product }) => {
  return (
    <div className="list-group-item rounded-3 py-3">
      <div className="row">
        <div className="col-10">
          <h5 className="mb-2">{product.name}</h5>
          <h5 className="mb-2">{`Quantity: ${product.quantity}`}</h5>
          <p className="mb-2">{`Price: ${product.price}`}</p>
        </div>
        <div className="col-2">
          <img src={product.image} alt={product.name} className="img-fluid rounded-3" />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
