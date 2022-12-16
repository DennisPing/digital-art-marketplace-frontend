import ProductItem from "./product-item";

const PurchaseItem = ({ purchase }) => {
  return (
    <div className="list-group-item rounded-3 py-3">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{`User ID: ${purchase.userId}`}</h5>
        <small>{purchase.date}</small>
      </div>
      <h5>{`Total Price: ${purchase.totalPrice}`}</h5>
      <div className="list-group">
        <h5>Products:</h5>
        {purchase.products.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PurchaseItem;
