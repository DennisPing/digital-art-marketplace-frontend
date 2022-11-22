function ProductImage({product}) {
  return (
      <div className="mb-2">
        <img src={product.image} className="img-fluid" alt="product_image"/>
        <ul className="list-group">
          <li className="list-group-item">
            <h4> Description </h4>
          </li>
        </ul>

      </div>
  )

}
export default ProductImage;